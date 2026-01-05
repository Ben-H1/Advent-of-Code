import { sum } from '@util/math';
import get from 'lodash.get';

type File = number;

interface Directory {
    [key: string]: Directory | File;
}

const getFilesystem = (input: string): Directory => {
    const lines = input.split('\n');

    let currentDirectory: string[] = ['/'];
    let filesystem: Directory = { '/': {} };

    lines.forEach(line => {
        const splitLine = line.split(' ');

        if (splitLine[0] === '$') {
            if (splitLine[1] === 'cd') {
                if (splitLine[2] === '/') {
                    currentDirectory = ['/'];
                } else if (splitLine[2] === '..') {
                    currentDirectory.pop();
                } else {
                    currentDirectory.push(splitLine[2]);
                }
            }
        } else {
            if (splitLine[0] === 'dir') {
                const directoryName = splitLine[1];
                const currentDirectoryContent = get(filesystem, currentDirectory);
                if (!currentDirectoryContent[directoryName]) {
                    currentDirectoryContent[directoryName] = {};
                }
            } else {
                const fileName = splitLine[1];
                const fileSize = parseInt(splitLine[0]);
                const currentDirectoryContent = get(filesystem, currentDirectory);
                currentDirectoryContent[fileName] = fileSize;
            }
        }
    });

    return filesystem;
};

const getDirectorySizes = (filesystem: Directory): Record<string, number> => {
    let sizes: Record<string, number> = {};

    const getSizes = (filesystem: Directory, path: string[], sizes: Record<string, number>) => {
        Object.entries(filesystem).forEach(([key, value]) => {
            if (typeof value === 'object') {
                getSizes(value, [...path, key], sizes);
            } else if (typeof value === 'number') {
                for (let i = 1; i <= path.length; i++) {
                    const pathSlice = path.slice(0, i);
                    const pathKey = pathSlice.join('\\');

                    if (!sizes[pathKey]) sizes[pathKey] = 0;
                    sizes[pathKey] += value;
                }
            }
        });
    };

    getSizes(filesystem, [], sizes);

    return sizes;
};

export const part1Solution = (input: string): string => {
    const filesystem = getFilesystem(input);
    const directorySizes = getDirectorySizes(filesystem);

    const topDirectorySizes = Object.values(directorySizes).filter(s => s <= 100_000);
    const topDirectorySizesSum = sum(...topDirectorySizes);

    return topDirectorySizesSum.toString();
};

export const part2Solution = (input: string): string => {
    const filesystem = getFilesystem(input);
    const directorySizes = getDirectorySizes(filesystem);

    const totalDiskSpace = 70_000_000;
    const requiredDiskSpace = 30_000_000;

    const filesystemSpace = directorySizes['/'];
    const unusedSpace = totalDiskSpace - filesystemSpace;
    const spaceToFreeUp = requiredDiskSpace - unusedSpace;

    const deletableDirectorySizes = Object.values(directorySizes).filter(s => s >= spaceToFreeUp).sort((a, b) => a - b);
    const smallestDeletableDirectorySize = deletableDirectorySizes[0];

    return smallestDeletableDirectorySize.toString();
};
