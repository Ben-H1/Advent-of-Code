const getAssignment = (pair: string) => {
    const splitPair = pair.split(',');
    return splitPair.map((range) => {
        const splitRange = range.split('-');
        return {
            start: parseInt(splitRange[0]),
            end: parseInt(splitRange[1])
        };
    });
};

export const part1Solution = (input: string): string => {
    const splitInput = input.split('\n');

    const assignments = splitInput.map(pair => getAssignment(pair));

    let total = 0;

    assignments.forEach((assignment) => {
        if (
            ((assignment[1].start >= assignment[0].start) && (assignment[1].end <= assignment[0].end)) ||
            ((assignment[0].start >= assignment[1].start) && (assignment[0].end <= assignment[1].end))
        ) {
            total++;
        }
    });

    return total.toString();
};

export const part2Solution = (input: string): string => {
    const splitInput = input.split('\n');

    const assignments = splitInput.map(pair => getAssignment(pair));

    let total = 0;

    assignments.forEach((assignment) => {
        if (
            (
                ((assignment[1].start >= assignment[0].start) && (assignment[1].start <= assignment[0].end)) ||
                ((assignment[1].end >= assignment[0].start) && (assignment[1].end <= assignment[0].end))
            ) || (
                ((assignment[0].start >= assignment[1].start) && (assignment[0].start <= assignment[1].end)) ||
                ((assignment[0].end >= assignment[1].start) && (assignment[0].end <= assignment[1].end))
            )
        ) {
            total++;
        }
    });

    return total.toString();
};
