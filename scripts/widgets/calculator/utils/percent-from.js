import ceil from '../../../utils/ceil';

const oneHundredPercents = 100;

export default function(number, percent) {
    return ceil((number / oneHundredPercents) * percent);
}