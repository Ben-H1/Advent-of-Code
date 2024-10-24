const getStacks = (initStacks: string) => {
    const stackLines = initStacks.split('\n');
    stackLines.pop();

    const chunks = stackLines.map((l: string) => l.match(/.{1,4}/g)!.map((c: string) => c.trimEnd().replace(/\[|\]/g, ''))).reverse();
    const stacks = new Array(chunks[0].length).fill(null).map(() => new Array());

    chunks.forEach((chunk) => {
        for (let i = 0; i < chunk.length; i++) {
            const supply = chunk[i];

            if (supply !== '') {
                stacks[i].push(chunk[i]);
            }
        }
    });

    return stacks;
};

const getTops = (stacks: string[][]) => {
    return stacks.map((stack) => stack[stack.length - 1]).join('');
};

export const part1Solution = (input: string): string => {
    const splitInput = input.split('\n\n');

    const initStacks = splitInput[0];
    const instructions = splitInput[1].split('\n');

    let stacks: string[][] = getStacks(initStacks);

    instructions.forEach((instruction) => {
        const splitInstruction = instruction.split(' ');
        const quantity = parseInt(splitInstruction[1]);
        const sourceStack = parseInt(splitInstruction[3]) - 1;
        const destinationStack = parseInt(splitInstruction[5]) - 1;

        for (let i = 0; i < quantity; i++) {
            const supply = stacks[sourceStack].pop()!;
            stacks[destinationStack].push(supply);
        }
    });

    const tops = getTops(stacks);

    return tops;
};

export const part2Solution = (input: string): string => {
    const splitInput = input.split('\n\n');

    const initStacks = splitInput[0];
    const instructions = splitInput[1].split('\n');

    let stacks: string[][] = getStacks(initStacks);

    instructions.forEach((instruction) => {
        const splitInstruction = instruction.split(' ');
        const quantity = parseInt(splitInstruction[1]);
        const sourceStack = parseInt(splitInstruction[3]) - 1;
        const destinationStack = parseInt(splitInstruction[5]) - 1;
    
        const supplies = [];
        for (let i = 0; i < quantity; i++) {
            const supply = stacks[sourceStack].pop();
            supplies.push(supply);
        }
        for (let i = 0; i < quantity; i++) {
            const supply = supplies.pop()!;
            stacks[destinationStack].push(supply);
        }
    });
    
    const tops = getTops(stacks);

    return tops;
};
