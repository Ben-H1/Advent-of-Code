import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';

export const part1Description = (<>
    <p>You thank the cephalopods for the help and exit the trash compactor, finding yourself in the <Link link='https://adventofcode.com/2024/day/6'>familiar</Link> <Link link='https://adventofcode.com/2018/day/4'>halls</Link> of a North Pole research wing.</p><br />
    <p>Based on the large sign that says "teleporter hub", they seem to be researching <Glow>teleportation</Glow>; you can't help but try it for yourself and step onto the large yellow teleporter pad.</p><br />
    <p>Suddenly, you find yourself in an unfamiliar room! The room has no doors; the only way out is the teleporter. Unfortunately, the teleporter seems to be leaking <Link link='https://en.wikipedia.org/wiki/Magic_smoke'>magic smoke</Link>.</p><br />
    <p>Since this is a teleporter lab, there are lots of spare parts, manuals, and diagnostic equipment lying around. After connecting one of the diagnostic tools, it helpfully displays error code <Code>0H-N0</Code>, which apparently means that there's an issue with one of the <Glow>tachyon manifolds</Glow>.</p><br />
    <p>You quickly locate a diagram of the tachyon manifold (your puzzle input). A tachyon beam enters the manifold at the location marked <Code>S</Code>; tachyon beams always move <Glow>downward</Glow>. Tachyon beams pass freely through empty space (<Code>.</Code>). However, if a tachyon beam encounters a splitter (<Code>^</Code>), the beam is stopped; instead, a new tachyon beam continues from the immediate left and from the immediate right of the splitter.</p><br />
    <p>For example:</p><br />
    <CodeBlock>
        .......S.......<br />
        ...............<br />
        .......^.......<br />
        ...............<br />
        ......^.^......<br />
        ...............<br />
        .....^.^.^.....<br />
        ...............<br />
        ....^.^...^....<br />
        ...............<br />
        ...^.^...^.^...<br />
        ...............<br />
        ..^...^.....^..<br />
        ...............<br />
        .^.^.^.^.^...^.<br />
        ...............
    </CodeBlock><br />
    <p>In this example, the incoming tachyon beam (<Code>|</Code>) extends downward from <Code>S</Code> until it reaches the first splitter:</p><br />
    <CodeBlock>
        .......S.......<br />
        .......|.......<br />
        .......^.......<br />
        ...............<br />
        ......^.^......<br />
        ...............<br />
        .....^.^.^.....<br />
        ...............<br />
        ....^.^...^....<br />
        ...............<br />
        ...^.^...^.^...<br />
        ...............<br />
        ..^...^.....^..<br />
        ...............<br />
        .^.^.^.^.^...^.<br />
        ...............
    </CodeBlock><br />
    <p>At that point, the original beam stops, and two new beams are emitted from the splitter:</p><br />
    <CodeBlock>
        .......S.......<br />
        .......|.......<br />
        ......|^|......<br />
        ...............<br />
        ......^.^......<br />
        ...............<br />
        .....^.^.^.....<br />
        ...............<br />
        ....^.^...^....<br />
        ...............<br />
        ...^.^...^.^...<br />
        ...............<br />
        ..^...^.....^..<br />
        ...............<br />
        .^.^.^.^.^...^.<br />
        ...............
    </CodeBlock><br />
    <p>Those beams continue downward until they reach more splitters:</p><br />
    <CodeBlock>
        .......S.......<br />
        .......|.......<br />
        ......|^|......<br />
        ......|.|......<br />
        ......^.^......<br />
        ...............<br />
        .....^.^.^.....<br />
        ...............<br />
        ....^.^...^....<br />
        ...............<br />
        ...^.^...^.^...<br />
        ...............<br />
        ..^...^.....^..<br />
        ...............<br />
        .^.^.^.^.^...^.<br />
        ...............
    </CodeBlock><br />
    <p>At this point, the two splitters create a total of only <Glow>three</Glow> tachyon beams, since they are both dumping tachyons into the same place between them:</p><br />
    <CodeBlock>
        .......S.......<br />
        .......|.......<br />
        ......|^|......<br />
        ......|.|......<br />
        .....|^|^|.....<br />
        ...............<br />
        .....^.^.^.....<br />
        ...............<br />
        ....^.^...^....<br />
        ...............<br />
        ...^.^...^.^...<br />
        ...............<br />
        ..^...^.....^..<br />
        ...............<br />
        .^.^.^.^.^...^.<br />
        ...............
    </CodeBlock><br />
    <p>This process continues until all of the tachyon beams reach a splitter or exit the manifold:</p><br />
    <CodeBlock>
        .......S.......<br />
        .......|.......<br />
        ......|^|......<br />
        ......|.|......<br />
        .....|^|^|.....<br />
        .....|.|.|.....<br />
        ....|^|^|^|....<br />
        ....|.|.|.|....<br />
        ...|^|^|||^|...<br />
        ...|.|.|||.|...<br />
        ..|^|^|||^|^|..<br />
        ..|.|.|||.|.|..<br />
        .|^|||^||.||^|.<br />
        .|.|||.||.||.|.<br />
        |^|^|^|^|^|||^|<br />
        |.|.|.|.|.|||.|
    </CodeBlock><br />
    <p>To repair the teleporter, you first need to understand the beam-splitting properties of the tachyon manifold. In this example, a tachyon beam is split a total of <Code><Glow>21</Glow></Code> times.</p><br />
    <p>Analyze your manifold diagram. <Glow>How many times will the beam be split?</Glow></p>
</>);

