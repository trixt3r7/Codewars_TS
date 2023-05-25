export function comp(a1: number[] | null, a2: number[] | null): boolean {
    if (!a1 || !a2 || a1.length !== a2.length) return false;
    return a1.map(x => x * x).sort().toString() === a2.sort().toString();
 }

export function compV1(a1: number[] | null, a2: number[] | null): boolean {
    if (!a1 || !a2 || a1.length !== a2.length) 
    {
        return false;
    }
    
    const a1Sorted = a1.sort((a, b) => a - b);
    const a2Sorted = a2.sort((a, b) => a - b);
    
    for (let i = 0; i < a1Sorted.length; i++) {
        if (a1Sorted[i]**2 !== a2Sorted[i])
        {
            return false;
        }
    }
    return true;
  }