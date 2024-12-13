import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>The ancient civilization on <Link link='https://adventofcode.com/2019/day/20'>Pluto</Link> was known for its ability to manipulate spacetime, and while The Historians explore their infinite corridors, you've noticed a strange set of physics-defying stones.</p><br />
    <p>At first glance, they seem like normal stones: they're arranged in a perfectly <Glow>straight line</Glow>, and each stone has a <Glow>number</Glow> engraved on it.</p><br />
    <p>The strange part is that every time you <Hidden content={`No, they're not statues. Why do you ask?`}>blink</Hidden>, the stones <Glow>change</Glow>.</p><br />
    <p>Sometimes, the number engraved on a stone changes. Other times, a stone might <Glow>split in two</Glow>, causing all the other stones to shift over a bit to make room in their perfectly straight line.</p><br />
    <p>As you observe them for a while, you find that the stones have a consistent behavior. Every time you blink, the stones each <Glow>simultaneously</Glow> change according to the <Glow>first applicable rule</Glow> in this list:</p><br />
    <List>
        <li>If the stone is engraved with the number <Code>0</Code>, it is replaced by a stone engraved with the number <Code>1</Code>.</li>
        <li>If the stone is engraved with a number that has an <Glow>even</Glow> number of digits, it is replaced by <Glow>two stones</Glow>. The left half of the digits are engraved on the new left stone, and the right half of the digits are engraved on the new right stone. (The new numbers don't keep extra leading zeroes: <Code>1000</Code> would become stones <Code>10</Code> and <Code>0</Code>.)</li>
        <li>If none of the other rules apply, the stone is replaced by a new stone; the old stone's number <Glow>multiplied by 2024</Glow> is engraved on the new stone.</li>
    </List><br />
    <p>No matter how the stones change, their <Glow>order is preserved</Glow>, and they stay on their perfectly straight line.</p><br />
    <p>How will the stones evolve if you keep blinking at them? You take a note of the number engraved on each stone in the line (your puzzle input).</p><br />
    <p>If you have an arrangement of five stones engraved with the numbers <Code>0 1 10 99 999</Code> and you blink once, the stones transform as follows:</p><br />
    <List>
        <li>The first stone, <Code>0</Code>, becomes a stone marked <Code>1</Code>.</li>
        <li>The second stone, <Code>1</Code>, is multiplied by 2024 to become <Code>2024</Code>.</li>
        <li>The third stone, <Code>10</Code>, is split into a stone marked <Code>1</Code> followed by a stone marked <Code>0</Code>.</li>
        <li>The fourth stone, <Code>99</Code>, is split into two stones marked <Code>9</Code>.</li>
        <li>The fifth stone, <Code>999</Code>, is replaced by a stone marked <Code>2021976</Code>.</li>
    </List><br />
    <p>So, after blinking once, your five stones would become an arrangement of seven stones engraved with the numbers <Code>1 2024 1 0 9 9 2021976</Code>.</p><br />
    <p>Here is a longer example:</p><br />
    <CodeBlock>
        Initial arrangement:<br />
        125 17<br />
        <br />
        After 1 blink:<br />
        253000 1 7<br />
        <br />
        After 2 blinks:<br />
        253 0 2024 14168<br />
        <br />
        After 3 blinks:<br />
        512072 1 20 24 28676032<br />
        <br />
        After 4 blinks:<br />
        512 72 2024 2 0 2 4 2867 6032<br />
        <br />
        After 5 blinks:<br />
        1036288 7 2 20 24 4048 1 4048 8096 28 67 60 32<br />
        <br />
        After 6 blinks:<br />
        2097446912 14168 4048 2 0 2 4 40 48 2024 40 48 80 96 2 8 6 7 6 0 3 2
    </CodeBlock><br />
    <p>In this example, after blinking six times, you would have <Code>22</Code> stones. After blinking 25 times, you would have <Code><Glow>55312</Glow></Code> stones!</p><br />
    <p>Consider the arrangement of stones in front of you. <Glow>How many stones will you have after blinking 25 times?</Glow></p>
</>);

export const part2Description = (<>
    <p>The Historians sure are taking a long time. To be fair, the infinite corridors <Glow>are</Glow> very large.</p><br />
    <p><Glow>How many stones would you have after blinking a total of 75 times?</Glow></p>
</>);
