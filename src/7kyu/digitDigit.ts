export function squareDigits(num: number): number {
    // The + operator returns the numeric representation of the object.
    return +num.toString()
        .split('')
        .map(digit => Math.pow(+digit, 2))
        .join('');
}

export function squareDigitsV1(num: number): number {
    return parseInt(num.toString().split('')
        .map(digit => digit = (parseInt(digit) * parseInt(digit))
        .toString()).join(''));
}