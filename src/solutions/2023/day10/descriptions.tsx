import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>You use the hang glider to ride the hot air from Desert Island all the way up to the floating metal island. This island is surprisingly cold and there definitely aren't any thermals to glide on, so you leave your hang glider behind.</p><br/>
    <p>You wander around for a while, but you don't find any people or animals. However, you do occasionally find signposts labeled "<Link link='https://en.wikipedia.org/wiki/Hot_spring'>Hot Springs</Link>" pointing in a seemingly consistent direction; maybe you can find someone at the hot springs and ask them where the desert-machine parts are made.</p><br/>
    <p>The landscape here is alien; even the flowers and trees are made of metal. As you stop to admire some metal grass, you notice something metallic scurry away in your peripheral vision and jump into a big pipe! It didn't look like any animal you've ever seen; if you want a better look, you'll need to get ahead of it.</p><br/>
    <p>Scanning the area, you discover that the entire field you're standing on is <Hidden content='Manufactured by Hamilton and Hilbert Pipe Company'>densely packed with pipes</Hidden>; it was hard to tell at first because they're the same metallic silver color as the "ground". You make a quick sketch of all of the surface pipes you can see (your puzzle input).</p><br/>
    <p>The pipes are arranged in a two-dimensional grid of <Glow>tiles</Glow>:</p><br/>
    <List>
        <li><Code>|</Code> is a <Glow>vertical pipe</Glow> connecting north and south.</li>
        <li><Code>-</Code> is a <Glow>horizontal pipe</Glow> connecting east and west.</li>
        <li><Code>L</Code> is a <Glow>90-degree bend</Glow> connecting north and east.</li>
        <li><Code>J</Code> is a <Glow>90-degree bend</Glow> connecting north and west.</li>
        <li><Code>7</Code> is a <Glow>90-degree bend</Glow> connecting south and west.</li>
        <li><Code>F</Code> is a <Glow>90-degree bend</Glow> connecting south and east.</li>
        <li><Code>.</Code> is <Glow>ground</Glow>; there is no pipe in this tile.</li>
        <li><Code>S</Code> is the <Glow>starting position</Glow> of the animal; there is a pipe on this tile, but your sketch doesn't show what shape the pipe has.</li>
    </List><br/>
    <p>Based on the acoustics of the animal's scurrying, you're confident the pipe that contains the animal is <Glow>one large, continuous loop</Glow>.</p><br/>
    <p>For example, here is a square loop of pipe:</p><br/>
    <CodeBlock>
        .....<br/>
        .F-7.<br/>
        .|.|.<br/>
        .L-J.<br/>
        .....
    </CodeBlock><br/>
    <p>If the animal had entered this loop in the northwest corner, the sketch would instead look like this:</p><br/>
    <CodeBlock>
        .....<br/>
        .<Glow>S</Glow>-7.<br/>
        .|.|.<br/>
        .L-J.<br/>
        .....
    </CodeBlock><br/>
    <p>In the above diagram, the <Code>S</Code> tile is still a 90-degree <Code>F</Code> bend: you can tell because of how the adjacent pipes connect to it.</p><br/>
    <p>Unfortunately, there are also many pipes that <Glow>aren't connected to the loop</Glow>! This sketch shows the same loop as above:</p><br/>
    <CodeBlock>
        -L|F7<br/>
        7S-7|<br/>
        L|7||<br/>
        -L-J|<br/>
        L|-JF
    </CodeBlock><br/>
    <p>In the above diagram, you can still figure out which pipes form the main loop: they're the ones connected to <Code>S</Code>, pipes those pipes connect to, pipes <Glow>those</Glow> pipes connect to, and so on. Every pipe in the main loop connects to its two neighbors (including <Code>S</Code>, which will have exactly two pipes connecting to it, and which is assumed to connect back to those two pipes).</p><br/>
    <p>Here is a sketch that contains a slightly more complex main loop:</p><br/>
    <CodeBlock>
        ..F7.<br/>
        .FJ|.<br/>
        SJ.L7<br/>
        |F--J<br/>
        LJ...
    </CodeBlock><br/>
    <p>Here's the same example sketch with the extra, non-main-loop pipe tiles also shown:</p><br/>
    <CodeBlock>
        7-F7-<br/>
        .FJ|7<br/>
        SJLL7<br/>
        |F--J<br/>
        LJ.LJ
    </CodeBlock><br/>
    <p>If you want to <Glow>get out ahead of the animal</Glow>, you should find the tile in the loop that is <Glow>farthest</Glow> from the starting position. Because the animal is in the pipe, it doesn't make sense to measure this by direct distance. Instead, you need to find the tile that would take the longest number of steps <Glow>along the loop</Glow> to reach from the starting point - regardless of which way around the loop the animal went.</p><br/>
    <p>In the first example with the square loop:</p><br/>
    <CodeBlock>
        .....<br/>
        .S-7.<br/>
        .|.|.<br/>
        .L-J.<br/>
        .....
    </CodeBlock><br/>
    <p>You can count the distance each tile in the loop is from the starting point like this:</p><br/>
    <CodeBlock>
        .....<br/>
        .012.<br/>
        .1.3.<br/>
        .23<Glow>4</Glow>.<br/>
        .....
    </CodeBlock><br/>
    <p>In this example, the farthest point from the start is <Code><Glow>4</Glow></Code> steps away.</p><br/>
    <p>Here's the more complex loop again:</p><br/>
    <CodeBlock>
        ..F7.<br/>
        .FJ|.<br/>
        SJ.L7<br/>
        |F--J<br/>
        LJ...
    </CodeBlock><br/>
    <p>Here are the distances for each tile on that loop:</p><br/>
    <CodeBlock>
        ..45.<br/>
        .236.<br/>
        01.7<Glow>8</Glow><br/>
        14567<br/>
        23...
    </CodeBlock><br/>
    <p>Find the single giant loop starting at <Code>S</Code>. <Glow>How many steps along the loop does it take to get from the starting position to the point farthest from the starting position?</Glow></p>
