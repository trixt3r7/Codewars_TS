export function romanNumerDec(roman: string): number {        
    const symbols: any = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
      };
      return roman
        .split('')
        .map(e=>symbols[e])
        .reduce((p,c) => p<c ? c-p : c+p);
  }

const values: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

export function romanNumerDecV2(roman: string): number {        
    let value = 0
    for (let i = 0; i < roman.length; i++) {
      const current = values[roman[i]]
      const next = values[roman[i + 1]] || 0
      if (current < next) {
        value -= current
      } else {
        value += current
      }
    }
    return value
  }

export function romanNumerDecV1(roman: string): number {        
    let numerals: { [numeral: string]: number } = {
        "I" : 1, "V" : 5, "X" : 10, "L" : 50, "C" : 100, "D" : 500, "M" : 1000
    }
    let subtractNum : { [numeral: string]: number } = {
        "IV" : 2, "IX" : 2, "XC" : 20, "XL" : 20, "CD" : 200, "CM" : 200
    }

    let result = 0;
    let prev = "";

    for (let i = 0; i < roman.length; i++) {                                
        // Add value to result
        result += numerals[roman[i]];

        // If combo exist subtract
        if(subtractNum[prev+roman[i]] !== undefined)        
            result -= subtractNum[prev+roman[i]]       
        
        // Save previous letter for combo check
        prev = roman[i];
      }

    return result; 
  }