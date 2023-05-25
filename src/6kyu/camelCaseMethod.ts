export function camelCase(str: string): string {
    return str.split(' ')
        .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}