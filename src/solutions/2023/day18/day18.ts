import { Day } from '@pages/DayTemplate';
import { descriptions } from './descriptions';
import { inputs } from './inputs';
import { indexOfMulti } from '@util/array';

enum Direction {
    Up = 'U',
    Left = 'L',
    Right = 'R',
    Down = 'D'
}

type DigPlan = {
    direction: Direction;
    distance: number;
    color: string;
}

const parseDigPlan = (input: string): DigPlan[] => {
    const lines = input.split('\n');

    return lines.map((line) => {
        const split = line.split(' ');

        const direction = split[0] as Direction;
        const distance = parseInt(split[1]);
        const color = split[2].replace(/\(|\)/g, '');

        return { direction, distance, color };
    });
};

const part1Solution = (input: string): string => {
    const digPlan = parseDigPlan(input);

    const grid = [['']];
    const currentCoords = { x: 0, y: 0 };

    digPlan.forEach((instruction) => {
        console.log(instruction);
        for (let i = 0; i < instruction.distance; i++) {
            switch (instruction.direction) {
                case Direction.Up: {
                    currentCoords.y--;
                    break;
                }
                case Direction.Down: {
                    currentCoords.y++;
                    break;
                }
                case Direction.Left: {
                    currentCoords.x--;
                    break;
                }
                case Direction.Right: {
                    currentCoords.x++;
                    break;
                }
            }

            if (currentCoords.y > grid.length - 1) {
                grid.push([]);
            }

            grid[currentCoords.y][currentCoords.x] = instruction.color;
        }
    });

    const gridNoColor = [];

    for (let y = 0; y < grid.length; y++) {
        const row = [];

        for (let x = 0; x < grid[0].length; x++) {
            const cell = grid[y][x];

            if (cell === undefined) {
                grid[y][x] = '.';
                row.push('.');
            } else {
                row.push('#');
            }
        }

        gridNoColor.push(row);
    }

    let insideCount = 0;

    for (let y = 0; y < gridNoColor.length; y++) {       
        console.log(y);
        for (let x = 0; x < gridNoColor[0].length; x++) {
            if (gridNoColor[y][x] !== '#') {
                const beforeCount = indexOfMulti(gridNoColor[y].slice(0, x), '#').length;
                const afterCount = indexOfMulti(gridNoColor[y].slice(x + 1), '#').length;

                if (beforeCount > 0 && afterCount > 0) {
                    console.log(beforeCount);
                    console.log(afterCount);
                    console.log('==');
                    if ((beforeCount % 2 !== 0) && (afterCount % 2 !== 0)) {
                        insideCount++;
                    }
                }
            }
        }
        console.log('---');
    }

    console.log(insideCount);

    return '';
};

const part2Solution = (input: string): string => {
    return '';
};

export const day18: Day = {
    title: 'Day 18: Lavaduct Lagoon',
    stars: 0,
    part1: {
        description: descriptions.part1Description,
        solution: part1Solution,
        exampleInput: inputs.part1.exampleInput,
        givenInput: inputs.part1.givenInput
    },
    // part2: {
    //     description: descriptions.part2Description,
    //     solution: part2Solution,
    //     exampleInput: inputs.part2.exampleInput,
    //     givenInput: inputs.part2.givenInput
    // }
};
