import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';

export const part1Description = (<>
    <p>You find yourselves on the <Link link='https://adventofcode.com/2016/day/25'>roof</Link> of a top-secret Easter Bunny installation.</p><br />
    <p>While The Historians do their thing, you take a look at the familiar <Glow>huge antenna</Glow>. Much to your surprise, it seems to have been reconfigured to emit a signal that makes people 0.1% more likely to buy Easter Bunny brand <Hidden content='They could have imitated delicious chocolate, but the mediocre chocolate is WAY easier to imitate.'>Imitation Mediocre</Hidden> Chocolate as a Christmas gift! Unthinkable!</p><br />
    <p>Scanning across the city, you find that there are actually many such antennas. Each antenna is tuned to a specific <Glow>frequency</Glow> indicated by a single lowercase letter, uppercase letter, or digit. You create a map (your puzzle input) of these antennas. For example:</p><br />
    <CodeBlock>
        ............<br />
        ........0...<br />
        .....0......<br />
        .......0....<br />
        ....0.......<br />
        ......A.....<br />
        ............<br />
        ............<br />
        ........A...<br />
        .........A..<br />
        ............<br />
        ............
    </CodeBlock><br />
    <p>The signal only applies its nefarious effect at specific <Glow>antinodes</Glow> based on the resonant frequencies of the antennas. In particular, an antinode occurs at any point that is perfectly in line with two antennas of the same frequency - but only when one of the antennas is twice as far away as the other. This means that for any pair of antennas with the same frequency, there are two antinodes, one on either side of them.</p><br />
    <p>So, for these two antennas with frequency <Code>a</Code>, they create the two antinodes marked with <Code>#</Code>:</p><br />
    <CodeBlock>
        ..........<br />
        ...#......<br />
        ..........<br />
        ....a.....<br />
        ..........<br />
        .....a....<br />
        ..........<br />
        ......#...<br />
        ..........<br />
        ..........
    </CodeBlock><br />
    <p>Adding a third antenna with the same frequency creates several more antinodes. It would ideally add four antinodes, but two are off the right side of the map, so instead it adds only two:</p><br />
    <CodeBlock>
        ..........<br />
        ...#......<br />
        #.........<br />
        ....a.....<br />
        ........a.<br />
        .....a....<br />
        ..#.......<br />
        ......#...<br />
        ..........<br />
        ..........
    </CodeBlock><br />
    <p>Antennas with different frequencies don't create antinodes; <Code>A</Code> and <Code>a</Code> count as different frequencies. However, antinodes <Glow>can</Glow> occur at locations that contain antennas. In this diagram, the lone antenna with frequency capital <Code>A</Code> creates no antinodes but has a lowercase-<Code>a</Code>-frequency antinode at its location:</p><br />
    <CodeBlock>
        ..........<br />
        ...#......<br />
        #.........<br />
        ....a.....<br />
        ........a.<br />
        .....a....<br />
        ..#.......<br />
        ......A...<br />
        ..........<br />
        ..........
    </CodeBlock><br />
    <p>The first example has antennas with two different frequencies, so the antinodes they create look like this, plus an antinode overlapping the topmost <Code>A</Code>-frequency antenna:</p><br />
    <CodeBlock>
        ......#....#<br />
        ...#....0...<br />
        ....#0....#.<br />
        ..#....0....<br />
        ....0....#..<br />
        .#....A.....<br />
        ...#........<br />
        #......#....<br />
        ........A...<br />
        .........A..<br />
        ..........#.<br />
        ..........#.
    </CodeBlock><br />
    <p>Because the topmost <Code>A</Code>-frequency antenna overlaps with a <Code>0</Code>-frequency antinode, there are <Code><Glow>14</Glow></Code> total unique locations that contain an antinode within the bounds of the map.</p><br />
    <p>Calculate the impact of the signal. <Glow>How many unique locations within the bounds of the map contain an antinode?</Glow></p>
</>);

export const part2Description = (<>
    <p>Watching over your shoulder as you work, one of The Historians asks if you took the effects of resonant harmonics into your calculations.</p><br />
    <p>Whoops!</p><br />
    <p>After updating your model, it turns out that an antinode occurs at <Glow>any grid position</Glow> exactly in line with at least two antennas of the same frequency, regardless of distance. This means that some of the new antinodes will occur at the position of each antenna (unless that antenna is the only one of its frequency).</p><br />
    <p>So, these three <Code>T</Code>-frequency antennas now create many antinodes:</p><br />
    <CodeBlock>
        T....#....<br />
        ...T......<br />
        .T....#...<br />
        .........#<br />
        ..#.......<br />
        ..........<br />
        ...#......<br />
        ..........<br />
        ....#.....<br />
        ..........
    </CodeBlock><br />
    <p>In fact, the three <Code>T</Code>-frequency antennas are all exactly in line with two antennas, so they are all also antinodes! This brings the total number of antinodes in the above example to <Code><Glow>9</Glow></Code>.</p><br />
    <p>The original example now has <Code><Glow>34</Glow></Code> antinodes, including the antinodes that appear on every antenna:</p><br />
    <CodeBlock>
        ##....#....#<br />
        .#.#....0...<br />
        ..#.#0....#.<br />
        ..##...0....<br />
        ....0....#..<br />
        .#...#A....#<br />
        ...#..#.....<br />
        #....#.#....<br />
        ..#.....A...<br />
        ....#....A..<br />
        .#........#.<br />
        ...#......##
    </CodeBlock><br />
    <p>Calculate the impact of the signal using this updated model. <Glow>How many unique locations within the bounds of the map contain an antinode?</Glow></p>
</>);
