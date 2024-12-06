import { sum } from '@util/math';

type Cell = {
    letter: string;
    involved: boolean;
};

const parseGrid = (input: string): Cell[][] => {
    return input
        .split('\n')
        .map(l => l
            .split('')
            .map(l => ({ letter: l, involved: false }))
        );
};

const getGridAtPos = (grid: Cell[][], x: number, y: number) => {
    let value;

    try {
        value = grid[y][x];
    } catch {
        value = null;
    }

    return value;
};

const checkWord = (grid: Cell[][], x: number, y: number, xChange: number, yChange: number, searchString: string) => {
    const coords = [];

    let counterX = x;
    let counterY = y;
    let counter = 0;

    do {
        coords.push({ x: counterX, y: counterY });
        counterX += xChange;
        counterY += yChange;
        counter++;
    } while (counter < searchString.length);

    const string = coords.map(c => getGridAtPos(grid, c.x, c.y)?.letter).join('');

    if (string === searchString) {
        coords.forEach(c => grid[c.y][c.x].involved = true);
        return 1;
    }

    return 0;
};

const checkLeft = (grid: Cell[][], x: number, y: number, searchString: string) => checkWord(grid, x, y, -1, 0, searchString);
const checkRight = (grid: Cell[][], x: number, y: number, searchString: string) => checkWord(grid, x, y, 1, 0, searchString);
const checkUp = (grid: Cell[][], x: number, y: number, searchString: string) => checkWord(grid, x, y, 0, -1, searchString);
const checkDown = (grid: Cell[][], x: number, y: number, searchString: string) => checkWord(grid, x, y, 0, 1, searchString);

const checkUpLeft = (grid: Cell[][], x: number, y: number, searchString: string) => checkWord(grid, x, y, -1, -1, searchString);
const checkUpRight = (grid: Cell[][], x: number, y: number, searchString: string) => checkWord(grid, x, y, 1, -1, searchString);
const checkDownLeft = (grid: Cell[][], x: number, y: number, searchString: string) => checkWord(grid, x, y, -1, 1, searchString);
const checkDownRight = (grid: Cell[][], x: number, y: number, searchString: string) => checkWord(grid, x, y, 1, 1, searchString);

const checkAll = (grid: Cell[][], x: number, y: number, searchString: string) => {
    const found = [
        checkLeft(grid, x, y, searchString),
        checkRight(grid, x, y, searchString),
        checkUp(grid, x, y, searchString),
        checkDown(grid, x, y, searchString),

        checkUpLeft(grid, x, y, searchString),
        checkUpRight(grid, x, y, searchString),
        checkDownLeft(grid, x, y, searchString),
        checkDownRight(grid, x, y, searchString)
    ];

    return sum(...found);
};

export const part1Solution = (input: string): string => {
    const grid = parseGrid(input);
    const searchString = 'XMAS';

    let found = 0;
    
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            found += checkAll(grid, x, y, searchString);
        }
    }

    return found.toString();
};

const checkMas = (grid: Cell[][], x: number, y: number) => {
    const searchString = 'MAS';

    const found = [
        checkDownRight(grid, x - 1, y - 1, searchString),
        checkDownLeft(grid, x + 1, y - 1, searchString),
        checkUpRight(grid, x - 1, y + 1, searchString),
        checkUpLeft(grid, x + 1, y + 1, searchString)
    ];

    const foundCount = sum(...found);

    return foundCount === 2;
};

export const part2Solution = (input: string): string => {
    const grid = parseGrid(input);

    let found = 0;

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (checkMas(grid, x, y)) {
                found++;
            }
        }
    }

    return found.toString();
};
