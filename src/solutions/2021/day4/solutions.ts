import { sum } from '@util/math';

type BoardValue = {
    value: number;
    marked: boolean;
};

type Board = BoardValue[][];

type WinnerInfo = {
    board: Board,
    boardIndex: number;
    draw: number;
    type: string,
    index: number;
};

const parseBoard = (input: string): Board => {
    return input
        .split('\n')
        .map(l => l
            .split(' ')
            .filter(v => v !== '')
            .map(n => parseInt(n))
            .map(n => ({ value: n, marked: false }))
        );
};

const parseBingo = (input: string) => {
    const splitInput = input.split('\n\n');

    const draws = splitInput.splice(0, 1)[0].split(',').map(n => parseInt(n));

    const boards = splitInput.map(s => parseBoard(s));

    return { draws, boards };
};

const markValueOnBoard = (board: Board, value: number) => {
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[0].length; x++) {
            if (board[y][x].value === value) {
                board[y][x].marked = true;
            }
        }
    }
};

const checkBoard = (board: Board) => {
    let winnerInfo;

    for (let y = 0; y < board.length; y++) {
        let winner = true;

        for (let x = 0; x < board[0].length; x++) {
            if (!board[y][x].marked) {
                winner = false;
            }
        }

        if (winner) {
            winnerInfo = {
                type: 'row',
                index: y
            };
        }
    }

    for (let x = 0; x < board[0].length; x++) {
        let winner = true;

        for (let y = 0; y < board.length; y++) {
            if (!board[y][x].marked) {
                winner = false;
            }
        }

        if (winner) {
            winnerInfo = {
                type: 'column',
                index: x
            };
        }
    }

    return winnerInfo;
};

const getBoardScore = (board: Board, draw: number) => {
    const unmarkedNumbers = board.map(r => r.filter(v => !v.marked).map(v => v.value)).flat();
    const unmarkedSum = sum(...unmarkedNumbers);

    return unmarkedSum * draw;
};

export const part1Solution = (input: string): string => {
    const bingo = parseBingo(input);

    let drawIndex = 0;
    let winner: WinnerInfo | undefined;

    do {
        const draw = bingo.draws[drawIndex];

        bingo.boards.forEach((b, i) => {
            markValueOnBoard(b, draw);

            const winnerInfo = checkBoard(b);

            if (winnerInfo) {
                winner = { board: b, boardIndex: i, draw, ...winnerInfo };
            }
        });

        drawIndex++;
    } while (winner == null && drawIndex < bingo.draws.length);

    if (!winner) {
        return 'No winner';
    }

    const score = getBoardScore(winner.board, winner.draw);

    return score.toString();
};

export const part2Solution = (input: string): string => {
    const bingo = parseBingo(input);

    let drawIndex = 0;
    let winners: WinnerInfo[] = [];

    do {
        const draw = bingo.draws[drawIndex];

        bingo.boards.forEach((b, i) => {
            markValueOnBoard(b, draw);
            const winnerInfo = checkBoard(b);
            if (winnerInfo) {
                if (!winners.map(w => w.boardIndex).includes(i)) {
                    winners.push({ board: b, boardIndex: i, draw, ...winnerInfo });
                }
            }
        });
    
        drawIndex++;
    } while (winners.length < bingo.boards.length);

    const lastWinner = winners.slice(-1)[0];
    const score = getBoardScore(lastWinner.board, lastWinner.draw);

    return score.toString();
};
