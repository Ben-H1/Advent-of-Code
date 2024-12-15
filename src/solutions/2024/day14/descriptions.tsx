import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';

export const part1Description = (<>
    <p>One of The Historians needs to use the bathroom; fortunately, you know there's a bathroom near an unvisited location on their list, and so you're all quickly teleported directly to the lobby of Easter Bunny Headquarters.</p><br />
    <p>Unfortunately, EBHQ seems to have "improved" bathroom security <Glow>again</Glow> after your last <Link link='https://adventofcode.com/2016/day/2'>visit</Link>. The area outside the bathroom is swarming with robots!</p><br />
    <p>To get The Historian safely to the bathroom, you'll need a way to predict where the robots will be in the future. Fortunately, they all seem to be moving on the tile floor in predictable <Glow>straight lines</Glow>.</p><br />
    <p>You make a list (your puzzle input) of all of the robots' current <Glow>positions</Glow> (<Code>p</Code>) and <Glow>velocities</Glow> (<Code>v</Code>), one robot per line. For example:</p><br />
    <CodeBlock>
        p=0,4 v=3,-3<br />
        p=6,3 v=-1,-3<br />
        p=10,3 v=-1,2<br />
        p=2,0 v=2,-1<br />
        p=0,0 v=1,3<br />
        p=3,0 v=-2,-2<br />
        p=7,6 v=-1,-3<br />
        p=3,0 v=-1,-2<br />
        p=9,3 v=2,3<br />
        p=7,3 v=-1,2<br />
        p=2,4 v=2,-3<br />
        p=9,5 v=-3,-3
    </CodeBlock><br />
    <p>Each robot's position is given as <Code>p=x,y</Code> where <Code>x</Code> represents the number of tiles the robot is from the left wall and <Code>y</Code> represents the number of tiles from the top wall (when viewed from above). So, a position of <Code>p=0,0</Code> means the robot is all the way in the top-left corner.</p><br />
    <p>Each robot's velocity is given as <Code>v=x,y</Code> where <Code>x</Code> and <Code>y</Code> are given in <Glow>tiles per second</Glow>. Positive <Code>x</Code> means the robot is moving to the <Glow>right</Glow>, and positive <Code>y</Code> means the robot is moving <Glow>down</Glow>. So, a velocity of <Code>v=1,-2</Code> means that each second, the robot moves <Code>1</Code> tile to the right and <Code>2</Code> tiles up.</p><br />
    <p>The robots outside the actual bathroom are in a space which is <Code>101</Code> tiles wide and <Code>103</Code> tiles tall (when viewed from above). However, in this example, the robots are in a space which is only <Code>11</Code> tiles wide and <Code>7</Code> tiles tall.</p><br />
    <p>The robots are good at navigating over/under each other (due to a combination of springs, extendable legs, and quadcopters), so they can share the same tile and don't interact with each other. Visually, the number of robots on each tile in this example looks like this:</p><br />
    <CodeBlock>
        1.12.......<br />
        ...........<br />
        ...........<br />
        ......11.11<br />
        1.1........<br />
        .........1.<br />
        .......1...
    </CodeBlock><br />
    <p>These robots have a unique feature for maximum bathroom security: they can <Glow>teleport</Glow>. When a robot would run into an edge of the space they're in, they instead <Glow>teleport to the other side</Glow>, effectively wrapping around the edges. Here is what robot <Code>p=2,4 v=2,-3</Code> does for the first few seconds:</p><br />
    <CodeBlock>
        Initial state:<br />
        ...........<br />
        ...........<br />
        ...........<br />
        ...........<br />
        ..1........<br />
        ...........<br />
        ...........<br />
        <br />
        After 1 second:<br />
        ...........<br />
        ....1......<br />
        ...........<br />
        ...........<br />
        ...........<br />
        ...........<br />
        ...........<br />
        <br />
        After 2 seconds:<br />
        ...........<br />
        ...........<br />
        ...........<br />
        ...........<br />
        ...........<br />
        ......1....<br />
        ...........<br />
        <br />
        After 3 seconds:<br />
        ...........<br />
        ...........<br />
        ........1..<br />
        ...........<br />
        ...........<br />
        ...........<br />
        ...........<br />
        <br />
        After 4 seconds:<br />
        ...........<br />
        ...........<br />
        ...........<br />
        ...........<br />
        ...........<br />
        ...........<br />
        ..........1<br />
        <br />
        After 5 seconds:<br />
        ...........<br />
        ...........<br />
        ...........<br />
        .1.........<br />
        ...........<br />
        ...........<br />
        ...........
    </CodeBlock><br />
    <p>The Historian can't wait much longer, so you don't have to simulate the robots for very long. Where will the robots be after <Code>100</Code> seconds?</p><br />
    <p>In the above example, the number of robots on each tile after 100 seconds has elapsed looks like this:</p><br />
    <CodeBlock>
        ......2..1.<br />
        ...........<br />
        1..........<br />
        .11........<br />
        .....1.....<br />
        ...12......<br />
        .1....1....
    </CodeBlock><br />
    <p>To determine the safest area, count the <Glow>number of robots in each quadrant</Glow> after 100 seconds. Robots that are exactly in the middle (horizontally or vertically) don't count as being in any quadrant, so the only relevant robots are:</p><br />
    <CodeBlock>
        ..... 2..1.<br />
        ..... .....<br />
        1.... .....<br />
        &nbsp;          <br />
        ..... .....<br />
        ...12 .....<br />
        .1... 1....
    </CodeBlock><br />
    <p>In this example, the quadrants contain <Code>1</Code>, <Code>3</Code>, <Code>4</Code>, and <Code>1</Code> robot. Multiplying these together gives a total <Glow>safety factor</Glow> of <Code><Glow>12</Glow></Code>.</p><br />
    <p>Predict the motion of the robots in your list within a space which is <Code>101</Code> tiles wide and <Code>103</Code> tiles tall. <Glow>What will the safety factor be after exactly 100 seconds have elapsed?</Glow></p>
</>);

export const part2Description = (<>
    <p>During the bathroom break, someone notices that these robots seem awfully similar to ones built and used at the North Pole. If they're the same type of robots, they should have a hard-coded <Hidden content='This puzzle was originally going to be about the motion of space rocks in a fictitious arcade game called Meteoroids, but we just had an arcade puzzle.'>Easter egg</Hidden>: very rarely, most of the robots should arrange themselves into <Glow>a picture of a Christmas tree</Glow>.</p><br />
    <p><Glow>What is the fewest number of seconds that must elapse for the robots to display the Easter egg?</Glow></p>
</>);
