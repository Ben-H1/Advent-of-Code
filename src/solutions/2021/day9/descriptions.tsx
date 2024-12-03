import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';

export const part1Description = (<>
    <p>These caves seem to be <Link link='https://en.wikipedia.org/wiki/Lava_tube'>lava tubes</Link>. Parts are even still volcanically active; small hydrothermal vents release smoke into the caves that slowly <Hidden content={`This was originally going to be a puzzle about watersheds, but we're already under water.`}>settles like rain</Hidden>.</p><br />
    <p>If you can model how the smoke flows through the caves, you might be able to avoid it and be that much safer. The submarine generates a heightmap of the floor of the nearby caves for you (your puzzle input).</p><br />
    <p>Smoke flows to the lowest point of the area it's in. For example, consider the following heightmap:</p><br />
    <CodeBlock>
        2<Glow>1</Glow>9994321<Glow>0</Glow><br />
        3987894921<br />
        98<Glow>5</Glow>6789892<br />
        8767896789<br />
        989996<Glow>5</Glow>678
    </CodeBlock><br />
    <p>Each number corresponds to the height of a particular location, where <Code>9</Code> is the highest and <Code>0</Code> is the lowest a location can be.</p><br />
    <p>Your first goal is to find the <Glow>low points</Glow> - the locations that are lower than any of its adjacent locations. Most locations have four adjacent locations (up, down, left, and right); locations on the edge or corner of the map have three or two adjacent locations, respectively. (Diagonal locations do not count as adjacent.)</p><br />
    <p>In the above example, there are <Glow>four</Glow> low points, all highlighted: two are in the first row (a <Code>1</Code> and a <Code>0</Code>), one is in the third row (a <Code>5</Code>), and one is in the bottom row (also a <Code>5</Code>). All other locations on the heightmap have some lower adjacent location, and so are not low points.</p><br />
    <p>The <Glow>risk level</Glow> of a low point is <Glow>1 plus its height</Glow>. In the above example, the risk levels of the low points are <Code>2</Code>, <Code>1</Code>, <Code>6</Code>, and <Code>6</Code>. The sum of the risk levels of all low points in the heightmap is therefore <Code><Glow>15</Glow></Code>.</p><br />
    <p>Find all of the low points on your heightmap. <Glow>What is the sum of the risk levels of all low points on your heightmap?</Glow></p>
</>);

export const part2Description = (<>
    <p>Next, you need to find the largest basins so you know what areas are most important to avoid.</p><br />
    <p>A <Glow>basin</Glow> is all locations that eventually flow downward to a single low point. Therefore, every low point has a basin, although some basins are very small. Locations of height <Code>9</Code> do not count as being in any basin, and all other locations will always be part of exactly one basin.</p><br />
    <p>The <Glow>size</Glow> of a basin is the number of locations within the basin, including the low point. The example above has four basins.</p><br />
    <p>The top-left basin, size <Code>3</Code>:</p><br />
    <CodeBlock>
        <Glow>21</Glow>99943210<br />
        <Glow>3</Glow>987894921<br />
        9856789892<br />
        8767896789<br />
        9899965678
    </CodeBlock><br />
    <p>The top-right basin, size <Code>9</Code>:</p><br />
    <CodeBlock>
        21999<Glow>43210</Glow><br />
        398789<Glow>4</Glow>9<Glow>21</Glow><br />
        985678989<Glow>2</Glow><br />
        8767896789<br />
        9899965678
    </CodeBlock><br />
    <p>The middle basin, size <Code>14</Code>:</p><br />
    <CodeBlock>
        2199943210<br />
        39<Glow>878</Glow>94921<br />
        9<Glow>85678</Glow>9892<br />
        <Glow>87678</Glow>96789<br />
        9<Glow>8</Glow>99965678
    </CodeBlock><br />
    <p>The bottom-right basin, size <Code>9</Code>:</p><br />
    <CodeBlock>
        2199943210<br />
        3987894921<br />
        9856789<Glow>8</Glow>92<br />
        876789<Glow>678</Glow>9<br />
        98999<Glow>65678</Glow>
    </CodeBlock><br />
    <p>Find the three largest basins and multiply their sizes together. In the above example, this is <Code>9 * 14 * 9 = <Glow>1134</Glow></Code>.</p><br />
    <p><Glow>What do you get if you multiply together the sizes of the three largest basins?</Glow></p>
</>);
