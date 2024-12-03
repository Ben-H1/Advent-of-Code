import { product, sum } from '@util/math';

const parseHeightmap = (input: string) => {
    return input.split('\n').map(l => l.split('').map(n => parseInt(n)));
};

const getHeightmapAtPos = (heightmap: any[][], x: number, y: number) => {
    let value;

    try {
        value = heightmap[y][x];
    } catch {
        value = undefined;
    }

    return value;
};

const getAdjacentHeights = (heightmap: number[][], x: number, y: number): number[] => {
    const adjacentHeights = [];

    adjacentHeights.push(getHeightmapAtPos(heightmap, x - 1, y));
    adjacentHeights.push(getHeightmapAtPos(heightmap, x + 1, y));
    adjacentHeights.push(getHeightmapAtPos(heightmap, x, y - 1));
    adjacentHeights.push(getHeightmapAtPos(heightmap, x, y + 1));

    return adjacentHeights.filter(h => h != null);
};

export const part1Solution = (input: string): string => {
    const heightmap = parseHeightmap(input);

    const lowPoints = [];

    for (let y = 0; y < heightmap.length; y++) {
        for (let x = 0; x < heightmap[y].length; x++) {
            const currentHeight = heightmap[y][x];
            const adjacentHeights = getAdjacentHeights(heightmap, x, y);

            if (adjacentHeights.every(h => currentHeight < h)) {
                lowPoints.push(currentHeight);
            }
        }
    }

    const riskLevels = lowPoints.map(h => h + 1);
    const riskSum = sum(...riskLevels);

    return riskSum.toString();
};

const fillBasin = (heightmap: Record<string, any>[][], x: number, y: number, basinNumber: number) => {
    const currentHeight = getHeightmapAtPos(heightmap, x, y);

    if (currentHeight == null || currentHeight.height === 9 || currentHeight.basin != null) {
        return;
    }

    currentHeight.basin = basinNumber;

    fillBasin(heightmap, x - 1, y, basinNumber);
    fillBasin(heightmap, x + 1, y, basinNumber);
    fillBasin(heightmap, x, y - 1, basinNumber);
    fillBasin(heightmap, x, y + 1, basinNumber);
};

export const part2Solution = (input: string): string => {
    const heightmap = parseHeightmap(input);
    const newHeightmap = heightmap.map(y => y.map(x => ({ height: x, basin: null })));

    let basinNumber = -1;

    for (let y = 0; y < newHeightmap.length; y++) {
        for (let x = 0; x < newHeightmap[y].length; x++) {
            const currentHeight = newHeightmap[y][x];

            if (currentHeight.height !== 9 && currentHeight.basin == null) {
                fillBasin(newHeightmap, x, y, basinNumber + 1);
                basinNumber++;
            }
        }
    }

    const basinSizes = new Array(basinNumber + 1).fill(0);

    for (let y = 0; y < newHeightmap.length; y++) {
        for (let x = 0; x < newHeightmap[y].length; x++) {
            const currentHeight = newHeightmap[y][x];
            
            if (currentHeight.basin != null) {
                basinSizes[currentHeight.basin] += 1;
            }
        }
    }

    basinSizes.sort((a, b) => b - a);

    const topBasinSizes = basinSizes.slice(0, 3);
    const topBasinProduct = product(...topBasinSizes);

    return topBasinProduct.toString();
};
