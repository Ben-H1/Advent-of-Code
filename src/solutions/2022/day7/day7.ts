import { Day } from '@pages/DayTemplate';
import { descriptions } from './descriptions';
import { inputs } from './inputs';
import get from 'lodash.get';

const getDirSizes = (obj: Record<string, any>, parents: string[] = [], dirSizes: Record<string, any> = {}) => {
    Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === 'object') {
            // console.log(`DIR: ${key} | PARENTS: [${parents.join(', ')}]`);
            if (dirSizes[key] == null) {
                dirSizes[key] = 0;
            }
            getDirSizes(obj[key], [...parents, key], dirSizes);
        } else {
            // console.log(`FILE: ${key} | ${obj[key]} | PARENTS: [${parents.join(', ')}]`);
            parents.forEach(parent => dirSizes[parent] += obj[key]);
        }
    });

    return dirSizes;
};

const part1Solution = (input: string): string => {
    const splitInput = input.split('\n');

    let currentDir = ['/'];
    const dirs = { '/': {} };

    splitInput.forEach((line) => {
        const splitLine = line.split(' ');

        if (splitLine[0] === '$') {
            if (splitLine[1] === 'cd') {
                switch (splitLine[2]) {
                    case '/': currentDir = ['/']; break;
                    case '..': currentDir.pop(); break;
                    default: currentDir.push(splitLine[2]); break;
                }
            } else {}
        } else {
            if (splitLine[0] === 'dir') {
                const folderName = splitLine[1];
                if (!get(dirs, currentDir)[folderName]) {
                    get(dirs, currentDir)[folderName] = {};
                }
            } else {
                const fileSize = parseInt(splitLine[0]);
                const fileName = splitLine[1];
                if (!get(dirs, currentDir)[fileName]) {
                    get(dirs, currentDir)[fileName] = fileSize;
                }
            }
        }
    });

    console.log(dirs);

    const dirSizes = getDirSizes(dirs);
    console.log(dirSizes);
    const sum = Object.keys(dirSizes).map(d => dirSizes[d]).filter(s => s <= 100000).reduce((p, c) => p + c, 0);

    return sum.toString();
};

const part2Solution = (input: string): string => {
    return '';
};

export const day7: Day = {
    title: 'Day 7: No Space Left On Device',
    stars: 0,
    part1: {
        description: descriptions.part1Description,
        solution: part1Solution,
        exampleInput: inputs.part1.exampleInput,
        givenInput: inputs.part1.givenInput
    },
    // part2: {
    //     description: descriptions.part2Description,
    //     solution: part2Solution,
    //     exampleInput: inputs.part2.exampleInput,
    //     givenInput: inputs.part2.givenInput
    // }
};
