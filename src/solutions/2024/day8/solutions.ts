type Coordinate = {
    x: number;
    y: number;
};

type Cell = {
    char: string;
    isAntenna: boolean;
    antennaFrequency: string | null;
    isAntinode: boolean;
    position: Coordinate;
};

type Grid = Cell[][];

const parseGrid = (input: string): Grid => {
    return input
        .split('\n')
        .map((l, y) => l
            .split('')
            .map((c, x) => ({
                char: c,
                isAntenna: c !== '.',
                antennaFrequency: c === '.' ? null : c,
                isAntinode: false,
                position: { x, y }
            }))
        );
};

const getGridAtPos = (grid: Grid, x: number, y: number) => {
    let value;

    try {
        value = grid[y][x];
    } catch {
        value = null;
    }

    return value;
};

const getAntennaPairs = (antennas: Cell[]) => {
    const pairs: Cell[][] = [];

    for (let i = 0; i < antennas.length; i++) {
        for (let j = i + 1; j < antennas.length; j++) {
            const antennaA = antennas[i];
            const antennaB = antennas[j];

            if (antennaA.antennaFrequency === antennaB.antennaFrequency) {
                pairs.push([antennaA, antennaB]);
            }
        }
    }

    return pairs;
};

export const part1Solution = (input: string): string => {
    const grid = parseGrid(input);

    const antennas: Cell[] = [];
    grid.forEach(row => row.map(cell => cell.isAntenna && antennas.push(cell)));

    const antennaPairs = getAntennaPairs(antennas);
    const antinodes = antennaPairs.map(p => {
        const xDiff = p[1].position.x - p[0].position.x;
        const yDiff = p[1].position.y - p[0].position.y;

        const lastX = p[0].position.x - xDiff;
        const lastY = p[0].position.y - yDiff;

        const nextX = p[1].position.x + xDiff;
        const nextY = p[1].position.y + yDiff;

        return [
            { x: lastX, y: lastY },
            { x: nextX, y: nextY }
        ];
    }).flat();
    
    antinodes.forEach(a => {
        const cell = getGridAtPos(grid, a.x, a.y);

        if (cell) {
            cell.isAntinode = true;
        }
    });

    let antinodeCount = 0;
    grid.forEach(row => row.forEach(cell => cell.isAntinode && antinodeCount++));

    return antinodeCount.toString();
};

export const part2Solution = (input: string): string => {
    const grid = parseGrid(input);

    const antennas: Cell[] = [];
    grid.forEach(row => row.map(cell => cell.isAntenna && antennas.push(cell)));

    const antennaPairs = getAntennaPairs(antennas);
    const antinodes = antennaPairs.map(p => {
        const xDiff = p[1].position.x - p[0].position.x;
        const yDiff = p[1].position.y - p[0].position.y;

        const points = [];

        let currentX = p[1].position.x;
        let currentY = p[1].position.y;

        do {
            currentX += xDiff;
            currentY += yDiff;
            points.push({ x: currentX, y: currentY });
        } while (
            currentX >= 0 && currentX <= grid[0].length &&
            currentY >= 0 && currentY <= grid.length
        );

        currentX = p[0].position.x;
        currentY = p[0].position.y;

        do {
            currentX -= xDiff;
            currentY -= yDiff;
            points.push({ x: currentX, y: currentY });
        } while (
            currentX >= 0 && currentX <= grid[0].length &&
            currentY >= 0 && currentY <= grid.length
        );

        return points;
    }).flat();

    antinodes.forEach(a => {
        const cell = getGridAtPos(grid, a.x, a.y);

        if (cell) {
            cell.isAntinode = true;
        }
    });

    let antinodeCount = 0;
    grid.forEach(row => row.forEach(cell => (cell.isAntinode || cell.isAntenna) && antinodeCount++));

    return antinodeCount.toString();
};
