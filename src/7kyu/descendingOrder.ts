export function descendingOrderV2(n: number): number {
    return n ? parseInt(n.toString().split("").sort().reverse().join("")) : n;
  }

export function descendingOrderV3(n: number): number {
    let numArray = n.toString().split('');
    return parseInt(numArray.sort().reverse().join(''));
  }

export function descendingOrder(n: number): number {
    let numArray: number[] = String(n).split('').map(Number);
    return Number(numArray.sort((a, b) => b - a).join(''));
  }

export const descendingOrderV4 = (n: number): number => parseInt(`${n}`.split('').sort().reverse().join(''));