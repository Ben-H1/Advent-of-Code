import { Day } from '@pages/DayTemplate';
import { indexOf2d } from '@util/array';
import { descriptions } from './descriptions';
import { inputs } from './inputs';

enum PipeType {
    Vertical = '|',
    Horizontal = '-',
    NE = 'L',
    NW = 'J',
    SW = '7',
    SE = 'F',
    Ground = '.',
    Start = 'S'
}

enum Direction {
    North = 'n',
    South = 's',
    West = 'w',
    East = 'e'
}

const getGridChar = (grid: string[][], x: number, y: number, direction: Direction) => {
    try {
        const char = grid[y][x] as PipeType;
    
        return {
            char,
            coords: { x, y },
            isPipe: [
                PipeType.Vertical,
                PipeType.Horizontal,
                PipeType.NE,
                PipeType.NW,
                PipeType.SW,
                PipeType.SE,
                PipeType.Start
            ].includes(char),
            direction
        };
    } catch {
        return undefined;
    }
};

const getAdjacentPipes = (grid: string[][], coords: any) => {
    const char = grid[coords.y][coords.x];

    const north = getGridChar(grid, coords.x, coords.y - 1, Direction.North);
    const south = getGridChar(grid, coords.x, coords.y + 1, Direction.South);
    const west = getGridChar(grid, coords.x - 1, coords.y, Direction.West);
    const east = getGridChar(grid, coords.x + 1, coords.y, Direction.East);

    const northValid = (north && north.isPipe && ![PipeType.Horizontal, PipeType.NE, PipeType.NW].includes(north.char) && char !== PipeType.Horizontal);
    const southValid = (south && south.isPipe && ![PipeType.Horizontal, PipeType.SE, PipeType.SW].includes(south.char) && char !== PipeType.Horizontal);
    const westValid = (west && west.isPipe && ![PipeType.Vertical, PipeType.NW, PipeType.SW].includes(west.char) && char !== PipeType.Vertical);
    const eastValid = (east && east.isPipe && ![PipeType.Vertical, PipeType.NE, PipeType.SE].includes(east.char) && char !== PipeType.Vertical);

    const adjacent = [];

    northValid && adjacent.push(north);
    southValid && adjacent.push(south);
    westValid && adjacent.push(west);
    eastValid && adjacent.push(east);

    return adjacent;
};

const nextDirection = (previousDirection: Direction, char: PipeType) => {
    if ([PipeType.Vertical, PipeType.Horizontal].includes(char)) {
        return previousDirection;
    }

    if (char === PipeType.NE) {
        if (previousDirection === Direction.West) {
            return Direction.North;
        } else if (previousDirection === Direction.South) {
            return Direction.East;
        }
    }

    if (char === PipeType.NW) {
        if (previousDirection === Direction.East) {
            return Direction.North;
        } else if (previousDirection === Direction.South) {
            return Direction.West;
        }
    }

    if (char === PipeType.SE) {
        if (previousDirection === Direction.West) {
            return Direction.South;
        } else if (previousDirection === Direction.North) {
            return Direction.East
        }
    }

    if (char === PipeType.SW) {
        if (previousDirection === Direction.East) {
            return Direction.South;
        } else if (previousDirection === Direction.North) {
            return Direction.West;
        }
    }
};

const getPath = (grid: string[][]) => {
    const startCoords = indexOf2d(grid, PipeType.Start);
    
    let path = [];
    let currentPipe: any;
    let currentCoords = startCoords;

    do {
        const adjacentPipes = getAdjacentPipes(grid, currentCoords);

        if (!currentPipe) {
            currentPipe = adjacentPipes[0];
        } else {
            const previousDirection = currentPipe.direction;
            const nextPipe = adjacentPipes.find(p => p.direction === nextDirection(previousDirection, currentPipe.char));
            currentPipe = nextPipe;
        }

        currentCoords = currentPipe.coords;
        path.push(currentPipe);
    } while (currentPipe.char !== PipeType.Start);

    path = [path.slice(-1)[0], ...path.slice(0, -1)];

    return path;
};

const part1Solution = (input: string): string => {
    const lines = input.split('\n');
    const grid = lines.map(l => l.split(''));

    const path = getPath(grid);

    const farthestSteps = path.length / 2;

    return farthestSteps.toString();
};

