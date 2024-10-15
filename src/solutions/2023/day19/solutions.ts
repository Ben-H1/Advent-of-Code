import { sum } from '@util/math';

const parseWorkflowsAndParts = (input: string) => {
    const workflowPartSplit = input.split('\n\n');

    const workflowLines = workflowPartSplit[0].split('\n');
    const partLines = workflowPartSplit[1].split('\n');

    const workflows: any = {};

    workflowLines.forEach((line) => {
        const nameRuleSplit = line.split('{');

        const name = nameRuleSplit[0];

        const ruleString = nameRuleSplit[1].replace('}', '');
        const ruleStrings = ruleString.split(',');

        const rules = ruleStrings.map((string) => {
            if (string.includes('>')) {
                const greaterThanSplit = string.split('>');
                const partRating = greaterThanSplit[0];
                const valueTargetSplit = greaterThanSplit[1].split(':');
                const value = valueTargetSplit[0];
                const target = valueTargetSplit[1];

                return {
                    type: 'comparison',
                    partRating,
                    comparison: '>',
                    value,
                    target
                };
            } else if (string.includes('<')) {
                const lessThanSplit = string.split('<');
                const partRating = lessThanSplit[0];
                const valueTargetSplit = lessThanSplit[1].split(':');
                const value = valueTargetSplit[0];
                const target = valueTargetSplit[1];

                return {
                    type: 'comparison',
                    partRating,
                    comparison: '<',
                    value,
                    target
                };
            } else {
                return {
                    type: 'immediate',
                    target: string
                };
            }
        });

        workflows[name] = rules;
    });

    const parts = partLines.map((line) => {
        const newString = line.replace(/{|}/g, '');
        const ratingStrings = newString.split(',');

        const ratingObject: any = {};

        ratingStrings.forEach((string) => {
            const valueSplit = string.split('=');
            ratingObject[valueSplit[0]] = parseInt(valueSplit[1]);
        });

        return ratingObject;
    });

    return { workflows, parts };
};

const evaluateWorkflow = (workflows: any, currentWorkflow: string, part: any): string => {
    const rules = workflows[currentWorkflow];
    let result = '';

    rules.forEach((rule: any) => {
        if (!result) {
            if (rule.type === 'comparison') {
                if (rule.comparison === '>') {
                    if (part[rule.partRating] > rule.value) {
                        if (['A', 'R'].includes(rule.target)) {
                            result = rule.target;
                        } else {
                            result = evaluateWorkflow(workflows, rule.target, part);
                        }
                    } else {
                        return;
                    }
                } else { // less than
                    if (part[rule.partRating] < rule.value) {
                        if (['A', 'R'].includes(rule.target)) {
                            result = rule.target;
                        } else {
                            result = evaluateWorkflow(workflows, rule.target, part);
                        }
                    } else {
                        return;
                    }
                }
            } else { // immediate
                if (['A', 'R'].includes(rule.target)) {
                    result = rule.target;
                } else {
                    result = evaluateWorkflow(workflows, rule.target, part);
                }
            }
        } else {
            return;
        }
    });

    return result;
};

export const part1Solution = (input: string): string => {
    const { workflows, parts } = parseWorkflowsAndParts(input);

    const acceptedParts: any[] = [];

    parts.forEach((part) => {
        const acceptedRejected = evaluateWorkflow(workflows, 'in', part);

        if (acceptedRejected === 'A') {
            acceptedParts.push(part);
        }
    });

    const partRatingTotals = acceptedParts.map(p => sum(...Object.values(p) as number[]));
    const total = sum(...partRatingTotals);

    return total.toString();
};

export const part2Solution = (input: string): string => {
    return '';
};
