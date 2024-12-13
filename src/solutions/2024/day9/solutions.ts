import { sum } from '@util/math';

enum BlockType {
    File = 'file',
    Free = 'free'
}

type Block = {
    type: BlockType;
    id: number | null;
};

type BlockWithSize = Block & {
    size: number;
};

type BlockMap = BlockWithSize[];
type DiskMap = Block[];

const parseBlockMap = (input: string): BlockMap => {
    let currentId = 0;
    return input.split('').map((m, i) => {
        let block: BlockWithSize;

        if (i % 2 === 0) {
            block = {
                type: BlockType.File,
                id: currentId,
                size: parseInt(m)
            };
            currentId++;
        } else {
            block = {
                type: BlockType.Free,
                id: null,
                size: parseInt(m)
            }
        }

        return block;
    });
};

const blockMapToDiskMap = (blockMap: BlockMap): DiskMap => {
    const diskMap: Block[] = [];
    blockMap.forEach(b => {
        for (let i = 0; i < b.size; i++) {
            diskMap.push({
                type: b.type,
                id: b.id
            });
        }
    });

    return diskMap;
};

const parseDiskMap = (input: string): DiskMap => {
    const blockMap = parseBlockMap(input);
    const diskMap = blockMapToDiskMap(blockMap);

    return diskMap;
};

const checkContiguous = (diskMap: DiskMap): boolean => {
    const firstFreeIndex = diskMap.findIndex(b => b.type === BlockType.Free);

    let isContiguous = true;
    let i = firstFreeIndex;

    do {
        if (diskMap[i].type === BlockType.File) {
            isContiguous = false;
        }
    
        i++;
    } while (isContiguous && i < diskMap.length);

    return isContiguous;
};

const stringifyBlockMap = (blockMap: BlockMap): string => {
    let string = '';
    blockMap.forEach(b => {
        for (let i = 0; i < b.size; i++) {
            string += b.id != null ? b.id.toString() : '.';
        }
    });

    return string;
};

const stringifyDiskMap = (diskMap: DiskMap): string => {
    return diskMap.map(b => b.id != null ? b.id.toString() : '.').join('');
};

export const part1Solution = (input: string): string => {
    const diskMap = parseDiskMap(input);

    let i = diskMap.length - 1;
    do {
        const currentBlock = diskMap[i];

        if (currentBlock.type === BlockType.File) {
            const firstFreeIndex = diskMap.findIndex(b => b.type === BlockType.Free);

            const freeBlockCopy = JSON.parse(JSON.stringify(diskMap[firstFreeIndex]));
            const currentBlockCopy = JSON.parse(JSON.stringify(currentBlock));

            diskMap[firstFreeIndex] = currentBlockCopy;
            diskMap[i] = freeBlockCopy;
        }
        
        i--;
    } while (!checkContiguous(diskMap));

    const multipliedIds = diskMap.map((b, i) => b.id != null ? b.id * i : 0);
    const checksum = sum(...multipliedIds);

    return checksum.toString();
};

export const part2Solution = (input: string): string => {
    let blockMap = parseBlockMap(input);

    for (let i = blockMap.length - 1; i > 0; i--) {
        const currentBlock = blockMap[i];

        if (currentBlock.type === BlockType.File) {
            let swapped = false;

            for (let j = 0; j < i; j++) {
                if (
                    !swapped &&
                    blockMap[j].type === BlockType.Free &&
                    blockMap[j].size >= currentBlock.size
                ) {
                    const freeBlockCopy = JSON.parse(JSON.stringify(blockMap[j]));
                    const currentBlockCopy = JSON.parse(JSON.stringify(currentBlock));
                    const blockMapCopy = JSON.parse(JSON.stringify(blockMap));

                    const sizeDifference = freeBlockCopy.size - currentBlockCopy.size;
                    const differenceBlock = {
                        type: BlockType.Free,
                        size: sizeDifference
                    };

                    freeBlockCopy.size = freeBlockCopy.size - sizeDifference;
                    blockMapCopy[j] = [currentBlockCopy, differenceBlock];
                    blockMapCopy[i] = freeBlockCopy;

                    blockMap = blockMapCopy.flat();
                    swapped = true;
                }
            }
        }
    }

    const diskMap = blockMapToDiskMap(blockMap);
    const multipliedIds = diskMap.map((b, i) => b.id != null ? b.id * i : 0);
    const checksum = sum(...multipliedIds);

    return checksum.toString();
};
