export const part1Solution = (input: string): string => {
    const positions = input.split(',').map(p => parseInt(p));

    const maxPosition = Math.max(...positions);

    const costs = [];

    for (let i = 0; i <= maxPosition; i++) {
        let cost = 0;
        positions.forEach(p => cost += Math.abs(p - i));
        costs.push(cost);
    }

    const lowestCost = Math.min(...costs);

    return lowestCost.toString();
};

export const part2Solution = (input: string): string => {
    const positions = input.split(',').map(p => parseInt(p));

    const maxPosition = Math.max(...positions);

    const costs = [];

    for (let i = 0; i <= maxPosition; i++) {
        let cost = 0;

        positions.forEach(p => {
            const difference = Math.abs(p - i);
            cost += ((difference * difference) + difference) / 2;
        });

        costs.push(cost);
    }

    const lowestCost = Math.min(...costs);

    return lowestCost.toString();
};
