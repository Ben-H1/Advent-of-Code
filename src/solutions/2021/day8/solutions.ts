import { sum } from '@util/math';
import { commonCharacterCount } from '@util/string';

const parseNotes = (input: string, alphabetize?: boolean) => {
    return input.split('\n').map(l => {
        const splitLine = l.split(' | ');

        let signalPatterns = splitLine[0].split(' ');
        let outputValues = splitLine[1].split(' ');

        if (alphabetize) {
            signalPatterns = signalPatterns.map(p => p.split('').sort().join(''));
            outputValues = outputValues.map(p => p.split('').sort().join(''));
        }

        return { signalPatterns, outputValues };
    });
};

const getSegmentMap = (signalPatterns: string[]): Map<number, string> => {
    const map: Map<number, string> = new Map();
    const remainingSignalPatterns = [...signalPatterns];

    signalPatterns.forEach(p => {
        switch (p.length) {
            case 2: { map.set(1, p); remainingSignalPatterns.splice(remainingSignalPatterns.indexOf(p), 1); break; }
            case 3: { map.set(7, p); remainingSignalPatterns.splice(remainingSignalPatterns.indexOf(p), 1); break; }
            case 4: { map.set(4, p); remainingSignalPatterns.splice(remainingSignalPatterns.indexOf(p), 1); break; }
            case 7: { map.set(8, p); remainingSignalPatterns.splice(remainingSignalPatterns.indexOf(p), 1); break; }
        }
    });

    const ninePattern = remainingSignalPatterns.find(p => commonCharacterCount(p, map.get(4)!) === 4);
    if (ninePattern) {
        map.set(9, ninePattern);
        remainingSignalPatterns.splice(remainingSignalPatterns.indexOf(ninePattern), 1)
    }

    const twoPattern = remainingSignalPatterns.find(p => commonCharacterCount(p, map.get(4)!) === 2);
    if (twoPattern) {
        map.set(2, twoPattern);
        remainingSignalPatterns.splice(remainingSignalPatterns.indexOf(twoPattern), 1)
    }

    const fivePattern = remainingSignalPatterns.find(p => commonCharacterCount(p, map.get(2)!) === 3);
    if (fivePattern) {
        map.set(5, fivePattern);
        remainingSignalPatterns.splice(remainingSignalPatterns.indexOf(fivePattern), 1)
    }

    const threePattern = remainingSignalPatterns.find(p => commonCharacterCount(p, map.get(8)!) === 5);
    if (threePattern) {
        map.set(3, threePattern);
        remainingSignalPatterns.splice(remainingSignalPatterns.indexOf(threePattern), 1)
    }

    const sixPattern = remainingSignalPatterns.find(p => commonCharacterCount(p, map.get(7)!) === 2);
    if (sixPattern) {
        map.set(6, sixPattern);
        remainingSignalPatterns.splice(remainingSignalPatterns.indexOf(sixPattern), 1)
    }

    const zeroPattern = remainingSignalPatterns[0];
    map.set(0, zeroPattern);

    return map;
};

const getOutputValue = (outputValues: string[], segmentMap: Map<number, string>) => {
    let outputString = '';

    const invertedMap = new Map();
    Array.from(segmentMap.entries()).forEach(k => invertedMap.set(k[1], k[0]));

    outputValues.forEach(v => outputString += invertedMap.get(v));

    return parseInt(outputString);
};

export const part1Solution = (input: string): string => {
    const notes = parseNotes(input);

    let count = 0;
    notes.forEach(n => n.outputValues.forEach(v => [2, 3, 4, 7].includes(v.length) && count++));

    return count.toString();
};

export const part2Solution = (input: string): string => {
    const notes = parseNotes(input, true);

    const outputValues: number[] = [];

    notes.forEach(n => {
        const map = getSegmentMap(n.signalPatterns);
        const outputValue = getOutputValue(n.outputValues, map);
        outputValues.push(outputValue);
    });

    const total = sum(...outputValues);

    return total.toString();
};
