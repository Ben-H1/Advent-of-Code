import { sum } from '@util/math';

const parseUpdates = (input: string) => {
    const splitInput = input.split('\n\n');

    const pairs = splitInput[0].split('\n').map(l => l.split('|').map(p => parseInt(p)));
    const updates = splitInput[1].split('\n').map(l => l.split(',').map(p => parseInt(p)));

    const rules: Record<number, Record<string, number[]>> = {};

    pairs.forEach(p => {
        if (rules[p[0]] == null) {
            rules[p[0]] = {
                before: [],
                after: []
            };
        }

        rules[p[0]].before.push(p[1]);

        if (rules[p[1]] == null) {
            rules[p[1]] = {
                before: [],
                after: []
            };
        }

        rules[p[1]].after.push(p[0]);
    });

    return { pairs, rules, updates };
};

const checkUpdate = (update: number[], rules: Record<number, Record<string, number[]>>) => {
    let valid = true;
    
        for (let i = 0; i < update.length; i++) {
            const page = update[i];
            const pagesBefore = update.slice(0, i);
            const pagesAfter = update.slice(i + 1);
    
            if (pagesBefore.length > 0) {
                const validBefore = pagesBefore.every(p => rules[p].before.includes(page));
                if (valid && !validBefore) {
                    valid = false;
                }
            }
    
            if (pagesAfter.length > 0) {
                const validAfter = pagesAfter.every(p => rules[p].after.includes(page));
                if (valid && !validAfter) {
                    valid = false;
                }
            }
        }

        return { update, valid };
};

export const part1Solution = (input: string): string => {
    const pages = parseUpdates(input);

    const evaluatedUpdates = pages.updates.map(u => checkUpdate(u, pages.rules));

    const validUpdates = evaluatedUpdates.filter(u => u.valid);
    const middlePages = validUpdates.map(u => u.update[Math.floor(u.update.length / 2)]);
    const middlePageSum = sum(...middlePages);

    return middlePageSum.toString();
};

export const part2Solution = (input: string) => {
    const pages = parseUpdates(input);

    const evaluatedUpdates = pages.updates.map(u => checkUpdate(u, pages.rules));
    const invalidUpdates = evaluatedUpdates.filter(u => !u.valid);

    const newUpdates = invalidUpdates.map(u => {
        let newUpdate: number[] = [];

        for (let i = 0; i < u.update.length; i++) {
            const currentPage = u.update[i];
            let j = 0;
            let valid = false;
            let candidate;

            do {
                candidate = [...newUpdate.slice(0, j), currentPage, ...newUpdate.slice(j)];
                valid = checkUpdate(candidate, pages.rules).valid;
                j++;
            } while (!valid);

            newUpdate = [...candidate];
        }
        
        return newUpdate;
    });

    const middlePages = newUpdates.map(u => u[Math.floor(u.length / 2)]);
    const middlePageSum = sum(...middlePages);

    return middlePageSum.toString();
};
