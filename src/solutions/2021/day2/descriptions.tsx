import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import List from '@components/text/List';

export const part1Description = (<>
    <p>Now, you need to figure out how to <Hidden content='Tank, I need a pilot program for a B212 helicopter.'>pilot this thing</Hidden>.</p><br />
    <p>It seems like the submarine can take a series of commands like <Code>forward 1</Code>, <Code>down 2</Code>, or <Code>up 3</Code>:</p><br />
    <List>
        <li><Code>forward X</Code> increases the horizontal position by <Code>X</Code> units.</li>
        <li><Code>down X</Code> <Glow>increases</Glow> the depth by <Code>X</Code> units.</li>
        <li><Code>up X</Code> <Glow>decreases</Glow> the depth by <Code>X</Code> units.</li>
    </List><br />
    <p>Note that since you're on a submarine, <Code>down</Code> and <Code>up</Code> affect your <Glow>depth</Glow>, and so they have the opposite result of what you might expect.</p><br />
    <p>The submarine seems to already have a planned course (your puzzle input). You should probably figure out where it's going. For example:</p><br />
    <CodeBlock>
        forward 5<br />
        down 5<br />
        forward 8<br />
        up 3<br />
        down 8<br />
        forward 2
    </CodeBlock><br />
    <p>Your horizontal position and depth both start at <Code>0</Code>. The steps above would then modify them as follows:</p><br />
    <List>
        <li><Code>forward 5</Code> adds <Code>5</Code> to your horizontal position, a total of <Code>5</Code>.</li>
        <li><Code>down 5</Code> adds <Code>5</Code> to your depth, resulting in a value of <Code>5</Code>.</li>
        <li><Code>forward 8</Code> adds <Code>8</Code> to your horizontal position, a total of <Code>13</Code>.</li>
        <li><Code>up 3</Code> decreases your depth by <Code>3</Code>, resulting in a value of <Code>2</Code>.</li>
        <li><Code>down 8</Code> adds <Code>8</Code> to your depth, resulting in a value of <Code>10</Code>.</li>
        <li><Code>forward 2</Code> adds <Code>2</Code> to your horizontal position, a total of <Code>15</Code>.</li>
    </List><br />
    <p>After following these instructions, you would have a horizontal position of <Code>15</Code> and a depth of <Code>10</Code>. (Multiplying these together produces <Code><Glow>150</Glow></Code>.)</p><br />
    <p>Calculate the horizontal position and depth you would have after following the planned course. <Glow>What do you get if you multiply your final horizontal position by your final depth?</Glow></p>
</>);

export const part2Description = (<>
    <p>Based on your calculations, the planned course doesn't seem to make any sense. You find the submarine manual and discover that the process is actually slightly more complicated.</p><br />
    <p>In addition to horizontal position and depth, you'll also need to track a third value, <Glow>aim</Glow>, which also starts at <Code>0</Code>. The commands also mean something entirely different than you first thought:</p><br />
    <List>
        <li><Code>down X</Code> increases your aim by <Code>X</Code> units.</li>
        <li><Code>up X</Code> decreases your aim by <Code>X</Code> units.</li>
        <li><Code>forward X</Code> does two things:<List>
            <li>It increases your horizontal position by <Code>X</Code> units.</li>
            <li>It increases your depth by your aim <Glow>multiplied by</Glow> <Code>X</Code>.</li>
        </List></li>
    </List><br />
    <p>Again note that since you're on a submarine, <Code>down</Code> and <Code>up</Code> do the opposite of what you might expect: "down" means aiming in the positive direction.</p><br />
    <p>Now, the above example does something different:</p><br />
    <List>
        <li><Code>forward 5</Code> adds <Code>5</Code> to your horizontal position, a total of <Code>5</Code>. Because your aim is <Code>0</Code>, your depth does not change.</li>
        <li><Code>down 5</Code> adds <Code>5</Code> to your aim, resulting in a value of <Code>5</Code>.</li>
        <li><Code>forward 8</Code> adds <Code>8</Code> to your horizontal position, a total of <Code>13</Code>. Because your aim is <Code>5</Code>, your depth increases by <Code>8*5=40</Code>.</li>
        <li><Code>up 3</Code> decreases your aim by <Code>3</Code>, resulting in a value of <Code>2</Code>.</li>
        <li><Code>down 8</Code> adds <Code>8</Code> to your aim, resulting in a value of <Code>10</Code>.</li>
        <li><Code>forward 2</Code> adds <Code>2</Code> to your horizontal position, a total of <Code>15</Code>. Because your aim is <Code>10</Code>, your depth increases by <Code>2*10=20</Code> to a total of <Code>60</Code>.</li>
    </List><br />
    <p>After following these new instructions, you would have a horizontal position of <Code>15</Code> and a depth of <Code>60</Code>. (Multiplying these produces <Code><Glow>900</Glow></Code>.)</p><br />
    <p>Using this new interpretation of the commands, calculate the horizontal position and depth you would have after following the planned course. <Glow>What do you get if you multiply your final horizontal position by your final depth?</Glow></p>
</>);
