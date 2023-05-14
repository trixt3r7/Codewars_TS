export function findEvenIndex(arr: number[]): number
{
    for(let i = 0; i < arr.length; i++)
    {
        let left = arr.slice(0, i).reduce((a, b) => a + b, 0);
        let right = arr.slice(i + 1).reduce((a, b) => a + b, 0);
        if(left === right)
        {
            return i;
        }        
    }
    return -1;
}


export function findEvenIndexV1(arr: number[]): number
{
    for(let i = 0; i < arr.length; i++)
    {
        let left = 0;
        let right = 0;
        for(let j = 0; j < i; j++)
        {
            left += arr[j];
        }
        for(let k = i + 1; k < arr.length; k++)
        {
            right += arr[k];
        }
        if(left === right)
        {
            return i;
        }
        
    }
    return -1;
}