export function disemvowel(str: string): string {
    str = str.replace(/[aeiou]/gi, '');
    return str.trim();
}