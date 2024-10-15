import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import List from '@components/text/List';

export const part1Description = (<>
    <p>With the beam of light completely focused <Glow>somewhere</Glow>, the reindeer leads you deeper still into the Lava Production Facility. At some point, you realize that the steel facility walls have been replaced with cave, and the doorways are just cave, and the floor is cave, and you're pretty sure this is actually just a giant cave.</p><br/>
    <p>Finally, as you approach what must be the heart of the mountain, you see a bright light in a cavern up ahead. There, you discover that the beam of light you so carefully focused is emerging from the cavern wall closest to the facility and pouring all of its energy into a contraption on the opposite side.</p><br/>
    <p>Upon closer inspection, the contraption appears to be a flat, two-dimensional square grid containing <Glow>empty space</Glow> (<Code>.</Code>), <Glow>mirrors</Glow> (<Code>/</Code> and <Code>\</Code>), and <Glow>splitters</Glow> (<Code>|</Code> and <Code>-</Code>).</p><br/>
    <p>The contraption is aligned so that most of the beam bounces around the grid, but each tile on the grid converts some of the beam's light into <Glow>heat</Glow> to melt the rock in the cavern.</p><br/>
    <p>You note the layout of the contraption (your puzzle input). For example:</p><br/>
    <CodeBlock>
        .|...\....<br/>
        |.-.\.....<br/>
        .....|-...<br/>
        ........|.<br/>
        ..........<br/>
        .........\<br/>
        ..../.\\..<br/>
        .-.-/..|..<br/>
        .|....-|.\<br/>
        ..//.|....
    </CodeBlock><br/>
    <p>The beam enters in the top-left corner from the left and heading to the <Glow>right</Glow>. Then, its behavior depends on what it encounters as it moves:</p><br/>
    <List>
        <li>If the beam encounters <Glow>empty space</Glow> (<Code>.</Code>), it continues in the same direction.</li>
        <li>If the beam encounters a <Glow>mirror</Glow> (<Code>/</Code> or <Code>\</Code>), the beam is <Glow>reflected</Glow> 90 degrees depending on the angle of the mirror. For instance, a rightward-moving beam that encounters a <Code>/</Code> mirror would continue <Glow>upward</Glow> in the mirror's column, while a rightward-moving beam that encounters a <Code>\</Code> mirror would continue <Glow>downward</Glow> from the mirror's column.</li>
        <li>If the beam encounters the <Glow>pointy end of a splitter</Glow> (<Code>|</Code> or <Code>-</Code>), the beam passes through the splitter as if the splitter were <Glow>empty space</Glow>. For instance, a rightward-moving beam that encounters a <Code>-</Code> splitter would continue in the same direction.</li>
        <li>If the beam encounters the <Glow>flat side of a splitter</Glow> (<Code>|</Code> or <Code>-</Code>), the beam is <Glow>split into two beams</Glow> going in each of the two directions the splitter's pointy ends are pointing. For instance, a rightward-moving beam that encounters a <Code>|</Code> splitter would split into two beams: one that continues <Glow>upward</Glow> from the splitter's column and one that continues <Glow>downward</Glow> from the splitter's column.</li>
    </List><br/>
    <p>Beams do not interact with other beams; a tile can have many beams passing through it at the same time. A tile is <Glow>energized</Glow> if that tile has at least one beam pass through it, reflect in it, or split in it.</p><br/>
    <p>In the above example, here is how the beam of light bounces around the contraption:</p><br/>
    <CodeBlock>
        {'>'}|{'<'}{'<'}{'<'}\....<br/>
        |v-.\^....<br/>
        .v...|-{'>'}{'>'}{'>'}<br/>
        .v...v^.|.<br/>
        .v...v^...<br/>
        .v...v^..\<br/>
        .v../2\\..<br/>
        {'<'}-{'>'}-/vv|..<br/>
        .|{'<'}{'<'}{'<'}2-|.\<br/>
        .v//.|.v..
    </CodeBlock><br/>
    <p>Beams are only shown on empty tiles; arrows indicate the direction of the beams. If a tile contains beams moving in multiple directions, the number of distinct directions is shown instead. Here is the same diagram but instead only showing whether a tile is <Glow>energized</Glow> (<Code>#</Code>) or not (<Code>.</Code>):</p><br/>
    <CodeBlock>
        ######....<br/>
        .#...#....<br/>
        .#...#####<br/>
        .#...##...<br/>
        .#...##...<br/>
        .#...##...<br/>
        .#..####..<br/>
        ########..<br/>
        .#######..<br/>
        .#...#.#..
    </CodeBlock><br/>
    <p>Ultimately, in this example, <Code><Glow>46</Glow></Code> tiles become <Glow>energized</Glow>.</p><br/>
    <p>The light isn't energizing enough tiles to produce lava; to debug the contraption, you need to start by analyzing the current situation. With the beam starting in the top-left heading right, <Glow>how many tiles end up being energized?</Glow></p>
</>);

export const part2Description = (<>
    <p>As you try to work out what might be wrong, the reindeer tugs on your shirt and leads you to a nearby control panel. There, a collection of buttons lets you align the contraption so that the beam enters from <Glow>any edge tile</Glow> and heading away from that edge. (You can choose either of two directions for the beam if it starts on a corner; for instance, if the beam starts in the bottom-right corner, it can start heading either left or upward.)</p><br/>
    <p>So, the beam could start on any tile in the top row (heading downward), any tile in the bottom row (heading upward), any tile in the leftmost column (heading right), or any tile in the rightmost column (heading left). To produce lava, you need to find the configuration that <Glow>energizes as many tiles as possible</Glow>.</p><br/>
    <p>In the above example, this can be achieved by starting the beam in the fourth tile from the left in the top row:</p><br/>
    <CodeBlock>
        .|{'<'}2{'<'}\....<br/>
        |v-v\^....<br/>
        .v.v.|-{'>'}{'>'}{'>'}<br/>
        .v.v.v^.|.<br/>
        .v.v.v^...<br/>
        .v.v.v^..\<br/>
        .v.v/2\\..<br/>
        {'<'}-2-/vv|..<br/>
        .|{'<'}{'<'}{'<'}2-|.\<br/>
        .v//.|.v..
    </CodeBlock><br/>
    <p>Using this configuration, <Code><Glow>51</Glow></Code> tiles are energized:</p><br/>
    <CodeBlock>
        .#####....<br/>
        .#.#.#....<br/>
        .#.#.#####<br/>
        .#.#.##...<br/>
        .#.#.##...<br/>
        .#.#.##...<br/>
        .#.#####..<br/>
        ########..<br/>
        .#######..<br/>
        .#...#.#..
    </CodeBlock><br/>
    <p>Find the initial beam configuration that energizes the largest number of tiles; <Glow>how many tiles are energized in that configuration?</Glow></p>
</>);
