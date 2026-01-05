import get from 'lodash.get';

type Coordinate2d = { x: number, y: number };

export const indexOf2d = (array: any[][], value: any, path?: string): Coordinate2d | undefined => {
    for (let y = 0; y < array.length; y++) {
        for (let x = 0; x < array[y].length; x++) {
            const arrayValue = path ? (typeof array[y][x] === 'object' ? get(array[y][x], path) : undefined) : array[y][x];
            if (arrayValue === value) {
                return { x, y };
            }
        }
    }
};

export const indexOfMulti2d = (array: any[][], value: any, path?: string): Coordinate2d[] => {
    const indices = [];

    for (let y = 0; y < array.length; y++) {
        for (let x = 0; x < array[y].length; x++) {
            const arrayValue = path ? (typeof array[y][x] === 'object' ? get(array[y][x], path) : undefined) : array[y][x];
            if (arrayValue === value) {
                indices.push({ x, y });
            }
        }
    }

    return indices;
};

export const indexOfMulti = (array: any[], value: any): number[] => {
    const indices: number[] = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            indices.push(i);
        }
    }

    return indices;
};

export const splitTo2d = (input: string): string[][] => {
    return input.split('\n').map(line => line.split(''));
};

type Callback2d<T, R> = (value: T, index: { x: number; y: number }, array: T[][]) => R;

export const forEach2d = <T>(array: T[][], callbackFn: Callback2d<T, void>): void => {
    for (let y = 0; y < array.length; y++) {
        for (let x = 0; x < array[y].length; x++) {
            callbackFn(array[y][x], { x, y }, array);
        }
    }
};

export const map2d = <T, R>(array: T[][], callbackFn: Callback2d<T, R>): R[][] => {
    const newArray: R[][] = [];

    for (let y = 0; y < array.length; y++) {
        const newRow: R[] = [];
        for (let x = 0; x < array[y].length; x++) {
            newRow.push(callbackFn(array[y][x], { x, y }, array));
        }
        newArray.push(newRow);
    }

    return newArray;
};

export const flatMap2d = <T, R>(array: T[][], callbackFn: Callback2d<T, R>): R[] => {
    return map2d(array, callbackFn).flat();
};

type Stringify2dOptions = {
    delimiter?: string;
    mapper?: (cell?: any, x?: number, y?: number) => string | number;
    path?: string;
};

export const stringify2d = (array: any[][], options?: Stringify2dOptions) => {
    const { delimiter, mapper, path } = options ?? {};

    return array
        .map((row, y) => row
            .map((cell, x) => mapper ? mapper(cell, x, y) : cell)
            .map(cell => path ? (typeof cell === 'object' ? get(cell, path) : '') : cell)
            .join(delimiter ?? '')
        ).join('\n');
};

export const stringify2dOld = (array: any[][], delimiter: string = '') => array.map(a => a.join(delimiter)).join('\n');
