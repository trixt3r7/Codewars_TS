export function evaluate(equation: string): number | null {
  const operands: number[] = equation.split('@').map(Number);

  return !operands.slice(1).includes(0)
    ? operands.reduce((a, b) => a + b + (a - b) + a * b + ~~(a / b))
    : null;
}
export function evaluateV2(equation: string) {
    const r = equation.split('@').map(Number).reduce((a, b) => (a + b) + (a - b) + (a * b) + (b === 0 ? NaN : a / b | 0));
    return isNaN(r) ? null : r;
  }

export function evaluateV1(equation: string) {
  if(equation.replace(/\s/g, '').substring(1).includes('@0'))
  {
    return null;
  }    
  return equation.split('@').filter(c => c !== '@').map(Number).reduce((a, b) => (a + b) + (a - b) + (a * b) + ~~(a / b));
}

// About '~~'
// It is used as a faster substitute for Math.floor() for positive numbers. 
// It does not return the same result as Math.floor() for negative numbers, 
// as it just chops off the part after the decimal (see other answers for examples of this).~(5.5)   // => -6
// ~(5.5)   // => -6
// ~(-6)    // => 5
// ~~5.5    // => 5  (same as Math.trunc(5.5) and Math.floor(5.5))
// ~~(-5.5) // => -5 (same as Math.trunc(-5.5) but NOT the same as Math.floor(-5.5), which would give -6 )