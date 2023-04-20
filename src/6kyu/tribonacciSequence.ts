export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
    let sig = [a, b, c];
    let result = sig.slice(0, n)
    while (result.length < n) {
        result.push(result.slice(-3).reduce((a, b) => a + b, 0))
    }

    return result;
}

export const tribonacciV2 = ([a, b, c]: [number, number, number], n: number): number[] => 
    n < 1 ? [] : [a].concat(tribonacciV2([b, c, a + b + c], n - 1));

export function tribonacciV1([a, b, c]: [number, number, number], n: number): number[] {
    let sig = [a, b, c];
    let result: number[] = [];

    var i = 0;
    while (i < n && i < sig.length) {
        result.push(sig[i])
        i++;
    }

    while (i < n) {
        let nextValue = result.slice(-3).reduce((a, b) => a + b, 0);
        result.push(nextValue)
        i++;
    }

    return result;
}