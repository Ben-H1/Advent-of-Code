import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Link from '@components/text/Link';

export const part1Description = (<>
    <p>Thanks to your efforts, the machine parts factory is one of the first factories up and running since the lavafall came back. However, to catch up with the large backlog of parts requests, the factory will also need a <Glow>large supply of lava</Glow> for a while; the Elves have already started creating a large lagoon nearby for this purpose.</p><br/>
    <p>However, they aren't sure the lagoon will be big enough; they've asked you to take a look at the <Glow>dig plan</Glow> (your puzzle input). For example:</p><br/>
    <CodeBlock>
        R 6 (#70c710)<br/>
        D 5 (#0dc571)<br/>
        L 2 (#5713f0)<br/>
        D 2 (#d2c081)<br/>
        R 2 (#59c680)<br/>
        D 2 (#411b91)<br/>
        L 5 (#8ceee2)<br/>
        U 2 (#caa173)<br/>
        L 1 (#1b58a2)<br/>
        U 2 (#caa171)<br/>
        R 2 (#7807d2)<br/>
        U 3 (#a77fa3)<br/>
        L 2 (#015232)<br/>
        U 2 (#7a21e3)
    </CodeBlock><br/>
    <p>The digger starts in a 1 meter cube hole in the ground. They then dig the specified number of meters <Glow>up</Glow> (<Code>U</Code>), <Glow>down</Glow> (<Code>D</Code>), <Glow>left</Glow> (<Code>L</Code>), or <Glow>right</Glow> (<Code>R</Code>), clearing full 1 meter cubes as they go. The directions are given as seen from above, so if "up" were north, then "right" would be east, and so on. Each trench is also listed with <Glow>the color that the edge of the trench should be painted</Glow> as an <Link link='https://en.wikipedia.org/wiki/RGB_color_model#Numeric_representations'>RGB hexadecimal color code</Link>.</p><br/>
    <p>When viewed from above, the above example dig plan would result in the following loop of <Glow>trench</Glow> (<Code>#</Code>) having been dug out from otherwise <Glow>ground-level terrain</Glow> (<Code>.</Code>):</p><br/>
    <CodeBlock>
        #######<br/>
        #.....#<br/>
        ###...#<br/>
        ..#...#<br/>
        ..#...#<br/>
        ###.###<br/>
        #...#..<br/>
        ##..###<br/>
        .#....#<br/>
        .######
    </CodeBlock><br/>
    <p>At this point, the trench could contain 38 cubic meters of lava. However, this is just the edge of the lagoon; the next step is to <Glow>dig out the interior</Glow> so that it is one meter deep as well:</p><br/>
    <CodeBlock>
        #######<br/>
        #######<br/>
        #######<br/>
        ..#####<br/>
        ..#####<br/>
        #######<br/>
        #####..<br/>
        #######<br/>
        .######<br/>
        .######
    </CodeBlock><br/>
    <p>Now, the lagoon can contain a much more respectable <Code><Glow>62</Glow></Code> cubic meters of lava. While the interior is dug out, the edges are also painted according to the color codes in the dig plan.</p><br/>
    <p>The Elves are concerned the lagoon won't be large enough; if they follow their dig plan, <Glow>how many cubic meters of lava could it hold?</Glow></p>
</>);

export const part2Description = (<>
</>);
