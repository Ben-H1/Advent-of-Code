const getBitsByPosition = (list: string[]): string[] => {
    const bitsByPosition: string[] = [];

    for (let i = 0; i < list[0].length; i++) {
        let newRow = [];
        for (let j = 0; j < list.length; j++) {
            newRow.push(list[j][i]);
        }
        bitsByPosition.push(newRow.join(''));
    }

    return bitsByPosition;
};

const getSignificantBits = (bits: string, prefer?: string): Record<string, string> => {
    const frequencies: Record<string, number> = {};
    bits.split('').forEach(c => frequencies[c] = (frequencies[c] ?? 0) + 1);

    const characters = Object.keys(frequencies);
    characters.sort((a, b) => frequencies[b] - frequencies[a]);

    let mostSignificant = characters[0];
    let leastSignificant = characters.slice(-1)[0];

    const equal = frequencies[mostSignificant] == frequencies[leastSignificant];

    if (equal && prefer != null) {
        mostSignificant = prefer;
        leastSignificant = prefer;
    }

    return { mostSignificant, leastSignificant };
};

export const part1Solution = (input: string): string => {
    const list = input.split('\n');

    const bitsByPosition = getBitsByPosition(list);

    let gammaBits = '';
    let epsilonBits = '';

    bitsByPosition.forEach(b => {
        const { mostSignificant, leastSignificant } = getSignificantBits(b);

        gammaBits += mostSignificant;
        epsilonBits += leastSignificant;
    });

    const gammaDecimal = parseInt(gammaBits, 2);
    const epsilonDecimal = parseInt(epsilonBits, 2);

    const powerConsumption = gammaDecimal * epsilonDecimal;

    return powerConsumption.toString();
};

export const part2Solution = (input: string): string => {
    const list = input.split('\n');

    let o2CurrentPosition = 0;
    let o2FilteredList = list;

    do {
        const bitsByPosition = getBitsByPosition(o2FilteredList);
        let { mostSignificant } = getSignificantBits(bitsByPosition[o2CurrentPosition], '1');
        o2FilteredList = o2FilteredList.filter(b => b[o2CurrentPosition] == mostSignificant);
        o2CurrentPosition += 1;
    } while (o2FilteredList.length > 1);

    let co2CurrentPosition = 0;
    let co2FilteredList = list;

    do {
        const bitsByPosition = getBitsByPosition(co2FilteredList);
        let { leastSignificant } = getSignificantBits(bitsByPosition[co2CurrentPosition], '0');
        co2FilteredList = co2FilteredList.filter(b => b[co2CurrentPosition] == leastSignificant);
        co2CurrentPosition += 1;
    } while (co2FilteredList.length > 1);

    const o2Bits = o2FilteredList[0];
    const co2Bits = co2FilteredList[0];

    const o2Decimal = parseInt(o2Bits, 2);
    const co2Decimal = parseInt(co2Bits, 2);

    const lifeSupportRating = o2Decimal * co2Decimal;

    return lifeSupportRating.toString();
};
