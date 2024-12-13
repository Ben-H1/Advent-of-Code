import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>Why not search for the Chief Historian near the <Link link='https://adventofcode.com/2023/day/5'>gardener</Link> and his <Link link='https://adventofcode.com/2023/day/21'>massive farm</Link>? There's plenty of food, so The Historians grab something to eat while they search.</p><br />
    <p>You're about to settle near a complex arrangement of garden plots when some Elves ask if you can lend a hand. They'd like to set up <Hidden content={`I originally wanted to title this puzzle "Fencepost Problem", but I was afraid someone would then try to count fenceposts by mistake and experience a fencepost problem.`}>fences</Hidden> around each region of garden plots, but they can't figure out how much fence they need to order or how much it will cost. They hand you a map (your puzzle input) of the garden plots.</p><br />
    <p>Each garden plot grows only a single type of plant and is indicated by a single letter on your map. When multiple garden plots are growing the same type of plant and are touching (horizontally or vertically), they form a <Glow>region</Glow>. For example:</p><br />
    <CodeBlock>
        AAAA<br />
        BBCD<br />
        BBCC<br />
        EEEC
    </CodeBlock><br />
    <p>This 4x4 arrangement includes garden plots growing five different types of plants (labeled <Code>A</Code>, <Code>B</Code>, <Code>C</Code>, <Code>D</Code>, and <Code>E</Code>), each grouped into their own region.</p><br />
    <p>In order to accurately calculate the cost of the fence around a single region, you need to know that region's <Glow>area</Glow> and <Glow>perimeter</Glow>.</p><br />
    <p>The <Glow>area</Glow> of a region is simply the number of garden plots the region contains. The above map's type <Code>A</Code>, <Code>B</Code>, and <Code>C</Code> plants are each in a region of area <Code>4</Code>. The type <Code>E</Code> plants are in a region of area <Code>3</Code>; the type <Code>D</Code> plants are in a region of area <Code>1</Code>.</p><br />
    <p>Each garden plot is a square and so has <Glow>four sides</Glow>. The <Glow>perimeter</Glow> of a region is the number of sides of garden plots in the region that do not touch another garden plot in the same region. The type <Code>A</Code> and <Code>C</Code> plants are each in a region with perimeter <Code>10</Code>. The type <Code>B</Code> and <Code>E</Code> plants are each in a region with perimeter <Code>8</Code>. The lone <Code>D</Code> plot forms its own region with perimeter <Code>4</Code>.</p><br />
    <p>Visually indicating the sides of plots in each region that contribute to the perimeter using <Code>-</Code> and <Code>|</Code>, the above map's regions' perimeters are measured as follows:</p><br />
    <CodeBlock>
        +-+-+-+-+<br />
        |A A A A|<br />
        +-+-+-+-+     +-+<br />
        &nbsp;             |D|<br />
        +-+-+   +-+   +-+<br />
        |B B|   |C|<br />
        +   +   + +-+<br />
        |B B|   |C C|<br />
        +-+-+   +-+ +<br />
        &nbsp;         |C|<br />
        +-+-+-+   +-+<br />
        |E E E|<br />
        +-+-+-+
    </CodeBlock><br />
    <p>Plants of the same type can appear in multiple separate regions, and regions can even appear within other regions. For example:</p><br />
    <CodeBlock>
        OOOOO<br />
        OXOXO<br />
        OOOOO<br />
        OXOXO<br />
        OOOOO
    </CodeBlock><br />
    <p>The above map contains <Glow>five</Glow> regions, one containing all of the <Code>O</Code> garden plots, and the other four each containing a single <Code>X</Code> plot.</p><br />
    <p>The four <Code>X</Code> regions each have area <Code>1</Code> and perimeter <Code>4</Code>. The region containing <Code>21</Code> type <Code>O</Code> plants is more complicated; in addition to its outer edge contributing a perimeter of <Code>20</Code>, its boundary with each <Code>X</Code> region contributes an additional <Code>4</Code> to its perimeter, for a total perimeter of <Code>36</Code>.</p><br />
    <p>Due to "modern" business practices, the <Glow>price</Glow> of fence required for a region is found by <Glow>multiplying</Glow> that region's area by its perimeter. The <Glow>total price</Glow> of fencing all regions on a map is found by adding together the price of fence for every region on the map.</p><br />
    <p>In the first example, region <Code>A</Code> has price <Code>4 * 10 = 40</Code>, region <Code>B</Code> has price <Code>4 * 8 = 32</Code>, region <Code>C</Code> has price <Code>4 * 10 = 40</Code>, region <Code>D</Code> has price <Code>1 * 4 = 4</Code>, and region <Code>E</Code> has price <Code>3 * 8 = 24</Code>. So, the total price for the first example is <Code><Glow>140</Glow></Code>.</p><br />
    <p>In the second example, the region with all of the <Code>O</Code> plants has price <Code>21 * 36 = 756</Code>, and each of the four smaller <Code>X</Code> regions has price <Code>1 * 4 = 4</Code>, for a total price of <Code><Glow>772</Glow></Code> (<Code>756 + 4 + 4 + 4 + 4</Code>).</p><br />
    <p>Here's a larger example:</p><br />
    <CodeBlock>
        RRRRIICCFF<br />
        RRRRIICCCF<br />
        VVRRRCCFFF<br />
        VVRCCCJFFF<br />
        VVVVCJJCFE<br />
        VVIVCCJJEE<br />
        VVIIICJJEE<br />
        MIIIIIJJEE<br />
        MIIISIJEEE<br />
        MMMISSJEEE
    </CodeBlock><br />
    <p>It contains:</p><br />
    <List>
        <li>A region of <Code>R</Code> plants with price <Code>12 * 18 = 216</Code>.</li>
        <li>A region of <Code>I</Code> plants with price <Code>4 * 8 = 32</Code>.</li>
        <li>A region of <Code>C</Code> plants with price <Code>14 * 28 = 392</Code>.</li>
        <li>A region of <Code>F</Code> plants with price <Code>10 * 18 = 180</Code>.</li>
        <li>A region of <Code>V</Code> plants with price <Code>13 * 20 = 260</Code>.</li>
        <li>A region of <Code>J</Code> plants with price <Code>11 * 20 = 220</Code>.</li>
        <li>A region of <Code>C</Code> plants with price <Code>1 * 4 = 4</Code>.</li>
        <li>A region of <Code>E</Code> plants with price <Code>13 * 18 = 234</Code>.</li>
        <li>A region of <Code>I</Code> plants with price <Code>14 * 22 = 308</Code>.</li>
        <li>A region of <Code>M</Code> plants with price <Code>5 * 12 = 60</Code>.</li>
        <li>A region of <Code>S</Code> plants with price <Code>3 * 8 = 24</Code>.</li>
    </List><br />
    <p>So, it has a total price of <Code><Glow>1930</Glow></Code>.</p><br />
    <p><Glow>What is the total price of fencing all regions on your map?</Glow></p>
