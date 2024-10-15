import { product } from '@util/math';

type Possibility = {
    holdLength: number;
    distance: number;
};

type Race = {
    raceLength: number;
    recordDistance: number;
    possibilities: Possibility[];
    winningPossibilities: Possibility[];
};

const parseRaces = (input: string): Race[] => {
    const lines = input.split('\n');

    const times = lines[0].replace('Time:', '').split(' ').filter(s => Boolean(s)).map(s => parseInt(s));
    const distances = lines[1].replace('Distance:', '').split(' ').filter(s => Boolean(s)).map(s => parseInt(s));

    const races = times.map((time, i) => {
        return {
            raceLength: time,
            recordDistance: distances[i],
            possibilities: [],
            winningPossibilities: []
        };
    });

    return races;
};

export const part1Solution = (input: string): string => {
    let races = parseRaces(input);

    races.forEach((race) => {
        for (let i = 0; i <= race.raceLength; i++) {
            const remainingTime = race.raceLength - i;
            const distance = remainingTime * i;
            race.possibilities.push({ holdLength: i, distance });
        }
    });

    races.forEach((race) => {
        race.winningPossibilities = race.possibilities.filter(p => p.distance > race.recordDistance);
    });

    const winningPossibilityCounts = races.map(r => r.winningPossibilities.length);

    const winningPossibilityProduct = product(...winningPossibilityCounts);

    return winningPossibilityProduct.toString();
};

export const part2Solution = (input: string): string => {
    let races = parseRaces(input);

    const race: Race = {
        raceLength: parseInt(races.map(r => r.raceLength).join('')),
        recordDistance: parseInt(races.map(r => r.recordDistance).join('')),
        possibilities: [],
        winningPossibilities: []
    };

    for (let i = 0; i <= race.raceLength; i++) {
        const remainingTime = race.raceLength - i;
        const distance = remainingTime * i;
        race.possibilities.push({ holdLength: i, distance });
    }

    race.winningPossibilities = race.possibilities.filter(p => p.distance > race.recordDistance);

    const winningPossibilityCount = race.winningPossibilities.length;

    return winningPossibilityCount.toString();
};
