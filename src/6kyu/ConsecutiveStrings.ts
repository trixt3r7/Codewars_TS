export function longestConsec(strarr: string[], k: number): string {
    if (k <= 0 || k > strarr.length) {
        return "";
    }
    return strarr.reduce((result, value, index) => {
        let temp = strarr.slice(index, index + k).join("");
        return temp.length > result.length ? temp : result;
    }, "");
}

export function longestConsecV1(strarr: string[], k: number): string {
    let result = "";
    if (k <= 0 || k > strarr.length) {
        return result;
    }
    for (let i = 0; i < strarr.length; i++) {
        let temp = strarr.slice(i, i + k).join("");
        if (temp.length > result.length) {
        result = temp;
        }
    }
    return result;
}