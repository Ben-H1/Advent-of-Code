import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>The sea floor is getting steeper. Maybe the sleigh keys got carried this way?</p><br />
    <p>A massive school of glowing <Link link='https://en.wikipedia.org/wiki/Lanternfish'>lanternfish</Link> swims past. They must spawn quickly to reach such large numbers - maybe <Glow>exponentially</Glow> quickly? You should model their growth rate to be sure.</p><br />
    <p>Although you know nothing about this specific species of lanternfish, you make some guesses about their attributes. Surely, <Hidden content='I heard you like lanternfish.'>each lanternfish creates a new lanternfish</Hidden> once every <Glow>7</Glow> days.</p><br />
    <p>However, this process isn't necessarily synchronized between every lanternfish - one lanternfish might have 2 days left until it creates another lanternfish, while another might have 4. So, you can model each fish as a single number that represents <Glow>the number of days until it creates a new lanternfish</Glow>.</p><br />
    <p>Furthermore, you reason, a <Glow>new</Glow> lanternfish would surely need slightly longer before it's capable of producing more lanternfish: two more days for its first cycle.</p><br />
    <p>So, suppose you have a lanternfish with an internal timer value of <Code>3</Code>:</p><br />
    <List>
        <li>After one day, its internal timer would become <Code>2</Code>.</li>
        <li>After another day, its internal timer would become <Code>1</Code>.</li>
        <li>After another day, its internal timer would become <Code>0</Code>.</li>
        <li>After another day, its internal timer would reset to <Code>6</Code>, and it would create a <Glow>new</Glow> lanternfish with an internal timer of <Code>8</Code>.</li>
        <li>After another day, the first lanternfish would have an internal timer of <Code>5</Code>, and the second lanternfish would have an internal timer of <Code>7</Code>.</li>
    </List><br />
    <p>A lanternfish that creates a new fish resets its timer to <Code>6</Code>, <Glow>not</Glow> <Code><Glow>7</Glow></Code> (because <Code>0</Code> is included as a valid timer value). The new lanternfish starts with an internal timer of <Code>8</Code> and does not start counting down until the next day.</p><br />
    <p>Realizing what you're trying to do, the submarine automatically produces a list of the ages of several hundred nearby lanternfish (your puzzle input). For example, suppose you were given the following list:</p><br />
    <CodeBlock>
        3,4,3,1,2
    </CodeBlock><br />
    <p>This list means that the first fish has an internal timer of <Code>3</Code>, the second fish has an internal timer of <Code>4</Code>, and so on until the fifth fish, which has an internal timer of <Code>2</Code>. Simulating these fish over several days would proceed as follows:</p><br />
    <CodeBlock>
        Initial state: 3,4,3,1,2<br />
        After  1 day:  2,3,2,0,1<br />
        After  2 days: 1,2,1,6,0,8<br />
        After  3 days: 0,1,0,5,6,7,8<br />
        After  4 days: 6,0,6,4,5,6,7,8,8<br />
        After  5 days: 5,6,5,3,4,5,6,7,7,8<br />
        After  6 days: 4,5,4,2,3,4,5,6,6,7<br />
        After  7 days: 3,4,3,1,2,3,4,5,5,6<br />
        After  8 days: 2,3,2,0,1,2,3,4,4,5<br />
        After  9 days: 1,2,1,6,0,1,2,3,3,4,8<br />
        After 10 days: 0,1,0,5,6,0,1,2,2,3,7,8<br />
        After 11 days: 6,0,6,4,5,6,0,1,1,2,6,7,8,8,8<br />
        After 12 days: 5,6,5,3,4,5,6,0,0,1,5,6,7,7,7,8,8<br />
        After 13 days: 4,5,4,2,3,4,5,6,6,0,4,5,6,6,6,7,7,8,8<br />
        After 14 days: 3,4,3,1,2,3,4,5,5,6,3,4,5,5,5,6,6,7,7,8<br />
        After 15 days: 2,3,2,0,1,2,3,4,4,5,2,3,4,4,4,5,5,6,6,7<br />
        After 16 days: 1,2,1,6,0,1,2,3,3,4,1,2,3,3,3,4,4,5,5,6,8<br />
        After 17 days: 0,1,0,5,6,0,1,2,2,3,0,1,2,2,2,3,3,4,4,5,7,8<br />
        After 18 days: 6,0,6,4,5,6,0,1,1,2,6,0,1,1,1,2,2,3,3,4,6,7,8,8,8,8
    </CodeBlock><br />
    <p>Each day, a <Code>0</Code> becomes a <Code>6</Code> and adds a new <Code>8</Code> to the end of the list, while each other number decreases by 1 if it was present at the start of the day.</p><br />
    <p>In this example, after 18 days, there are a total of <Code>26</Code> fish. After 80 days, there would be a total of <Code><Glow>5934</Glow></Code>.</p><br />
    <p>Find a way to simulate lanternfish. <Glow>How many lanternfish would there be after 80 days?</Glow></p>
</>);

export const part2Description = (<>
    <p>Suppose the lanternfish live forever and have unlimited food and space. Would they take over the entire ocean?</p><br />
    <p>After 256 days in the example above, there would be a total of <Code><Glow>26984457539</Glow></Code> lanternfish!</p><br />
    <p><Glow>How many lanternfish would there be after 256 days?</Glow></p>
</>);