</>);

export const part2Description = (<>
    <p>Fortunately, the Elves are trying to order so much fence that they qualify for a <Glow>bulk discount</Glow>!</p><br />
    <p>Under the bulk discount, instead of using the perimeter to calculate the price, you need to use the <Glow>number of sides</Glow> each region has. Each straight section of fence counts as a side, regardless of how long it is.</p><br />
    <p>Consider this example again:</p><br />
    <CodeBlock>
        AAAA<br />
        BBCD<br />
        BBCC<br />
        EEEC
    </CodeBlock><br />
    <p>The region containing type <Code>A</Code> plants has <Code>4</Code> sides, as does each of the regions containing plants of type <Code>B</Code>, <Code>D</Code>, and <Code>E</Code>. However, the more complex region containing the plants of type <Code>C</Code> has <Code>8</Code> sides!</p><br />
    <p>Using the new method of calculating the per-region price by multiplying the region's area by its number of sides, regions <Code>A</Code> through <Code>E</Code> have prices <Code>16</Code>, <Code>16</Code>, <Code>32</Code>, <Code>4</Code>, and <Code>12</Code>, respectively, for a total price of <Code><Glow>80</Glow></Code>.</p><br />
    <p>The second example above (full of type <Code>X</Code> and <Code>O</Code> plants) would have a total price of <Code><Glow>436</Glow></Code>.</p><br />
    <p>Here's a map that includes an E-shaped region full of type <Code>E</Code> plants:</p><br />
    <CodeBlock>
        EEEEE<br />
        EXXXX<br />
        EEEEE<br />
        EXXXX<br />
        EEEEE
    </CodeBlock><br />
    <p>The E-shaped region has an area of <Code>17</Code> and <Code>12</Code> sides for a price of <Code>204</Code>. Including the two regions full of type <Code>X</Code> plants, this map has a total price of <Code><Glow>236</Glow></Code>.</p><br />
    <p>This map has a total price of <Code><Glow>368</Glow></Code>:</p><br />
    <CodeBlock>
        AAAAAA<br />
        AAABBA<br />
        AAABBA<br />
        ABBAAA<br />
        ABBAAA<br />
        AAAAAA
    </CodeBlock><br />
    <p>It includes two regions full of type <Code>B</Code> plants (each with <Code>4</Code> sides) and a single region full of type <Code>A</Code> plants (with <Code>4</Code> sides on the outside and <Code>8</Code> more sides on the inside, a total of <Code>12</Code> sides). Be especially careful when counting the fence around regions like the one full of type <Code>A</Code> plants; in particular, each section of fence has an in-side and an out-side, so the fence does not connect across the middle of the region (where the two <Code>B</Code> regions touch diagonally). (The Elves would have used the Möbius Fencing Company instead, but their contract terms were too one-sided.)</p><br />
    <p>The larger example from before now has the following updated prices:</p><br />
    <List>
        <li>A region of <Code>R</Code> plants with price <Code>12 * 10 = 120</Code>.</li>
        <li>A region of <Code>I</Code> plants with price <Code>4 * 4 = 16</Code>.</li>
        <li>A region of <Code>C</Code> plants with price <Code>14 * 22 = 308</Code>.</li>
        <li>A region of <Code>F</Code> plants with price <Code>10 * 12 = 120</Code>.</li>
        <li>A region of <Code>V</Code> plants with price <Code>13 * 10 = 130</Code>.</li>
        <li>A region of <Code>J</Code> plants with price <Code>11 * 12 = 132</Code>.</li>
        <li>A region of <Code>C</Code> plants with price <Code>1 * 4 = 4</Code>.</li>
        <li>A region of <Code>E</Code> plants with price <Code>13 * 8 = 104</Code>.</li>
        <li>A region of <Code>I</Code> plants with price <Code>14 * 16 = 224</Code>.</li>
        <li>A region of <Code>M</Code> plants with price <Code>5 * 6 = 30</Code>.</li>
        <li>A region of <Code>S</Code> plants with price <Code>3 * 6 = 18</Code>.</li>
    </List><br />
    <p>Adding these together produces its new total price of <Code><Glow>1206</Glow></Code>.</p><br />
    <p><Glow>What is the new total price of fencing all regions on your map?</Glow></p>
</>);
