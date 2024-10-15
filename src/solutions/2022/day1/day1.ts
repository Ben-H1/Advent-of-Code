import { inputs } from './inputs';
import { descriptions } from './descriptions';
import { Day } from '@pages/DayTemplate';

const getElves = (lines: string[]) => {
    let currentTotal = 0;
    const elves = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line == '') {
            elves.push(currentTotal);
            currentTotal = 0;
        } else {
            currentTotal += parseInt(line);
            if (i >= lines.length - 1) {
                elves.push(currentTotal)
            }
        }
    }

    return elves;
};

const part1Solution = (input: string): string => {
    const splitInput = input.split('\n');

    const elves = getElves(splitInput);

    const topMax = Math.max(...elves);

    return topMax.toString();
};

const part2Solution = (input: string): string => {
    const splitInput = input.split('\n');

    const elves = getElves(splitInput);

    const maxCount = 3;
    const maxElves = [];

    for (let i = 0; i < maxCount; i++) {
        const max = Math.max(...elves);
        const elf = elves.indexOf(max);
        maxElves.push({ index: elf, calories: max });
        elves[elf] = 0;
    }

    const total = maxElves.reduce((p, c) => p + c.calories, 0);

    return total.toString();
};

export const day1: Day = {
    title: 'Day 1: Calorie Counting',
    stars: 2,
    part1: {
        description: descriptions.part1Description,
        solution: part1Solution,
        exampleInput: inputs.part1.exampleInput,
        givenInput: inputs.part1.givenInput
    },
    part2: {
        description: descriptions.part2Description,
        solution: part2Solution,
        exampleInput: inputs.part2.exampleInput,
        givenInput: inputs.part2.givenInput
    }
};
