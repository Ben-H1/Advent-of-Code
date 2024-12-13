import { sum } from '@util/math';

type Coordinate = {
    x: number;
    y: number;
};

type Machine = {
    a: Coordinate;
    b: Coordinate;
    prize: Coordinate;
};

const parseMachines = (input: string, addToPrize: number = 0): Machine[] => {
    return input
        .split('\n\n')
        .map(m => {
            const [[ax, ay], [bx, by], [px, py]] = m
                .split('\n')
                .map(l => l
                    .split(': ')[1]
                    .replace(/X|Y|=/g, '')
                    .split(', ')
                    .map(n => parseInt(n))
                );

            return {
                a: { x: ax, y: ay },
                b: { x: bx, y: by },
                prize: { x: px + addToPrize, y: py + addToPrize }
            };
        });
};

export const part1Solution = (input: string): string => {
    const machines = parseMachines(input);
    
    const combinations = machines.map(m => {
        const combinations = [];
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                combinations.push({ a: i, b: j });
            }
        }

        let winningCombination;
        let i = 0;
        do {
            const combination = combinations[i];

            const xResult = (m.a.x * combination.a) + (m.b.x * combination.b);
            const yResult = (m.a.y * combination.a) + (m.b.y * combination.b);

            if (xResult === m.prize.x && yResult === m.prize.y) {
                winningCombination = combination;
            }

            i++;
        } while (i < combinations.length && winningCombination == null);

        return winningCombination;
    });

    const winningCombinations = combinations.filter(c => c != null);
    const tokens = winningCombinations.map(c => (c.a * 3) + c.b);
    const tokenSum = sum(...tokens);

    return tokenSum.toString();
};

export const part2Solution = (input: string): string => {
    const machines = parseMachines(input, 10_000_000_000_000);
    
    const combinations = machines.map(m => {
        const a = ((m.prize.x * m.b.y) - (m.prize.y * m.b.x)) / ((m.a.x * m.b.y) - (m.a.y * m.b.x));
        const b = (m.prize.x - (m.a.x * a)) / m.b.x;

        if (!Number.isInteger(a) || !Number.isInteger(b)) {
            return null;
        }

        return { a, b };
    });

    const winningCombinations = combinations.filter(c => c != null);
    const tokens = winningCombinations.map(c => (c.a * 3) + c.b);
    const tokenSum = sum(...tokens);

    return tokenSum.toString();
};
