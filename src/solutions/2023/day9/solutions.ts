import { sum } from '@util/math';

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

export const part1Solution = (input: string): string => {
    const histories = parseHistories(input);

    const nextValues = histories.map(h => getNextValue(h));
    const nextValueSum = sum(...nextValues);

    return nextValueSum.toString();
};

export const part2Solution = (input: string): string => {
    const histories = parseHistories(input);

    const nextValues = histories.map(h => getNextValue(h, true));
    const nextValueSum = sum(...nextValues);

    return nextValueSum.toString();
};
