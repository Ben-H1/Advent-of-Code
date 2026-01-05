import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';

export const part1Description = (<>
    <p>This rope bridge creaks as you walk along it. You aren't sure how old it is, or whether it can even support your weight.</p><br />
    <p>It seems to support the Elves just fine, though. The bridge spans a gorge which was carved out by the massive river far below you.</p><br />
    <p>You step carefully; as you do, the ropes stretch and twist. You decide to distract yourself by modeling rope physics; maybe you can even figure out where <Glow>not</Glow> to step.</p><br />
    <p>Consider a rope with a knot at each end; these knots mark the <Glow>head</Glow> and the <Glow>tail</Glow> of the rope. If the head moves far enough away from the tail, the tail is pulled toward the head.</p><br />
    <p>Due to nebulous reasoning involving <Link link='https://en.wikipedia.org/wiki/Planck_units#Planck_length'>Planck lengths</Link>, you should be able to model the positions of the knots on a two-dimensional grid. Then, by following a hypothetical <Glow>series of motions</Glow> (your puzzle input) for the head, you can determine how the tail will move.</p><br />
    <p><Hidden content="I'm an engineer, not a physicist!">Due to the aforementioned Planck lengths</Hidden>, the rope must be quite short; in fact, the head (<Code>H</Code>) and tail (<Code>T</Code>) must <Glow>always be touching</Glow> (diagonally adjacent and even overlapping both count as touching):</p><br />
    <CodeBlock>
        ....<br />
        .TH.<br />
        ....<br />
        <br />
        ....<br />
        .H..<br />
        ..T.<br />
        ....<br />
        <br />
        ...<br />
        .H. (H covers T)<br />
        ...
    </CodeBlock><br />
    <p>If the head is ever two steps directly up, down, left, or right from the tail, the tail must also move one step in that direction so it remains close enough:</p><br />
    <CodeBlock>
        .....    .....    .....<br />
        .TH.. -&gt; .T.H. -&gt; ..TH.<br />
        .....    .....    .....<br />
        <br />
        ...    ...    ...<br />
        .T.    .T.    ...<br />
        .H. -&gt; ... -&gt; .T.<br />
        ...    .H.    .H.<br />
        ...    ...    ...
    </CodeBlock><br />
    <p>Otherwise, if the head and tail aren't touching and aren't in the same row or column, the tail always moves one step diagonally to keep up:</p><br />
    <CodeBlock>
        .....    .....    .....<br />
        .....    ..H..    ..H..<br />
        ..H.. -&gt; ..... -&gt; ..T..<br />
        .T...    .T...    .....<br />
        .....    .....    .....<br />
        <br />
        .....    .....    .....<br />
        .....    .....    .....<br />
        ..H.. -&gt; ...H. -&gt; ..TH.<br />
        .T...    .T...    .....<br />
        .....    .....    .....
    </CodeBlock><br />
    <p>You just need to work out where the tail goes as the head follows a series of motions. Assume the head and the tail both start at the same position, overlapping.</p><br />
    <p>For example:</p><br />
    <CodeBlock>
        R 4<br />
        U 4<br />
        L 3<br />
        D 1<br />
        R 4<br />
        D 1<br />
        L 5<br />
        R 2
    </CodeBlock><br />
    <p>This series of motions moves the head <Glow>right</Glow> four steps, then <Glow>up</Glow> four steps, then <Glow>left</Glow> three steps, then <Glow>down</Glow> one step, and so on. After each step, you'll need to update the position of the tail if the step means the head is no longer adjacent to the tail. Visually, these motions occur as follows (<Code>s</Code> marks the starting position as a reference point):</p><br />
    <CodeBlock>
        == Initial State ==<br />
        <br />
        ......<br />
        ......<br />
        ......<br />
        ......<br />
        H.....  (H covers T, s)<br />
        <br />
        == R 4 ==<br />
        <br />
        ......<br />
        ......<br />
        ......<br />
        ......<br />
        TH....  (T covers s)<br />
        <br />
        ......<br />
        ......<br />
        ......<br />
        ......<br />
        sTH...<br />
        <br />
        ......<br />
        ......<br />
        ......<br />
        ......<br />
        s.TH..<br />
        <br />
        ......<br />
        ......<br />
        ......<br />
        ......<br />
        s..TH.<br />
        <br />
        == U 4 ==<br />
        <br />
        ......<br />
        ......<br />
        ......<br />
        ....H.<br />
        s..T..<br />
        <br />
        ......<br />
        ......<br />
        ....H.<br />
        ....T.<br />
        s.....<br />
        <br />
        ......<br />
        ....H.<br />
        ....T.<br />
        ......<br />
        s.....<br />
        <br />
        ....H.<br />
        ....T.<br />
        ......<br />
        ......<br />
        s.....<br />
        <br />
        == L 3 ==<br />
        <br />
        ...H..<br />
        ....T.<br />
        ......<br />
        ......<br />
        s.....<br />
        <br />
        ..HT..<br />
        ......<br />
        ......<br />
        ......<br />
        s.....<br />
        <br />
        .HT...<br />
        ......<br />
        ......<br />
        ......<br />
        s.....<br />
        <br />
        == D 1 ==<br />
        <br />
        ..T...<br />
        .H....<br />
        ......<br />
        ......<br />
        s.....<br />
        <br />
        == R 4 ==<br />
        <br />
        ..T...<br />
        ..H...<br />
        ......<br />
        ......<br />
        s.....<br />
        <br />
        ..T...<br />
        ...H..<br />
        ......<br />
        ......<br />
        s.....<br />
        <br />
        ......<br />
        ...TH.<br />
        ......<br />
        ......<br />
        s.....<br />
        <br />
        ......<br />
        ....TH<br />
        ......<br />
        ......<br />
        s.....<br />
        <br />
        == D 1 ==<br />
        <br />
        ......<br />
        ....T.<br />
        .....H<br />
        ......<br />
        s.....<br />
        <br />
        == L 5 ==<br />
        <br />
        ......<br />
        ....T.<br />
        ....H.<br />
        ......<br />
        s.....<br />
        <br />
        ......<br />
        ....T.<br />
        ...H..<br />
        ......<br />
        s.....<br />
        <br />
        ......<br />
        ......<br />
        ..HT..<br />
        ......<br />
        s.....<br />
        <br />
        ......<br />
        ......<br />
        .HT...<br />
        ......<br />
        s.....<br />
        <br />
        ......<br />
        ......<br />
        HT....<br />
        ......<br />
        s.....<br />
        <br />
        == R 2 ==<br />
        <br />
        ......<br />
        ......<br />
        .H....  (H covers T)<br />
        ......<br />
        s.....<br />
        <br />
        ......<br />
        ......<br />
        .TH...<br />
        ......<br />
        s.....
    </CodeBlock><br />
    <p>After simulating the rope, you can count up all of the positions the <Glow>tail visited at least once</Glow>. In this diagram, <Code>s</Code> again marks the starting position (which the tail also visited) and <Code>#</Code> marks other positions the tail visited:</p><br />
    <CodeBlock>
        ..##..<br />
        ...##.<br />
        .####.<br />
        ....#.<br />
        s###..
    </CodeBlock><br />
    <p>So, there are <Code><Glow>13</Glow></Code> positions the tail visited at least once.</p><br />
    <p>Simulate your complete hypothetical series of motions. <Glow>How many positions does the tail of the rope visit at least once?</Glow></p>
</>);

