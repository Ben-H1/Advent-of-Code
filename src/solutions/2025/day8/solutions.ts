import { product } from '@util/math';

type Coordinate = {
    x: number;
    y: number;
    z: number;
};

type Length = {
    boxes: Coordinate[],
    length: number;
};

const parseJunctionBoxes = (input: string): Coordinate[] => {
    return input.split('\n').map(line => {
        const [x, y, z] = line.split(',');
        return { x: parseInt(x), y: parseInt(y), z: parseInt(z) };
    });
};

const getLengths = (junctionBoxes: Coordinate[]): Length[] => {
    const lengths = [];

    for (let i = 0; i < junctionBoxes.length; i++) {
        for (let j = i + 1; j < junctionBoxes.length; j++) {
            const box1 = junctionBoxes[i];
            const box2 = junctionBoxes[j];

            const length = Math.hypot(box2.x - box1.x, box2.y - box1.y, box2.z - box1.z);

            lengths.push({ boxes: [box1, box2], length });
        }
    }

    lengths.sort((a, b) => a.length - b.length);

    return lengths;
};

export const part1Solution = (input: string): string => {
    const junctionBoxes = parseJunctionBoxes(input);
    const lengths = getLengths(junctionBoxes);

    const circuits: Coordinate[][] = [];

    const iterations = junctionBoxes.length <= 20 ? 10 : 1000; // Check if it's the example

    for (let i = 0; i < iterations; i++) {
        const length = lengths[i];

        const firstCircuitIndex = circuits.findIndex(circuit => circuit.find(box => JSON.stringify(length.boxes[0]) === JSON.stringify(box)));
        const secondCircuitIndex = circuits.findIndex(circuit => circuit.find(box => JSON.stringify(length.boxes[1]) === JSON.stringify(box)));

        if (firstCircuitIndex === -1 && secondCircuitIndex === -1) {
            circuits.push(length.boxes);
        } else if (firstCircuitIndex !== -1 && secondCircuitIndex !== -1) {
            if (firstCircuitIndex !== secondCircuitIndex) {
                const secondCircuit = circuits[secondCircuitIndex];
                circuits[firstCircuitIndex] = Array.from(new Set([...circuits[firstCircuitIndex], ...secondCircuit, ...length.boxes]));
                circuits.splice(secondCircuitIndex, 1);
            }
        } else {
            const circuitIndex = Math.max(firstCircuitIndex, secondCircuitIndex);
            circuits[circuitIndex] = Array.from(new Set([...circuits[circuitIndex], ...length.boxes]));
        }
    }

    circuits.sort((a, b) => b.length - a.length);

    const topThreeCircuits = [circuits[0], circuits[1], circuits[2]];
    const topThreeCircuitLengths = topThreeCircuits.map(circuit => circuit.length);
    const topThreeProduct = product(...topThreeCircuitLengths);

    return topThreeProduct.toString();
};

export const part2Solution = (input: string): string => {
    const junctionBoxes = parseJunctionBoxes(input);
    const lengths = getLengths(junctionBoxes);

    const circuits: Coordinate[][] = [];
    let lastAddedPair: Coordinate[] = [];

    for (let i = 0; i < lengths.length; i++) {
        const length = lengths[i];

        const firstCircuitIndex = circuits.findIndex(circuit => circuit.find(box => JSON.stringify(length.boxes[0]) === JSON.stringify(box)));
        const secondCircuitIndex = circuits.findIndex(circuit => circuit.find(box => JSON.stringify(length.boxes[1]) === JSON.stringify(box)));

        if (firstCircuitIndex === -1 && secondCircuitIndex === -1) {
            circuits.push(length.boxes);
            lastAddedPair = length.boxes;
        } else if (firstCircuitIndex !== -1 && secondCircuitIndex !== -1) {
            if (firstCircuitIndex !== secondCircuitIndex) {
                const secondCircuit = circuits[secondCircuitIndex];
                circuits[firstCircuitIndex] = Array.from(new Set([...circuits[firstCircuitIndex], ...secondCircuit, ...length.boxes]));
                circuits.splice(secondCircuitIndex, 1);
                lastAddedPair = length.boxes;
            }
        } else {
            const circuitIndex = Math.max(firstCircuitIndex, secondCircuitIndex);
            circuits[circuitIndex] = Array.from(new Set([...circuits[circuitIndex], ...length.boxes]));
            lastAddedPair = length.boxes;
        }
    }

    const lastAddedPairXCoordinates = lastAddedPair.map(box => box.x);
    const lastAddedPairXCoordinatesProduct = product(...lastAddedPairXCoordinates);

    return lastAddedPairXCoordinatesProduct.toString();
};
