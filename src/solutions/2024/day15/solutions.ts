import { stringify2d } from '@util/array';
import { sum } from '@util/math';

enum Object {
    Box = 'O',
    Wall = '#',
    Nothing = '.',
    Robot = '@',
}

enum Direction {
    Up = '^',
    Down = 'v',
    Left = '<',
    Right = '>'
}

type Cell = Object;
type Grid = Cell[][];

type Coordinate = {
    x: number;
    y: number;
};

type Warehouse = {
    grid: Grid;
    directions: Direction[];
    robot: Coordinate;
};

const parseWarehouse = (input: string): Warehouse => {
    const splitInput = input.split('\n\n');

    let robot = { x: 0, y: 0 };

    const grid = splitInput[0]
        .split('\n')
        .map((l, y) => l
            .split('')
            .map((c, x) => {
                if (c === Object.Robot) {
                    robot = { x, y };
                }

                return c as Object;
            })
        );
    
    grid[robot.y][robot.x] = Object.Nothing;
    
    const directions = splitInput[1]
        .replace(/\\n/g, '')
        .split('')
        .map(d => d as Direction);
    
    return { grid, directions, robot };
};

const getPositionChange = (direction: Direction) => {
    let xChange = ({
        [Direction.Up]: 0,
        [Direction.Down]: 0,
        [Direction.Left]: -1,
        [Direction.Right]: 1
    })[direction];

    let yChange = ({
        [Direction.Up]: -1,
        [Direction.Down]: 1,
        [Direction.Left]: 0,
        [Direction.Right]: 0
    })[direction];

    return { xChange, yChange };
};

const getNextPosition = (coord: Coordinate, direction: Direction) => {
    const { xChange, yChange } = getPositionChange(direction);

    return {
        x: coord.x + xChange,
        y: coord.y + yChange
    };
};

const getGridAtPos = (grid: Grid, coord: Coordinate): Cell | undefined => {
    return grid?.[coord.y]?.[coord.x];
};

export const part1Solution = (input: string): string => {
    let { grid, directions, robot } = parseWarehouse(input);
    
    directions.forEach(d => {
        const nextPosition = getNextPosition(robot, d);
        const nextObject = getGridAtPos(grid, nextPosition);

        if (nextObject === Object.Nothing) {
            robot = nextPosition;
        } else if (nextObject === Object.Box) {
            const { xChange, yChange } = getPositionChange(d);

            let endOfBoxes;
            let x = nextPosition.x;
            let y = nextPosition.y;
            do {
                const object = getGridAtPos(grid, { x, y });
                
                if (object !== Object.Box) {
                    endOfBoxes = { x, y };
                }

                x += xChange;
                y += yChange;
            } while (!endOfBoxes);

            if (getGridAtPos(grid, endOfBoxes) === Object.Nothing) {
                grid[endOfBoxes.y][endOfBoxes.x] = Object.Box;
                grid[nextPosition.y][nextPosition.x] = Object.Nothing;
                robot = nextPosition;
            }
        }
    });

    const boxCoords: Coordinate[] = [];
    grid.forEach((row, y) => row.forEach((cell, x) => cell === Object.Box && boxCoords.push({ x, y })));

    const gpsCoords = boxCoords.map(c => (c.y * 100) + c.x);
    const gpsCoordSum = sum(...gpsCoords);

    return gpsCoordSum.toString();
};

export const part2Solution = (input: string): string => {
    return 'Part 2 solution';
};
