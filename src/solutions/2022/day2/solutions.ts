const getPlayValue = (letter: string) => {
    switch (letter) {
        case 'A':
        case 'X':
            return 'R';
        case 'B':
        case 'Y':
            return 'P';
        case 'C':
        case 'Z':
            return 'S';
    }
};

const getEndValue = (letter: string) => ({
    'X': 'L',
    'Y': 'D',
    'Z': 'W'
})[letter];

const loseScore = 0;
const drawScore = 3;
const winScore = 6;

const calculateScore = (opponentPlay: string, myPlay: string) => {
    let score = 0;

    if (opponentPlay == myPlay) {
        score += drawScore;
    } else if ((myPlay == 'R' && opponentPlay == 'S') || (myPlay == 'P' && opponentPlay == 'R') || (myPlay == 'S' && opponentPlay == 'P')) {
        score += winScore;
    } else {
        score += loseScore;
    }

    score += ({ 'R': 1, 'P': 2, 'S': 3 })[myPlay]!;

    return score;
};

export const part1Solution = (input: string): string => {
    const splitInput = input.split('\n');

    let totalScore = 0;

    for (let i = 0; i < splitInput.length; i++) {
        const round = splitInput[i];
        const opponentPlay = getPlayValue(round[0].toUpperCase());
        const myPlay = getPlayValue(round[2].toUpperCase());

        totalScore += calculateScore(opponentPlay!, myPlay!);
    }

    return totalScore.toString();
};

export const part2Solution = (input: string): string => {
    const splitInput = input.split('\n');

    let totalScore = 0;

    for (let i = 0; i < splitInput.length; i++) {
        const round = splitInput[i];
        const opponentPlay = getPlayValue(round[0].toUpperCase());

        let myPlay;
        const end = getEndValue(round[2].toUpperCase());

        switch (end) {
            case 'D': {
                myPlay = opponentPlay;
                break;
            }
            case 'L': {
                myPlay = ({ 'R': 'S', 'P': 'R', 'S': 'P' })[opponentPlay!];
                break;
            }
            case 'W': {
                myPlay = ({ 'R': 'P', 'P': 'S', 'S': 'R' })[opponentPlay!];
                break;
            }
        }

        totalScore += calculateScore(opponentPlay!, myPlay!);
    }

    return totalScore.toString();
};
