  export function getLengthOfMissingArray(arrayOfArrays:any[]):number {  
    const arraysSorted = (arrayOfArrays.length === 0) ? [0] 
        : arrayOfArrays.map(arr => arr.length).sort((a, b) => a - b);    
    return (arraysSorted[0] === 0) ? 0 
        : arraysSorted.filter((u, i) => i >= 1).find((value, i) => value === arraysSorted[i] + 2) - 1;
  }

  export function getLengthOfMissingArrayV1(arrayOfArrays:any[]):number {  
    if (arrayOfArrays.length == 0)
    {
        return 0;
    }        
    const arraysSorted = arrayOfArrays.map(arr => arr.length).sort((a, b) => a - b);
    
    let prev = arraysSorted[0];
    for(let i = 1; i < arraysSorted.length; i++)
    {
        if(prev == 0)
        {
            return 0;
        }            
        if(arraysSorted[i] - prev > 1)
        {
            return prev + 1
        }
        prev = arraysSorted[i];
    }
    return 0;
  }