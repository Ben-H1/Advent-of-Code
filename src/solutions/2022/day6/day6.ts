import { inputs } from './inputs';
import { descriptions } from './descriptions';
import { Day } from '@pages/DayTemplate';

const getUniqueIndex = (input: string, bufferSize: number) => {
    const buffer = [];

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        buffer.push(char);
    
        if (buffer.length > bufferSize) {
            buffer.shift();
        }
    
        const uniqueBuffer = new Set(buffer);
    
        if (buffer.length == bufferSize && uniqueBuffer.size == buffer.length) {
            return i + 1;
        }
    }
};

const part1Solution = (input: string): string => {
    const packetMarkerIndex = getUniqueIndex(input, 4)!;

    return packetMarkerIndex.toString();
};

const part2Solution = (input: string): string => {
    const packetMarkerIndex = getUniqueIndex(input, 14)!;

    return packetMarkerIndex.toString();
};

export const day6: Day = {
    title: 'Day 6: Tuning Trouble',
    link: '2022/day6',
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
