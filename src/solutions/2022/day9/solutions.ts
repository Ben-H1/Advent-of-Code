import { copyObject } from '@util/object';

enum Direction {
    Up = 'U',
    Down = 'D',
    Left = 'L',
    Right = 'R'
};

type Instruction = {
    direction: Direction;
    distance: number;
};

type Coordinate = {
    x: number;
    y: number;
};

const parseInstructions = (input: string): Instruction[] => {
    return input.split('\n').map(line => {
        const [directionString, distanceString] = line.split(' ');

        return {
            direction: directionString as Direction,
            distance: parseInt(distanceString)
        };
    });
};

const getDistance = (position1: Coordinate, position2: Coordinate) => {
    const xDiff = Math.abs(position2.x - position1.x);
    const yDiff = Math.abs(position2.y - position1.y);

    const distance = Math.hypot(position2.x - position1.x, position2.y - position1.y);

    console.log(`(${position1.x},${position1.y}) -> (${position2.x},${position2.y}): ${distance}`);

    return distance;
};

const checkAdjacentOrOverlapping = (position1: Coordinate, position2: Coordinate): boolean => {
    return (
        (position2.x === position1.x - 1 && position2.y === position1.y - 1) ||
        (position2.x === position1.x && position2.y === position1.y - 1) ||
        (position2.x === position1.x + 1 && position2.y === position1.y - 1) ||
        (position2.x === position1.x - 1 && position2.y === position1.y) ||
        (position2.x === position1.x && position2.y === position1.y) ||
        (position2.x === position1.x + 1 && position2.y === position1.y) ||
        (position2.x === position1.x - 1 && position2.y === position1.y + 1) ||
        (position2.x === position1.x && position2.y === position1.y + 1) ||
        (position2.x === position1.x + 1 && position2.y === position1.y + 1)
    );
};

const checkOverlapping = (position1: Coordinate, position2: Coordinate): boolean => {
    return (position2.x === position1.x && position2.y === position1.y);
};

const checkAdjacent = (position1: Coordinate, position2: Coordinate): boolean => {
    return (
        (position2.x === position1.x - 1 && position2.y === position1.y - 1) ||
        (position2.x === position1.x && position2.y === position1.y - 1) ||
        (position2.x === position1.x + 1 && position2.y === position1.y - 1) ||
        (position2.x === position1.x - 1 && position2.y === position1.y) ||
        (position2.x === position1.x + 1 && position2.y === position1.y) ||
        (position2.x === position1.x - 1 && position2.y === position1.y + 1) ||
        (position2.x === position1.x && position2.y === position1.y + 1) ||
        (position2.x === position1.x + 1 && position2.y === position1.y + 1)
    );
};

export const part1Solution = (input: string): string => {
    const instructions = parseInstructions(input);

    const tailVisitedLocations: Coordinate[] = [{ x: 0, y: 0 }];

    const headPosition: Coordinate = { x: 0, y: 0 };
    const tailPosition: Coordinate = { x: 0, y: 0 };

    instructions.forEach(instruction => {
        for (let i = 0; i < instruction.distance; i++) {
            switch (instruction.direction) {
                case Direction.Up: {
                    headPosition.y++;
                    if (!checkAdjacentOrOverlapping(headPosition, tailPosition)) {
                        tailPosition.x = headPosition.x;
                        tailPosition.y = headPosition.y - 1;
                    }
                    break;
                }
                case Direction.Down: {
                    headPosition.y--;
                    if (!checkAdjacentOrOverlapping(headPosition, tailPosition)) {
                        tailPosition.x = headPosition.x;
                        tailPosition.y = headPosition.y + 1;
                    }
                    break;
                }
                case Direction.Left: {
                    headPosition.x--;
                    if (!checkAdjacentOrOverlapping(headPosition, tailPosition)) {
                        tailPosition.y = headPosition.y;
                        tailPosition.x = headPosition.x + 1;
                    }
                    break;
                }
                case Direction.Right: {
                    headPosition.x++;
                    if (!checkAdjacentOrOverlapping(headPosition, tailPosition)) {
                        tailPosition.y = headPosition.y;
                        tailPosition.x = headPosition.x - 1;
                    }
                    break;
                }
            }

            tailVisitedLocations.push(copyObject(tailPosition));
        }
    });

    const tailVisitedLocationStrings = tailVisitedLocations.map(l => JSON.stringify(l));
    const uniqueTailVisitedLocations = new Set(tailVisitedLocationStrings);
    const uniqueTailVisitedLocationCount = uniqueTailVisitedLocations.size;

    return uniqueTailVisitedLocationCount.toString();
};

