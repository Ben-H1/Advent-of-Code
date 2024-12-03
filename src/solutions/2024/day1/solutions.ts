import { indexOfMulti } from '@util/array';
import { sum } from '@util/math';

const parseLists = (input: string) => {
    const pairs = input.split('\n').map(l => l.split('   '));

    const leftList = pairs.map(p => parseInt(p[0]));
    const rightList = pairs.map(p => parseInt(p[1]));

    return { leftList, rightList };
};

export const part1Solution = (input: string): string => {
    const lists = parseLists(input);

    lists.leftList.sort();
    lists.rightList.sort();

    const pairs = lists.leftList.map((n, i) => [n, lists.rightList[i]]);
    const distances = pairs.map(p => Math.abs(p[1] - p[0]));

    const distancesSum = sum(...distances);

    return distancesSum.toString();
};

export const part2Solution = (input: string): string => {
    const lists = parseLists(input);

    const leftCounts = lists.leftList.map(n => indexOfMulti(lists.rightList, n).length);
    const similarities = lists.leftList.map((n, i) => n * leftCounts[i]);

    const similarityScore = sum(...similarities);

    return similarityScore.toString();
};
