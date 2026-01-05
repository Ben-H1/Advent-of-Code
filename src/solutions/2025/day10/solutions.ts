import { sum } from '@util/math';

type Machine = {
    indicatorLights: boolean[];
    buttons: number[][];
    joltageRequirements: number[];
};

const parseMachines = (input: string): Machine[] => {
    return input.split('\n').map(line => {
        const splitLine = line.split(' ');

        const indicatorLightsString = splitLine[0];
        const buttonsStrings = splitLine.slice(1, splitLine.length - 1);
        const joltageRequirementsString = splitLine[splitLine.length - 1];

        const indicatorLights = indicatorLightsString.replace(/[[\]]/g, '').split('').map(l => l === '#');
        const buttons = buttonsStrings.map(s => s.replace(/([()])/g, '').split(',').map(Number));
        const joltageRequirements = joltageRequirementsString.replace(/([{}])/g, '').split(',').map(Number);

        return { indicatorLights, buttons, joltageRequirements };
    });
};

const getButtonCombinations = (buttonCount: number): number[][] => {
    const array = Array.from({ length: buttonCount }, (_, i) => i);
    const combinations: number[][] = [];

    const helper = (current: number[], remaining: number[]) => {
        if (remaining.length === 0) {
            if (current.length > 0) combinations.push(current);
            return;
        }

        helper([...current, remaining[0]], remaining.slice(1));
        helper(current, remaining.slice(1));
    };

    helper([], array);

    return combinations;
};

const getButtonMatrix = (indicatorLights: boolean[], button: number[]) => {
    const array = new Array(indicatorLights.length).fill(0);
    button.forEach(b => array[b] = 1);
    return array;
};

export const part1Solution = (input: string): string => {
    const machines = parseMachines(input);

    const buttonPresses = machines.map(machine => {
        const machineLightsString = machine.indicatorLights.map(v => v ? '#' : '.').join('');
        const combinations = getButtonCombinations(machine.buttons.length);
        let lowestPresses = Infinity;

        combinations.forEach(combination => {
            const matrices = combination.map(buttonIndex => getButtonMatrix(machine.indicatorLights, machine.buttons[buttonIndex]));
            const matrixSum = matrices.reduce((previous, current) => previous.map((p, i) => p + current[i]), new Array(machine.indicatorLights.length).fill(0));
            const finalLightsString = matrixSum.map(v => v % 2 ? '#' : '.').join('');

            if (finalLightsString === machineLightsString && combination.length < lowestPresses) {
                lowestPresses = combination.length;
            }
        });

        return lowestPresses;
    });

    const buttonPressesSum = sum(...buttonPresses);

    return buttonPressesSum.toString();
};

export const part2Solution = (input: string): string => {
    const machines = parseMachines(input);

    return 'Part 2 solution';
};
