export function getMiddle(s: string) {
    const start = Math.floor(s.length / 2)
    return s.length % 2 === 0 ? s.slice(start - 1, start + 1): s[start]
  }

export function getMiddleV1(s:string) : string {
    return (s.length % 2 == 0) ? s[s.length/2 - 1] + s[s.length/2] : s[Math.floor(s.length/2)];
  }