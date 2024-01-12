import { Day } from '@pages/DayTemplate';
import { oneCharacterIsDifferent } from '@util/string';
import { sum } from '@util/math';
import { descriptions } from './descriptions';
import { inputs } from './inputs';

const getReflectionLine = (lines: string[]) => {
    let reflectionLine;

    for (let i = 1; i < lines.length; i++) {
        const previousLines = lines.slice(0, i).reverse();
        const nextLines = lines.slice(i);

        let croppedPreviousLines;
        let croppedNextLines;

        if (nextLines.length > previousLines.length) {
            croppedPreviousLines = previousLines;
            croppedNextLines = nextLines.slice(0, previousLines.length);
        } else {
            croppedPreviousLines = previousLines.slice(0, nextLines.length);
            croppedNextLines = nextLines;
        }

        let isReflection = true;
        let isAlmostReflection;
        for (let j = 0; j < croppedPreviousLines.length; j++) {
            if (croppedPreviousLines[j] !== croppedNextLines[j]) {
                isReflection = false;
                if (oneCharacterIsDifferent(croppedPreviousLines[j], croppedNextLines[j])) {
                    if (isAlmostReflection === undefined) {
                        isAlmostReflection = true;
                    } else if (isAlmostReflection) {
                        isAlmostReflection = false;
                    }
                }
            }
        }

        console.log(`isAlmostReflection: ${isAlmostReflection}, i: ${i}`);

        if (isReflection) {
            reflectionLine = i;
        }
    }

    return reflectionLine;
};

const getVerticalLine = (patternGrid: string[][]) => {
    const columns = [];

    for (let x = 0; x < patternGrid[0].length; x++) {
        const column = [];

        for (let y = 0; y < patternGrid.length; y++) {
            column.push(patternGrid[y][x]);
        }

        columns.push(column.join(''));
    }

    return getReflectionLine(columns);
};

const getHorizontalLine = (patternGrid: string[][]) => {
    const rows = patternGrid.map(r => r.join(''));

    return getReflectionLine(rows);
};

const part1Solution = (input: string): string => {
    const patternStrings = input.split('\n\n');
    const patternGrids = patternStrings.map(p => p.split('\n')).map(s => s.map(l => l.split('')));

    const verticalLines = patternGrids.map(g => getVerticalLine(g) ?? 0);
    const horizontalLines = patternGrids.map(g => getHorizontalLine(g) ?? 0);
    
    const verticalLineSum = sum(...verticalLines);
    const horizontalLineSum = sum(...horizontalLines);
    
    const summary = verticalLineSum + (100 * horizontalLineSum);

    return summary.toString();
};

const part2Solution = (input: string): string => {
    const patternStrings = input.split('\n\n');
    const patternGrids = patternStrings.map(p => p.split('\n')).map(s => s.map(l => l.split('')));

    const verticalLines = patternGrids.map(g => getVerticalLine(g) ?? 0);
    const horizontalLines = patternGrids.map(g => getHorizontalLine(g) ?? 0);
    
    const verticalLineSum = sum(...verticalLines);
    const horizontalLineSum = sum(...horizontalLines);
    
    const summary = verticalLineSum + (100 * horizontalLineSum);

    return summary.toString();
};

export const day13: Day = {
    title: 'Day 13: Point of Incidence',
    link: '/2023/day13',
    stars: 1,
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