export const part2Description = (<>
    <p>A rope snaps! Suddenly, the river is getting a lot closer than you remember. The bridge is still there, but some of the ropes that broke are now whipping toward you as you fall through the air!</p><br />
    <p>The ropes are moving too quickly to grab; you only have a few seconds to choose how to arch your body to avoid being hit. Fortunately, your simulation can be extended to support longer ropes.</p><br />
    <p>Rather than two knots, you now must simulate a rope consisting of <Glow>ten</Glow> knots. One knot is still the head of the rope and moves according to the series of motions. Each knot further down the rope follows the knot in front of it using the same rules as before.</p><br />
    <p>Using the same series of motions as the above example, but with the knots marked <Code>H</Code>, <Code>1</Code>, <Code>2</Code>, ..., <Code>9</Code>, the motions now occur as follows:</p><br />
    <CodeBlock>
        == Initial State ==<br />
        <br />
        ......<br />
        ......<br />
        ......<br />
        ......<br />
        H.....  (H covers 1, 2, 3, 4, 5, 6, 7, 8, 9, s)<br />
        <br />
        == R 4 ==<br />
        <br />
        ......<br />
        ......<br />
        ......<br />
        ......<br />
        1H....  (1 covers 2, 3, 4, 5, 6, 7, 8, 9, s)<br />
        <br />
        ......<br />
        ......<br />
        ......<br />
        ......<br />
        21H...  (2 covers 3, 4, 5, 6, 7, 8, 9, s)<br />
        <br />
        ......<br />
        ......<br />
        ......<br />
        ......<br />
        321H..  (3 covers 4, 5, 6, 7, 8, 9, s)<br />
        <br />
        ......<br />
        ......<br />
        ......<br />
        ......<br />
        4321H.  (4 covers 5, 6, 7, 8, 9, s)<br />
        <br />
        == U 4 ==<br />
        <br />
        ......<br />
        ......<br />
        ......<br />
        ....H.<br />
        4321..  (4 covers 5, 6, 7, 8, 9, s)<br />
        <br />
        ......<br />
        ......<br />
        ....H.<br />
        .4321.<br />
        5.....  (5 covers 6, 7, 8, 9, s)<br />
        <br />
        ......<br />
        ....H.<br />
        ....1.<br />
        .432..<br />
        5.....  (5 covers 6, 7, 8, 9, s)<br />
        <br />
        ....H.<br />
        ....1.<br />
        ..432.<br />
        .5....<br />
        6.....  (6 covers 7, 8, 9, s)<br />
        <br />
        == L 3 ==<br />
        <br />
        ...H..<br />
        ....1.<br />
        ..432.<br />
        .5....<br />
        6.....  (6 covers 7, 8, 9, s)<br />
        <br />
        ..H1..<br />
        ...2..<br />
        ..43..<br />
        .5....<br />
        6.....  (6 covers 7, 8, 9, s)<br />
        <br />
        .H1...<br />
        ...2..<br />
        ..43..<br />
        .5....<br />
        6.....  (6 covers 7, 8, 9, s)<br />
        <br />
        == D 1 ==<br />
        <br />
        ..1...<br />
        .H.2..<br />
        ..43..<br />
        .5....<br />
        6.....  (6 covers 7, 8, 9, s)<br />
        <br />
        == R 4 ==<br />
        <br />
        ..1...<br />
        ..H2..<br />
        ..43..<br />
        .5....<br />
        6.....  (6 covers 7, 8, 9, s)<br />
        <br />
        ..1...<br />
        ...H..  (H covers 2)<br />
        ..43..<br />
        .5....<br />
        6.....  (6 covers 7, 8, 9, s)<br />
        <br />
        ......<br />
        ...1H.  (1 covers 2)<br />
        ..43..<br />
        .5....<br />
        6.....  (6 covers 7, 8, 9, s)<br />
        <br />
        ......<br />
        ...21H<br />
        ..43..<br />
        .5....<br />
        6.....  (6 covers 7, 8, 9, s)<br />
        <br />
        == D 1 ==<br />
        <br />
        ......<br />
        ...21.<br />
        ..43.H<br />
        .5....<br />
        6.....  (6 covers 7, 8, 9, s)<br />
        <br />
        == L 5 ==<br />
        <br />
        ......<br />
        ...21.<br />
        ..43H.<br />
        .5....<br />
        6.....  (6 covers 7, 8, 9, s)<br />
        <br />
        ......<br />
        ...21.<br />
        ..4H..  (H covers 3)<br />
        .5....<br />
        6.....  (6 covers 7, 8, 9, s)<br />
        <br />
        ......<br />
        ...2..<br />
        ..H1..  (H covers 4; 1 covers 3)<br />
        .5....<br />
        6.....  (6 covers 7, 8, 9, s)<br />
        <br />
        ......<br />
        ...2..<br />
        .H13..  (1 covers 4)<br />
        .5....<br />
        6.....  (6 covers 7, 8, 9, s)<br />
        <br />
        ......<br />
        ......<br />
        H123..  (2 covers 4)<br />
        .5....<br />
        6.....  (6 covers 7, 8, 9, s)<br />
        <br />
        == R 2 ==<br />
        <br />
        ......<br />
        ......<br />
        .H23..  (H covers 1; 2 covers 4)<br />
        .5....<br />
        6.....  (6 covers 7, 8, 9, s)<br />
        <br />
        ......<br />
        ......<br />
        .1H3..  (H covers 2, 4)<br />
        .5....<br />
        6.....  (6 covers 7, 8, 9, s)
    </CodeBlock><br />
    <p>Now, you need to keep track of the positions the new tail, <Code>9</Code>, visits. In this example, the tail never moves, and so it only visits <Code><Glow>1</Glow></Code> position. However, <Glow>be careful</Glow>: more types of motion are possible than before, so you might want to visually compare your simulated rope to the one above.</p><br />
    <p>Here's a larger example:</p><br />
    <CodeBlock>
        R 5<br />
        U 8<br />
        L 8<br />
        D 3<br />
        R 17<br />
        D 10<br />
        L 25<br />
        U 20
    </CodeBlock><br />
    <p>These motions occur as follows (individual steps are not shown):</p><br />
    <CodeBlock>
        == Initial State ==<br />
        <br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ...........H..............  (H covers 1, 2, 3, 4, 5, 6, 7, 8, 9, s)<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        <br />
        == R 5 ==<br />
        <br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ...........54321H.........  (5 covers 6, 7, 8, 9, s)<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        <br />
        == U 8 ==<br />
        <br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ................H.........<br />
        ................1.........<br />
        ................2.........<br />
        ................3.........<br />
        ...............54.........<br />
        ..............6...........<br />
        .............7............<br />
        ............8.............<br />
        ...........9..............  (9 covers s)<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        <br />
        == L 8 ==<br />
        <br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ........H1234.............<br />
        ............5.............<br />
        ............6.............<br />
        ............7.............<br />
        ............8.............<br />
        ............9.............<br />
        ..........................<br />
        ..........................<br />
        ...........s..............<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        <br />
        == D 3 ==<br />
        <br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        .........2345.............<br />
        ........1...6.............<br />
        ........H...7.............<br />
        ............8.............<br />
        ............9.............<br />
        ..........................<br />
        ..........................<br />
        ...........s..............<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        <br />
        == R 17 ==<br />
        <br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ................987654321H<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ...........s..............<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        <br />
        == D 10 ==<br />
        <br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ...........s.........98765<br />
        .........................4<br />
        .........................3<br />
        .........................2<br />
        .........................1<br />
        .........................H<br />
        <br />
        == L 25 ==<br />
        <br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ...........s..............<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        H123456789................<br />
        <br />
        == U 20 ==<br />
        <br />
        H.........................<br />
        1.........................<br />
        2.........................<br />
        3.........................<br />
        4.........................<br />
        5.........................<br />
        6.........................<br />
        7.........................<br />
        8.........................<br />
        9.........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ...........s..............<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................
    </CodeBlock><br />
    <p>Now, the tail (<Code>9</Code>) visits <Code><Glow>36</Glow></Code> positions (including <Code>s</Code>) at least once:</p><br />
    <CodeBlock>
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        ..........................<br />
        #.........................<br />
        #.............###.........<br />
        #............#...#........<br />
        .#..........#.....#.......<br />
        ..#..........#.....#......<br />
        ...#........#.......#.....<br />
        ....#......s.........#....<br />
        .....#..............#.....<br />
        ......#............#......<br />
        .......#..........#.......<br />
        ........#........#........<br />
        .........########.........
    </CodeBlock><br />
    <p>Simulate your complete series of motions on a larger rope with ten knots. <Glow>How many positions does the tail of the rope visit at least once?</Glow></p>
</>);
