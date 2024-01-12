import { Day } from '@pages/DayTemplate';
import { sum } from '@util/math';
import { descriptions } from './descriptions';
import { inputs } from './inputs';

enum SpringType {
    Operational = '.',
    Damaged = '#',
    Unknown = '?'
}

const parseRows = (input: string, unfold?: boolean) => {
    const lines = input.split('\n');
    return lines.map((line) => {
        const mapGroupSplit = line.split(' ');

        const row = mapGroupSplit[0];
        const damagedGroupSizes = mapGroupSplit[1];

        const unfoldedRow = unfold ? `${row}?`.repeat(5).slice(0, -1) : row;
        const unfoldedDamagedGroupSizes = unfold ? `${damagedGroupSizes},`.repeat(5) : damagedGroupSizes;

        return {
            row: unfoldedRow,
            damagedGroupSizes: unfoldedDamagedGroupSizes.split(',').filter(Boolean).map(s => parseInt(s))
        };
    });
};

function getPermutations(chars: string[], length: number, level = 0) {
    if (length === 1) {
        return chars;
    }

    const suffixes = getPermutations(chars, length - 1, level + 1);

    const result: string[] = [];

    chars.forEach(c => suffixes?.forEach(s => result.push(c + s)));

    return result;
};

const checkPermutation = (permutation: string, damagedGroupSizes: number[]) => {
    const damagedGroups = permutation.split('.').filter(Boolean);

    let isValid = true;

    if (damagedGroups.length === damagedGroupSizes.length) {
        damagedGroups.forEach((group, i) => {
            if (group.length !== damagedGroupSizes[i]) {
                isValid = false;
            }
        });
    } else {
        isValid = false;
    }

    return isValid;
};

const getArrangements = ({ row, damagedGroupSizes }: any) => {
    const unknownCount = row.split('').filter((c: string) => c === SpringType.Unknown).length;

    const unknownPermutations = getPermutations([SpringType.Operational, SpringType.Damaged], unknownCount);

    const fullPermutations: string[] = [];

    unknownPermutations.forEach((permutation) => {
        let counter = 0;
        const final: string[] = [];

        row.split('').forEach((char: string) => {
            if (char === SpringType.Unknown) {
                final.push(permutation[counter]);
                counter++;
            } else {
                final.push(char);
            }
        });

        const finalString = final.join('');

        if (checkPermutation(finalString, damagedGroupSizes)) {
            fullPermutations.push(finalString);
        }
    });

    return {
        row,
        damagedGroupSizes,
        arrangements: fullPermutations
    };
};

const part1Solution = (input: string): string => {
    const rows = parseRows(input);

    const arrangements = rows.map(r => getArrangements(r));
    const arrangementCounts = arrangements.map(a => a.arrangements.length);
    const arrangementSum = sum(...arrangementCounts);

    return arrangementSum.toString();
};

const part2Solution = (input: string): string => {
    const rows = parseRows(input, true);

    const arrangements = rows.map(r => getArrangements(r));
    const arrangementCounts = arrangements.map(a => a.arrangements.length);
    const arrangementSum = sum(...arrangementCounts);

    return arrangementSum.toString();
};

export const day12: Day = {
    title: 'Day 12: Hot Springs',
    link: '/2023/day12',
    stars: 1,
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
