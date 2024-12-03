import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>Santa's reindeer typically eat regular reindeer food, but they need a lot of <Link link='https://adventofcode.com/2018/day/25'>magical energy</Link> to deliver presents on Christmas. For that, their favorite snack is a special type of <Glow color='yellow'>star</Glow> fruit that only grows deep in the jungle. The Elves have brought you on their annual expedition to the grove where the fruit grows.</p><br/>
    <p>To supply enough magical energy, the expedition needs to retrieve a minimum of <Glow color='yellow'>fifty stars</Glow> by December 25th. Although the Elves assure you that the grove has plenty of fruit, you decide to grab any fruit you see along the way, just in case.</p><br/>
    <p>Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants <Glow color='yellow'>one star</Glow>. Good luck!</p><br/>
    <p>The jungle must be too overgrown and difficult to navigate in vehicles or access from the air; the Elves' expedition traditionally goes on foot. As your boats approach land, the Elves begin taking inventory of their supplies. One important consideration is food - in particular, the number of <Glow>Calories</Glow> each Elf is carrying (your puzzle input).</p><br/>
    <p>The Elves take turns writing down the number of Calories contained by the various meals, snacks, rations, <Hidden content={`By "etc", you're pretty sure they just mean "more snacks".`}>etc.</Hidden> that they've brought with them, one item per line. Each Elf separates their own inventory from the previous Elf's inventory (if any) by a blank line.</p><br/>
    <p>For example, suppose the Elves finish writing their items' Calories and end up with the following list:</p><br/>
    <CodeBlock>
        1000<br/>
        2000<br/>
        3000<br/>
        <br/>
        4000<br/>
        <br/>
        5000<br/>
        6000<br/>
        <br/>
        7000<br/>
        8000<br/>
        9000<br/>
        <br/>
        10000
    </CodeBlock><br/>
    <p>This list represents the Calories of the food carried by five Elves:</p><br/>
    <List>
        <li>The first Elf is carrying food with <Code>1000</Code>, <Code>2000</Code>, and <Code>3000</Code> Calories, a total of <Code><Glow>6000</Glow></Code> Calories.</li>
        <li>The second Elf is carrying one food item with <Code><Glow>4000</Glow></Code> Calories.</li>
        <li>The third Elf is carrying food with <Code>5000</Code> and <Code>6000</Code> Calories, a total of <Code><Glow>11000</Glow></Code> Calories.</li>
        <li>The fourth Elf is carrying food with <Code>7000</Code>, <Code>8000</Code>, and <Code>9000</Code> Calories, a total of <Code><Glow>24000</Glow></Code> Calories.</li>
        <li>The fifth Elf is carrying one food item with <Code><Glow>10000</Glow></Code> Calories.</li>
    </List><br/>
    <p>In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the <Glow>most</Glow> Calories. In the example above, this is <Code><Glow>24000</Glow></Code> (carried by the fourth Elf).</p><br/>
    <p>Find the Elf carrying the most Calories. <Glow>How many total Calories is that Elf carrying?</Glow></p>
</>);

export const part2Description = (<>
    <p>By the time you calculate the answer to the Elves' question, they've already realized that the Elf carrying the most Calories of food might eventually <Glow>run out of snacks</Glow>.</p><br/>
    <p>To avoid this unacceptable situation, the Elves would instead like to know the total Calories carried by the <Glow>top three</Glow> Elves carrying the most Calories. That way, even if one of those Elves runs out of snacks, they still have two backups.</p><br/>
    <p>In the example above, the top three Elves are the fourth Elf (with <Code>24000</Code> Calories), then the third Elf (with <Code>11000</Code> Calories), then the fifth Elf (with <Code>10000</Code> Calories). The sum of the Calories carried by these three elves is <Code><Glow>45000</Glow></Code>.</p><br/>
    <p>Find the top three Elves carrying the most Calories. <Glow>How many Calories are those Elves carrying in total?</Glow></p>
</>);
