import { sum } from '@util/math';

const bracketMap = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
    ['<', '>']
]);

const checkLine = (line: string) => {
    const openings = Array.from(bracketMap.keys());

    const stack: string[] = [];
    let illegalChar;
    let i = 0;

    do {
        const char = line[i];

        if (openings.includes(char)) {
            stack.push(char);
        } else {
            const previous = stack.pop();

            if (!previous || char !== bracketMap.get(previous)) {
                illegalChar = char;
            }
        }

        i++;
    } while (illegalChar == null && i < line.length);

    return { illegalChar, stack };
};

export const part1Solution = (input: string): string => {
    const lines = input.split('\n');

    const illegalChars = lines.map(l => checkLine(l).illegalChar).filter(c => c != null);

    const points = illegalChars.map(c => ({
        ')': 3,
        ']': 57,
        '}': 1197,
        '>': 25137
    })[c]).filter(c => c != null);

    const score = sum(...points);

    return score.toString();
};

export const part2Solution = (input: string): string => {
    const lines = input.split('\n');

    const completions = lines
        .map(l => checkLine(l))
        .filter(c => c.illegalChar == null)
        .map(c => c.stack.reverse())
        .map(s => s.map(b => bracketMap.get(b)!))

    const points = completions.map(c => c.reduce((p, c) => (
        (p * 5) + (({
            ')': 1,
            ']': 2,
            '}': 3,
            '>': 4
        })[c] ?? 0)
    ), 0));
    
    points.sort((a, b) => a - b);

    const middleScore = points[Math.floor(points.length / 2)];

    return middleScore.toString();
};
