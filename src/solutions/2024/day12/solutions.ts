import { sum } from '@util/math';

type Coordinate = {
    x: number;
    y: number;
};

type Cell = {
    char: string;
    regionId: number | undefined;
};

type Grid = Cell[][];

const getGridAtPos = (grid: Grid, x: number, y: number): Cell | undefined => {
    return grid?.[y]?.[x];
};

const fillRegion = (grid: Grid, x: number, y: number, char: string, regionId: number) => {
    const currentCell = getGridAtPos(grid, x, y);

    if (currentCell == null || currentCell.char != char || currentCell.regionId != null) {
        return;
    }

    currentCell.regionId = regionId;

    fillRegion(grid, x - 1, y, char, regionId);
    fillRegion(grid, x + 1, y, char, regionId);
    fillRegion(grid, x, y - 1, char, regionId);
    fillRegion(grid, x, y + 1, char, regionId);
};

const parseGrid = (input: string): Grid => {
    const grid = input
        .split('\n')
        .map(l =>
            l.split('')
            .map(c => ({
                char: c,
                regionId: undefined
            }))
        );
        
    let currentRegionId = 0;
    do {
        let nextUnsetCoord: Coordinate | undefined;
        grid.forEach((row, y) => row.forEach((cell, x) => {
            if (nextUnsetCoord != null) {
                return;
            }
            if (cell.regionId == null) {
                nextUnsetCoord = { x, y };
            }
        }));
        if (nextUnsetCoord) {
            fillRegion(grid, nextUnsetCoord.x, nextUnsetCoord.y, getGridAtPos(grid, nextUnsetCoord.x, nextUnsetCoord.y)!.char, currentRegionId);
        }
        currentRegionId++;
    } while (!grid.every(row => row.every(cell => cell.regionId != null)));
    
    return grid;
};

const getCoordsByRegionId = (grid: Grid): Record<number, Coordinate[]> => {
    const coordsByRegionId: Record<number, Coordinate[]> = {};

    grid.forEach((row, y) => row.forEach((cell, x) => {
        if (coordsByRegionId[cell.regionId!] != null) {
            coordsByRegionId[cell.regionId!].push({ x, y });
        } else {
            coordsByRegionId[cell.regionId!] = [{ x, y }];
        }
    }));

    return coordsByRegionId;
};

export const part1Solution = (input: string): string => {
    const grid = parseGrid(input);
    const coordsByRegionId = getCoordsByRegionId(grid);

    const perimetersByRegionId: Record<number, number> = {};
    Object.keys(coordsByRegionId).map(k => parseInt(k)).forEach(regionId => {
        const regionCoords = coordsByRegionId[regionId];
        let perimeter = 0;
        regionCoords.forEach(coords => {
            let freeSides = 0;
            if (getGridAtPos(grid, coords.x - 1, coords.y)?.regionId !== regionId) freeSides++;
            if (getGridAtPos(grid, coords.x + 1, coords.y)?.regionId !== regionId) freeSides++;
            if (getGridAtPos(grid, coords.x, coords.y - 1)?.regionId !== regionId) freeSides++;
            if (getGridAtPos(grid, coords.x, coords.y + 1)?.regionId !== regionId) freeSides++;
            perimeter += freeSides;
        });
        perimetersByRegionId[regionId] = perimeter;
    });

    const fencePrices: number[] = [];
    Object.keys(coordsByRegionId).map(k => parseInt(k)).forEach(regionId => {
        const area = coordsByRegionId[regionId].length;
        const perimeter = perimetersByRegionId[regionId];
        fencePrices.push(area * perimeter);
    });

    const fencePriceSum = sum(...fencePrices);

    return fencePriceSum.toString();
};

export const part2Solution = (input: string): string => {
    const grid = parseGrid(input);
    const coordsByRegionId = getCoordsByRegionId(grid);

    const sidesByRegionId: Record<number, number> = {};
    grid.forEach(row => row.forEach(cell => sidesByRegionId[cell.regionId!] = 0));

    Object.keys(coordsByRegionId).map(k => parseInt(k)).forEach(regionId => {
        const regionCoords = coordsByRegionId[regionId];

        regionCoords.forEach(coords => {
            const currentCell = getGridAtPos(grid, coords.x, coords.y);

            const leftCell = getGridAtPos(grid, coords.x - 1, coords.y);
            const rightCell = getGridAtPos(grid, coords.x + 1, coords.y);
            const topCell = getGridAtPos(grid, coords.x, coords.y - 1);
            const bottomCell = getGridAtPos(grid, coords.x, coords.y + 1);

            const topLeftCell = getGridAtPos(grid, coords.x - 1, coords.y - 1);
            const topRightCell = getGridAtPos(grid, coords.x + 1, coords.y - 1);
            const bottomLeftCell = getGridAtPos(grid, coords.x - 1, coords.y + 1);
            const bottomRightCell = getGridAtPos(grid, coords.x + 1, coords.y + 1);

            const cornerChecks: boolean[] = [
                (leftCell?.regionId !== currentCell?.regionId && topCell?.regionId !== currentCell?.regionId),
                (rightCell?.regionId !== currentCell?.regionId && topCell?.regionId !== currentCell?.regionId),
                (leftCell?.regionId !== currentCell?.regionId && bottomCell?.regionId !== currentCell?.regionId),
                (rightCell?.regionId !== currentCell?.regionId && bottomCell?.regionId !== currentCell?.regionId),
                (leftCell?.regionId === currentCell?.regionId && topLeftCell?.regionId !== currentCell?.regionId && topCell?.regionId === currentCell?.regionId),
                (rightCell?.regionId === currentCell?.regionId && topRightCell?.regionId !== currentCell?.regionId && topCell?.regionId === currentCell?.regionId),
                (leftCell?.regionId === currentCell?.regionId && bottomLeftCell?.regionId !== currentCell?.regionId && bottomCell?.regionId === currentCell?.regionId),
                (rightCell?.regionId === currentCell?.regionId && bottomRightCell?.regionId !== currentCell?.regionId && bottomCell?.regionId === currentCell?.regionId)
            ];

            const cornerCount = cornerChecks.filter(Boolean).length;

            sidesByRegionId[regionId] += cornerCount;
        });
    });

    const fencePrices: number[] = [];
    Object.keys(coordsByRegionId).map(k => parseInt(k)).forEach(regionId => {
        const area = coordsByRegionId[regionId].length;
        const sides = sidesByRegionId[regionId];
        fencePrices.push(area * sides);
    });

    const fencePriceSum = sum(...fencePrices);

    return fencePriceSum.toString();
};
