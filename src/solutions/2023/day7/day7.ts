import { Day } from '@pages/DayTemplate';
import { descriptions } from './descriptions';
import { inputs } from './inputs';

enum HandType {
    FiveOfAKind = '5oak',
    FourOfAKind = '4oak',
    FullHouse = 'fh',
    ThreeOfAKind = '3oak',
    TwoPair = '2p',
    OnePair = '1p',
    HighCard = 'hk'
}

const handTypeValues = {
    [HandType.FiveOfAKind]: 7,
    [HandType.FourOfAKind]: 6,
    [HandType.FullHouse]: 5,
    [HandType.ThreeOfAKind]: 4,
    [HandType.TwoPair]: 3,
    [HandType.OnePair]: 2,
    [HandType.HighCard]: 1
};

const cardValues: Record<string, number> = {
    A: 13,
    K: 12,
    Q: 11,
    J: 10,
    T: 9,
    9: 8,
    8: 7,
    7: 6,
    6: 5,
    5: 4,
    4: 3,
    3: 2,
    2: 1
};

const getHandType = (hand: string) => {
    const cards = hand.split('');

    const counts = Array.from(new Set(cards)).map((card) => {
        const found = hand.match(new RegExp(card, 'g')) ?? [];
        return { card, count: found.length };
    });

    if (counts.some(c => c.count === 5)) {
        return HandType.FiveOfAKind;
    } else if (counts.some(c => c.count === 4)) {
        return HandType.FourOfAKind;
    } else if (counts.some(c => c.count === 2) && counts.some(c => c.count === 3)) {
        return HandType.FullHouse;
    } else if (counts.some(c => c.count === 3) && !counts.some(c => c.count === 2)) {
        return HandType.ThreeOfAKind;
    } else if (counts.filter(c => c.count === 2).length === 2) {
        return HandType.TwoPair;
    } else if (counts.filter(c => c.count === 2).length === 1) {
        return HandType.OnePair;
    } else {
        return HandType.HighCard;
    }
};

const part1Solution = (input: string): string => {
    const lines = input.split('\n');

    const hands = lines.map((line) => {
        const handBidSplit = line.split(' ');

        const hand = handBidSplit[0];
        const cards = hand.split('');
        const bid = parseInt(handBidSplit[1]);

        const type = getHandType(hand);

        return { hand, cards, bid, type, typeValue: handTypeValues[type] };
    });

    const sortedHands = [...hands].sort((a, b) => {
        if (a.typeValue === b.typeValue) {
            let sortValue = 0;
            let i = 0;

            do {
                sortValue = cardValues[a.cards[i]] - cardValues[b.cards[i]];
                i++;
            } while (sortValue === 0 && i < a.cards.length);

            return sortValue;
        } else {
            return a.typeValue - b.typeValue;
        }
    });

    const winnings = sortedHands.map(h => h.bid).reduce((a, b, i) => a + (b * (i + 1)));

    return winnings.toString();
};

const part2Solution = (input: string): string => {
    return '';
};

export const day7: Day = {
    title: 'Day 7: Camel Cards',
    stars: 1,
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
