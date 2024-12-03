enum Direction {
    Forward = 'forward',
    Down = 'down',
    Up = 'up'
}

type Command = {
    direction: Direction,
    units: number
}

const parseCommands = (input: string): Command[] => {
    return input.split('\n').map(l => {
        const splitLine = l.split(' ');
        return {
            direction: splitLine[0] as Direction,
            units: parseInt(splitLine[1])
        };
    });
};

export const part1Solution = (input: string): string => {
    const commands = parseCommands(input);

    let horizontalPosition = 0;
    let depth = 0;

    commands.forEach(c => {
        switch (c.direction) {
            case Direction.Forward: {
                horizontalPosition += c.units;
                break;
            }
            case Direction.Down: {
                depth += c.units;
                break;
            }
            case Direction.Up: {
                depth -= c.units;
                break;
            }
        }
    });

    const multipliedPositions = horizontalPosition * depth;

    return multipliedPositions.toString();
};

export const part2Solution = (input: string): string => {
    const commands = parseCommands(input);

    let horizontalPosition = 0;
    let depth = 0;
    let aim = 0;

    commands.forEach(c => {
        switch (c.direction) {
            case Direction.Forward: {
                horizontalPosition += c.units;
                depth += (aim * c.units);
                break;
            }
            case Direction.Down: {
                aim += c.units;
                break;
            }
            case Direction.Up: {
                aim -= c.units;
                break;
            }
        }
    });

    const multipliedPositions = horizontalPosition * depth;

    return multipliedPositions.toString();
};
