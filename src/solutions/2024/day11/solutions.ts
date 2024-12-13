import { sum } from '@util/math';

const parseStones = (input: string): number[] => {
    return input.split(' ').map(s => parseInt(s));
};

const blinkStone = (stone: number): number[] => {
    if (stone === 0) {
        return [1];
    } else if (stone.toString().length % 2 === 0) {
        const stoneString = stone.toString();

        const firstHalf = stoneString.substring(0, stoneString.length / 2);
        const secondHalf = stoneString.substring(stoneString.length / 2);
        
        return [parseInt(firstHalf), parseInt(secondHalf)];
    } else {
        return [stone * 2024];
    }
};

export const part1Solution = (input: string): string => {
    let stones = parseStones(input);

    for (let i = 0; i < 25; i++) {
        const newArray: number[] = [];

        stones.forEach(s => newArray.push(...blinkStone(s)));

        stones = [...newArray];
    }

    return stones.length.toString();
};

export const part2Solution = (input: string): string => {
    const stones = parseStones(input);
    const stoneMap = new Map<number, number>();

    stones.forEach(s => {
        const value = stoneMap.get(s);
        value != null ? stoneMap.set(s, value + 1) : stoneMap.set(s, 1);
    });

    for (let i = 0; i < 75; i++) {
        const stoneMapCopy = new Map(stoneMap);

        Array.from(stoneMapCopy.keys()).map(k => {
            const count = stoneMapCopy.get(k)!;
            const newValues = blinkStone(k);

            stoneMap.set(k, stoneMap.get(k)! - count);

            newValues.forEach(v => {
                const value = stoneMap.get(v);
                value != null ? stoneMap.set(v, value + count) : stoneMap.set(v, count);
            });
        });
    }

    const stoneCount = sum(...Array.from(stoneMap.values()));

    return stoneCount.toString();
};
