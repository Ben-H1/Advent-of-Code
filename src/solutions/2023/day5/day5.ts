import { Day } from '@pages/DayTemplate';
import { descriptions } from './descriptions';
import { inputs } from './inputs';

type SeedRange = {
    seedStart: number;
    seedEnd: number;
    rangeLength: number;
};

type Range = {
    destinationStart: number;
    destinationEnd: number;
    sourceStart: number;
    sourceEnd: number;
    difference: number;
    rangeLength: number;
};

type Almanac = {
    seeds: number[];
    seedRanges: SeedRange[];
    seedToSoilRanges: Range[];
    soilToFertilizerRanges: Range[],
    fertilizerToWaterRanges: Range[],
    waterToLightRanges: Range[],
    lightToTemperatureRanges: Range[],
    temperatureToHumidityRanges: Range[],
    humidityToLocationRanges: Range[]
};

const parseSeeds = (seeds: number[]): SeedRange[] => {
    const seedPairs = Array.from({ length: Math.ceil(seeds.length / 2) }, (_, i) => seeds.slice(i * 2, i * 2 + 2));
    
    return seedPairs.map((seedPair) => {
        const seedStart = seedPair[0];
        const rangeLength = seedPair[1];
        const seedEnd = seedStart + rangeLength - 1;

        return {
            seedStart,
            seedEnd,
            rangeLength
        };
    });
};

const parseMap = (map: string): Range[] => {
    return map.split('\n').slice(1).map((range) => {
        const rangeSplit = range.split(' ');

        const destinationStart = parseInt(rangeSplit[0]);
        const sourceStart = parseInt(rangeSplit[1]);
        const rangeLength = parseInt(rangeSplit[2]);

        const destinationEnd = destinationStart + rangeLength - 1;
        const sourceEnd = sourceStart + rangeLength - 1;
        const difference = destinationStart - sourceStart;

        return {
            destinationStart, destinationEnd,
            sourceStart, sourceEnd,
            difference,
            rangeLength
        };
    });
};

const parseAlmanac = (input: string): Almanac => {
    const mapSplit = input.split('\n\n');

    const seeds = mapSplit[0].replace('seeds: ', '').split(' ').map(s => parseInt(s))

    return {
        seeds,
        seedRanges: parseSeeds(seeds),
        seedToSoilRanges: parseMap(mapSplit[1]),
        soilToFertilizerRanges: parseMap(mapSplit[2]),
        fertilizerToWaterRanges: parseMap(mapSplit[3]),
        waterToLightRanges: parseMap(mapSplit[4]),
        lightToTemperatureRanges: parseMap(mapSplit[5]),
        temperatureToHumidityRanges: parseMap(mapSplit[6]),
        humidityToLocationRanges: parseMap(mapSplit[7])
    };
};

const checkRanges = (value: number, ranges: Range[]) => {
    let mappedValue;

    ranges.forEach((range) => {
        if (value >= range.sourceStart && value <= range.sourceEnd) {
            mappedValue = value + range.difference;
        }
    });

    return mappedValue ?? value;
};

const checkAlmanac = (seed: number, almanac: Almanac) => {
    const soil = checkRanges(seed, almanac.seedToSoilRanges);
    const fertilizer = checkRanges(soil, almanac.soilToFertilizerRanges);
    const water = checkRanges(fertilizer, almanac.fertilizerToWaterRanges);
    const light = checkRanges(water, almanac.waterToLightRanges);
    const temperature = checkRanges(light, almanac.lightToTemperatureRanges);
    const humidity = checkRanges(temperature, almanac.temperatureToHumidityRanges);
    const location = checkRanges(humidity, almanac.humidityToLocationRanges);

    return location;
};

const part1Solution = (input: string): string => {
    const almanac = parseAlmanac(input);

    const locations = almanac.seeds.map(s => checkAlmanac(s, almanac));

    const lowestLocation = Math.min(...locations);

    return lowestLocation.toString();
};

const part2Solution = (input: string): string => {
    const almanac = parseAlmanac(input);
    
    let lowestLocation: number | undefined;

    almanac.seedRanges.forEach((seedRange, i) => {
        console.log(`Processing seed range ${i + 1} of ${almanac.seedRanges.length}: ${seedRange.seedStart} to ${seedRange.seedEnd}`);

        for (let j = seedRange.seedStart; j <= seedRange.seedEnd; j++) {
            const location = checkAlmanac(j, almanac);

            if (!lowestLocation) {
                lowestLocation = location;
            } else {
                if (location < lowestLocation) {
                    lowestLocation = location;
                }
            }
        }
    });

    return lowestLocation?.toString() ?? '';
};

export const day5: Day = {
    title: 'Day 5: If You Give A Seed A Fertilizer',
    stars: 2,
    part1: {
        description: descriptions.part1Description,
        solution: part1Solution,
        exampleInput: inputs.part1.exampleInput,
        givenInput: inputs.part1.givenInput
    },
    part2: {
        description: descriptions.part2Description,
        solution: part2Solution,
        exampleInput: inputs.part2.exampleInput,
        givenInput: inputs.part2.givenInput
    }
};
