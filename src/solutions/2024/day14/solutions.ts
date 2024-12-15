import { product } from '@util/math';

type Coordinate = {
    x: number;
    y: number;
};

type Robot = {
    position: Coordinate;
    velocity: Coordinate;
};

const parseRobots = (input: string): Robot[] => {
    return input
        .split('\n')
        .map(l => {
            const [position, velocity] = l
                .split(' ')
                .map(s => s
                    .replace(/p|v|=/g, '')
                    .split(',')
                    .map(n => parseInt(n))
                );

            return {
                position: { x: position[0], y: position[1] },
                velocity: { x: velocity[0], y: velocity[1] }
            };
        });
};

const moveRobots = (robots: Robot[], gridWidth: number, gridHeight: number) => {
    robots.forEach(r => {
        let nextX = r.position.x += r.velocity.x;
        let nextY = r.position.y += r.velocity.y;

        if (nextX < 0) {
            nextX = gridWidth + nextX;
        } else if (nextX >= gridWidth) {
            nextX = nextX - gridWidth
        };

        if (nextY < 0) {
            nextY = gridHeight + nextY;
        } else if (nextY >= gridHeight) {
            nextY = nextY - gridHeight
        };

        r.position = { x: nextX, y: nextY };
    });
};

export const part1Solution = (input: string): string => {
    const robots = parseRobots(input);

    const gridWidth = 101;
    const gridHeight = 103;

    for (let i = 0; i < 100; i++) {
        moveRobots(robots, gridWidth, gridHeight);
    }

    const quadrants = [0, 0, 0, 0];

    for (let y = 0; y < Math.floor(gridHeight / 2); y++) {
        for (let x = 0; x < Math.floor(gridWidth / 2); x++) {
            robots.forEach(r => r.position.x === x && r.position.y === y && quadrants[0]++);
        }

        for (let x = Math.floor(gridWidth / 2) + 1; x < gridWidth; x++) {
            robots.forEach(r => r.position.x === x && r.position.y === y && quadrants[1]++);
        }
    }

    for (let y = Math.floor(gridHeight / 2) + 1; y < gridHeight; y++) {
        for (let x = 0; x < Math.floor(gridWidth / 2); x++) {
            robots.forEach(r => r.position.x === x && r.position.y === y && quadrants[2]++);
        }

        for (let x = Math.floor(gridWidth / 2) + 1; x < gridWidth; x++) {
            robots.forEach(r => r.position.x === x && r.position.y === y && quadrants[3]++);
        }
    }

    const quadrantProduct = product(...quadrants);

    return quadrantProduct.toString();
};

export const part2Solution = (input: string): string => {
    const robots = parseRobots(input);

    const gridWidth = 101;
    const gridHeight = 103;

    let found = false;
    let i = 0;
    do {
        //check, set found
        found = true;

        if (!found) {
            moveRobots(robots, gridWidth, gridHeight);
            i++;
        }
    } while (!found);

    return i.toString();
};
