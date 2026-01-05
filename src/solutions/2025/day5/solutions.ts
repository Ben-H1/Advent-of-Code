import { sum } from '@util/math';

type Range = {
    start: number;
    end: number;
};

type Database = {
    ranges: Range[];
    ingredientIds: number[];
};

const parseDatabase = (input: string): Database => {
    const [rangesPart, ingredientIdsPart] = input.split('\n\n');

    const ranges = rangesPart.split('\n').map(line => {
        const [startPart, endPart] = line.split('-');
        return {
            start: parseInt(startPart),
            end: parseInt(endPart),
        };
    });

    const ingredientIds = ingredientIdsPart.split('\n').map(Number);

    return { ranges, ingredientIds };
};

export const part1Solution = (input: string): string => {
    const database = parseDatabase(input);

    const freshIngredientIds = database.ingredientIds
        .filter(ingredientId =>
            database.ranges.some(range =>
                ingredientId >= range.start && ingredientId <= range.end
            )
        );

    return freshIngredientIds.length.toString();
};

export const part2Solution = (input: string): string => {
    const { ranges } = parseDatabase(input);

    const sortedRanges = ranges.sort((a, b) => a.start - b.start);
    const mergedRanges: Range[] = [];

    for (let i = 0; i < sortedRanges.length; i++) {
        const range = sortedRanges[i];

        if (mergedRanges.length === 0) {
            mergedRanges.push(range);
            continue;
        }

        const lastMergedRange = mergedRanges[mergedRanges.length - 1];

        if (range.start <= lastMergedRange.end) {
            lastMergedRange.end = Math.max(lastMergedRange.end, range.end);
        } else {
            mergedRanges.push(range);
        }
    }

    const differences = mergedRanges.map(range => range.end - range.start + 1);
    const freshIdCount = sum(...differences);

    return freshIdCount.toString();
};