export const part2Solution = (input: string): string => {
    const instructions = parseInstructions(input);

    const tailVisitedLocations: Coordinate[] = [{ x: 0, y: 0 }];
    const ropePositions: Coordinate[] = Array.from({ length: 10 }, () => ({ x: 0, y: 0 }));

    instructions.forEach(instruction => {
        console.log(`========== Instruction: ${instruction.direction} ${instruction.distance} ==========`);

        for (let i = 0; i < instruction.distance; i++) {
            console.log(`---------- Iteration ${i + 1} of ${instruction.distance} ----------`);

            const headPosition = ropePositions[0];
            const headPositionCopy = copyObject(headPosition);

            switch (instruction.direction) {
                case Direction.Up: headPosition.y++; break;
                case Direction.Down: headPosition.y--; break;
                case Direction.Left: headPosition.x--; break;
                case Direction.Right: headPosition.x++; break;
            }

            console.log(`Moved head: (${headPositionCopy.x}, ${headPositionCopy.y}) -> (${headPosition.x}, ${headPosition.y})`);

            const firstNonAdjacentPositionIndex = ropePositions.findIndex((p, j) => j !== 0 && !checkAdjacentOrOverlapping(ropePositions[j - 1], p));
            console.log(`firstNonAdjacentPositionIndex: ${firstNonAdjacentPositionIndex}`);
            
            const firstOverlappingPositionIndex = ropePositions.findIndex((p, j) => j !== 0 && checkOverlapping(ropePositions[j - 1], p));
            console.log(`firstOverlappingPositionIndex: ${firstOverlappingPositionIndex}`);

            if (firstNonAdjacentPositionIndex !== -1) {
                const nextPosition = ropePositions[firstNonAdjacentPositionIndex];
                const originalNextPosition = copyObject(nextPosition);

                switch (instruction.direction) {
                    case Direction.Up: {
                        nextPosition.x = headPosition.x;
                        nextPosition.y = headPosition.y - 1;
                        break;
                    };
                    case Direction.Down: {
                        nextPosition.x = headPosition.x;
                        nextPosition.y = headPosition.y + 1;
                        break;
                    }
                    case Direction.Left: {
                        nextPosition.y = headPosition.y;
                        nextPosition.x = headPosition.x + 1;
                        break;
                    }
                    case Direction.Right: {
                        nextPosition.y = headPosition.y;
                        nextPosition.x = headPosition.x - 1;
                        break;
                    }
                }

                const xDiff = nextPosition.x - originalNextPosition.x;
                const yDiff = nextPosition.y - originalNextPosition.y;

                console.log(`Moved knot ${firstNonAdjacentPositionIndex}: (${originalNextPosition.x}, ${originalNextPosition.y}) -> (${nextPosition.x}, ${nextPosition.y})`);

                for (let j = firstNonAdjacentPositionIndex + 1; j < firstOverlappingPositionIndex; j++) {
                    const position = ropePositions[j];
                    const positionCopy = copyObject(position);

                    position.x += xDiff;
                    position.y += yDiff;

                    console.log(`Moved knot ${j}: (${positionCopy.x}, ${positionCopy.y}) -> (${position.x}, ${position.y})`);
                }
            }

            // for (let j = 1; j < ropePositions.length; j++) {
            //     const previousPosition = ropePositions[j - 1];
            //     const position = ropePositions[j];
            //     const positionCopy = copyObject(position);

            //     if (checkOverlapping(previousPosition, position)) {
            //         console.log(`Knot ${j} (${position.x}, ${position.y}) overlapping with knot ${j - 1} (${previousPosition.x}, ${previousPosition.y})`);
            //         break;
            //     }

            //     if (!checkAdjacent(previousPosition, position)) {

            //     }

            //     console.log(`Moved knot ${j}: (${positionCopy.x}, ${positionCopy.y}) -> (${position.x}, ${position.y})`);
            // }

            tailVisitedLocations.push(copyObject(ropePositions[ropePositions.length - 1]));
        }

        console.log('=========================');
        console.log(`Rope: ${ropePositions.map(r => `(${r.x}, ${r.y})`).join(', ')}`);
    });

    const tailVisitedLocationStrings = tailVisitedLocations.map(l => JSON.stringify(l));
    const uniqueTailVisitedLocations = new Set(tailVisitedLocationStrings);
    const uniqueTailVisitedLocationCount = uniqueTailVisitedLocations.size;

    return uniqueTailVisitedLocationCount.toString();
};

