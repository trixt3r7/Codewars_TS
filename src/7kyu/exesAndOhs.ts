export function xo(str: string) : boolean {
    return str.toLowerCase().split('x').length == str.toLowerCase().split('o').length;
  }

export function xoV1(str: string) : boolean {
  let x = 0;
  let o = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'x') x++
    if (str[i].toLowerCase() === 'o') o++
  }
  return x === o ? true : false;
}