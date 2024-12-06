import get from 'lodash.get';

export const indexOf2d = (array: any[][], value: any, path?: string) => {
    for (let y = 0; y < array.length; y++) {
        for (let x = 0; x < array[0].length; x++) {
            const arrayValue = path ? get(array[y][x], path) : array[y][x];
            if (arrayValue === value) {
                return { x, y };
            }
        }
    }
};

export const indexOfMulti = (array: any[], value: any) => {
    const indices: number[] = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            indices.push(i);
        }
    }

    return indices;
};

type Stringify2dOptions = {
    delimiter?: string;
    mapper?: (cell?: any, x?: number, y?: number) => string | number;
    path?: string;
};

export const stringify2d = (array: any[][], options?: Stringify2dOptions) => {
    const delimiter = options?.delimiter;
    const mapper = options?.mapper;
    const path = options?.path;

    return array
        .map((row, y) => row
            .map((cell, x) => mapper ? mapper(cell, x, y) : cell)
            .map(cell => path ? get(cell, path) : cell)
            .join(delimiter ?? '')
        ).join('\n');
};

export const stringify2dOld = (array: any[][], delimiter: string = '') => array.map(a => a.join(delimiter)).join('\n');
