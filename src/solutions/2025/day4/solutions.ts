type Cell = {
    isRoll: boolean;
    accessible: boolean;
};

type Grid = Cell[][];

const parseGrid = (input: string): Grid => {
    return input
        .split('\n')
        .map(line => line
            .split('')
            .map(cell => ({ isRoll: cell === '@', accessible: false }))
        );
};

const markAccessibleRolls = (grid: Grid) => {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            const cell = grid[y][x];
            if (!cell.isRoll) continue;
            
            let adjacentRolls = 0;

            for (let dy = -1; dy <= 1; dy++) {
                for (let dx = -1; dx <= 1; dx++) {
                    if (dx === 0 && dy === 0) continue;
                    const adjacentCell = grid[y + dy]?.[x + dx];
                    if (adjacentCell?.isRoll) {
                        adjacentRolls++;
                    }
                }
            }

            if (adjacentRolls < 4) {
                cell.accessible = true;
            }
        }
    }
};

const countRolls = (grid: Grid): number => {
    let rollCount = 0;

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            const cell = grid[y][x];
            if (cell.isRoll) {
                rollCount++;
            }
        }
    }

    return rollCount;
};

const countAccessibleRolls = (grid: Grid): number => {
    let accessibleCount = 0;

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            const cell = grid[y][x];
            if (cell.isRoll && cell.accessible) {
                accessibleCount++;
            }
        }
    }

    return accessibleCount;
};

const removeAccessibleRolls = (grid: Grid) => {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            const cell = grid[y][x];
            if (cell.isRoll && cell.accessible) {
                cell.isRoll = false;
                cell.accessible = false;
            }
        }
    }
};

export const part1Solution = (input: string): string => {
    const grid = parseGrid(input);
    
    markAccessibleRolls(grid);
    const accessibleCount = countAccessibleRolls(grid);

    return accessibleCount.toString();
};

export const part2Solution = (input: string): string => {
    const grid = parseGrid(input);

    const initialRollCount = countRolls(grid);

    do {
        removeAccessibleRolls(grid);
        markAccessibleRolls(grid);
    } while (countAccessibleRolls(grid) > 0);

    const remainingRollCount = countRolls(grid);
    const rollsRemoved = initialRollCount - remainingRollCount;

    return rollsRemoved.toString();
};
