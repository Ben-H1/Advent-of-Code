import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';

export const part1Description = (<>
    <p>You <Hidden content='wheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'>slide down</Hidden> the <Link link='https://en.wikipedia.org/wiki/Fireman%27s_pole'>firepole</Link> in the corner of the playground and land in the North Pole base movie theater!</p><br />
    <p>The movie theater has a big tile floor with an interesting pattern. Elves here are redecorating the theater by switching out some of the square tiles in the big grid they form. Some of the tiles are <Glow>red</Glow>; the Elves would like to find the largest rectangle that uses red tiles for two of its opposite corners. They even have a list of where the red tiles are located in the grid (your puzzle input).</p><br />
    <p>For example:</p><br />
    <CodeBlock>
        7,1<br />
        11,1<br />
        11,7<br />
        9,7<br />
        9,5<br />
        2,5<br />
        2,3<br />
        7,3
    </CodeBlock><br />
    <p>Showing red tiles as <Code>#</Code> and other tiles as <Code>.</Code>, the above arrangement of red tiles would look like this:</p><br />
    <CodeBlock>
        ..............<br />
        .......#...#..<br />
        ..............<br />
        ..#....#......<br />
        ..............<br />
        ..#......#....<br />
        ..............<br />
        .........#.#..<br />
        ..............
    </CodeBlock><br />
    <p>You can choose any two red tiles as the opposite corners of your rectangle; your goal is to find the largest rectangle possible.</p><br />
    <p>For example, you could make a rectangle (shown as <Code>O</Code>) with an area of <Code>24</Code> between <Code>2,5</Code> and <Code>9,7</Code>:</p><br />
    <CodeBlock>
        ..............<br />
        .......#...#..<br />
        ..............<br />
        ..#....#......<br />
        ..............<br />
        ..<Glow>O</Glow>OOOOOOO....<br />
        ..OOOOOOOO....<br />
        ..OOOOOOO<Glow>O</Glow>.#..<br />
        ..............
    </CodeBlock><br />
    <p>Or, you could make a rectangle with area <Code>35</Code> between <Code>7,1</Code> and <Code>11,7</Code>:</p><br />
    <CodeBlock>
        ..............<br />
        .......<Glow>O</Glow>OOOO..<br />
        .......OOOOO..<br />
        ..#....OOOOO..<br />
        .......OOOOO..<br />
        ..#....OOOOO..<br />
        .......OOOOO..<br />
        .......OOOO<Glow>O</Glow>..<br />
        ..............
    </CodeBlock><br />
    <p>You could even make a thin rectangle with an area of only <Code>6</Code> between <Code>7,3</Code> and <Code>2,3</Code>:</p><br />
    <CodeBlock>
        ..............<br />
        .......#...#..<br />
        ..............<br />
        ..<Glow>O</Glow>OOOO<Glow>O</Glow>......<br />
        ..............<br />
        ..#......#....<br />
        ..............<br />
        .........#.#..<br />
        ..............
    </CodeBlock><br />
    <p>Ultimately, the largest rectangle you can make in this example has area <Code><Glow>50</Glow></Code>. One way to do this is between <Code>2,5</Code> and <Code>11,1</Code>:</p><br />
    <CodeBlock>
        ..............<br />
        ..OOOOOOOOO<Glow>O</Glow>..<br />
        ..OOOOOOOOOO..<br />
        ..OOOOOOOOOO..<br />
        ..OOOOOOOOOO..<br />
        ..<Glow>O</Glow>OOOOOOOOO..<br />
        ..............<br />
        .........#.#..<br />
        ..............
    </CodeBlock><br />
    <p>Using two red tiles as opposite corners, <Glow>what is the largest area of any rectangle you can make?</Glow></p>
</>);

export const part2Description = (<>
    <p>The Elves just remembered: they can only switch out tiles that are <Glow>red</Glow> or <Glow>green</Glow>. So, your rectangle can only include red or green tiles.</p><br />
    <p>In your list, every red tile is connected to the red tile before and after it by a straight line of <Glow>green tiles</Glow>. The list wraps, so the first red tile is also connected to the last red tile. Tiles that are adjacent in your list will always be on either the same row or the same column.</p><br />
    <p>Using the same example as before, the tiles marked <Code>X</Code> would be green:</p><br />
    <CodeBlock>
        ..............<br />
        .......#XXX#..<br />
        .......X...X..<br />
        ..#XXXX#...X..<br />
        ..X........X..<br />
        ..#XXXXXX#.X..<br />
        .........X.X..<br />
        .........#X#..<br />
        ..............
    </CodeBlock><br />
    <p>In addition, all of the tiles <Glow>inside</Glow> this loop of red and green tiles are <Glow>also</Glow> green. So, in this example, these are the green tiles:</p><br />
    <CodeBlock>
        ..............<br />
        .......#XXX#..<br />
        .......XXXXX..<br />
        ..#XXXX#XXXX..<br />
        ..XXXXXXXXXX..<br />
        ..#XXXXXX#XX..<br />
        .........XXX..<br />
        .........#X#..<br />
        ..............
    </CodeBlock><br />
    <p>The remaining tiles are never red nor green.</p><br />
    <p>The rectangle you choose still must have red tiles in opposite corners, but any other tiles it includes must now be red or green. This significantly limits your options.</p><br />
    <p>For example, you could make a rectangle out of red and green tiles with an area of <Code>15</Code> between <Code>7,3</Code> and <Code>11,1</Code>:</p><br />
    <CodeBlock>
        ..............<br />
        .......OOOO<Glow>O</Glow>..<br />
        .......OOOOO..<br />
        ..#XXXX<Glow>O</Glow>OOOO..<br />
        ..XXXXXXXXXX..<br />
        ..#XXXXXX#XX..<br />
        .........XXX..<br />
        .........#X#..<br />
        ..............
    </CodeBlock><br />
    <p>Or, you could make a thin rectangle with an area of <Code>3</Code> between <Code>9,7</Code> and <Code>9,5</Code>:</p><br />
    <CodeBlock>
        ..............<br />
        .......#XXX#..<br />
        .......XXXXX..<br />
        ..#XXXX#XXXX..<br />
        ..XXXXXXXXXX..<br />
        ..#XXXXXX<Glow>O</Glow>XX..<br />
        .........OXX..<br />
        .........<Glow>O</Glow>X#..<br />
        ..............
    </CodeBlock><br />
    <p>The largest rectangle you can make in this example using only red and green tiles has area <Code><Glow>24</Glow></Code>. One way to do this is between <Code>9,5</Code> and <Code>2,3</Code>:</p><br />
    <CodeBlock>
        ..............<br />
        .......#XXX#..<br />
        .......XXXXX..<br />
        ..<Glow>O</Glow>OOOOOOOXX..<br />
        ..OOOOOOOOXX..<br />
        ..OOOOOOO<Glow>O</Glow>XX..<br />
        .........XXX..<br />
        .........#X#..<br />
        ..............
    </CodeBlock><br />
    <p>Using two red tiles as opposite corners, <Glow>what is the largest area of any rectangle you can make using only red and green tiles?</Glow></p>
</>);
