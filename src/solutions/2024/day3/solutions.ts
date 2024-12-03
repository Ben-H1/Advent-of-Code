import { sum } from '@util/math';

const getMulPairs = (instructions: string[]): number[][] => {
    return instructions.map(i => i.replace(/mul\(|\)/g, '').split(',').map(n => parseInt(n)));
};

export const part1Solution = (input: string): string => {
    const instructions = input.match(new RegExp('mul\\(\\d{1,3},\\d{1,3}\\)', 'gm'));

    if (!instructions) {
        return 'No instructions';
    }

    const pairs = getMulPairs(instructions);
    const multiplications = pairs.map(p => p[0] * p[1]);
    const result = sum(...multiplications);

    return result.toString();
};

export const part2Solution = (input: string): string => {
    const instructions = input.match(new RegExp('mul\\(\\d{1,3},\\d{1,3}\\)|do\\(\\)|don\'t\\(\\)', 'gm'));
    
    if (!instructions) {
        return 'No instructions';
    }

    const validInstructions: string[] = [];
    let add = true;

    instructions.forEach(i => {
        if (i === 'do()') {
            add = true;
        } else if (i === 'don\'t()') {
            add = false;
        } else if (add) {
            validInstructions.push(i);
        }
    });

    const pairs = getMulPairs(validInstructions);
    const multiplications = pairs.map(p => p[0] * p[1]);
    const result = sum(...multiplications);

    return result.toString();
};
