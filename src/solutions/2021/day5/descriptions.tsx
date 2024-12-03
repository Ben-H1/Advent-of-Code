import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>You come across a field of <Link link='https://en.wikipedia.org/wiki/Hydrothermal_vent'>hydrothermal vents</Link> on the ocean floor! These vents constantly produce large, opaque clouds, so it would be best to avoid them if possible.</p><br />
    <p>They tend to form in <Glow>lines</Glow>; the submarine helpfully produces a list of nearby <Hidden content={`Maybe they're Bresenham vents.`}>lines of vents</Hidden> (your puzzle input) for you to review. For example:</p><br />
    <CodeBlock>
        0,9 -{'>'} 5,9<br />
        8,0 -{'>'} 0,8<br />
        9,4 -{'>'} 3,4<br />
        2,2 -{'>'} 2,1<br />
        7,0 -{'>'} 7,4<br />
        6,4 -{'>'} 2,0<br />
        0,9 -{'>'} 2,9<br />
        3,4 -{'>'} 1,4<br />
        0,0 -{'>'} 8,8<br />
        5,5 -{'>'} 8,2
    </CodeBlock><br />
    <p>Each line of vents is given as a line segment in the format <Code>x1,y1 -{'>'} x2,y2</Code> where <Code>x1</Code>,<Code>y1</Code> are the coordinates of one end the line segment and <Code>x2</Code>,<Code>y2</Code> are the coordinates of the other end. These line segments include the points at both ends. In other words:</p><br />
    <List>
        <li>An entry like <Code>1,1 -{'>'} 1,3</Code> covers points <Code>1,1</Code>, <Code>1,2</Code>, and <Code>1,3</Code>.</li>
        <li>An entry like <Code>9,7 -{'>'} 7,7</Code> covers points <Code>9,7</Code>, <Code>8,7</Code>, and <Code>7,7</Code>.</li>
    </List><br />
    <p>For now, <Glow>only consider horizontal and vertical lines</Glow>: lines where either <Code>x1 = x2</Code> or <Code>y1 = y2</Code>.</p><br />
    <p>So, the horizontal and vertical lines from the above list would produce the following diagram:</p><br />
    <CodeBlock>
        .......1..<br />
        ..1....1..<br />
        ..1....1..<br />
        .......1..<br />
        .112111211<br />
        ..........<br />
        ..........<br />
        ..........<br />
        ..........<br />
        222111....
    </CodeBlock><br />
    <p>In this diagram, the top left corner is <Code>0,0</Code> and the bottom right corner is <Code>9,9</Code>. Each position is shown as <Glow>the number of lines which cover that point</Glow> or <Code>.</Code> if no line covers that point. The top-left pair of <Code>1</Code>s, for example, comes from <Code>2,2 -{'>'} 2,1</Code>; the very bottom row is formed by the overlapping lines <Code>0,9 -{'>'} 5,9</Code> and <Code>0,9 -{'>'} 2,9</Code>.</p><br />
    <p>To avoid the most dangerous areas, you need to determine <Glow>the number of points where at least two lines overlap</Glow>. In the above example, this is anywhere in the diagram with a <Code>2</Code> or larger - a total of <Code><Glow>5</Glow></Code> points.</p><br />
    <p>Consider only horizontal and vertical lines. <Glow>At how many points do at least two lines overlap?</Glow></p>
</>);

export const part2Description = (<>
    <p>Unfortunately, considering only horizontal and vertical lines doesn't give you the full picture; you need to also consider <Glow>diagonal lines</Glow>.</p><br />
    <p>Because of the limits of the hydrothermal vent mapping system, the lines in your list will only ever be horizontal, vertical, or a diagonal line at exactly 45 degrees. In other words:</p><br />
    <List>
        <li>An entry like <Code>1,1 -{'>'} 3,3</Code> covers points <Code>1,1</Code>, <Code>2,2</Code>, and <Code>3,3</Code>.</li>
        <li>An entry like <Code>9,7 -{'>'} 7,9</Code> covers points <Code>9,7</Code>, <Code>8,8</Code>, and <Code>7,9</Code>.</li>
    </List><br />
    <p>Considering all lines from the above example would now produce the following diagram:</p><br />
    <CodeBlock>
        1.1....11.<br />
        .111...2..<br />
        ..2.1.111.<br />
        ...1.2.2..<br />
        .112313211<br />
        ...1.2....<br />
        ..1...1...<br />
        .1.....1..<br />
        1.......1.<br />
        222111....
    </CodeBlock><br />
    <p>You still need to determine <Glow>the number of points where at least two lines overlap</Glow>. In the above example, this is still anywhere in the diagram with a <Code>2</Code> or larger - now a total of <Code><Glow>12</Glow></Code> points.</p><br />
    <p>Consider all of the lines. <Glow>At how many points do at least two lines overlap?</Glow></p>
</>);
