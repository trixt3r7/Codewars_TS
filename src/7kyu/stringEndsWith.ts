export function stringEndsWith(str: string, ending: string): boolean {
    return str.endsWith(ending);
}

export function stringEndsWithV1(str: string, ending: string): boolean {
    const lastNChars = (ending.length === 0) ? '' : str.slice(-ending.length);
    return (lastNChars === ending) ? true : false;
}