export const part2SolutionOld = (input: string): string => {
    const instructions = parseInstructions(input);

    const tailVisitedLocations: Coordinate[] = [{ x: 0, y: 0 }];
    const ropePositions: Coordinate[] = Array.from({ length: 10 }, () => ({ x: 0, y: 0 }));

    instructions.forEach(instruction => {
        console.log('=========================');
        console.log(`Instruction: ${instruction.direction} ${instruction.distance}`);
        for (let i = 0; i < instruction.distance; i++) {
            console.log('=-=-=-=-=-=-=-=-=-=-');
            console.log(`Instruction iteration: ${i + 1}`);
            let previousRelativeDirection;
            ropePositions.forEach((position, j) => {
                console.log('----------');
                console.log(`Position ${j}: (${position.x}, ${position.y})`);

                if (j === 0) {
                    switch (instruction.direction) {
                        case Direction.Up: position.y++; break;
                        case Direction.Down: position.y--; break;
                        case Direction.Left: position.x--; break;
                        case Direction.Right: position.x++; break;
                    }
                } else {
                    const previousPosition = ropePositions[j - 1];
                    console.log(`Checking previous position: (${previousPosition.x}, ${previousPosition.y})`);

                    if (checkOverlapping(previousPosition, position)) {
                        console.log(`Overlapping, ignore`);
                        return;
                    }

                    switch (instruction.direction) {
                        case Direction.Up: {
                            if (!checkAdjacent(previousPosition, position)) {
                                position.x = previousPosition.x;
                                position.y = previousPosition.y - 1;
                            }
                            break;
                        }
                        case Direction.Down: {
                            if (!checkAdjacent(previousPosition, position)) {
                                position.x = previousPosition.x;
                                position.y = previousPosition.y + 1;
                            }
                            break;
                        }
                        case Direction.Left: {
                            if (!checkAdjacent(previousPosition, position)) {
                                position.y = previousPosition.y;
                                position.x = previousPosition.x + 1;
                            }
                            break;
                        }
                        case Direction.Right: {
                            if (!checkAdjacent(previousPosition, position)) {
                                position.y = previousPosition.y;
                                position.x = previousPosition.x - 1;
                            }
                            break;
                        }
                    }
                }

                console.log(`Moved to: (${position.x}, ${position.y})`);
            });

            tailVisitedLocations.push(copyObject(ropePositions[ropePositions.length - 1]));
        }
        console.log(`Rope: ${ropePositions.map(r => `(${r.x}, ${r.y})`).join(', ')}`);
    });

    const tailVisitedLocationStrings = tailVisitedLocations.map(l => JSON.stringify(l));
    const uniqueTailVisitedLocations = new Set(tailVisitedLocationStrings);
    const uniqueTailVisitedLocationCount = uniqueTailVisitedLocations.size;

    return uniqueTailVisitedLocationCount.toString();
};