const part2Solution = (input: string) => {
    const lines = input.split('\n');
    const grid = lines.map(l => l.split(''));

    const path = getPath(grid);
    const pathCoords = path.map(p => p.coords);

    let filteredGrid: string[][] = [];
    for (let y = 0; y < grid.length; y++) {
        const newRow: string[] = [];
        for (let x = 0; x < grid[0].length; x++) {
            if (pathCoords.find(c => c.x === x && c.y === y)) {
                newRow.push(grid[y][x]);
            } else {
                newRow.push(PipeType.Ground);
            }
        }
        filteredGrid.push(newRow);
    }

    const startCoords = indexOf2d(grid, PipeType.Start)!;
    const startAdjacentPipes = getAdjacentPipes(filteredGrid, startCoords);
    const adjacentDirections = startAdjacentPipes.map(p => p.direction);

    let startChar = '';

    if (adjacentDirections.includes(Direction.North) && adjacentDirections.includes(Direction.South)) {
        startChar = PipeType.Vertical;
    } else if (adjacentDirections.includes(Direction.West) && adjacentDirections.includes(Direction.East)) {
        startChar = PipeType.Horizontal
    } else if (adjacentDirections.includes(Direction.North) && adjacentDirections.includes(Direction.West)) {
        startChar = PipeType.NW;
    } else if (adjacentDirections.includes(Direction.North) && adjacentDirections.includes(Direction.East)) {
        startChar = PipeType.NE;
    } else if (adjacentDirections.includes(Direction.South) && adjacentDirections.includes(Direction.West)) {
        startChar = PipeType.SW;
    } else { // South and East
        startChar = PipeType.SE;
    }

    filteredGrid[startCoords.y][startCoords.x] = startChar;

    let insideCount = 0;

    filteredGrid.forEach((row) => {
        let rowString = row.join('');
        console.log(rowString);
        
        rowString = rowString.replace(/(F-*7|L-*7|L-*J|F-*J)/g, '|');
        console.log(rowString);
        const replacedRow = rowString.split('');
        
        replacedRow.forEach((char, i) => {
            if (char === PipeType.Ground) {
                const before = rowString.substring(0, i);
                const after = rowString.substring(i + 1);

                const beforeWallCount = before.match(/\|/g)?.length ?? 0;
                const afterWallCount = after.match(/\|/g)?.length ?? 0;

                if (beforeWallCount !== 0 && afterWallCount !== 0) {
                    if (beforeWallCount % 2 !== 0 || afterWallCount % 2 !== 0) {
                        insideCount++;
                    }
                }
            }
        });
    });

    // for (let y = 0; y < filteredGrid.length; y++) {
    //     for (let x = 0; x < filteredGrid[0].length; x++) {
    //         if (filteredGrid[y][x] === PipeType.Ground) {
    //             const row = filteredGrid[y];
    //             const column = filteredGrid.map(r => r[x]);

    //             const rowString = row.join('');
    //             const columnString = column.join('');

    //             const replacedRowString = rowString.replace(/(F-*7|L-*7|L-*J|F-*J)/g, '|');
    //             const replacedColumnString = columnString.replace(/(F\|*L|F\|*J|7\|*L|7\|*J)/g, '-');

    //             const rowBefore = replacedRowString.substring(0, x);
    //             const rowAfter = replacedRowString.substring(x + 1);

    //             const columnBefore = replacedColumnString.substring(0, y);
    //             const columnAfter = replacedColumnString.substring(y + 1);

    //             const rowBeforeWallCount = rowBefore.match(/\|/g)?.length ?? 0;
    //             const rowAfterWallCount = rowAfter.match(/\|/g)?.length ?? 0;

    //             const columnBeforeWallCount = columnBefore.match(/-/g)?.length ?? 0;
    //             const columnAfterWallCount = columnAfter.match(/-/g)?.length ?? 0;

    //             if (rowBeforeWallCount !== 0 && rowAfterWallCount !== 0 || columnBeforeWallCount !== 0 && columnAfterWallCount !== 0) {
    //                 if (rowBeforeWallCount % 2 !== 0 || rowAfterWallCount % 2 !== 0 || columnBeforeWallCount % 2 !== 0 || columnAfterWallCount % 2 !== 0) {
    //                     insideCount++;
    //                 }
    //             }
    //         }
    //     }
    // }

    return insideCount.toString();
};

const part2SolutionOld = (input: string): string => {
    const lines = input.split('\n');
    const grid = lines.map(l => l.split(''));

    const path = getPath(grid);
    const pathCoords = path.map(p => p.coords);

    const filteredGrid: string[][] = [];
    for (let y = 0; y < grid.length; y++) {
        const newRow: string[] = [];
        for (let x = 0; x < grid[0].length; x++) {
            if (pathCoords.find(c => c.x === x && c.y === y)) {
                newRow.push('X');
            } else {
                newRow.push(PipeType.Ground);
            }
        }
        filteredGrid.push(newRow);
    }

    const pathCoordsByLine = [];

    for (let y = 0; y < filteredGrid.length; y++) {
        const newSet = [];
        for (let x = 0; x < filteredGrid[0].length; x++) {
            if (filteredGrid[y][x] !== PipeType.Ground) {
                newSet.push(x);
            }
        }
        pathCoordsByLine.push(newSet);
    }

    // console.log(pathCoordsByLine);

    let enclosedCount = 0;

    const gapsByLine = pathCoordsByLine.map((line) => {
        const gaps = [];
        for (let i = 0; i < line.length; i++) {
            const nextDiff = line[i + 1] - line[i];
            if (i % 2 === 0 && nextDiff > 1) {
                // console.log(`adding ${nextDiff} at ${i}`);
                gaps.push(nextDiff - 1);
            }
        }
        return gaps;
    });

    console.log(gapsByLine);

    return '';
};

export const day10: Day = {
    title: 'Day 10: Pipe Maze',
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
