import { flatMap2d, forEach2d, map2d, splitTo2d } from '@util/array';

type Tree = {
    height: number;
    visible: boolean;
};

type Grid = Tree[][];

const parseGrid = (input: string): Grid => {
    const grid = splitTo2d(input);
    return map2d(grid, (tree) => ({ height: parseInt(tree), visible: false }));
};

const getVisibleCount = (grid: Grid): number => {
    let visibleCount = 0;

    forEach2d(grid, (tree) => {
        if (tree.visible) visibleCount++;
    });

    return visibleCount;
};

const getScenicScore = (grid: Grid, treeX: number, treeY: number) => {
    const thisTree = grid[treeY][treeX].height;

    // check up
    const aboveTrees: number[] = [];
    for (let y = treeY - 1; y >= 0; y--) {
        const tree = grid[y][treeX].height;
        aboveTrees.push(tree);
        if (tree >= thisTree) break;
    }

    // check down
    const belowTrees: number[] = [];
    for (let y = treeY + 1; y < grid.length; y++) {
        const tree = grid[y][treeX].height;
        belowTrees.push(tree);
        if (tree >= thisTree) break;
    }

    // check left
    const leftTrees: number[] = [];
    for (let x = treeX - 1; x >= 0; x--) {
        const tree = grid[treeY][x].height;
        leftTrees.push(tree);
        if (tree >= thisTree) break;
    }

    // check right
    const rightTrees: number[] = [];
    for (let x = treeX + 1; x < grid[treeY].length; x++) {
        const tree = grid[treeY][x].height;
        rightTrees.push(tree);
        if (tree >= thisTree) break;
    }

    return aboveTrees.length * belowTrees.length * leftTrees.length * rightTrees.length;
};

export const part1Solution = (input: string): string => {
    const grid = parseGrid(input);

    // check from top
    for (let x = 0; x < grid[0].length; x++) {
        grid[0][x].visible = true;
        let previousTrees: Tree[] = [];

        for (let y = 1; y < grid.length - 1; y++) {
            previousTrees.push(grid[y - 1][x]);
            const tree = grid[y][x];

            if (previousTrees.every(t => tree.height > t.height)) {
                tree.visible = true;
            }
        }
    }

    // check from bottom
    for (let x = 0; x < grid[0].length; x++) {
        grid[grid.length - 1][x].visible = true;
        let previousTrees: Tree[] = [];

        for (let y = grid.length - 2; y > 0; y--) {
            previousTrees.push(grid[y + 1][x]);
            const tree = grid[y][x];

            if (previousTrees.every(t => tree.height > t.height)) {
                tree.visible = true;
            }
        }
    }

    // check from left
    for (let y = 0; y < grid.length; y++) {
        grid[y][0].visible = true;
        let previousTrees: Tree[] = [];

        for (let x = 1; x < grid[0].length - 1; x++) {
            previousTrees.push(grid[y][x - 1]);
            const tree = grid[y][x];

            if (previousTrees.every(t => tree.height > t.height)) {
                tree.visible = true;
            }
        }
    }
    
    // check from right
    for (let y = 0; y < grid.length; y++) {
        grid[y][grid[0].length - 1].visible = true;
        let previousTrees: Tree[] = [];

        for (let x = grid[0].length - 2; x > 0; x--) {
            previousTrees.push(grid[y][x + 1]);
            const tree = grid[y][x];

            if (previousTrees.every(t => tree.height > t.height)) {
                tree.visible = true;
            }
        }
    }

    const visibleCount = getVisibleCount(grid);

    return visibleCount.toString();
};

export const part2Solution = (input: string): string => {
    const grid = parseGrid(input);

    const scenicScores = flatMap2d(grid, (_, { x, y }) => getScenicScore(grid, x, y));

    const highestScenicScore = Math.max(...scenicScores);

    return highestScenicScore.toString();
};
