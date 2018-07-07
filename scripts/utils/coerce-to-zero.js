export default function(num) {
    if (
        Number.isNaN(num) ||
        !Number.isFinite(num)
    ) {
        return 0;
    }

    return num;
}