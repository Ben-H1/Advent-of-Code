type Octopus = {
    energy: number;
    flashed: boolean;
}

const parseGrid = (input: string): Octopus[][] => {
    return input
        .split('\n')
        .map(l => l
            .split('')
            .map(n => parseInt(n))
            .map(n => ({ energy: n, flashed: false }))
        );
};

const getGridAtPos = (grid: Octopus[][], x: number, y: number) => {
    let value;

    try {
        value = grid[y][x];
    } catch {
        value = null;
    }

    return value;
};

const increaseEnergyAtPos = (grid: Octopus[][], x: number, y: number) => {
    if (getGridAtPos(grid, x, y) == null) {
        return;
    }

    if (!grid[y][x].flashed) {
        grid[y][x].energy++;
    
        if (grid[y][x].energy > 9) {
            grid[y][x].energy = 0;
            grid[y][x].flashed = true;
    
            increaseEnergyAtPos(grid, x - 1, y);
            increaseEnergyAtPos(grid, x + 1, y);
            increaseEnergyAtPos(grid, x, y - 1);
            increaseEnergyAtPos(grid, x, y + 1);
            increaseEnergyAtPos(grid, x - 1, y - 1);
            increaseEnergyAtPos(grid, x + 1, y - 1);
            increaseEnergyAtPos(grid, x - 1, y + 1);
            increaseEnergyAtPos(grid, x + 1, y + 1);
        }
    }
};

export const part1Solution = (input: string): string => {
    const grid = parseGrid(input);

    let flashCount = 0;

    for (let i = 0; i < 100; i++) {
        grid.forEach((row, y) => row.forEach((_, x) => increaseEnergyAtPos(grid, x, y)));
        grid.forEach(row => row.forEach(cell => cell.flashed && flashCount++));
        grid.forEach(row => row.forEach(cell => cell.flashed = false));
    }

    return flashCount.toString();
};

export const part2Solution = (input: string): string => {
    const grid = parseGrid(input);

    let allFlashStep;
    let currentStep = 1;

    do {
        grid.forEach((row, y) => row.forEach((_, x) => increaseEnergyAtPos(grid, x, y)));
        
        if (grid.every(row => row.every(cell => cell.flashed))) {
            allFlashStep = currentStep;
        }

        grid.forEach(row => row.forEach(cell => cell.flashed = false));

        currentStep++;
    } while (allFlashStep == null);

    return allFlashStep.toString();
};
