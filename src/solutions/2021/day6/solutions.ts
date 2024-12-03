import { sum } from '@util/math';

const simulateDay = (fish: number[]) => {
    const newFish: number[] = [];

    fish = fish.map(f => {
        let age = f - 1;

        if (age === -1) {
            age = 6;
            newFish.push(8);
        }

        return age;
    });

    fish.push(...newFish);

    return fish;
};

export const part1Solution = (input: string): string => {
    let fish = input.split(',').map(a => parseInt(a));

    for (let i = 0; i < 80; i++) {
        fish = simulateDay(fish);
    }

    const fishCount = fish.length;

    return fishCount.toString();
};

export const part2Solution = (input: string): string => {
    let fish = input.split(',').map(a => parseInt(a));

    const ages = fish.reduce((p, c) => { p[c] += 1; return p; }, new Array(9).fill(0))

    for (let i = 0; i < 256; i++) {
        const newFish = ages.shift();

        ages[6] += newFish;
        ages.push(newFish);
    }

    const fishCount = sum(...ages);

    return fishCount.toString();
};
