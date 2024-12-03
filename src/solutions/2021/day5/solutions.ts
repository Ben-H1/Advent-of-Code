import { stringify2d } from '@util/array';

type Line = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
};

const parseLines = (input: string): Line[] => {
    return input.split('\n').map(l => {
        const splitLine = l.split(' ');

        const [x1, y1] = splitLine[0].split(',').map(s => parseInt(s));
        const [x2, y2] = splitLine.slice(-1)[0].split(',').map(s => parseInt(s));

        return { x1, y1, x2, y2 };
    });
};

const generateGrid = (lines: Line[]): number[][] => {
    const allX = lines.map(l => [l.x1, l.x2]).flat();
    const allY = lines.map(l => [l.y1, l.y2]).flat();

    const gridWidth = Math.max(...allX) + 1;
    const gridHeight = Math.max(...allY) + 1;
    
    return Array.from({ length: gridHeight }, () => new Array(gridWidth).fill(0));
};

const plotLine = (grid: number[][], line: Line) => {
    const xChange = (line.x1 === line.x2) ? 0 : (line.x2 > line.x1 ? 1 : -1);
    const yChange = (line.y1 === line.y2) ? 0 : (line.y2 > line.y1 ? 1 : -1);

    let x = line.x1;
    let y = line.y1;

    do {
        grid[y][x] += 1;

        x += xChange;
        y += yChange;
    } while ((x !== line.x2 + xChange) || (y !== line.y2 + yChange));
};

export const part1Solution = (input: string): string => {
    const lines = parseLines(input);
    const grid = generateGrid(lines);

    const horizontalVerticalLines = lines.filter(l => l.x1 === l.x2 || l.y1 === l.y2);

    horizontalVerticalLines.forEach(l => plotLine(grid, l));

    const overlaps = grid.flat().filter(v => v >= 2);
    const overlapCount = overlaps.length;

    return overlapCount.toString();
};

export const part2Solution = (input: string): string => {
    const lines = parseLines(input);
    const grid = generateGrid(lines);

    lines.forEach(l => plotLine(grid, l));

    const overlaps = grid.flat().filter(v => v >= 2);
    const overlapCount = overlaps.length;

    return overlapCount.toString();
};
