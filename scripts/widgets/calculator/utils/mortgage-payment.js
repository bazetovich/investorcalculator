import BigNumber from 'bignumber.js';
import coerce from '../../../utils/coerce-to-zero';
import toFixed from '../../../utils/to-fixed';

// payment = loan[rate(1 + rate)^term]/[(1 + rate)^term - 1]

const monthCountPerYear = 12;
const precision = 14;
const hundredPercents = 100;
const one = new BigNumber(1);

export default function(loan, term, rate) {
    let top;
    let bottom;

    term = term * monthCountPerYear;
    rate = new BigNumber(
        toFixed(
            (rate / hundredPercents ) / monthCountPerYear,
            precision
        )
    );
    loan = new BigNumber(loan);
    top =  one.plus(rate).pow(term).times(rate);
    bottom = one.plus(rate).pow(term).minus(one);

    return  coerce(
        top
            .div(bottom)
            .times(loan)
            .toNumber()
    );
};
