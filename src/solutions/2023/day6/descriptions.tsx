import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>The ferry quickly brings you across Island Island. After asking around, you discover that there is indeed normally a large pile of sand somewhere near here, but you don't see anything besides lots of water and the small island where the ferry has docked.</p><br/>
    <p>As you try to figure out what to do next, you notice a poster on a wall near the ferry dock. "Boat races! Open to the public! Grand prize is an all-expenses-paid trip to <Glow>Desert Island</Glow>!" That must be where the sand comes from! Best of all, the boat races are starting in just a few minutes.</p><br/>
    <p>You manage to sign up as a competitor in the boat races just in time. The organizer explains that it's not really a traditional race - instead, you will get a fixed amount of time during which your boat has to travel as far as it can, and you win if your boat goes the farthest.</p><br/>
    <p>As part of signing up, you get a sheet of paper (your puzzle input) that lists the <Glow>time</Glow> allowed for each race and also the best <Glow>distance</Glow> ever recorded in that race. To guarantee you win the grand prize, you need to make sure you <Glow>go farther in each race</Glow> than the current record holder.</p><br/>
    <p>The organizer brings you over to the area where the boat races are held. The boats are much smaller than you expected - they're actually <Glow>toy boats</Glow>, each with a big button on top. Holding down the button <Glow>charges the boat</Glow>, and releasing the button <Glow>allows the boat to move</Glow>. Boats move faster if their button was held longer, but time spent holding the button counts against the total race time. You can only hold the button at the start of the race, and boats don't move until the button is released.</p><br/>
    <p>For example:</p><br/>
    <CodeBlock>
        Time:      7  15   30<br/>
        Distance:  9  40  200
    </CodeBlock><br/>
    <p>This document describes three races:</p><br/>
    <List>
        <li>The first race lasts 7 milliseconds. The record distance in this race is 9 millimeters.</li>
        <li>The second race lasts 15 milliseconds. The record distance in this race is 40 millimeters.</li>
        <li>The third race lasts 30 milliseconds. The record distance in this race is 200 millimeters.</li>
    </List><br/>
    <p>Your toy boat has a starting speed of <Glow>zero millimeters per millisecond</Glow>. For each whole millisecond you spend at the beginning of the race holding down the button, the boat's speed increases by <Glow>one millimeter per millisecond</Glow>.</p><br/>
    <p>So, because the first race lasts 7 milliseconds, you only have a few options:</p><br/>
    <List>
        <li>Don't hold the button at all (that is, hold it for <Code><Glow>0</Glow></Code> <Glow>milliseconds</Glow>) at the start of the race. The boat won't move; it will have traveled <Code><Glow>0</Glow></Code> <Glow>millimeters</Glow> by the end of the race.</li>
        <li>Hold the button for <Code><Glow>1</Glow></Code> <Glow>millisecond</Glow> at the start of the race. Then, the boat will travel at a speed of <Code>1</Code> millimeter per millisecond for 6 milliseconds, reaching a total distance traveled of <Code><Glow>6</Glow></Code> <Glow>millimeters</Glow>.</li>
        <li>Hold the button for <Code><Glow>2</Glow></Code> <Glow>milliseconds</Glow>, giving the boat a speed of <Code>2</Code> millimeters per millisecond. It will then get 5 milliseconds to move, reaching a total distance of <Code><Glow>10</Glow></Code> <Glow>millimeters</Glow>.</li>
        <li>Hold the button for <Code><Glow>3</Glow></Code> <Glow>milliseconds</Glow>. After its remaining 4 milliseconds of travel time, the boat will have gone <Code><Glow>12</Glow></Code> <Glow>millimeters</Glow>.</li>
        <li>Hold the button for <Code><Glow>4</Glow></Code> <Glow>milliseconds</Glow>. After its remaining 3 milliseconds of travel time, the boat will have gone <Code><Glow>12</Glow></Code> <Glow>millimeters</Glow>.</li>
        <li>Hold the button for <Code><Glow>5</Glow></Code> <Glow>milliseconds</Glow>, causing the boat to travel a total of <Code><Glow>10</Glow></Code> <Glow>millimeters</Glow>.</li>
        <li>Hold the button for <Code><Glow>6</Glow></Code> <Glow>milliseconds</Glow>, causing the boat to travel a total of <Code><Glow>6</Glow></Code> <Glow>millimeters</Glow>.</li>
        <li>Hold the button for <Code><Glow>7</Glow></Code> <Glow>milliseconds</Glow>. That's the entire duration of the race. You never let go of the button. The boat can't move until you let go of the button. Please make sure you let go of the button so the boat gets to move. <Code><Glow>0</Glow></Code> <Glow>millimeters</Glow>.</li>
    </List><br/>
    <p>Since the current record for this race is <Code>9</Code> millimeters, there are actually <Code><Glow>4</Glow></Code> different ways you could win: you could hold the button for <Code>2</Code>, <Code>3</Code>, <Code>4</Code>, or <Code>5</Code> milliseconds at the start of the race.</p><br/>
    <p>In the second race, you could hold the button for at least <Code>4</Code> milliseconds and at most <Code>11</Code> milliseconds and beat the record, a total of <Code><Glow>8</Glow></Code> different ways to win.</p><br/>
    <p>In the third race, you could hold the button for at least <Code>11</Code> milliseconds and no more than <Code>19</Code> milliseconds and still beat the record, a total of <Code><Glow>9</Glow></Code> ways you could win.</p><br/>
    <p>To see how much margin of error you have, determine the <Glow>number of ways you can beat the record</Glow> in each race; in this example, if you multiply these values together, you get <Code><Glow>288</Glow></Code> (<Code>4</Code> * <Code>8</Code> * <Code>9</Code>).</p><br/>
    <p>Determine the number of ways you could beat the record in each race. <Glow>What do you get if you multiply these numbers together?</Glow></p>
</>);

export const part2Description = (<>
    <p>As the race is about to start, you realize the piece of paper with race times and record distances you got earlier actually just has <Hidden content='Keming!'>very bad</Hidden> <Link link='https://en.wikipedia.org/wiki/Kerning'>kerning</Link>. There's really <Glow>only one race</Glow> - ignore the spaces between the numbers on each line.</p><br/>
    <p>So, the example from before:</p><br/>
    <CodeBlock>
        Time:      7  15   30<br/>
        Distance:  9  40  200
    </CodeBlock><br/>
    <p>...now instead means this:</p><br/>
    <CodeBlock>
        Time:      71530<br/>
        Distance:  940200
    </CodeBlock><br/>
    <p>Now, you have to figure out how many ways there are to win this single race. In this example, the race lasts for <Code><Glow>71530</Glow></Code> <Glow>milliseconds</Glow> and the record distance you need to beat is <Code><Glow>940200</Glow></Code> <Glow>millimeters</Glow>. You could hold the button anywhere from <Code>14</Code> to <Code>71516</Code> milliseconds and beat the record, a total of <Code><Glow>71503</Glow></Code> ways!</p><br/>
    <p><Glow>How many ways can you beat the record in this one much longer race?</Glow></p>
</>);
