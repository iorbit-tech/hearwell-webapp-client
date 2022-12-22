export function compare(a, b) {
    if (parseInt(a.order) > parseInt(b.order)) return 1;
    if (parseInt(b.order) > parseInt(a.order)) return -1;
    return 0;
}