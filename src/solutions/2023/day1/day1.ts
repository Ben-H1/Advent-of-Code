import { inputs } from './inputs';
import { descriptions } from './descriptions';
import { Day } from '@pages/DayTemplate';
import { sum } from '@util/math';

const part1Solution = (input: string): string => {
    const lines = input.split('\n');

    const calibrationValues = lines.map((line) => {
        const numbersInLine = Array.from(line).filter(c => !isNaN(parseInt(c)));
        const firstNumber = numbersInLine[0];
        const lastNumber = [...numbersInLine].reverse()[0];

        return parseInt(`${firstNumber}${lastNumber}`);
    });

    const calibrationSum = sum(...calibrationValues);

    return calibrationSum.toString();
};

const part2Solution = (input: string): string => {
    const lines = input.split('\n');

    const replacements: Record<string, string> = {
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    };

    const reversedReplacements: Record<string, string> = {};
    Object.keys(replacements).forEach((key) => reversedReplacements[[...Array.from(key)].reverse().join('')] = replacements[key]);

    const calibrationValues = lines.map((line) => {
        let newLine = line;

        const found = line.match(new RegExp(`(${Object.keys(replacements).join('|')})`, 'g'));
        if (found) {
            newLine = line.replace(found[0], replacements[found[0]]);
        }

        let reversedLine = Array.from(line).reverse().join('');
        const reversedFound = reversedLine.match(new RegExp(`(${Object.keys(reversedReplacements).join('|')})`, 'g'));
        if (reversedFound) {
            reversedLine = reversedLine.replace(reversedFound[0], reversedReplacements[reversedFound[0]]);
        }

        const numbersInNewLine = Array.from(newLine).filter(c => !isNaN(parseInt(c)));
        const numbersInReversedLine = Array.from(reversedLine).filter(c => !isNaN(parseInt(c)));

        const firstNumber = numbersInNewLine[0];
        const lastNumber = numbersInReversedLine[0];

        return parseInt(`${firstNumber}${lastNumber}`);
    });

    const calibrationSum = sum(...calibrationValues);

    return calibrationSum.toString();
};

export const day1: Day = {
    title: 'Day 1: Trebuchet?!',
    link: '/2023/day1',
    stars: 2,
    part1: {
        description: descriptions.part1Description,
        solution: part1Solution,
        exampleInput: inputs.part1.exampleInput,
        givenInput: inputs.part1.givenInput
    },
    part2: {
        description: descriptions.part2Description,
        solution: part2Solution,
        exampleInput: inputs.part2.exampleInput,
        givenInput: inputs.part2.givenInput
    }
};
