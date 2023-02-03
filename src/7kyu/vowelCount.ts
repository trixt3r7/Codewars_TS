export class VowelCount {
  static getCount(str: string) {
    let list = str.match(/[aeiou]/gi);
    return list ? list.length : 0;
  }

  static getCountV2(str: string) {
    return str.split('').filter(c => /[aeiou]/i.test(c)).length
  }

  static getCountV1(str: string): number {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;
    
    Array.from(str).forEach( letter => {
      if(vowels.includes(letter))       
        counter++;
    });

    return counter;
  }
}