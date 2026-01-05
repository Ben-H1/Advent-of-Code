import { sum } from '@util/math';

export const part1Solution = (input: string): string => {
    const banks = input.split('\n');
    
    const joltages = banks.map(bank => {
        let highestJoltage = 0;

        for (let i = 0; i < bank.length; i++) {
            for (let j = i + 1; j < bank.length; j++) {
                const joltage = parseInt(`${bank[i]}${bank[j]}`);
                if (joltage > highestJoltage) {
                    highestJoltage = joltage;
                }
            }
        }

        return highestJoltage;
    });

    const joltageSum = sum(...joltages);

    return joltageSum.toString();
};

export const part2Solution = (input: string): string => {
    const banks = input.split('\n');
    
    const joltages = banks.map(bank => {
        const batteries = bank.split('').map(Number);
        const stack: number[] = [];
        const removalsNeeded = batteries.length - 12;
        let remainingRemovals = removalsNeeded;

        batteries.forEach(battery => {
            while (stack.length > 0 && stack[stack.length - 1] < battery && remainingRemovals > 0) {
                stack.pop();
                remainingRemovals--;
            }
            stack.push(battery);
        });

        while (remainingRemovals > 0) {
            stack.pop();
            remainingRemovals--;
        }

        return parseInt(stack.join(''));
    });

    const joltageSum = sum(...joltages);

    return joltageSum.toString();
};
