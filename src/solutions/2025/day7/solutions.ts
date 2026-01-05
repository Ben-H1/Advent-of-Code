import { indexOfMulti2d } from '@util/array';
import { sum } from '@util/math';

enum Cell {
    Empty = '.',
    Splitter = '^',
    Beam = '|',
    BeamEnd = 'S'
};

type Part1Grid = Cell[][];

type Part2Grid = {
    cell: Cell;
    visited: number;
}[][];

const part1ParseGrid = (input: string): Part1Grid => {
    return input.split('\n').map(line => Array.from(line).map(cell => cell as Cell));
};

const part2ParseGrid = (input: string): Part2Grid => {
    return input.split('\n').map(line => Array.from(line).map(cell => ({ cell: cell as Cell, visited: 0 })));
};

export const part1Solution = (input: string): string => {
    const grid = part1ParseGrid(input);

    let beamEndIndices = indexOfMulti2d(grid, Cell.BeamEnd);
    let splitCount = 0;

    do {
        beamEndIndices.forEach(({ x, y }) => {
            let cellBelow = grid?.[y+1]?.[x];

            switch (cellBelow) {
                case Cell.Empty: {
                    grid[y][x] = Cell.Beam;
                    grid[y+1][x] = Cell.BeamEnd;
                    break;
                }
                case Cell.Splitter: {
                    grid[y][x] = Cell.Beam;
                    grid[y+1][x-1] = Cell.BeamEnd;
                    grid[y+1][x+1] = Cell.BeamEnd;
                    splitCount++;
                    break;
                }
                case Cell.BeamEnd:
                case Cell.Beam:
                case undefined: {
                    grid[y][x] = Cell.Beam;
                    break;
                }
            }
        });

        beamEndIndices = indexOfMulti2d(grid, Cell.BeamEnd);
    } while (beamEndIndices.length > 0);

    return splitCount.toString();
};

export const part2Solution = (input: string): string => {
    const grid = part2ParseGrid(input);

    let beamEndIndices = indexOfMulti2d(grid, Cell.BeamEnd, 'cell');
    grid[beamEndIndices[0].y][beamEndIndices[0].x].visited = 1;

    do {
        beamEndIndices.forEach(({ x, y }) => {
            let cell = grid[y][x];
            let cellBelow = grid?.[y+1]?.[x];

            switch (cellBelow?.cell) {
                case Cell.Empty: {
                    grid[y][x].cell = Cell.Beam;
                    grid[y+1][x].cell = Cell.BeamEnd;
                    grid[y+1][x].visited += cell.visited;
                    break;
                }
                case Cell.Splitter: {
                    grid[y][x].cell = Cell.Beam;

                    grid[y+1][x-1].cell = Cell.BeamEnd;
                    grid[y+1][x-1].visited += cell.visited;

                    grid[y+1][x+1].cell = Cell.BeamEnd;
                    grid[y+1][x+1].visited += cell.visited;
                    break;
                }
                case Cell.BeamEnd: {
                    grid[y][x].cell = Cell.Beam;
                    grid[y+1][x].visited += cell.visited;
                    break;
                }
                case Cell.Beam:
                case undefined: {
                    grid[y][x].cell = Cell.Beam;
                    break;
                }
            }
        });

        beamEndIndices = indexOfMulti2d(grid, Cell.BeamEnd, 'cell');
    } while (beamEndIndices.length > 0);

    const lastVisitedCounts = grid[grid.length - 1].map(cell => cell.visited);
    const lastVisitedSum = sum(...lastVisitedCounts);
    const timelineCount = lastVisitedSum;

    return timelineCount.toString();
};

export const part2SolutionOld = (input: string): string => {
    const grids = [part1ParseGrid(input)];

    for (let i = 0; i < grids.length; i++) {
        const grid = grids[i];
        let beamEndIndices = indexOfMulti2d(grid, Cell.BeamEnd);

        do {
            beamEndIndices.forEach(({ x, y }) => {
                let cellBelow = grid?.[y+1]?.[x];

                switch (cellBelow) {
                    case Cell.Empty: {
                        grid[y][x] = Cell.Beam;
                        grid[y+1][x] = Cell.BeamEnd;
                        break;
                    }
                    case Cell.Splitter: {
                        grid[y][x] = Cell.Beam;

                        const gridCopy = JSON.parse(JSON.stringify(grid));

                        grid[y+1][x-1] = Cell.BeamEnd;
                        gridCopy[y+1][x+1] = Cell.BeamEnd;

                        grids.push(gridCopy);
                        break;
                    }
                    case Cell.BeamEnd:
                    case Cell.Beam:
                    case undefined: {
                        grid[y][x] = Cell.Beam;
                        break;
                    }
                }
            });

            beamEndIndices = indexOfMulti2d(grid, Cell.BeamEnd);
        } while (beamEndIndices.length > 0);
    }

    return grids.length.toString();
};
