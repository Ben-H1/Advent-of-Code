import { Day } from '@pages/DayTemplate';
import { descriptions } from './descriptions';
import { inputs } from './inputs';

enum RockType {
    Rounded = 'O',
    Cube = '#',
    Empty = '.'
}

enum Direction {
    North = 'n',
    South = 's',
    West = 'w',
    East = 'e'
}

const getRockCoords = (grid: string[][], rockType: RockType) => {
    const coords = [];

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] === rockType) {
                coords.push({ x, y });
            }
        }
    }

    return coords;
};

const getAdjacentCoords = ({ x, y }: any, direction: Direction) => {
    switch (direction) {
        case Direction.North: {
            return { x, y: y - 1 };
        }
        case Direction.South: {
            return { x, y: y + 1 };
        }
        case Direction.West: {
            return { x: x - 1, y };
        }
        case Direction.East: {
            return { x: x + 1, y };
        }
    }
};

const tiltGrid = (grid: string[][], direction: Direction) => {
    let newGrid = JSON.parse(JSON.stringify(grid));
    let movedCount = 0;

    do {
        movedCount = 0;

        const roundedRockCoords = getRockCoords(newGrid, RockType.Rounded);

        roundedRockCoords.forEach((coords) => {
            const adjacentCoords = getAdjacentCoords(coords, direction);
            const adjacent = newGrid[adjacentCoords.y]?.[adjacentCoords.x];
    
            if (adjacent === RockType.Empty) {
                newGrid[adjacentCoords.y][adjacentCoords.x] = RockType.Rounded;
                newGrid[coords.y][coords.x] = RockType.Empty;
                movedCount++;
            }
        });
    } while (movedCount > 0);

    return newGrid;
};

const tiltGridCycle = (grid: string[][], seenMap: Map<string, string[][]>, pattern: number[]) => {
    const gridString = grid.map(r => r.join('')).join('');
    const seen = seenMap.has(gridString);

    if (seen) {
        pattern.push(getNorthBeamLoad(seenMap.get(gridString)!));
        return seenMap.get(gridString);
    }

    let newGrid = tiltGrid(grid, Direction.North);
    newGrid = tiltGrid(newGrid, Direction.West);
    newGrid = tiltGrid(newGrid, Direction.South);
    newGrid = tiltGrid(newGrid, Direction.East);

    seenMap.set(gridString, newGrid);

    return newGrid;
};

const getNorthBeamLoad = (grid: string[][]) => {
    const reversedGrid = JSON.parse(JSON.stringify(grid)).reverse();

    let totalLoad = 0;

    for (let i = 0; i < reversedGrid.length; i++) {
        const row = reversedGrid[i].join('');
        const roundedRockCount = row.match(new RegExp(RockType.Rounded, 'g'))?.length ?? 0;
        
        totalLoad += roundedRockCount * (i + 1);
    }

    return totalLoad;
};

const getPatternRepeatLength = (pattern: number[]) => {
    for (let i = 1; i < pattern.length; i++) {
        const firstHalf = pattern.slice(0, i);
        const secondHalf = pattern.slice(i);
        if (firstHalf.every((v, i) => v === secondHalf[i])) {
            return i;
        }
    }

    return -1;
};

const part1Solution = (input: string): string => {
    const lines = input.split('\n');
    const grid = lines.map(l => l.split(''));

    const newGrid = tiltGrid(grid, Direction.North);

    const totalLoad = getNorthBeamLoad(newGrid);

    return totalLoad.toString();
};

const part2Solution = (input: string): string => {
    const lines = input.split('\n');
    const grid = lines.map(l => l.split(''));

    const seenGrids = new Map();
    const pattern: number[] = [];

    const cycleLength = 1_000_000_000;

    let newGrid = JSON.parse(JSON.stringify(grid));
    
    let patternRepeatLength = -1;
    let completedCycles = 0;

    do {
        newGrid = tiltGridCycle(newGrid, seenGrids, pattern);
        completedCycles++;
        patternRepeatLength = getPatternRepeatLength(pattern);
    } while (patternRepeatLength === -1);

    const remainingCycles = cycleLength - completedCycles;
    const patternIndex = (remainingCycles % patternRepeatLength) - 1;

    const totalLoad = pattern[patternIndex];

    return totalLoad.toString();
};

export const day14: Day = {
    title: 'Day 14: Parabolic Reflector Dish',
    link: '/2023/day14',
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
