import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Link from '@components/text/Link';

export const part1Description = (<>
    <p>You reach the place where all of the mirrors were pointing: a massive <Link link='https://en.wikipedia.org/wiki/Parabolic_reflector'>parabolic reflector dish</Link> attached to the side of another large mountain.</p><br/>
    <p>The dish is made up of many small mirrors, but while the mirrors themselves are roughly in the shape of a parabolic reflector dish, each individual mirror seems to be pointing in slightly the wrong direction. If the dish is meant to focus light, all it's doing right now is sending it in a vague direction.</p><br/>
    <p>This system must be what provides the energy for the lava! If you focus the reflector dish, maybe you can go where it's pointing and use the light to fix the lava production.</p><br/>
    <p>Upon closer inspection, the individual mirrors each appear to be connected via an elaborate system of ropes and pulleys to a large metal platform below the dish. The platform is covered in large rocks of various shapes. Depending on their position, the weight of the rocks deforms the platform, and the shape of the platform controls which ropes move and ultimately the focus of the dish.</p><br/>
    <p>In short: if you move the rocks, you can focus the dish. The platform even has a control panel on the side that lets you <Glow>tilt</Glow> it in one of four directions! The rounded rocks (<Code>O</Code>) will roll when the platform is tilted, while the cube-shaped rocks (<Code>#</Code>) will stay in place. You note the positions of all of the empty spaces (<Code>.</Code>) and rocks (your puzzle input). For example:</p><br/>
    <CodeBlock>
        O....#....<br/>
        O.OO#....#<br/>
        .....##...<br/>
        OO.#O....O<br/>
        .O.....O#.<br/>
        O.#..O.#.#<br/>
        ..O..#O..O<br/>
        .......O..<br/>
        #....###..<br/>
        #OO..#....
    </CodeBlock><br/>
    <p>Start by tilting the lever so all of the rocks will slide <Glow>north</Glow> as far as they will go:</p><br/>
    <CodeBlock>
        OOOO.#.O..<br/>
        OO..#....#<br/>
        OO..O##..O<br/>
        O..#.OO...<br/>
        ........#.<br/>
        ..#....#.#<br/>
        ..O..#.O.O<br/>
        ..O.......<br/>
        #....###..<br/>
        #....#....
    </CodeBlock><br/>
    <p>You notice that the support beams along the north side of the platform are <Glow>damaged</Glow>; to ensure the platform doesn't collapse, you should calculate the <Glow>total load</Glow> on the north support beams.</p><br/>
    <p>The amount of load caused by a single rounded rock (<Code>O</Code>) is equal to the number of rows from the rock to the south edge of the platform, including the row the rock is on. (Cube-shaped rocks (<Code>#</Code>) don't contribute to load.) So, the amount of load caused by each rock in each row is as follows:</p><br/>
    <CodeBlock>
        OOOO.#.O.. 10<br/>
        OO..#....#  9<br/>
        OO..O##..O  8<br/>
        O..#.OO...  7<br/>
        ........#.  6<br/>
        ..#....#.#  5<br/>
        ..O..#.O.O  4<br/>
        ..O.......  3<br/>
        #....###..  2<br/>
        #....#....  1
    </CodeBlock><br/>
    <p>The total load is the sum of the load caused by all of the <Glow>rounded rocks</Glow>. In this example, the total load is <Code><Glow>136</Glow></Code>.</p><br/>
    <p>Tilt the platform so that the rounded rocks all roll north. Afterward, <Glow>what is the total load on the north support beams?</Glow></p>
</>);

export const part2Description = (<>
    <p>The parabolic reflector dish deforms, but not in a way that focuses the beam. To do that, you'll need to move the rocks to the edges of the platform. Fortunately, a button on the side of the control panel labeled "<Glow>spin cycle</Glow>" attempts to do just that!</p><br/>
    <p>Each <Glow>cycle</Glow> tilts the platform four times so that the rounded rocks roll <Glow>north</Glow>, then <Glow>west</Glow>, then <Glow>south</Glow>, then <Glow>east</Glow>. After each tilt, the rounded rocks roll as far as they can before the platform tilts in the next direction. After one cycle, the platform will have finished rolling the rounded rocks in those four directions in that order.</p><br/>
    <p>Here's what happens in the example above after each of the first few cycles:</p><br/>
    <CodeBlock>
        After 1 cycle:<br/>
        .....#....<br/>
        ....#...O#<br/>
        ...OO##...<br/>
        .OO#......<br/>
        .....OOO#.<br/>
        .O#...O#.#<br/>
        ....O#....<br/>
        ......OOOO<br/>
        #...O###..<br/>
        #..OO#....<br/>
        <br/>
        After 2 cycles:<br/>
        .....#....<br/>
        ....#...O#<br/>
        .....##...<br/>
        ..O#......<br/>
        .....OOO#.<br/>
        .O#...O#.#<br/>
        ....O#...O<br/>
        .......OOO<br/>
        #..OO###..<br/>
        #.OOO#...O<br/>
        <br/>
        After 3 cycles:<br/>
        .....#....<br/>
        ....#...O#<br/>
        .....##...<br/>
        ..O#......<br/>
        .....OOO#.<br/>
        .O#...O#.#<br/>
        ....O#...O<br/>
        .......OOO<br/>
        #...O###.O<br/>
        #.OOO#...O
    </CodeBlock><br/>
    <p>This process should work if you leave it running long enough, but you're still worried about the north support beams. To make sure they'll survive for a while, you need to calculate the <Glow>total load</Glow> on the north support beams after <Code>1000000000</Code> cycles.</p><br/>
    <p>In the above example, after <Code>1000000000</Code> cycles, the total load on the north support beams is <Code><Glow>64</Glow></Code>.</p><br/>
    <p>Run the spin cycle for <Code>1000000000</Code> cycles. Afterward, <Glow>what is the total load on the north support beams?</Glow></p>
</>);
