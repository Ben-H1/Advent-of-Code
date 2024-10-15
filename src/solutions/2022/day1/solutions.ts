const getElves = (lines: string[]) => {
    let currentTotal = 0;
    const elves = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line == '') {
            elves.push(currentTotal);
            currentTotal = 0;
        } else {
            currentTotal += parseInt(line);
            if (i >= lines.length - 1) {
                elves.push(currentTotal)
            }
        }
    }

    return elves;
};

export const part1Solution = (input: string): string => {
    const splitInput = input.split('\n');

    const elves = getElves(splitInput);

    const topMax = Math.max(...elves);

    return topMax.toString();
};

export const part2Solution = (input: string): string => {
    const splitInput = input.split('\n');

    const elves = getElves(splitInput);

    const maxCount = 3;
    const maxElves = [];

    for (let i = 0; i < maxCount; i++) {
        const max = Math.max(...elves);
        const elf = elves.indexOf(max);
        maxElves.push({ index: elf, calories: max });
        elves[elf] = 0;
    }

    const total = maxElves.reduce((p, c) => p + c.calories, 0);

    return total.toString();
};
