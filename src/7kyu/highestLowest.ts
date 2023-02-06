export class HighestLowest {
    static highAndLow(numbers: string): string {
        let numArray = numbers.split(' ').map(Number)
        return `${Math.max(...numArray)} ${Math.min(...numArray)}`
      }

    static highAndLowv2(numbers: string) {
        const max = Math.max(...numbers.split(' ').map(n => +n));
        const min = Math.min(...numbers.split(' ').map(n => +n));
        
        return `${max} ${min}`;
    }
    static highAndLowv1(numbers: string): string {
      let numArray = numbers.split(" ").map(n => Number(n))
      return `${Math.max(...numArray)} ${Math.min(...numArray)}`
    }
  }