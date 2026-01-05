enum Direction {
    Left = 'L',
    Right = 'R'
};

type Command = {
    direction: Direction;
    amount: number;
};

const parseCommands = (input: string): Command[] => {
    const lines = input.split('\n');

    const commands = lines.map(line => ({
        direction: line[0] as Direction,
        amount: parseInt(line.slice(1))
    }));

    return commands;
};

export const part1Solution = (input: string): string => {
    const commands = parseCommands(input);

    let dial = 50;
    let zeroCount = 0;

    commands.forEach(command => {
        if (command.direction === Direction.Left) {
            dial -= command.amount;
        } else {
            dial += command.amount;
        }

        dial = dial % 100;

        if (dial === 0) zeroCount++;
    });

    return zeroCount.toString();
};

export const part2Solution = (input: string): string => {
    const commands = parseCommands(input);

    let dial = 50;
    let zeroCount = 0;

    commands.forEach(command => {
        if (command.direction === Direction.Left) {
            for (let i = 0; i < command.amount; i++) {
                dial--;
                if (dial < 0) dial = 99;
                if (dial === 0) zeroCount++;
            }
        } else {
            for (let i = 0; i < command.amount; i++) {
                dial++;
                if (dial > 99) dial = 0;
                if (dial === 0) zeroCount++;
            }
        }
    });

    return zeroCount.toString();
};
