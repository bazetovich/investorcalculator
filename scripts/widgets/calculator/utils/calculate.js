import names from '../../../data/enums/calculator-inputs-names';
import ceil from '../../../utils/ceil';
import toFixed from '../../../utils/to-fixed';
import coerce from '../../../utils/coerce-to-zero';
import mortgagePayment from './mortgage-payment';
import parse from './parse';
import percentFrom from './percent-from';
import sum from './sum';

const monthCountPerYear = 12;
const oneHundredPercents = 100;
const precision = 2;

export default function(data) {
    data = data || {};

    const purchasePrice = parse(data[names.purchasePrice]);

    const repairCost = parse(data[names.repairCost]);
    const miscClosingCosts = parse(data[names.miscClosingCosts]);

    const interestRate = parse(data[names.interestRate]);
    const term = parse(data[names.term]);

    const downPaymentPercent = parse(data[names.downPaymentPercent]);
    const downPayment = percentFrom(purchasePrice , downPaymentPercent);
    const loanAmount = purchasePrice - downPayment;

    const cashRequired = downPayment + repairCost + miscClosingCosts;

    // income

    const monthRented = parse(data[names.monthRented]);
    const monthRentCost = parse(data[names.monthRentCost]);
    const monthTotalIncome = monthRented * monthRentCost;
    const yearTotalIncome = monthTotalIncome * monthCountPerYear;

    // vacancy factor

    const vacancyFactor = parse(data[names.vacancyFactor]);
    const monthVacancyFactor = percentFrom(monthTotalIncome , vacancyFactor);
    const yearVacancyFactor = monthVacancyFactor * monthCountPerYear;

    // management fee

    const managementFee = parse(data[names.managementFee]);
    const monthManagementFee = percentFrom(monthTotalIncome , managementFee);
    const yearManagementFee = monthManagementFee * monthCountPerYear;

    // maintenance fee

    const maintenance = parse(data[names.maintenance]);
    const monthMaintenance = percentFrom(monthTotalIncome , maintenance);
    const yearMaintenance = monthMaintenance * monthCountPerYear;

    // utilities

    const monthUtilities = parse(data[names.monthUtilities]);
    const yearUtilities = monthUtilities * monthCountPerYear;

    // hazard insurance

    const hazardInsurance = parse(data[names.hazardInsurance]);
    const yearHazardInsurance = percentFrom(purchasePrice , hazardInsurance);
    const monthHazardInsurance = ceil(yearHazardInsurance / monthCountPerYear);

    // taxes

    const taxes = parse(data[names.taxes]);
    const yearTaxes = percentFrom(purchasePrice , taxes);
    const monthTaxes = ceil(yearTaxes / monthCountPerYear);

    // mortgage insurance

    const mortgageInsurance = parse(data[names.mortgageInsurance]);
    const yearMortgageInsurance = percentFrom(purchasePrice , mortgageInsurance);
    const monthMortgageInsurance = ceil(yearMortgageInsurance / monthCountPerYear);

    // total Expenses

    const monthTotalExpenses = sum(
        monthManagementFee,
        monthMaintenance,
        monthUtilities,
        monthHazardInsurance,
        monthTaxes,
        monthMortgageInsurance
    );
    const yearTotalExpenses = monthTotalExpenses * monthCountPerYear;

    // profit

    const monthProfit = monthTotalIncome - monthTotalExpenses;
    const yearProfit = monthProfit * monthCountPerYear;

    // mortgage

    const monthMortgagePayment = ceil(mortgagePayment(loanAmount, term, interestRate));
    const yearMortgagePayment = monthMortgagePayment * monthCountPerYear;

    // cash flow

    const monthCashFlow = monthProfit - monthMortgagePayment;
    const yearCashFlow = monthCashFlow * monthCountPerYear;

    // ratios

    const roi = toFixed(
        (coerce((yearCashFlow / cashRequired)) * oneHundredPercents),
        precision
    );
    const capRate = toFixed(
        (coerce((yearTotalIncome - yearVacancyFactor - yearTotalExpenses) / purchasePrice) * oneHundredPercents),
        precision
    );
    const dscr = toFixed(
        (coerce((monthTotalIncome / monthMortgagePayment) / oneHundredPercents) * oneHundredPercents),
        precision
    );

    return {
        [names.monthRented]: monthRented,
        [names.monthRentCost]: monthRentCost,
        [names.monthTotalIncome]: monthTotalIncome,
        [names.yearTotalIncome]: yearTotalIncome,

        // vacancy factor

        [names.vacancyFactor]: vacancyFactor,
        [names.monthVacancyFactor]: monthVacancyFactor,
        [names.yearVacancyFactor]: yearVacancyFactor,

        // management fee

        [names.managementFee]: managementFee,
        [names.monthManagementFee]: monthManagementFee,
        [names.yearManagementFee]: yearManagementFee,

        // maintenance fee

        [names.maintenance]: maintenance,
        [names.monthMaintenance]: monthMaintenance,
        [names.yearMaintenance]: yearMaintenance,

        // utilities

        [names.monthUtilities]: monthUtilities,
        [names.yearUtilities]: yearUtilities,

        // hazard insurance

        [names.hazardInsurance]: hazardInsurance,
        [names.monthHazardInsurance]: monthHazardInsurance,
        [names.yearHazardInsurance]: yearHazardInsurance,

        // taxes

        [names.taxes]: taxes,
        [names.monthTaxes]: monthTaxes,
        [names.yearTaxes]: yearTaxes,

        // mortgage insurance

        [names.mortgageInsurance]: mortgageInsurance,
        [names.monthMortgageInsurance]: monthMortgageInsurance,
        [names.yearMortgageInsurance]: yearMortgageInsurance,

        // total Expenses

        [names.monthTotalExpenses]: monthTotalExpenses,
        [names.yearTotalExpenses]: yearTotalExpenses,

        // income

        [names.monthProfit]: monthProfit,
        [names.yearProfit]: yearProfit,

        // mortgage

        [names.monthMortgagePayment]: monthMortgagePayment,
        [names.yearMortgagePayment]: yearMortgagePayment,

        // cash flow

        [names.monthCashFlow]: monthCashFlow,
        [names.yearCashFlow]: yearCashFlow,

        // loan

        [names.purchasePrice]: purchasePrice,
        [names.repairCost]: repairCost,
        [names.downPaymentPercent]: downPaymentPercent,
        [names.downPayment]: downPayment,
        [names.miscClosingCosts]: miscClosingCosts,
        [names.loanAmount]: loanAmount,
        [names.interestRate ]: interestRate,
        [names.term]: term,

        // ratios

        [names.roi]: roi,
        [names.capRate]: capRate,
        [names.dscr]: dscr,
    };
}
