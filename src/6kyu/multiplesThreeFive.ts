export class MultiplesThreeFive {
    static solution(number: number) {
        if(number <= 3)
            return 0;

        return Array.from({length: number}, (value, key) => key)
                    .filter(i => (i % 3 == 0 || i % 5 == 0))
                    .reduce((a, b) => a + b);
    }
    
    static solutionV2(num: number): number {
        let total: number = 0;
        for (let i: number = 0; i < num; i++) {
          total += (i % 5 == 0 || i % 3 == 0) ? i : 0;
        }
        return total;
      }

    static solutionV1(number: number) {
        if(number <= 0)
            return 0;
        let sum = 0;
        for(let i = 0; i < number; i++)
        {
            if(i % 3 == 0 || i % 5 == 0)
                sum += i;
        }    
        return sum;
    }
  }