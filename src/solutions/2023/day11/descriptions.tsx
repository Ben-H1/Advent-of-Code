import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Link from '@components/text/Link';
import List from '@components/text/List';

const part1Description = (<>
    <p>You continue following signs for "Hot Springs" and eventually come across an <Link link='https://en.wikipedia.org/wiki/Observatory'>observatory</Link>. The Elf within turns out to be a researcher studying cosmic expansion using the giant telescope here.</p><br/>
    <p>He doesn't know anything about the missing machine parts; he's only visiting for this research project. However, he confirms that the hot springs are the next-closest area likely to have people; he'll even take you straight there once he's done with today's observation analysis.</p><br/>
    <p>Maybe you can help him with the analysis to speed things up?</p><br/>
    <p>The researcher has collected a bunch of data and compiled the data into a single giant <Glow>image</Glow> (your puzzle input). The image includes <Glow>empty space</Glow> (<Code>.</Code>) and <Glow>galaxies</Glow> (<Code>#</Code>). For example:</p><br/>
    <CodeBlock>
        ...#......<br/>
        .......#..<br/>
        #.........<br/>
        ..........<br/>
        ......#...<br/>
        .#........<br/>
        .........#<br/>
        ..........<br/>
        .......#..<br/>
        #...#.....
    </CodeBlock><br/>
    <p>The researcher is trying to figure out the sum of the lengths of the <Glow>shortest path between every pair of galaxies</Glow>. However, there's a catch: the universe expanded in the time it took the light from those galaxies to reach the observatory.</p><br/>
    <p>Due to something involving gravitational effects, <Glow>only some space expands</Glow>. In fact, the result is that <Glow>any rows or columns that contain no galaxies</Glow> should all actually be twice as big.</p><br/>
    <p>In the above example, three columns and two rows contain no galaxies:</p><br/>
    <CodeBlock>
        &nbsp;  v  v  v<br/>
        &nbsp;...#......<br/>
        &nbsp;.......#..<br/>
        &nbsp;#.........<br/>
        {'>..........<'}<br/>
        &nbsp;......#...<br/>
        &nbsp;.#........<br/>
        &nbsp;.........#<br/>
        {'>..........<'}<br/>
        &nbsp;.......#..<br/>
        &nbsp;#...#.....<br/>
        &nbsp;  ^  ^  ^
    </CodeBlock><br/>
    <p>These rows and columns need to be <Glow>twice as big</Glow>; the result of cosmic expansion therefore looks like this:</p><br/>
    <CodeBlock>
        ....#........<br/>
        .........#...<br/>
        #............<br/>
        .............<br/>
        .............<br/>
        ........#....<br/>
        .#...........<br/>
        ............#<br/>
        .............<br/>
        .............<br/>
        .........#...<br/>
        #....#.......
    </CodeBlock><br/>
    <p>Equipped with this expanded universe, the shortest path between every pair of galaxies can be found. It can help to assign every galaxy a unique number:</p><br/>
    <CodeBlock>
        ....1........<br/>
        .........2...<br/>
        3............<br/>
        .............<br/>
        .............<br/>
        ........4....<br/>
        .5...........<br/>
        ............6<br/>
        .............<br/>
        .............<br/>
        .........7...<br/>
        8....9.......
    </CodeBlock><br/>
    <p>In these 9 galaxies, there are <Glow>36 pairs</Glow>. Only count each pair once; order within the pair doesn't matter. For each pair, find any shortest path between the two galaxies using only steps that move up, down, left, or right exactly one <Code>.</Code> or <Code>#</Code> at a time. (The shortest path between two galaxies is allowed to pass through another galaxy.)</p><br/>
    <p>For example, here is one of the shortest paths between galaxies <Code>5</Code> and <Code>9</Code>:</p><br/>
    <CodeBlock>
        ....1........<br/>
        .........2...<br/>
        3............<br/>
        .............<br/>
        .............<br/>
        ........4....<br/>
        .5...........<br/>
        .##.........6<br/>
        ..##.........<br/>
        ...##........<br/>
        ....##...7...<br/>
        8....9.......
    </CodeBlock><br/>
    <p>This path has length <Code><Glow>9</Glow></Code> because it takes a minimum of <Glow>nine steps</Glow> to get from galaxy <Code>5</Code> to galaxy <Code>9</Code> (the eight locations marked <Code>#</Code> plus the step onto galaxy <Code>9</Code> itself). Here are some other example shortest path lengths:</p><br/>
    <List>
        <li>Between galaxy <Code>1</Code> and galaxy <Code>7</Code>: 15</li>
        <li>Between galaxy <Code>3</Code> and galaxy <Code>6</Code>: 17</li>
        <li>Between galaxy <Code>8</Code> and galaxy <Code>9</Code>: 5</li>
    </List><br/>
    <p>In this example, after expanding the universe, the sum of the shortest path between all 36 pairs of galaxies is <Code><Glow>374</Glow></Code>.</p><br/>
    <p>Expand the universe, then find the length of the shortest path between every pair of galaxies. <Glow>What is the sum of these lengths?</Glow></p>
</>);

const part2Description = (<>
    <p>The galaxies are much <Glow>older</Glow> (and thus much <Glow>farther apart</Glow>) than the researcher initially estimated.</p><br/>
    <p>Now, instead of the expansion you did before, make each empty row or column <Glow>one million times</Glow> larger. That is, each empty row should be replaced with <Code>1000000</Code> empty rows, and each empty column should be replaced with <Code>1000000</Code> empty columns.</p><br/>
    <p>(In the example above, if each empty row or column were merely <Code>10</Code> times larger, the sum of the shortest paths between every pair of galaxies would be <Code><Glow>1030</Glow></Code>. If each empty row or column were merely <Code>100</Code> times larger, the sum of the shortest paths between every pair of galaxies would be <Code><Glow>8410</Glow></Code>. However, your universe will need to expand far beyond these values.)</p><br/>
    <p>Starting with the same initial image, expand the universe according to these new rules, then find the length of the shortest path between every pair of galaxies. <Glow>What is the sum of these lengths?</Glow></p>
</>);

export const descriptions = {
    part1Description,
    part2Description
};
