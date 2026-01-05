import { sum } from '@util/math';

enum ShapeCell {
    Present = '#',
    Empty = '.'
};

type Shape = string[][];

type Region = {
    width: number;
    length: number;
    presentCounts: number[];
};

type ShapesAndRegions = {
    shapes: Shape[];
    regions: Region[];
};

const parseShapesAndRegions = (input: string): ShapesAndRegions => {
    const splitInput = input.split('\n\n');

    const shapeStrings = splitInput.slice(0, splitInput.length - 1);
    const regionsString = splitInput[splitInput.length - 1];

    const shapes = shapeStrings.map(string => {
        const [_, ...lines] = string.split('\n');
        return lines.map(l => l.split('').map(c => c as ShapeCell));
    });

    const regions = regionsString.split('\n').map(string => {
        const [sizeString, presentCountsString] = string.split(': ');
        const [width, length] = sizeString.split('x').map(Number);
        const presentCounts = presentCountsString.split(' ').map(Number);

        return { width, length, presentCounts };
    });

    return { shapes, regions };
};

export const part1Solution = (input: string): string => {
    const { shapes, regions } = parseShapesAndRegions(input);
    
    const shapeAreas = shapes.map(shape => shape.flat().filter(c => c === ShapeCell.Present).length);

    const validRegions = regions
        .map(region => {
            const regionArea = region.width * region.length;

            const presentAreas = region.presentCounts
                .map((c, i) => c > 0 ? shapeAreas[i] * c : 0)
                .filter(area => area > 0);

            const presentsArea = sum(...presentAreas);

            return { regionArea, presentsArea };
        })
        .filter(({ regionArea, presentsArea }) => regionArea > presentsArea);

    const validRegionCount = validRegions.length;

    return validRegionCount.toString();
};

export const part2Solution = (input: string): string => {
    return 'Part 2 solution';
};
