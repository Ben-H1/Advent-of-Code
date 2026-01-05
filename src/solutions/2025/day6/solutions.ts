import { product, sum } from '@util/math';

enum Operation {
    Addition = '+',
    Multiplication = '*'
};

type Problem = {
    numbers: number[];
    operation: Operation;
};

const part1ParseProblems = (input: string): Problem[] => {
    const lines = input
        .split('\n')
        .map(line => line.trim().split(/\s+/));
    
    const problems: Problem[] = [];
    
    lines.forEach((line, i) => {
        line.forEach((value, j) => {
            if (!problems[j]) {
                problems[j] = {
                    numbers: [],
                    operation: Operation.Addition
                };
            }

            if (i < lines.length - 1) {
                problems[j].numbers.push(parseInt(value));
            } else {
                problems[j].operation = value as Operation;
            }
        });
    });

    return problems;
};

const part2ParseProblems = (input: string): Problem[] => {
    const lines = input.split('\n');
    const reversedLines = lines.map(line => Array.from(line).reverse().join(''));

    const problems: Problem[] = [];
    let problemIndex = 0;

    for (let i = 0; i < reversedLines[0].length; i++) {
        const currentValues = [];

        for (let j = 0; j < reversedLines.length; j++) {
            currentValues.push(reversedLines[j][i]);
        }
        
        if (currentValues.every(v => v === ' ')) {
            continue;
        }

        if (!problems[problemIndex]) {
            problems[problemIndex] = {
                numbers: [],
                operation: Operation.Addition
            };
        }

        const operationOrSpace = currentValues.pop();
        const number = parseInt(currentValues.join('').trim());

        problems[problemIndex].numbers.push(number);

        if (operationOrSpace !== ' ') {
            problems[problemIndex].operation = operationOrSpace as Operation;
            problemIndex++;
            continue;
        }
    }

    return problems;
};

const solveProblem = (problem: Problem): number => {
    if (problem.operation === Operation.Addition) {
        return sum(...problem.numbers);
    }

    return product(...problem.numbers);
};

export const part1Solution = (input: string): string => {
    const problems = part1ParseProblems(input);

    const answers = problems.map(p => solveProblem(p));

    const answerSum = sum(...answers);

    return answerSum.toString();
};

export const part2Solution = (input: string): string => {
    const problems = part2ParseProblems(input);

    const answers = problems.map(p => solveProblem(p));

    const answerSum = sum(...answers);

    return answerSum.toString();
};
