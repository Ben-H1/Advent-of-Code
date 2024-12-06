import { indexOf2d } from '@util/array';

enum Direction {
    Up = 'U',
    Down = 'D',
    Left = 'L',
    Right = 'R'
}

type Coordinate = {
    x: number;
    y: number;
}

type Cell = {
    char: string;
    isObstacle: boolean;
    visited: boolean;
    visitDirections: Direction[]
}

type Grid = Cell[][];

type Guard = {
    position: Coordinate;
    direction: Direction;
}

const parseGrid = (input: string): Grid => {
    return input.split('\n')
        .map(l =>
            l.split('')
            .map(c => ({
                char: c,
                isObstacle: c === '#',
                visited: false,
                visitDirections: []
            }))
        );
};

const getInitGuard = (grid: Grid): Guard => {
    return {
        position: indexOf2d(grid, '^', 'char')!,
        direction: Direction.Up
    };
};

const getNextPosition = (guard: Guard) => {
    let xChange = 0;
    let yChange = 0;

    switch (guard.direction) {
        case Direction.Up: {
            yChange = -1;
            break;
        }
        case Direction.Down: {
            yChange = 1;
            break;
        }
        case Direction.Left: {
            xChange = -1;
            break;
        }
        case Direction.Right: {
            xChange = 1;
            break;
        }
    }

    return {
        x: guard.position.x + xChange,
        y: guard.position.y + yChange
    };
};

const getGridAtPos = (grid: Grid, coordinates: Coordinate) => {
    let value;

    try {
        value = grid[coordinates.y][coordinates.x];
    } catch {
        value = null;
    }

    return value;
};

const getNextDirection = (direction: Direction) => {
    return ({
        [Direction.Up]: Direction.Right,
        [Direction.Down]: Direction.Left,
        [Direction.Left]: Direction.Up,
        [Direction.Right]: Direction.Down
    })[direction];
};

const runSimulation = (grid: Grid, guard: Guard) => {
    let nextPosition = guard.position;
    
    do {
        const currentCell = grid[guard.position.y][guard.position.x];
        currentCell.visited = true;
        currentCell.visitDirections.push(guard.direction);

        nextPosition = getNextPosition(guard);

        if (getGridAtPos(grid, nextPosition)) {
            const nextCell = grid[nextPosition.y][nextPosition.x];

            if (nextCell.isObstacle) {
                guard.direction = getNextDirection(guard.direction);
            } else {
                guard.position = nextPosition;
            }
        }
    } while (getGridAtPos(grid, nextPosition) != null);

    return grid;
};

export const part1Solution = (input: string): string => {
    const grid = parseGrid(input);
    const guard = getInitGuard(grid);

    runSimulation(grid, guard);

    let positionCount = 0;
    grid.forEach(row => row.forEach(cell => cell.visited && positionCount++));

    return positionCount.toString();
};

export const part2Solution = (input: string): string => {
    const grid = parseGrid(input);
    const guard = getInitGuard(grid);

    const simulatedGrid: Grid = JSON.parse(JSON.stringify(grid));
    const simulatedGuard: Guard = JSON.parse(JSON.stringify(guard));
    runSimulation(simulatedGrid, simulatedGuard);

    const gridCopy: Grid = JSON.parse(JSON.stringify(grid));
    const coords: Coordinate[] = [];

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            const currentGridCell = gridCopy[y][x];
            const simulatedAdjacentGridCells = [
                getGridAtPos(simulatedGrid, { x: x, y: y - 1 }),
                getGridAtPos(simulatedGrid, { x: x, y: y + 1 }),
                getGridAtPos(simulatedGrid, { x: x - 1, y: y }),
                getGridAtPos(simulatedGrid, { x: x + 1, y: y })
            ].filter(c => c != null);

            if (currentGridCell.isObstacle) {
                continue;
            } else if (simulatedAdjacentGridCells.every(c => !c.visited)) {
                continue;
            }

            coords.push({ x, y });
        }
    }

    let positionCount = 0;

    coords.forEach(({ x, y }) => {
        const newGridCopy: Grid = JSON.parse(JSON.stringify(grid));
        const guardCopy: Guard = JSON.parse(JSON.stringify(guard));

        const currentGridCell = newGridCopy[y][x];

        currentGridCell.char = '#';
        currentGridCell.isObstacle = true;

        let nextPosition = guardCopy.position;
        let isLoop;

        do {
            const currentCell = newGridCopy[guardCopy.position.y][guardCopy.position.x];
            currentCell.visited = true;
            currentCell.visitDirections.push(guardCopy.direction);

            nextPosition = getNextPosition(guardCopy);

            if (getGridAtPos(newGridCopy, nextPosition)) {
                const nextCell = newGridCopy[nextPosition.y][nextPosition.x];

                if (nextCell.isObstacle) {
                    guardCopy.direction = getNextDirection(guardCopy.direction);
                } else if (nextCell.visitDirections.includes(guardCopy.direction)) {
                    isLoop = true;
                } else {
                    guardCopy.position = nextPosition;
                }
            } else {
                isLoop = false;
            }
        } while (isLoop == null);

        if (isLoop) {
            positionCount++;
        }
    });

    return positionCount.toString();
};