export const part2Description = (<>
    <p>With your analysis of the manifold complete, you begin fixing the teleporter. However, as you open the side of the teleporter to replace the broken manifold, you are surprised to discover that it isn't a classical tachyon manifold - it's a <Hidden content='Please disregard the wave interference patterns that would arise from the wave-particle duality of individual tachyon particles while repairing the manifold.'><Glow>quantum</Glow></Hidden> <Glow>tachyon manifold</Glow>.</p><br />
    <p>With a quantum tachyon manifold, only a <Glow>single tachyon particle</Glow> is sent through the manifold. A tachyon particle takes <Glow>both</Glow> the left and right path of each splitter encountered.</p><br />
    <p>Since this is impossible, the manual recommends the many-worlds interpretation of quantum tachyon splitting: each time a particle reaches a splitter, it's actually <Glow>time itself</Glow> which splits. In one timeline, the particle went left, and in the other timeline, the particle went right.</p><br />
    <p>To fix the manifold, what you really need to know is the <Glow>number of timelines</Glow> active after a single particle completes all of its possible journeys through the manifold.</p><br />
    <p>In the above example, there are many timelines. For instance, there's the timeline where the particle always went left:</p><br />
    <CodeBlock>
        .......S.......<br />
        .......|.......<br />
        ......|^.......<br />
        ......|........<br />
        .....|^.^......<br />
        .....|.........<br />
        ....|^.^.^.....<br />
        ....|..........<br />
        ...|^.^...^....<br />
        ...|...........<br />
        ..|^.^...^.^...<br />
        ..|............<br />
        .|^...^.....^..<br />
        .|.............<br />
        |^.^.^.^.^...^.<br />
        |..............
    </CodeBlock><br />
    <p>Or, there's the timeline where the particle alternated going left and right at each splitter:</p><br />
    <CodeBlock>
        .......S.......<br />
        .......|.......<br />
        ......|^.......<br />
        ......|........<br />
        ......^|^......<br />
        .......|.......<br />
        .....^|^.^.....<br />
        ......|........<br />
        ....^.^|..^....<br />
        .......|.......<br />
        ...^.^.|.^.^...<br />
        .......|.......<br />
        ..^...^|....^..<br />
        .......|.......<br />
        .^.^.^|^.^...^.<br />
        ......|........
    </CodeBlock><br />
    <p>Or, there's the timeline where the particle ends up at the same point as the alternating timeline, but takes a totally different path to get there:</p><br />
    <CodeBlock>
        .......S.......<br />
        .......|.......<br />
        ......|^.......<br />
        ......|........<br />
        .....|^.^......<br />
        .....|.........<br />
        ....|^.^.^.....<br />
        ....|..........<br />
        ....^|^...^....<br />
        .....|.........<br />
        ...^.^|..^.^...<br />
        ......|........<br />
        ..^..|^.....^..<br />
        .....|.........<br />
        .^.^.^|^.^...^.<br />
        ......|........
    </CodeBlock><br />
    <p>In this example, in total, the particle ends up on <Code><Glow>40</Glow></Code> different timelines.</p><br />
    <p>Apply the many-worlds interpretation of quantum tachyon splitting to your manifold diagram. <Glow>In total, how many different timelines would a single tachyon particle end up on?</Glow></p>
</>);
