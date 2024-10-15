import { Day } from '@pages/DayTemplate';
import { descriptions } from './descriptions';
import { inputs } from './inputs';
import { sum } from '@util/math';

enum SignType {
    Equals = '=',
    Dash = '-'
}

const getHashValue = (string: string) => {
    let currentValue = 0;

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        const charCode = char.charCodeAt(0);

        currentValue += charCode;
        currentValue *= 17;
        currentValue = currentValue % 256;
    }

    return currentValue;
};

const getBoxes = (steps: any[]) => {
    const boxes = new Map();

    for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        const boxValue = getHashValue(step.label);
        const currentLenses = boxes.get(boxValue);

        if (currentLenses) {
            if (step.sign === SignType.Equals) {
                const lensIndex = currentLenses.findIndex((l: any) => l.label === step.label);
                if (lensIndex > -1) {
                    const newLenses = [...currentLenses];
                    newLenses[lensIndex] = step;
                    boxes.set(boxValue, newLenses);
                } else {
                    const newLenses = [...currentLenses, step];
                    boxes.set(boxValue, newLenses);
                }
            } else {
                const lensIndex = currentLenses.findIndex((l: any) => l.label === step.label);
                if (lensIndex > -1) {
                    currentLenses.splice(lensIndex, 1);
                    boxes.set(boxValue, currentLenses);
                }
            }
        } else {
            if (step.sign === SignType.Equals) {
                boxes.set(boxValue, [step]);
            }
        }
    }

    return boxes;
};

const getFocusingPowers = (boxes: Map<number, any>) => {
    const boxNumbers = Array.from(boxes.keys());

    return boxNumbers.map((boxNumber) => {
        const lenses = boxes.get(boxNumber);
        return lenses.map((lens: any, i: number) => {
            return (boxNumber + 1) * (i + 1) * lens.focalLength;
        });
    }).flat();
};

const part1Solution = (input: string): string => {
    const steps = input.split(',');
    
    const results = steps.map(s => getHashValue(s));

    const resultSum = sum(...results);

    return resultSum.toString();
};

const part2Solution = (input: string): string => {
    const steps = input.split(',').map((step) => {
        if (step.includes(SignType.Equals)) {
            const splitStep = step.split(SignType.Equals);
            return { label: splitStep[0], sign: SignType.Equals, focalLength: parseInt(splitStep[1]) };
        } else {
            const splitStep = step.split(SignType.Dash);
            return { label: splitStep[0], sign: SignType.Dash };
        }
    });

    const boxes = getBoxes(steps);

    const focusingPowers = getFocusingPowers(boxes);

    const focusingPowerSum = sum(...focusingPowers);

    return focusingPowerSum.toString();
};

export const day15: Day = {
    title: 'Day 15: Lens Library',
    stars: 2,
    part1: {
        description: descriptions.part1Description,
        solution: part1Solution,
        exampleInput: inputs.part1.exampleInput,
        givenInput: inputs.part1.givenInput
    },
    part2: {
        description: descriptions.part2Description,
        solution: part2Solution,
        exampleInput: inputs.part2.exampleInput,
        givenInput: inputs.part2.givenInput
    }
};
