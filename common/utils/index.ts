export function formatNumber(value: number) {
    if (value === 0) return '0';
    if (!value) return '';
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}