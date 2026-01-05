import { sum } from '@util/math';

type Range = {
    start: number;
    end: number;
};

const parseRanges = (input: string): Range[] => {
    return input.split(',').map(range => {
        const [start, end] = range.split('-').map(Number);
        return { start, end };
    });
};

const part1CheckIdInvalid = (id: number): boolean => {
    const idString = id.toString();

    if (idString.length % 2 !== 0) return false;

    const idFirstHalf = idString.substring(0, idString.length / 2);
    const idSecondHalf = idString.substring(idString.length / 2);

    if (idFirstHalf === idSecondHalf) return true;

    return false;
};

const part2CheckIdInvalid = (id: number): boolean => {
    const idString = id.toString();
    let invalid = false;

    for (let i = 1; i <= idString.length / 2; i++) {
        const segments: string[] = [];

        for (let j = 0; j < idString.length; j += i) {
            segments.push(idString.substring(j, j + i));
        }

        if (segments.every(segment => segment === segments[0])) {
            invalid = true;
            break;
        }
    }

    return invalid;
};

export const part1Solution = (input: string): string => {
    const ranges = parseRanges(input);

    const invalidIds: number[] = [];

    ranges.forEach(range => {
        for (let i = range.start; i <= range.end; i++) {
            if (part1CheckIdInvalid(i)) invalidIds.push(i);
        }
    });

    const idSum = sum(...invalidIds);

    return idSum.toString();
};

export const part2Solution = (input: string): string => {
    const ranges = parseRanges(input);

    const invalidIds: number[] = [];

    ranges.forEach(range => {
        for (let i = range.start; i <= range.end; i++) {
            if (part2CheckIdInvalid(i)) invalidIds.push(i);
        }
    });

    const idSum = sum(...invalidIds);

    return idSum.toString();
};
