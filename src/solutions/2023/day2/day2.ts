import { inputs } from './inputs';
import { descriptions } from './descriptions';
import { Day } from '@pages/DayTemplate';
import { sum } from '@util/math';

const parseGames = (lines: string[]) => {
    return lines.map((line) => {
        const idSplit = line.split(':');
        const id = parseInt(idSplit[0].replace('Game ', ''));

        const cubeSets = idSplit[1].split(';').map(s => s.trim());

        const rounds = cubeSets.map((set) => {
            const colorSplit = set.split(',').map(c => c.trim());

            let red = 0;
            let green = 0;
            let blue = 0;

            colorSplit.forEach((color) => {
                const numberSplit = color.split(' ');

                switch (numberSplit[1]) {
                    case 'red': {
                        red = parseInt(numberSplit[0]);
                        break;
                    }
                    case 'green': {
                        green = parseInt(numberSplit[0]);
                        break;
                    }
                    case 'blue': {
                        blue = parseInt(numberSplit[0]);
                        break;
                    }
                }
            });

            return { red, green, blue };
        });

        return { id, rounds };
    });
};

const part1Solution = (input: string): string => {
    const lines = input.split('\n');
    const games = parseGames(lines);

    const redMax = 12;
    const greenMax = 13;
    const blueMax = 14;

    const possibleIds: number[] = [];

    games.forEach((game) => {
        let impossible = false;

        game.rounds.forEach(({ red, green, blue }) => {
            if (red > redMax || green > greenMax || blue > blueMax) {
                impossible = true;
            }
        });

        if (!impossible) {
            possibleIds.push(game.id);
        }
    });

    const idSum = sum(...possibleIds);

    return idSum.toString();
};

const part2Solution = (input: string): string => {
    const lines = input.split('\n');
    const games = parseGames(lines);

    const minimumSets = games.map((game) => {
        const allRed = game.rounds.map(r => r.red);
        const allGreen = game.rounds.map(r => r.green);
        const allBlue = game.rounds.map(r => r.blue);
        
        const redMin = Math.max(...allRed);
        const greenMin = Math.max(...allGreen);
        const blueMin = Math.max(...allBlue);

        return {
            red: redMin,
            green: greenMin,
            blue: blueMin
        };
    });

    const powers = minimumSets.map(s => s.red * s.green * s.blue);

    const powerSum = sum(...powers);;

    return powerSum.toString();
};

export const day2: Day = {
    title: 'Day 2: Cube Conundrum',
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
