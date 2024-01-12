import { Day } from '@pages/DayTemplate';
import { sum } from '@util/math';
import { descriptions } from './descriptions';
import { inputs } from './inputs';

const parseHistories = (input: string) => input.split('\n').map(l => l.split(' ').map(s => parseInt(s)));

const getNextValue = (history: number[], reverse = false) => {
    let rows: number[][];

    if (reverse) {
        rows = [[...history].reverse()];
    } else {
        rows = [history];
    }

    do {
        const previousRow = rows[rows.length - 1];
        const newRow = [];

        for (let i = 0; i < previousRow.length - 1; i++) {
            const current = previousRow[i];
            const next = previousRow[i + 1];
            newRow.push(next - current);
        }

        rows.push(newRow);
    } while (!rows[rows.length - 1].every(v => v === 0));

    const extendedRows: number[][] = [];

    [...rows].reverse().forEach((row, i) => {
        if (i === 0) {
            row.push(0);
        } else {
            const currentValue = row[row.length - 1];
            const previousRow = extendedRows[i - 1];
            const previousValue = previousRow[previousRow.length - 1];
            const newValue = currentValue + previousValue;

            row.push(newValue);
        }
        
        extendedRows.push(row);
    });

    return [...extendedRows].reverse()[0].slice(-1)[0];
};

const part1Solution = (input: string): string => {
    const histories = parseHistories(input);

    const nextValues = histories.map(h => getNextValue(h));
    const nextValueSum = sum(...nextValues);

    return nextValueSum.toString();
};

const part2Solution = (input: string): string => {
    const histories = parseHistories(input);

    const nextValues = histories.map(h => getNextValue(h, true));
    const nextValueSum = sum(...nextValues);

    return nextValueSum.toString();
};

export const day9: Day = {
    title: 'Day 9: Mirage Maintenance',
    link: '/2023/day9',
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
