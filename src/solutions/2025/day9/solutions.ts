type Coordinate = {
    x: number;
    y: number;
};

const parseTileCoordinates = (input: string): Coordinate[] => {
    return input.split('\n').map(line => {
        const [x, y] = line.split(',').map(Number);
        return { x, y };
    });
};

const getPerimeterCoordinates = (tileCoordinates: Coordinate[]): Coordinate[] => {
    const perimeterCoordinates = [];

    for (let i = 0; i < tileCoordinates.length; i++) {
        const tile = tileCoordinates[i];
        const nextTile = tileCoordinates[i === tileCoordinates.length - 1 ? 0 : i + 1];

        perimeterCoordinates.push(tile);

        const yAscending = tile.y <= nextTile.y;
        const yStep = yAscending ? 1 : -1;

        for (let y = tile.y + yStep; yAscending ? y < nextTile.y : y > nextTile.y; y += yStep) {
            perimeterCoordinates.push({ x: tile.x, y });
        }

        const xAscending = tile.x <= nextTile.x;
        const xStep = xAscending ? 1 : -1;

        for (let x = tile.x + xStep; xAscending ? x < nextTile.x : x > nextTile.x; x += xStep) {
            perimeterCoordinates.push({ x, y: tile.y });
        }
    }

    return perimeterCoordinates;
};

const getTilePairs = (tileCoordinates: Coordinate[]): Coordinate[][] => {
    const tilePairs = [];

    for (let i = 0; i < tileCoordinates.length; i++) {
        for (let j = i + 1; j < tileCoordinates.length; j++) {
            tilePairs.push([tileCoordinates[i], tileCoordinates[j]]);
        }
    }

    return tilePairs;
};

const getArea = (tilePair: Coordinate[]): number => {
    const xDifference = Math.abs(tilePair[0].x - tilePair[1].x) + 1;
    const yDifference = Math.abs(tilePair[0].y - tilePair[1].y) + 1;
    return xDifference * yDifference;
};

export const part1Solution = (input: string): string => {
    const tileCoordinates = parseTileCoordinates(input);
    const tilePairs = getTilePairs(tileCoordinates);

    const areas = tilePairs.map(tilePair => getArea(tilePair));
    const largestArea = Math.max(...areas);

    return largestArea.toString();
};

export const part2Solution = (input: string): string => {
    const tileCoordinates = parseTileCoordinates(input);
    const perimeterCoordinates = getPerimeterCoordinates(tileCoordinates);
    const tilePairs = getTilePairs(tileCoordinates);

    const areas = [];

    for (let i = 0; i < tilePairs.length; i++) {
        const tilePair = tilePairs[i];

        const xRange = [Math.min(...tilePair.map(t => t.x)), Math.max(...tilePair.map(t => t.x))];
        const yRange = [Math.min(...tilePair.map(t => t.y)), Math.max(...tilePair.map(t => t.y))];

        const invalid = perimeterCoordinates.some(coordinate => (coordinate.x > xRange[0] && coordinate.x < xRange[1]) && (coordinate.y > yRange[0] && coordinate.y < yRange[1]));

        if (!invalid) {
            areas.push(getArea(tilePair));
        };
    }

    const largestArea = Math.max(...areas);

    return largestArea.toString();
};
