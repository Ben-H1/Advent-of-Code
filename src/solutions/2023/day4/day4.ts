import { Day } from '@pages/DayTemplate';
import { sum } from '@util/math';
import { descriptions } from './descriptions';
import { inputs } from './inputs';

type Card = {
    id: number;
    winningNumbers: number[];
    givenNumbers: number[];
};

interface CardWithCount extends Card {
    count: number;
    matches: number[];
};

const parseCards = (lines: string[]): Card[] => {
    return lines.map((line) => {
        const idSplit = line.split(':');
        const id = parseInt(idSplit[0].replace('Card', ''));
        
        const numberSets = idSplit[1].split('|').map(s => s.trim());

        const winningNumbers = numberSets[0].split(' ').filter(s => Boolean(s)).map(s => parseInt(s));
        const givenNumbers = numberSets[1].split(' ').filter(s => Boolean(s)).map(s => parseInt(s));

        return { id, winningNumbers, givenNumbers };
    });
};

const part1Solution = (input: string): string => {
    const lines = input.split('\n');
    const cards = parseCards(lines);

    const matchingNumbers = cards.map((card) => {
        const matches: number[] = [];

        card.givenNumbers.forEach((number) => {
            if (card.winningNumbers.includes(number)) {
                matches.push(number);
            }
        });

        return matches;
    });

    const points = matchingNumbers.map((matches) => {
        if (matches.length !== 0) {
            return Math.pow(2, matches.length - 1);
        } else {
            return 0;
        }
    });

    const pointSum = sum(...points);

    return pointSum.toString();
};

const part2Solution = (input: string): string => {
    const lines = input.split('\n');
    const cards: Card[] = parseCards(lines);

    const newCards: CardWithCount[] = cards.map((card) => {
        const matches: number[] = [];

        card.givenNumbers.forEach((number) => {
            if (card.winningNumbers.includes(number)) {
                matches.push(number);
            }
        });

        return { ...card, matches, count: 1 };
    });

    newCards.forEach((card) => {
        const nextId = card.id + 1;
        const matchCount = card.matches.length;

        const copyIds = [...Array(matchCount).keys()].map(i => i += nextId);

        for (let i = 0; i < card.count; i++) {
            copyIds.forEach((id) => {
                const cardToCopy = newCards.find(c => c.id === id);
                if (cardToCopy) {
                    cardToCopy.count++;
                }
            });
        }
    });

    const cardCounts = newCards.map(c => c.count);

    const cardSum = sum(...cardCounts);

    return cardSum.toString();
};

export const day4: Day = {
    title: 'Day 4: Scratchcards',
    link: '/2023/day4',
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
