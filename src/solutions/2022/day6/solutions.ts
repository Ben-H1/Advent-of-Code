const getUniqueIndex = (input: string, bufferSize: number) => {
    const buffer = [];

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        buffer.push(char);
    
        if (buffer.length > bufferSize) {
            buffer.shift();
        }
    
        const uniqueBuffer = new Set(buffer);
    
        if (buffer.length == bufferSize && uniqueBuffer.size == buffer.length) {
            return i + 1;
        }
    }
};

export const part1Solution = (input: string): string => {
    const packetMarkerIndex = getUniqueIndex(input, 4)!;

    return packetMarkerIndex.toString();
};

export const part2Solution = (input: string): string => {
    const packetMarkerIndex = getUniqueIndex(input, 14)!;

    return packetMarkerIndex.toString();
};
