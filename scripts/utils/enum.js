export default function(hash) {
    let intProp;

    for (let prop in hash) {
        if (hash.hasOwnProperty(prop)) {
            intProp = parseInt(prop, 10);
            hash[hash[prop]] = isNaN(intProp) ? prop : intProp;
        }
    }

    return hash;
};