</>);

export const part2Description = (<>
    <p>You quickly reach the farthest point of the loop, but the animal never emerges. Maybe its nest is <Glow>within the area enclosed by the loop</Glow>?</p><br/>
    <p>To determine whether it's even worth taking the time to search for such a nest, you should calculate how many tiles are contained within the loop. For example:</p><br/>
    <CodeBlock>
        ...........<br/>
        .S-------7.<br/>
        .|F-----7|.<br/>
        .||.....||.<br/>
        .||.....||.<br/>
        .|L-7.F-J|.<br/>
        .|..|.|..|.<br/>
        .L--J.L--J.<br/>
        ...........
    </CodeBlock><br/>
    <p>The above loop encloses merely <Glow>four tiles</Glow> - the two pairs of <Code>.</Code> in the southwest and southeast (marked <Code>I</Code> below). The middle <Code>.</Code> tiles (marked <Code>O</Code> below) are <Glow>not</Glow> in the loop. Here is the same loop again with those regions marked:</p><br/>
    <CodeBlock>
        ...........<br/>
        .S-------7.<br/>
        .|F-----7|.<br/>
        .||<Glow>OOOOO</Glow>||.<br/>
        .||<Glow>OOOOO</Glow>||.<br/>
        .|L-7<Glow>O</Glow>F-J|.<br/>
        .|<Glow>II</Glow>|<Glow>O</Glow>|<Glow>II</Glow>|.<br/>
        .L--J<Glow>O</Glow>L--J.<br/>
        .....<Glow>O</Glow>.....
    </CodeBlock><br/>
    <p>In fact, there doesn't even need to be a full tile path to the outside for tiles to count as outside the loop - squeezing between pipes is also allowed! Here, <Code>I</Code> is still within the loop and <Code>O</Code> is still outside the loop:</p><br/>
    <CodeBlock>
        ..........<br/>
        .S------7.<br/>
        .|F----7|.<br/>
        .||<Glow>OOOO</Glow>||.<br/>
        .||<Glow>OOOO</Glow>||.<br/>
        .|L-7F-J|.<br/>
        .|<Glow>II</Glow>||<Glow>II</Glow>|.<br/>
        .L--JL--J.<br/>
        ..........
    </CodeBlock><br/>
    <p>In both of the above examples, <Code><Glow>4</Glow></Code> tiles are enclosed by the loop.</p><br/>
    <p>Here's a larger example:</p><br/>
    <CodeBlock>
        .F----7F7F7F7F-7....<br/>
        .|F--7||||||||FJ....<br/>
        .||.FJ||||||||L7....<br/>
        FJL7L7LJLJ||LJ.L-7..<br/>
        L--J.L7...LJS7F-7L7.<br/>
        ....F-J..F7FJ|L7L7L7<br/>
        ....L7.F7||L7|.L7L7|<br/>
        .....|FJLJ|FJ|F7|.LJ<br/>
        ....FJL-7.||.||||...<br/>
        ....L---J.LJ.LJLJ...
    </CodeBlock><br/>
    <p>The above sketch has many random bits of ground, some of which are in the loop (<Code>I</Code>) and some of which are outside it (<Code>O</Code>):</p><br/>
    <CodeBlock>
        <Glow>O</Glow>F----7F7F7F7F-7<Glow>OOOO</Glow><br/>
        <Glow>O</Glow>|F--7||||||||FJ<Glow>OOOO</Glow><br/>
        <Glow>O</Glow>||<Glow>O</Glow>FJ||||||||L7<Glow>OOOO</Glow><br/>
        FJL7L7LJLJ||LJ<Glow>I</Glow>L-7<Glow>OO</Glow><br/>
        L--J<Glow>O</Glow>L7<Glow>III</Glow>LJS7F-7L7<Glow>O</Glow><br/>
        <Glow>OOOO</Glow>F-J<Glow>II</Glow>F7FJ|L7L7L7<br/>
        <Glow>OOOO</Glow>L7<Glow>I</Glow>F7||L7|<Glow>I</Glow>L7L7|<br/>
        <Glow>OOOOO</Glow>|FJLJ|FJ|F7|<Glow>O</Glow>LJ<br/>
        <Glow>OOOO</Glow>FJL-7<Glow>O</Glow>||<Glow>O</Glow>||||<Glow>OOO</Glow><br/>
        <Glow>OOOO</Glow>L---J<Glow>O</Glow>LJ<Glow>O</Glow>LJLJ<Glow>OOO</Glow>
    </CodeBlock><br/>
    <p>In this larger example, <Code><Glow>8</Glow></Code> tiles are enclosed by the loop.</p><br/>
    <p>Any tile that isn't part of the main loop can count as being enclosed by the loop. Here's another example with many bits of junk pipe lying around that aren't connected to the main loop at all:</p><br/>
    <CodeBlock>
        FF7FSF7F7F7F7F7F---7<br/>
        L|LJ||||||||||||F--J<br/>
        FL-7LJLJ||||||LJL-77<br/>
        F--JF--7||LJLJ7F7FJ-<br/>
        L---JF-JLJ.||-FJLJJ7<br/>
        |F|F-JF---7F7-L7L|7|<br/>
        |FFJF7L7F-JF7|JL---7<br/>
        7-L-JL7||F7|L7F-7F7|<br/>
        L.L7LFJ|||||FJL7||LJ<br/>
        L7JLJL-JLJLJL--JLJ.L
    </CodeBlock><br/>
    <p>Here are just the tiles that are <Glow>enclosed by the loop</Glow> marked with <Code>I</Code>:</p><br/>
    <CodeBlock>
        FF7FSF7F7F7F7F7F---7<br/>
        L|LJ||||||||||||F--J<br/>
        FL-7LJLJ||||||LJL-77<br/>
        F--JF--7||LJLJ<Glow>I</Glow>F7FJ-<br/>
        L---JF-JLJ<Glow>IIII</Glow>FJLJJ7<br/>
        |F|F-JF---7<Glow>III</Glow>L7L|7|<br/>
        |FFJF7L7F-JF7<Glow>II</Glow>L---7<br/>
        7-L-JL7||F7|L7F-7F7|<br/>
        L.L7LFJ|||||FJL7||LJ<br/>
        L7JLJL-JLJLJL--JLJ.L
    </CodeBlock><br/>
    <p>In this last example, <Code><Glow>10</Glow></Code> tiles are enclosed by the loop.</p><br/>
    <p>Figure out whether you have time to search for the nest by calculating the area within the loop. <Glow>How many tiles are enclosed by the loop?</Glow></p>
</>);
