import { sum } from '@util/math';

enum SpaceType {
    Star = '#',
    Space = '.'
}

type Coordinates = {
    x: number;
    y: number;
};

const expandSpace = (grid: string[][]) => {
    const newGrid = [];

    for (let y = 0; y < grid.length; y++) {
        const row = [];
        for (let x = 0; x < grid[0].length; x++) {
            const column = grid.map(c => c[x]);
            if (column.every(c => c === SpaceType.Space)) {
                row.push(grid[y][x]);
            }
            row.push(grid[y][x]);
        }
        if (row.every(c => c === SpaceType.Space)) {
            newGrid.push(row);
        }
        newGrid.push(row);
    }

    return newGrid;
};

const getStarCoords = (grid: string[][]) => {
    const starCoords = [];

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] === SpaceType.Star) {
                starCoords.push({ x, y });
            }
        }
    }

    return starCoords;
};

const getStarPairs = (starCoords: Coordinates[]) => {
    const pairs = [];

    for (let i = 0; i < starCoords.length - 1; i++) {
        for (let j = i; j < starCoords.length - 1; j++) {
            pairs.push([starCoords[i], starCoords[j + 1]]);
        }
    }

    return pairs;
};

const getPairDistance = (pair: Coordinates[]) => {
    const xDifference = Math.abs(pair[1].x - pair[0].x);
    const yDifference = Math.abs(pair[1].y - pair[0].y);

    const totalDistance = xDifference + yDifference;

    return totalDistance;
};

export const part1Solution = (input: string): string => {
    const lines = input.split('\n');
    const grid = lines.map(l => l.split(''));

    const expandedGrid = expandSpace(grid);

    const starCoords = getStarCoords(expandedGrid);
    const starPairs = getStarPairs(starCoords);
    const distances = starPairs.map(p => getPairDistance(p));

    const distanceSum = sum(...distances);

    return distanceSum.toString();
};

const getEmptyRowsAndColumns = (grid: string[][]) => {
    const emptyRows = [];
    const emptyColumns = [];

    for (let y = 0; y < grid.length; y++) {
        if (grid[y].every(c => c === SpaceType.Space)) {
            emptyRows.push(y);
        }
    }

    for (let x = 0; x < grid[0].length; x++) {
        const column = grid.map(c => c[x]);
        if (column.every(c => c === SpaceType.Space)) {
            emptyColumns.push(x);
        }
    }

    return { emptyRows, emptyColumns };
};

const getPairDistanceWithRange = (pair: Coordinates[], emptyRows: number[], emptyColumns: number[], emptySize: number) => {
    const xDifference = Math.abs(pair[1].x - pair[0].x);
    const yDifference = Math.abs(pair[1].y - pair[0].y);

    const xEmptyCount = emptyColumns.filter(r => pair[0].x > pair[1].x ? r < pair[0].x && r > pair[1].x : r < pair[1].x && r > pair[0].x).length;
    const yEmptyCount = emptyRows.filter(r => pair[0].y > pair[1].y ? r < pair[0].y && r > pair[1].y : r < pair[1].y && r > pair[0].y).length;

    const newXDifference = xDifference + (xEmptyCount * (emptySize - 1));
    const newYDifference = yDifference + (yEmptyCount * (emptySize - 1));

    const totalDistance = newXDifference + newYDifference;

    return totalDistance;
};

export const part2Solution = (input: string): string => {
    const lines = input.split('\n');
    const grid = lines.map(l => l.split(''));

    const { emptyRows, emptyColumns } = getEmptyRowsAndColumns(grid);

    const starCoords = getStarCoords(grid);
    const starPairs = getStarPairs(starCoords);
    const distances = starPairs.map(p => getPairDistanceWithRange(p, emptyRows, emptyColumns, 1_000_000));

    const distanceSum = sum(...distances);

    return distanceSum.toString();
};
