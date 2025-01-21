const parseGraph = (input: string) => {
    const graph: Record<string, string[]> = {};

    input.split('\n').forEach(l => {
        const splitLine = l.split('-');

        if (!graph[splitLine[0]]) {
            graph[splitLine[0]] = [];
        }

        graph[splitLine[0]].push(splitLine[1]);

        if (!graph[splitLine[1]]) {
            graph[splitLine[1]] = [];
        }

        graph[splitLine[1]].push(splitLine[0]);
    });

    Object.keys(graph).forEach(k => graph[k] = graph[k].filter(v => v !== 'start'));
    delete graph.end;

    return graph;
};

export const part1Solution = (input: string): string => {
    const graph = parseGraph(input);

    console.log(graph);

    return 'Part 1 solution';
};

export const part2Solution = (input: string): string => {
    return 'Part 2 solution';
};
