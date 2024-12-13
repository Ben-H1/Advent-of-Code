import { stringify2d } from '@util/array';
import { sum } from '@util/math';

type Coordinate = {
    x: number;
    y: number;
};

type Cell = {
    value: number;
    visited: boolean;
    adjacent: Coordinate[];
};

type Grid = Cell[][];

const parseGrid = (input: string): Grid => {
    const grid: Grid = input
        .split('\n')
        .map(l => l
            .split('')
            .map(n => ({
                value: parseInt(n),
                visited: false,
                adjacent: []
            }))
        );
    
    grid.forEach((row, y) => row.forEach((cell, x) => {
        if (getGridAtPos(grid, x - 1, y)?.value === cell.value + 1) {
            cell.adjacent.push({ x: x - 1, y });
        }
        if (getGridAtPos(grid, x + 1, y)?.value === cell.value + 1) {
            cell.adjacent.push({ x: x + 1, y });
        }
        if (getGridAtPos(grid, x, y - 1)?.value === cell.value + 1) {
            cell.adjacent.push({ x, y: y - 1 });
        }
        if (getGridAtPos(grid, x, y + 1)?.value === cell.value + 1) {
            cell.adjacent.push({ x, y: y + 1 });
        }
    }));

    return grid;
};

const getGridAtPos = (grid: Grid, x: number, y: number): Cell | undefined => {
    return grid?.[y]?.[x];
};

const getAllCoordinatesAtHeight = (grid: Grid, height: number): Coordinate[] => {
    const coords: Coordinate[] = [];
    grid.forEach((row, y) => row.forEach((cell, x) => cell.value === height && coords.push({ x, y })));
    return coords;
};

const resetGrid = (grid: Grid) => {
    grid.forEach(row => row.map(cell => cell.visited = false));
};

const fillPath = (grid: Grid, x: number, y: number) => {
    const currentValue = getGridAtPos(grid, x, y);

    if (currentValue == null) {
        return;
    }

    currentValue.visited = true;

    if (getGridAtPos(grid, x - 1, y)?.value === currentValue.value + 1) {
        fillPath(grid, x - 1, y);
    }
    if (getGridAtPos(grid, x + 1, y)?.value === currentValue.value + 1) {
        fillPath(grid, x + 1, y);
    }
    if (getGridAtPos(grid, x, y - 1)?.value === currentValue.value + 1) {
        fillPath(grid, x, y - 1);
    }
    if (getGridAtPos(grid, x, y + 1)?.value === currentValue.value + 1) {
        fillPath(grid, x, y + 1);
    }
};

const getPaths = (grid: Grid, startPos: Coordinate, endPos: Coordinate, paths: Coordinate[][], path: Coordinate[] = []) => {
    if (startPos.x === endPos.x && startPos.y === endPos.y) {
        const pathCopy = JSON.parse(JSON.stringify(path));
        paths.push(pathCopy);
    }

    const currentCell = getGridAtPos(grid, startPos.x, startPos.y)!;
    currentCell.visited = true;

    currentCell.adjacent.forEach(a => {
        const cell = getGridAtPos(grid, a.x, a.y)!;
        if (!cell.visited) {
            path.push(a);
            getPaths(grid, a, endPos, paths, path);
            path.splice(path.findIndex(p => p.x === a.x && p.y === a.y), 1);
        }
    });

    currentCell.visited = false;
};

const getAllPaths = (grid: Grid, startPos: Coordinate, endPos: Coordinate) => {
    const paths: Coordinate[][] = [];
    getPaths(grid, { x: startPos.x, y: startPos.y }, { x: endPos.x, y: endPos.y }, paths);

    const newPaths = paths.map(p => [startPos, ...p]);

    return newPaths;
};

export const part1Solution = (input: string): string => {
    const grid = parseGrid(input);

    const trailheadCoords = getAllCoordinatesAtHeight(grid, 0);
    const endCoords = getAllCoordinatesAtHeight(grid, 9);

    const scores = trailheadCoords.map(t => {
        resetGrid(grid);
        fillPath(grid, t.x, t.y);
        const visitedEnds = endCoords.filter(c => getGridAtPos(grid, c.x, c.y)?.visited);
        return visitedEnds.length;
    });

    const scoreSum = sum(...scores);

    return scoreSum.toString();
};

export const part2Solution = (input: string): string => {
    const grid = parseGrid(input);

    const trailheadCoords = getAllCoordinatesAtHeight(grid, 0);
    const endCoords = getAllCoordinatesAtHeight(grid, 9);

    const ratings = trailheadCoords.map(t => {
        const pathsToEnds = endCoords.map(e => getAllPaths(grid, t, e).filter(p => p.length > 0));
        return pathsToEnds.flat().length;
    });

    const ratingSum = sum(...ratings);

    return ratingSum.toString();
};
