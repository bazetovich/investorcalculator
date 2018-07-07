export default function(str) {
    const parsed = parseFloat(str);

    if (Number.isNaN(parsed)) {
        return 0;
    }

    return parsed;
}