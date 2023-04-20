export function createPhoneNumber(numbers: number[]): string {
    return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(-4).join('')}`
 }

export function createPhoneNumberV2(numbers: number[]): string {
    let phoneNumber:string = "(xxx) xxx-xxxx"
    
    for(let i=0; i<numbers.length; i++){
      phoneNumber = phoneNumber.replace("x", numbers[i].toString())
    }
      
    return phoneNumber
  }

export function createPhoneNumberV1(numbers: number[]): string {
    const num = numbers.join("");
    return `(${num.slice(0,3)}) ${num.slice(3,6)}-${num.slice(6)}`;
  }
