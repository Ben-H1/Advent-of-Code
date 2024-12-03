export const indexOf2d = (array: any[][], value: any) => {
    for (let y = 0; y < array.length; y++) {
        for (let x = 0; x < array[0].length; x++) {
            if (array[y][x] === value) {
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

export const stringify2d = (array: any[][], delimiter: string = '') => array.map(a => a.join(delimiter)).join('\n');
