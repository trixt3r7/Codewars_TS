export class Kata {
    static validatePin(pin: string): boolean {
        return /^(\d{4}|\d{6})$/.test(pin);
    }
    
    static validatePinV1(pin: string): boolean {
        if(pin.length === 4 || pin.length === 6) {
            if(pin.match(/^[0-9]+$/)) {
                return true;
            }
        }
        return false;
    }
}