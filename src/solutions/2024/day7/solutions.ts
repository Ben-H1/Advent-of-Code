import { sum } from '@util/math';

type Test = {
    testValue: number;
    numbers: number[];
};

type EvaluatedTest = Test & {
    results: number[];
    valid: boolean;
};

const parseTests = (input: string): Test[] => {
    return input.split('\n').map(l => {
        const splitLine = l.split(': ');

        const testValue = parseInt(splitLine[0]);
        const numbers = splitLine[1].split(' ').map(n => parseInt(n));

        return { testValue, numbers };
    });
};

const evaluateTest = (t: Test, base: number): EvaluatedTest => {
    const countTo = Math.pow(base, t.numbers.length - 1) - 1;
    const baseX = [];
    
    for (let i = 0; i <= countTo; i++) {
        baseX.push(i.toString(base).padStart(countTo.toString(base).length, '0'));
    }

    const operators = baseX.map(b => b.replace(/0/g, '+').replace(/1/g, '*').replace(/2/g, '|').split(''));

    const results = operators.map(o => {
        return t.numbers.reduce((a, b, i) => {
            if (i > 0) {
                switch (o[i - 1]) {
                    case '+': {
                        return a + b;
                    }
                    case '*': {
                        return a * b;
                    }
                    case '|': {
                        return parseInt(`${a.toString()}${b.toString()}`);
                    }
                }
            }

            return b;
        }, 0);
    });

    return {
        ...t, results,
        valid: results.includes(t.testValue)
    };
};

export const part1Solution = (input: string): string => {
    const tests = parseTests(input);
    
    const evaluatedTests = tests.map(t => evaluateTest(t, 2));

    const validTests = evaluatedTests.filter(t => t.valid);
    const validTestValues = validTests.map(t => t.testValue);
    const validTestValueSum = sum(...validTestValues);

    return validTestValueSum.toString();
};

export const part2Solution = (input: string): string => {
    const tests = parseTests(input);

    const evaluatedTests = tests.map(t => evaluateTest(t, 3));

    const validTests = evaluatedTests.filter(t => t.valid);
    const validTestValues = validTests.map(t => t.testValue);
    const validTestValueSum = sum(...validTestValues);

    return validTestValueSum.toString();
};
