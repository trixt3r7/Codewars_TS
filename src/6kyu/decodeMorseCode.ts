export function decodeMorse(morseCode: string): string {
    return morseCode.toUpperCase().trim().split(' ')
        .map(code => code === '' ? ' ' : MORSE_CODE[code as keyof typeof MORSE_CODE])
        .join('').replace(/\s+/g, ' ');
}

export function decodeMorseV1(morseCode: string): string {
    let codeArray: string[] = morseCode.toUpperCase().split(' ');
    let result: string[] = [];

    for (let code of codeArray) {
        result.push(code === '' ? ' ' : MORSE_CODE[code as keyof typeof MORSE_CODE])
    }
    return result.join('').replace(/\s+/g, ' ').trim();
}

// <pre style='display:inline'>Got ' E ', expected 'E'</pre>
// More complex tests

const MORSE_CODE = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0'
};
