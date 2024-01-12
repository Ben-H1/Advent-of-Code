import { Day } from '@pages/DayTemplate';
import { descriptions } from './descriptions';
import { inputs } from './inputs';
import { sum } from '@util/math';

enum MirrorType {
    Empty = '.',
    MirrorNE = '/',
    MirrorNW = '\\',
    SplitterVertical = '|',
    SplitterHorizontal = '-'
}

enum Direction {
    North = 'n',
    South = 's',
    West = 'w',
    East = 'e'
}

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

const getNextMirrorDirection = (mirror: MirrorType, direction: Direction) => {
    if (mirror === MirrorType.MirrorNE) {
        return ({
            [Direction.North]: Direction.East,
            [Direction.East]: Direction.North,
            [Direction.South]: Direction.West,
            [Direction.West]: Direction.South
        })[direction];
    } else { // NW
        return ({
            [Direction.North]: Direction.West,
            [Direction.East]: Direction.South,
            [Direction.South]: Direction.East,
            [Direction.West]: Direction.North
        })[direction];
    }
};

const getSplitterIsSameDirection = (splitter: MirrorType, direction: Direction) => {
    if (splitter === MirrorType.SplitterVertical) {
        return ({
            [Direction.North]: true,
            [Direction.East]: false,
            [Direction.South]: true,
            [Direction.West]: false
        })[direction];
    } else { // horizontal
        return ({
            [Direction.North]: false,
            [Direction.East]: true,
            [Direction.South]: false,
            [Direction.West]: true
        })[direction];
    }
};

const getNextSplitterDirections = (splitter: MirrorType) => {
    if (splitter === MirrorType.SplitterVertical) {
        return [Direction.North, Direction.South];
    } else { // horizontal
        return [Direction.West, Direction.East];
    }
};

const getEnergizedGrid = (grid: MirrorType[][], startX: number, startY: number, startDirection: Direction) => {
    const energizedGrid: Direction[][][] = [];

    for (let y = 0; y < grid.length; y++) {
        const row = [];
        for (let x = 0; x < grid[0].length; x++) {
            row.push([]);
        }
        energizedGrid.push(row);
    }

    const currentBeamCoords = [{ x: startX, y: startY, direction: startDirection }];

    do {
        currentBeamCoords.forEach((beamCoords, i) => {
            const { x, y, direction } = beamCoords;

            const currentCell = grid[y]?.[x];

            if (currentCell) {
                if (energizedGrid[y][x].includes(direction)) {
                    currentBeamCoords.splice(i, 1);
                } else {
                    energizedGrid[y][x].push(direction);
                    
                    if (currentCell === MirrorType.Empty) {
                        const nextCoords = getAdjacentCoords({ x, y }, direction);
                        currentBeamCoords[i] = { x: nextCoords.x, y: nextCoords.y, direction };
                    } else if ([MirrorType.MirrorNE, MirrorType.MirrorNW].includes(currentCell)) {
                        const newDirection = getNextMirrorDirection(currentCell, direction);
                        const nextCoords = getAdjacentCoords({ x, y }, newDirection);
                        currentBeamCoords[i] = { x: nextCoords.x, y: nextCoords.y, direction: newDirection };
                    } else { // splitter
                        const sameDirection = getSplitterIsSameDirection(currentCell, direction);

                        if (sameDirection) {
                            const nextCoords = getAdjacentCoords({ x, y }, direction);
                            currentBeamCoords[i] = { x: nextCoords.x, y: nextCoords.y, direction };
                        } else {
                            const nextDirections = getNextSplitterDirections(currentCell);

                            const direction1NextCoords = getAdjacentCoords({ x, y }, nextDirections[0]);
                            currentBeamCoords[i] = { x: direction1NextCoords.x, y: direction1NextCoords.y, direction: nextDirections[0] };

                            const direction2NextCoords = getAdjacentCoords({ x, y }, nextDirections[1]);
                            currentBeamCoords.push({ x: direction2NextCoords.x, y: direction2NextCoords.y, direction: nextDirections[1] });
                        }
                    }
                }
            } else {
                currentBeamCoords.splice(i, 1);
            }
        });
    } while (currentBeamCoords.length > 0);

    return energizedGrid;
};

const getEnergizedCount = (energizedGrid: Direction[][][]) => {
    return sum(...energizedGrid
        .map(r => r.map(c => c.length > 0 ? true : false))
        .map(r => r.filter(c => c).length));
};

const part1Solution = (input: string): string => {
    const lines = input.split('\n');
    const grid = lines.map(l => l.split('')) as MirrorType[][];

    const energizedGrid = getEnergizedGrid(grid, 0, 0, Direction.East);

    const energizedCount = getEnergizedCount(energizedGrid);

    return energizedCount.toString();
};

const part2Solution = (input: string): string => {
    const lines = input.split('\n');
    const grid = lines.map(l => l.split('')) as MirrorType[][];

    const topCounts = [];
    const bottomCounts = [];
    const leftCounts = [];
    const rightCounts = [];

    for (let x = 0; x < grid[0].length; x++) {
        const topEnergizedGrid = getEnergizedGrid(grid, x, 0, Direction.South);
        const bottomEnergizedGrid = getEnergizedGrid(grid, x, grid.length, Direction.North);

        const topEnergizedCount = getEnergizedCount(topEnergizedGrid);
        const bottomEnergizedCount = getEnergizedCount(bottomEnergizedGrid);

        topCounts.push(topEnergizedCount);
        bottomCounts.push(bottomEnergizedCount);
    }

    for (let y = 0; y < grid.length; y++) {
        const leftEnergizedGrid = getEnergizedGrid(grid, 0, y, Direction.East);
        const rightEnergizedGrid = getEnergizedGrid(grid, grid[0].length, y, Direction.West);

        const leftEnergizedCount = getEnergizedCount(leftEnergizedGrid);
        const rightEnergizedCount = getEnergizedCount(rightEnergizedGrid);

        leftCounts.push(leftEnergizedCount);
        rightCounts.push(rightEnergizedCount);
    }

    const allCounts = [
        ...topCounts,
        ...bottomCounts,
        ...leftCounts,
        ...rightCounts
    ];

    const maxCount = Math.max(...allCounts);

    return maxCount.toString();
};

export const day16: Day = {
    title: 'Day 16: The Floor Will Be Lava',
    link: '/2023/day16',
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
