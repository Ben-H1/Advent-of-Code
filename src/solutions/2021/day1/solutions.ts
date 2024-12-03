import { sum } from '@util/math';

const getDepthDifferences = (depths: number[]): Record<string, number>[] => {
    return depths.map((d, i) => ({
        depth: d,
        difference: (depths[i - 1] != null) ? (d - depths[i - 1]) : 0
    }));
};

const getDepthIncreases = (depths: Record<string, number>[]) => {
    return depths.filter(d => d.difference > 0);
};

export const part1Solution = (input: string): string => {
    const depths = input.split('\n').map(d => parseInt(d));
    
    const depthDifferences = getDepthDifferences(depths);
    const depthIncreases = getDepthIncreases(depthDifferences);

    return depthIncreases.length.toString();
};

export const part2Solution = (input: string): string => {
    const depths = input.split('\n').map(d => parseInt(d));

    const windowSize = 3;
    const windows = [];

    for (let i = 0; i < (depths.length - (windowSize - 1)); i++) {
        let window = [];
        for (let j = 0; j < windowSize; j++) {
            window.push(depths[i + j]);
        }
        windows.push(window);
    }

    const windowSums = windows.map(w => sum(...w));

    const windowDifferences = getDepthDifferences(windowSums);
    const windowIncreases = getDepthIncreases(windowDifferences);

    return windowIncreases.length.toString();
};
