export const josephus = <T>(items: T[], k: number): T[] => {
    let result: T[] = [];
    let index = 0;

    while (items.length > 0) {
        index = (index + (k - 1)) % items.length;
        result.push(items.splice(index, 1)[0]);
    }
    return result;
}

export const josephusV1 = <T>(items: T[], k: number): T[] => {
    let result: any[] = [];

    for (let i = 0; i < items.length;) {
        let step = i + (k - 1);

        if (step >= items.length) {
            step -= items.length;
        }

        result.push(items[step]);
        items.splice(step, 1);
        
        i = (step === items.length) ? 0 : step;

        if (items.length == 1) {
            result.push(items[0]);
            break;
        }
    }
    return result;
};
