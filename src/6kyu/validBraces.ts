export function validBraces(braces: string): boolean {
    [...braces].forEach(() => braces = braces.replace('()', '').replace('{}', '').replace('[]', ''))
    return !braces;
  }

export function validBracesV1(braces: string): boolean {
    let stack: string[] = [];
    const openBraces: string[] = ['(', '[', '{'];
    const closeBraces: string[] = [')', ']', '}'];
    for (let i = 0; i < braces.length; i++) {
        if (openBraces.includes(braces[i])) {
            stack.push(braces[i]);
        } else if (closeBraces.includes(braces[i])) {
            const index = closeBraces.indexOf(braces[i]);
            if (stack[stack.length - 1] === openBraces[index]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}