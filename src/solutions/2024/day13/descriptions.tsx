import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>Next up: the <Link link='https://adventofcode.com/2020/day/24'>lobby</Link> of a resort on a tropical island. The Historians take a moment to admire the hexagonal floor tiles before spreading out.</p><br />
    <p>Fortunately, it looks like the resort has a new <Link link='https://en.wikipedia.org/wiki/Amusement_arcade'>arcade</Link>! Maybe you can win some prizes from the <Link link='https://en.wikipedia.org/wiki/Claw_machine'>claw machines</Link>?</p><br />
    <p>The claw machines here are a little unusual. Instead of a joystick or directional buttons to control the claw, these machines have two buttons labeled <Code>A</Code> and <Code>B</Code>. Worse, you can't just put in a token and play; it costs <Glow>3 tokens</Glow> to push the <Code>A</Code> button and <Glow>1 token</Glow> to push the <Code>B</Code> button.</p><br />
    <p>With a little experimentation, you figure out that each machine's buttons are configured to move the claw a specific amount to the <Glow>right</Glow> (along the <Code>X</Code> axis) and a specific amount <Glow>forward</Glow> (along the <Code>Y</Code> axis) each time that button is pressed.</p><br />
    <p>Each machine contains one <Glow>prize</Glow>; to win the prize, the claw must be positioned <Glow>exactly</Glow> above the prize on both the <Code>X</Code> and <Code>Y</Code> axes.</p><br />
    <p>You wonder: what is the smallest number of tokens you would have to spend to win as many prizes as possible? You assemble a list of every machine's button behavior and prize location (your puzzle input). For example:</p><br />
    <CodeBlock>
        Button A: X+94, Y+34<br />
        Button B: X+22, Y+67<br />
        Prize: X=8400, Y=5400<br />
        <br />
        Button A: X+26, Y+66<br />
        Button B: X+67, Y+21<br />
        Prize: X=12748, Y=12176<br />
        <br />
        Button A: X+17, Y+86<br />
        Button B: X+84, Y+37<br />
        Prize: X=7870, Y=6450<br />
        <br />
        Button A: X+69, Y+23<br />
        Button B: X+27, Y+71<br />
        Prize: X=18641, Y=10279
    </CodeBlock><br />
    <p>This list describes the button configuration and prize location of four different claw machines.</p><br />
    <p>For now, consider just the first claw machine in the list:</p><br />
    <List>
        <li>Pushing the machine's <Code>A</Code> button would move the claw <Code>94</Code> units along the <Code>X</Code> axis and <Code>34</Code> units along the <Code>Y</Code> axis.</li>
        <li>Pushing the <Code>B</Code> button would move the claw <Code>22</Code> units along the <Code>X</Code> axis and <Code>67</Code> units along the <Code>Y</Code> axis.</li>
        <li>The prize is located at <Code>X=8400</Code>, <Code>Y=5400</Code>; this means that from the claw's initial position, it would need to move exactly <Code>8400</Code> units along the <Code>X</Code> axis and exactly <Code>5400</Code> units along the <Code>Y</Code> axis to be perfectly aligned with the prize in this machine.</li>
    </List><br />
    <p>The cheapest way to win the prize is by pushing the <Code>A</Code> button <Code>80</Code> times and the <Code>B</Code> button <Code>40</Code> times. This would line up the claw along the <Code>X</Code> axis (because <Code>80*94 + 40*22 = 8400</Code>) and along the <Code>Y</Code> axis (because <Code>80*34 + 40*67 = 5400</Code>). Doing this would cost <Code>80*3</Code> tokens for the <Hidden content='Half A presses are not allowed.'><Code>A</Code> presses</Hidden> and <Code>40*1</Code> for the <Code>B</Code> presses, a total of <Code><Glow>280</Glow></Code> tokens.</p><br />
    <p>For the second and fourth claw machines, there is no combination of A and B presses that will ever win a prize.</p><br />
    <p>For the third claw machine, the cheapest way to win the prize is by pushing the <Code>A</Code> button <Code>38</Code> times and the <Code>B</Code> button <Code>86</Code> times. Doing this would cost a total of <Code><Glow>200</Glow></Code> tokens.</p><br />
    <p>So, the most prizes you could possibly win is two; the minimum tokens you would have to spend to win all (two) prizes is <Code><Glow>480</Glow></Code>.</p><br />
    <p>You estimate that each button would need to be pressed <Glow>no more than</Glow> <Code><Glow>100</Glow></Code> <Glow>times</Glow> to win a prize. How else would someone be expected to play?</p><br />
    <p>Figure out how to win as many prizes as possible. <Glow>What is the fewest tokens you would have to spend to win all possible prizes?</Glow></p>
</>);

export const part2Description = (<>
    <p>As you go to win the first prize, you discover that the claw is nowhere near where you expected it would be. Due to a unit conversion error in your measurements, the position of every prize is actually <Code>10000000000000</Code> higher on both the <Code>X</Code> and <Code>Y</Code> axis!</p><br />
    <p>Add <Code>10000000000000</Code> to the <Code>X</Code> and <Code>Y</Code> position of every prize. After making this change, the example above would now look like this:</p><br />
    <CodeBlock>
        Button A: X+94, Y+34<br />
        Button B: X+22, Y+67<br />
        Prize: X=10000000008400, Y=10000000005400<br />
        <br />
        Button A: X+26, Y+66<br />
        Button B: X+67, Y+21<br />
        Prize: X=10000000012748, Y=10000000012176<br />
        <br />
        Button A: X+17, Y+86<br />
        Button B: X+84, Y+37<br />
        Prize: X=10000000007870, Y=10000000006450<br />
        <br />
        Button A: X+69, Y+23<br />
        Button B: X+27, Y+71<br />
        Prize: X=10000000018641, Y=10000000010279
    </CodeBlock><br />
    <p>Now, it is only possible to win a prize on the second and fourth claw machines. Unfortunately, it will take <Glow>many more than</Glow> <Code><Glow>100</Glow></Code> <Glow>presses</Glow> to do so.</p><br />
    <p>Using the corrected prize coordinates, figure out how to win as many prizes as possible. <Glow>What is the fewest tokens you would have to spend to win all possible prizes?</Glow></p>
</>);
