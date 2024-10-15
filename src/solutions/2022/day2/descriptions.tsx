import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>The Elves begin to set up camp on the beach. To decide whose tent gets to be closest to the snack storage, a giant <Link link='https://en.wikipedia.org/wiki/Rock_paper_scissors'>Rock Paper Scissors</Link> tournament is already in progress.</p><br/>
    <p>Rock Paper Scissors is a game between two players. Each game contains many rounds; in each round, the players each simultaneously choose one of Rock, Paper, or Scissors using a hand shape. Then, a winner for that round is selected: Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. If both players choose the same shape, the round instead ends in a draw.</p><br/>
    <p>Appreciative of your help yesterday, one Elf gives you an <Glow>encrypted strategy guide</Glow> (your puzzle input) that they say will be sure to help you win. "The first column is what your opponent is going to play: <Code>A</Code> for Rock, <Code>B</Code> for Paper, and <Code>C</Code> for Scissors. The second column--" Suddenly, the Elf is called away to help with someone's tent.</p><br/>
    <p>The second column, you reason, must be what you should play in response: <Code>X</Code> for Rock, <Code>Y</Code> for Paper, and <Code>Z</Code> for Scissors. Winning every time would be suspicious, so the responses must have been carefully chosen.</p><br/>
    <p>The winner of the whole tournament is the player with the highest score. Your <Glow>total score</Glow> is the sum of your scores for each round. The score for a single round is the score for the <Glow>shape you selected</Glow> (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the <Glow>outcome of the round</Glow> (0 if you lost, 3 if the round was a draw, and 6 if you won).</p><br/>
    <p>Since you can't be sure if the Elf is trying to help you or trick you, you should calculate the score you would get if you were to follow the strategy guide.</p><br/>
    <p>For example, suppose you were given the following strategy guide:</p><br/>
    <CodeBlock>
        A Y<br/>
        B X<br/>
        C Z
    </CodeBlock><br/>
    <p>This strategy guide predicts and recommends the following:</p><br/>
    <List>
        <li>In the first round, your opponent will choose Rock (<Code>A</Code>), and you should choose Paper (<Code>Y</Code>). This ends in a win for you with a score of <Glow>8</Glow> (2 because you chose Paper + 6 because you won).</li>
        <li>In the second round, your opponent will choose Paper (<Code>B</Code>), and you should choose Rock (<Code>X</Code>). This ends in a loss for you with a score of <Glow>1</Glow> (1 + 0).</li>
        <li>The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = <Glow>6</Glow>.</li>
    </List><br/>
    <p>In this example, if you were to follow the strategy guide, you would get a total score of <Code><Glow>15</Glow></Code> (8 + 1 + 6).</p><br/>
    <p><Glow>What would your total score be if everything goes exactly according to your strategy guide?</Glow></p>
</>);

export const part2Description = (<>
    <p>The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end: <Code>X</Code> means you need to lose, <Code>Y</Code> means you need to end the round in a draw, and <Code>Z</Code> means you need to win. Good luck!"</p><br/>
    <p>The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:</p><br/>
    <List>
        <li>In the first round, your opponent will choose Rock (<Code>A</Code>), and you need the round to end in a draw (<Code>Y</Code>), so you also choose Rock. This gives you a score of 1 + 3 = <Glow>4</Glow>.</li>
        <li>In the second round, your opponent will choose Paper (<Code>B</Code>), and you choose Rock so you lose (<Code>X</Code>) with a score of 1 + 0 = <Glow>1</Glow>.</li>
        <li>In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = <Glow>7</Glow>.</li>
    </List><br/>
    <p>Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of <Code><Glow>12</Glow></Code>.</p><br/>
    <p>Following the Elf's instructions for the second column, <Glow>what would your total score be if everything goes exactly according to your strategy guide?</Glow></p>
</>);
