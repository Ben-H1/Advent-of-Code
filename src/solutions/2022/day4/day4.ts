import { inputs } from './inputs';
import { descriptions } from './descriptions';
import { Day } from '@pages/DayTemplate';

const getAssignment = (pair: string) => {
    const splitPair = pair.split(',');
    return splitPair.map((range) => {
        const splitRange = range.split('-');
        return {
            start: parseInt(splitRange[0]),
            end: parseInt(splitRange[1])
        };
    });
};

const part1Solution = (input: string): string => {
    const splitInput = input.split('\n');

    const assignments = splitInput.map(pair => getAssignment(pair));

    let total = 0;

    assignments.forEach((assignment) => {
        if (
            ((assignment[1].start >= assignment[0].start) && (assignment[1].end <= assignment[0].end)) ||
            ((assignment[0].start >= assignment[1].start) && (assignment[0].end <= assignment[1].end))
        ) {
            total++;
        }
    });

    return total.toString();
};

const part2Solution = (input: string): string => {
    const splitInput = input.split('\n');

    const assignments = splitInput.map(pair => getAssignment(pair));

    let total = 0;

    assignments.forEach((assignment) => {
        if (
            (
                ((assignment[1].start >= assignment[0].start) && (assignment[1].start <= assignment[0].end)) ||
                ((assignment[1].end >= assignment[0].start) && (assignment[1].end <= assignment[0].end))
            ) || (
                ((assignment[0].start >= assignment[1].start) && (assignment[0].start <= assignment[1].end)) ||
                ((assignment[0].end >= assignment[1].start) && (assignment[0].end <= assignment[1].end))
            )
        ) {
            total++;
        }
    });

    return total.toString();
};

export const day4: Day = {
    title: 'Day 4: Camp Cleanup',
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
