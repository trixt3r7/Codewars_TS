export function order(words: string): string {
    return words.split(' ').sort((a, b) => +a.replace(/\D/g, '') - +b.replace(/\D/g, '')).join(' ');
}

export function orderV2(words:string) : string {
    return words.split(' ')
    .sort((l, r) =>  +/\d/.exec(l)![0] -  +/\d/.exec(r)![0])
    .join(' ');
}

export function orderV1(words: string): string {
    if (words === '') {
        return '';
    }

    let wordsArray: string[] = words.split(' ');
    let sortedWords: string[] = Array(wordsArray.length);

    wordsArray.forEach(element => {
        let position = parseInt(element.match(/(\d+)/)![0]);
        sortedWords[position] = element;
    });

    return sortedWords.join(' ').trim();
}