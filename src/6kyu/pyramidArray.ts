export function pyramid(n: number) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(Array(i + 1).fill(1)); // Create an array of length, then fill with 1's
    }
    return result;
  }

export function pyramidV1(n: number) {
    let result: number[][] = [];
    for(let i = 0;i < n; i++)
    {
        let currentArray: number[] = []
        for(let j = 0;j <= i; j++)
        {
            currentArray.push(1);
        }
        result.push(currentArray);
    }
    return result;
  }