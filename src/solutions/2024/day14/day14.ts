import { Day } from '@pages/DayTemplate';
import { part1Description, part2Description } from './descriptions';
import { inputs } from './inputs';
import { part1Solution, part2Solution } from './solutions';

export const day14: Day = {
    title: 'Day 14: Restroom Redoubt',
    stars: 1,
    part1: {
        description: part1Description,
        solution: part1Solution,
        exampleInput: inputs.part1.exampleInput,
        givenInput: inputs.part1.givenInput
    },
    part2: {
        description: part2Description,
        solution: part2Solution,
        exampleInput: inputs.part2.exampleInput,
        givenInput: inputs.part2.givenInput
    }
};