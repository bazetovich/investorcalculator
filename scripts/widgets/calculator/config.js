import names from '../../data/enums/calculator-inputs-names';

export default {
    sendBtnText: 'Mail',
    defaultFormData: {
        [names.monthRented]: '0',
        [names.monthRentCost]: '0',

        [names.monthTotalIncome]: '0',
        [names.yearTotalIncome]: '0',

        [names.vacancyFactor]: '0',
        [names.monthVacancyFactor]: '0',
        [names.yearVacancyFactor]: '0',
        [names.managementFee]: '0',
        [names.monthManagementFee]: '0',
        [names.yearManagementFee]: '0',
        [names.maintenance]: '0',
        [names.monthMaintenance]: '0',
        [names.yearMaintenance]: '0',
        [names.monthUtilities]: '0',
        [names.yearUtilities]: '0',
        [names.hazardInsurance]: '0',
        [names.monthHazardInsurance]: '0',
        [names.yearHazardInsurance]: '0',
        [names.taxes]: '0',
        [names.monthTaxes]: '0',
        [names.yearTaxes]: '0',
        [names.mortgageInsurance]: '0',
        [names.monthMortgageInsurance]: '0',
        [names.yearMortgageInsurance]: '0',

        [names.monthTotalExpenses]: '0',
        [names.yearTotalExpenses]: '0',
        [names.monthProfit]: '0',
        [names.yearProfit]: '0',
        [names.monthMortgagePayment]: '0',
        [names.yearMortgagePayment]: '0',
        [names.monthCashFlow]: '0',
        [names.yearCashFlow]: '0',

        [names.purchasePrice]: '0',
        [names.repairCost]: '0',
        [names.downPaymentPercent]: '0',
        [names.downPayment]: '0',
        [names.miscClosingCosts]: '0',
        [names.loanAmount]: '0',
        [names.interestRate]: '0',
        [names.term]: '0',
        [names.roi]: '0',
        [names.capRate]: '0',
        [names.dscr]: '0'
    },
    rows: {
        incomes: [
            {
                cells: [
                    {
                        label: 'Units rented'
                    },
                    {
                        dialogTitle: 'Units rented',
                        units: '',
                        editable: true,
                        name: names.monthRented,
                        text: 'The number of the units, apartments, condos, rooms you plan to rent out',
                        description: '',
                        validationSet: {
                            required: 'true',
                            pattern: '[0-9]{1}|[1-9]{1}[0-9]{0,3}',
                            maxlength: 4,
                            'data-error-message': 'Please, enter a correct number of the units'
                        }
                    },
                    {}
                ]
            },
            {
                cells: [
                    {
                        label: 'Rent cost per unit'
                    },
                    {
                        dialogTitle: 'Rent cost',
                        units: '$',
                        editable: true,
                        name: names.monthRentCost,
                        text: 'Average month rent cost for the one unit',
                        description: 'From 0$ to 9999$',
                        validationSet: {
                            required: 'true',
                            pattern: '[0-9]{1}|[1-9]{1}[0-9]{0,3}',
                            maxlength: 4,
                            'data-error-message': 'Please, enter a correct value'
                        }
                    },
                    {}
                ]
            },
            {

                cells: [
                    {
                        label: 'Total operating income'
                    },
                    {
                        units: '$',
                        name: names.monthTotalIncome
                    },
                    {
                        units: '$',
                        name: names.yearTotalIncome
                    }
                ]
            }
        ],
        expenses: [
            {
                cells: [
                    {
                        label: 'Vacancy factor ($s)',
                        units: '%',
                        editable: true,
                        name: names.vacancyFactor,
                        dialogTitle: 'Vacancy factor',
                        text: 'A percentage from the income as insurance if some units won\'t be rented',
                        description: 'From 0.0% to 99.9%',
                        validationSet: {
                            required: 'true',
                            pattern: '[0-9]|[1-9][0-9]|([0-9]|[1-9][0-9])\\.[0-9]',
                            maxlength: 4,
                            'data-error-message': 'Please, enter a correct percent'
                        }
                    },
                    {
                        units: '$',
                        name: names.monthVacancyFactor,
                    },
                    {
                        units: '$',
                        name: names.yearVacancyFactor
                    }
                ]
            },
            {
                cells: [
                    {
                        label: 'Management fee ($s)',
                        units: '%',
                        editable: true,
                        name: names.managementFee,
                        dialogTitle: 'Management fee',
                        text: 'A percentage from the income for the management. Enter "0" if you do all the work yourself',
                        description: 'From 0.0% to 99.9%',
                        validationSet: {
                            required: 'true',
                            pattern: '[0-9]|[1-9][0-9]|([0-9]|[1-9][0-9])\\.[0-9]',
                            maxlength: 4,
                            'data-error-message': 'Please, enter a correct percent'
                        }
                    },
                    {
                        units: '$',
                        name: names.monthManagementFee,
                    },
                    {
                        units: '$',
                        name: names.yearManagementFee
                    }
                ]
            },
            {
                cells: [
                    {
                        label: 'Maintenance and supplies ($s)',
                        units: '%',
                        editable: true,
                        name: names.maintenance,
                        dialogTitle: 'Maintenance & supplies',
                        text: 'A percentage from the income for the maintenance services and supplies',
                        description: 'From 0.0% to 99.9%',
                        validationSet: {
                            required: 'true',
                            pattern: '[0-9]|[1-9][0-9]|([0-9]|[1-9][0-9])\\.[0-9]',
                            maxlength: 4,
                            'data-error-message': 'Please, enter a correct percent'
                        }
                    },
                    {
                        units: '$',
                        name: names.monthMaintenance,
                    },
                    {
                        units: '$',
                        name: names.yearMaintenance
                    }
                ]
            },
            {
                cells: [
                    {
                        label: 'Utilities'
                    },
                    {
                        dialogTitle: 'Utilities',
                        units: '$',
                        editable: true,
                        name: names.monthUtilities,
                        text: 'Utilities fee, per month (water, sewer and so on)',
                        description: 'From 0$ to 999$',
                        validationSet: {
                            required: 'true',
                            pattern: '[0-9]{1}|[1-9]{1}[0-9]{1,2}',
                            maxlength: 3,
                            'data-error-message': 'Please, enter a correct value'
                        }
                    },
                    {
                        units: '$',
                        name: names.yearUtilities
                    }
                ]
            },
            {
                cells: [
                    {
                        label: 'Hazard insurance ($s)',
                        units: '%',
                        editable: true,
                        name: names.hazardInsurance,
                        dialogTitle: 'Hazard insurance rate',
                        text: 'An annual percentage from the purchase price for the hazard insurance',
                        description: 'From 0.000% to 9.999%',
                        validationSet: {
                            required: 'true',
                            pattern: '[0-9]|[0-9]\\.[0-9]{1,3}',
                            maxlength: 5,
                            'data-error-message': 'Please, enter a correct percent'
                        }
                    },
                    {
                        units: '$',
                        name: names.monthHazardInsurance,
                    },
                    {
                        units: '$',
                        name: names.yearHazardInsurance
                    }
                ]
            },
            {
                cells: [
                    {
                        label: 'Taxes ($s)',
                        units: '%',
                        editable: true,
                        name: names.taxes,
                        dialogTitle: 'Tax rate',
                        text: 'An annual percentage from the purchase price for the taxes',
                        description: 'From 0.000% to 9.999%',
                        validationSet: {
                            required: 'true',
                            pattern: '[0-9]|[0-9]\\.[0-9]{1,3}',
                            maxlength: 5,
                            'data-error-message': 'Please, enter a correct percent'
                        }
                    },
                    {
                        units: '$',
                        name: names.monthTaxes,
                    },
                    {
                        units: '$',
                        name: names.yearTaxes
                    }
                ]
            },
            {
                cells: [
                    {
                        label: 'Mortgage insurance ($s)',
                        units: '%',
                        editable: true,
                        name: names.mortgageInsurance,
                        dialogTitle: 'Mortgage insurance rate',
                        text: 'An annual percentage from the purchase price for the mortgage insurance',
                        description: 'From 0.000% to 9.999%',
                        validationSet: {
                            required: 'true',
                            pattern: '[0-9]|[0-9]\\.[0-9]{1,3}',
                            maxlength: 5,
                            'data-error-message': 'Please, enter a correct percent'
                        }
                    },
                    {
                        units: '$',
                        name: names.monthMortgageInsurance,
                    },
                    {
                        units: '$',
                        name: names.yearMortgageInsurance
                    }
                ]
            },
            {
                cells: [
                    {
                        label: 'Total operating expenses'
                    },
                    {
                        units: '$',
                        name: names.monthTotalExpenses
                    },
                    {
                        units: '$',
                        name: names.yearTotalExpenses
                    }
                ]
            },
            {

                cells: [
                    {
                        label: 'Net operating income'
                    },
                    {
                        units: '$',
                        name: names.monthProfit
                    },
                    {
                        units: '$',
                        name: names.yearProfit
                    }
                ]
            },
            {
                cells: [
                    {
                        label: 'Mortgage payment'
                    },
                    {
                        units: '$',
                        name: names.monthMortgagePayment
                    },
                    {
                        units: '$',
                        name: names.yearMortgagePayment
                    }
                ]
            }
        ],
        loanDetails: [
            {
                cells: [
                    {
                        label: 'Purchase price'
                    },
                    {
                        dialogTitle: 'Purchase price',
                        units: '$',
                        editable: true,
                        name: names.purchasePrice,
                        text: 'The price of the property you wish to buy',
                        description: 'In dollars',
                        validationSet: {
                            required: 'true',
                            pattern: '[0-9]{1}|[1-9]{1}[0-9]{0,7}',
                            maxlength: 8,
                            'data-error-message': 'Please, enter a correct price'
                        }
                    }
                ]
            },
            {
                cells: [
                    {
                        label: 'Repair cost'
                    },
                    {
                        dialogTitle: 'Repair cost',
                        units: '$',
                        editable: true,
                        name: names.repairCost,
                        text: 'How much money you need to repair the buying property',
                        description: 'In dollars',
                        validationSet: {
                            required: 'true',
                            pattern: '[0-9]{1}|[1-9]{1}[0-9]{0,5}',
                            maxlength: 6,
                            'data-error-message': 'Please, enter a correct value'
                        }
                    }
                ]
            },
            {
                cells: [
                    {
                        label: 'Down payment ($s)',
                        units: '%',
                        dialogTitle: 'Down payment',
                        name: names.downPaymentPercent,
                        editable: true,
                        text: 'A percentage from the purchase price for the down payment',
                        description: 'From 0% to 100%',
                        validationSet: {
                            required: 'true',
                            pattern: '[0-9]{1}|[1-9]{1}[0-9]{1}||100',
                            maxlength: 3,
                            'data-error-message': 'Please, enter a correct percent'
                        }
                    },
                    {
                        units: '$',
                        name: names.downPayment
                    }
                ]
            },
            {
                cells: [
                    {
                        label: 'Closing costs'
                    },
                    {
                        dialogTitle: 'Closing costs',
                        units: '$',
                        editable: true,
                        name: names.miscClosingCosts,
                        text: 'Costs to close purchasing property deal',
                        description: 'In dollars',
                        validationSet: {
                            required: 'true',
                            pattern: '[0-9]{1}|[1-9]{1}[0-9]{0,4}',
                            maxlength: 5,
                            'data-error-message': 'Please, enter a correct value'
                        }
                    }
                ]
            },
            {
                cells: [
                    {
                        label: 'Loan amount'
                    },
                    {
                        units: '$',
                        name: names.loanAmount
                    }
                ]
            },
            {
                cells: [
                    {
                        label: 'Interest rate'
                    },
                    {
                        dialogTitle: 'Interest rate',
                        units: '%',
                        editable: true,
                        name: names.interestRate,
                        text: 'Interest rate of your loan',
                        description: 'From 0.000% to 9.999%',
                        validationSet: {
                            required: 'true',
                            pattern: '[0-9]|[0-9]\\.[0-9]{1,3}',
                            maxlength: 5,
                            'data-error-message': 'Please, enter a correct percent'
                        }
                    }
                ]
            },
            {
                cells: [
                    {
                        label: 'Term'
                    },
                    {
                        dialogTitle: 'Term',
                        units: ' years',
                        editable: true,
                        name: names.term,
                        text: 'Term of your loan',
                        description: 'In years',
                        validationSet: {
                            required: 'true',
                            pattern: '[0-9]{1}|[1-9]{1}[0-9]{1}',
                            maxlength: 2,
                            'data-error-message': 'Please, enter a correct value'
                        }
                    }
                ]
            }
        ],
        results: [
            {
                cssClass: 'result',
                cells: [
                    {
                        label: 'Cash flow'
                    },
                    {
                        units: '$',
                        name: names.monthCashFlow
                    },
                    {
                        units: '$',
                        name: names.yearCashFlow
                    }
                ]
            },
            {
                cssClass: '',
                cells: [
                    {
                        label: 'Return on investment'
                    },
                    {},
                    {
                        units: '%',
                        name: names.roi,
                    }
                ]
            },
            {
                cssClass: '',
                cells: [
                    {
                        label: 'Cap rate'
                    },
                    {},
                    {
                        units: '%',
                        name: names.capRate,
                    }
                ]
            },
            {
                cssClass: '',
                cells: [
                    {
                        label: 'Debt coverage ratio'
                    },
                    {},
                    {
                        units: '',
                        name: names.dscr,
                    }
                ]
            }
        ]
    }
}
