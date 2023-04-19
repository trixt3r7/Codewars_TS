export function evaluate(equation: string) {
    const r = equation.split('@').map(Number).reduce((a, b) => (a + b) + (a - b) + (a * b) + (b === 0 ? NaN : a / b | 0));
    return isNaN(r) ? null : r;
  }

export function evaluateV1(equation: string) {
    let values = equation.split('@').filter(c => c !== '@').map(n => parseInt(n));
    
    for(let i = 0; i + 1 < values.length; i++)
    {
        if(values[i + 1] === 0) {
            return null;
        }

        let a = values[i];
        let b = values[i + 1];
        let calc = (a + b) + (a - b) + (a * b) + ~~(a / b); // That ~~ is a double NOT bitwise operator.
        values[i + 1] = calc;
    }

    return values[values.length-1];
  }

// About '~~'
// It is used as a faster substitute for Math.floor() for positive numbers. 
// It does not return the same result as Math.floor() for negative numbers, 
// as it just chops off the part after the decimal (see other answers for examples of this).~(5.5)   // => -6
// ~(5.5)   // => -6
// ~(-6)    // => 5
// ~~5.5    // => 5  (same as Math.trunc(5.5) and Math.floor(5.5))
// ~~(-5.5) // => -5 (same as Math.trunc(-5.5) but NOT the same as Math.floor(-5.5), which would give -6 )