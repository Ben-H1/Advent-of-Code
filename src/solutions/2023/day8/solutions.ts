import { leastCommonMultiple } from '@util/math';

const parseNetwork = (input: string) => {
    const instructionNetworkSplit = input.split('\n\n');
    const instructions = instructionNetworkSplit[0].split('');

    const nodes = instructionNetworkSplit[1].split('\n').map((line) => {
        const nodeSplit = line.split(' = ');
        const name = nodeSplit[0];

        const leftRightSplit = nodeSplit[1].split(', ');
        const left = leftRightSplit[0].replace('(', '');
        const right = leftRightSplit[1].replace(')', '');

        return { name, left, right };
    });

    const networkMap = new Map();

    nodes.forEach((node) => {
        networkMap.set(node.name, { left: node.left, right: node.right });
    });

    return { instructions, networkMap };
};

export const part1Solution = (input: string): string => {
    const network = parseNetwork(input);

    let currentNode = 'AAA';
    let steps = 0;

    do {
        const instruction = network.instructions[steps % network.instructions.length];
        const node = network.networkMap.get(currentNode);

        if (instruction === 'L') {
            currentNode = node.left;
        } else {
            currentNode = node.right;
        }

        steps++;
    } while (currentNode !== 'ZZZ');

    return steps.toString();
};

export const part2Solution = (input: string): string => {
    const network = parseNetwork(input);
    
    const startingNodes = Array.from(network.networkMap.keys()).filter(k => k.split('').pop() === 'A');

    const stepCounts = startingNodes.map((startingNode) => {
        let currentNode = startingNode;
        let steps = 0;
        
        do {
            const instruction = network.instructions[steps % network.instructions.length];
            const node = network.networkMap.get(currentNode);
            
            if (instruction === 'L') {
                currentNode = node.left;
            } else {
                currentNode = node.right;
            }
            
            steps++;
        } while (currentNode.split('').pop() !== 'Z');

        return steps;
    });

    const steps = leastCommonMultiple(...stepCounts);

    return steps.toString();
};
