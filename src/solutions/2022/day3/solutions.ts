const findCommonItem = (group: string[]) => {
    const indices = new Array(group.length - 1).fill(-1);
    const firstMember = group[0];

    for (let i = 0; i < firstMember.length; i++) {
        for (let j = 1; j < group.length; j++) {
            indices[j - 1] = group[j].indexOf(firstMember[i]);
        }
        if (indices.every(i => i > -1)) {
            return firstMember[i];
        }
    }
};

const getItemPriority = (item: string) => {
    const code = item.charCodeAt(0);

    if (code >= 97 && code <= 122) {
        return code - 96;
    } else {
        return code - 38;
    }
};

export const part1Solution = (input: string): string => {
    const splitInput = input.split('\n');

    let total = 0;

    splitInput.forEach((rucksack) => {
        const compartment1 = rucksack.substring(0, rucksack.length / 2);
        const compartment2 = rucksack.substring(rucksack.length / 2, rucksack.length);

        const common = findCommonItem([compartment1, compartment2]);
        const priority = getItemPriority(common!);

        total += priority;
    });

    return total.toString();
};

export const part2Solution = (input: string): string => {
    const splitInput = input.split('\n');

    const groups = [];
    const groupSize = 3;

    for (let i = 0; i < splitInput.length; i += groupSize) {
        const group = [];
        for (let j = 0; j < groupSize; j++) {
            group.push(splitInput[i + j]);
        }
        groups.push(group);
    }

    let total = 0;

    groups.forEach((group) => {
        const badge = findCommonItem(group);
        const priority = getItemPriority(badge!);
        total += priority;
    });

    return total.toString();
};
