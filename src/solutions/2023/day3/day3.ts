import { Day } from '@pages/DayTemplate';
import { sum } from '@util/math';
import { descriptions } from './descriptions';
import { inputs } from './inputs';

const part1Solution = (input: string): string => {
    const lines = input.split('\n');

    const partsByLine = lines.map(l => l.match(/\d+/g) ?? []);
    
    const partCoordinates: Record<string, any>[] = [];

    partsByLine.forEach((parts, i) => {
        parts.forEach((part) => {
            const index = lines[i].indexOf(part);
            lines[i] = lines[i].replace(part, new Array(part.length + 1).join('.'));
            partCoordinates.push({ partNumber: parseInt(part), y: i, xStart: index, xEnd: index + part.length - 1 });
        });
    });

    const grid = lines.map(l => l.split(''));

    const testForSymbol = (x: number, y: number) => {
        try {
            return !/\d|\./g.test(grid[y][x] ?? '.');
        } catch {
            return false;
        }
    
    };

    const validParts: number[] = [];

    partCoordinates.forEach(({ partNumber, y, xStart, xEnd }) => {
        let valid = false;

        const left = testForSymbol(xStart - 1, y);
        const upLeft = testForSymbol(xStart - 1, y - 1);
        const downLeft = testForSymbol(xStart - 1, y + 1);

        valid = valid || left || upLeft || downLeft;

        for (let x = xStart; x <= xEnd; x++) {
            const up = testForSymbol(x, y - 1);
            const down = testForSymbol(x, y + 1);
            valid = valid || up || down;
        }

        const right = testForSymbol(xEnd + 1, y);
        const upRight = testForSymbol(xEnd + 1, y - 1);
        const downRight = testForSymbol(xEnd + 1, y + 1);

        valid = valid || right || upRight || downRight;

        if (valid) {
            validParts.push(partNumber);
        }
    });

    const validPartSum = sum(...validParts);

    return validPartSum.toString();
};

const part2Solution = (input: string): string => {
    const lines = input.split('\n');
    const grid = lines.map(l => l.split(''));

    const gearCoordinates = [];

    for (let y = 0; y < lines.length; y++) {
        for (let x = 0; x < lines[0].length; x++) {
            if (grid[y][x] === '*') {
                gearCoordinates.push({ x, y });
            }
        }
    }

    console.log(gearCoordinates);

    return '';
};

export const day3: Day = {
    title: 'Day 3: Gear Ratios',
    link: '/2023/day3',
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
