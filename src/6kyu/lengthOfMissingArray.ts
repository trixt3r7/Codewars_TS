// ERROR at TEST on CodeWars can't figure out why
export function getLengthOfMissingArrayV2(arrayOfArrays:any[]):number {      
    if (arrayOfArrays.length == 0)
        return 0
    let sortedLength = arrayOfArrays.map(arr => arr.length).sort((a, b) => a - b)
    return sortedLength.filter((item, i) => item - sortedLength[i-1] > 1)[0]-1
  }

export function getLengthOfMissingArray(arrayOfArrays:any[]):number {  
    let sortedLength = arrayOfArrays.map(arr => arr.length).sort((a, b) => a - b)
    
    let prev = sortedLength[0];
    for(let i = 1; i < sortedLength.length; i++)
    {
        if(sortedLength[i] - prev > 1)
        {
            return prev + 1
        }
        prev = sortedLength[i];
    }
    return 0
  }