export function sortNumbers(nums: number[]): number[] {
    return nums ? nums.sort((a, b) => a - b) : [];
}

export function sortNumbersV1(nums: number[]): number[] {
    return nums.sort((a, b) => a - b);
}

export function sortNumbersv2(nums: number[]): number[] {
    if( !nums ){
        return [];
      }
      for(let i: number = 0; i < nums.length; ++i){
        for(let j: number = i + 1; j < nums.length; ++j){
          if( nums[j] < nums[i] ){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
          }
        }
      }
      return nums;
}