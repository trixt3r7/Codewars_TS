export function maskify(cc: string): string {
    return (cc.length > 4) ? '#'.repeat(cc.length - 4) + cc.slice(-4) : cc
}

export function maskifyV1(cc: string): string {
    let result = cc
    if(cc.length > 4) {
        result = '#'.repeat(cc.length - 4) + cc.slice(-4)
    }
    return result
}