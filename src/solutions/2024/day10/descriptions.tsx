import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';

export const part1Description = (<>
    <p>You all arrive at a <Link link='https://adventofcode.com/2023/day/15'>Lava Production Facility</Link> on a floating island in the sky. As the others begin to search the massive industrial complex, you feel a small nose boop your leg and look down to discover a <Hidden content='i knew you would come back'>reindeer</Hidden> wearing a hard hat.</p><br />
    <p>The reindeer is holding a book titled "Lava Island Hiking Guide". However, when you open the book, you discover that most of it seems to have been scorched by lava! As you're about to ask how you can help, the reindeer brings you a blank <Link link='https://en.wikipedia.org/wiki/Topographic_map'>topographic map</Link> of the surrounding area (your puzzle input) and looks up at you excitedly.</p><br />
    <p>Perhaps you can help fill in the missing hiking trails?</p><br />
    <p>The topographic map indicates the <Glow>height</Glow> at each position using a scale from <Code>0</Code> (lowest) to <Code>9</Code> (highest). For example:</p><br />
    <CodeBlock>
        0123<br />
        1234<br />
        8765<br />
        9876
    </CodeBlock><br />
    <p>Based on un-scorched scraps of the book, you determine that a good hiking trail is <Glow>as long as possible</Glow> and has an <Glow>even, gradual, uphill slope</Glow>. For all practical purposes, this means that a <Glow>hiking trail</Glow> is any path that starts at height <Code>0</Code>, ends at height <Code>9</Code>, and always increases by a height of exactly 1 at each step. Hiking trails never include diagonal steps - only up, down, left, or right (from the perspective of the map).</p><br />
    <p>You look up from the map and notice that the reindeer has helpfully begun to construct a small pile of pencils, markers, rulers, compasses, stickers, and other equipment you might need to update the map with hiking trails.</p><br />
    <p>A <Glow>trailhead</Glow> is any position that starts one or more hiking trails - here, these positions will always have height <Code>0</Code>. Assembling more fragments of pages, you establish that a trailhead's <Glow>score</Glow> is the number of <Code>9</Code>-height positions reachable from that trailhead via a hiking trail. In the above example, the single trailhead in the top left corner has a score of <Code>1</Code> because it can reach a single <Code>9</Code> (the one in the bottom left).</p><br />
    <p>This trailhead has a score of <Code>2</Code>:</p><br />
    <CodeBlock>
        ...0...<br />
        ...1...<br />
        ...2...<br />
        6543456<br />
        7.....7<br />
        8.....8<br />
        9.....9
    </CodeBlock><br />
    <p>(The positions marked <Code>.</Code> are impassable tiles to simplify these examples; they do not appear on your actual topographic map.)</p><br />
    <p>This trailhead has a score of <Code>4</Code> because every <Code>9</Code> is reachable via a hiking trail except the one immediately to the left of the trailhead:</p><br />
    <CodeBlock>
        ..90..9<br />
        ...1.98<br />
        ...2..7<br />
        6543456<br />
        765.987<br />
        876....<br />
        987....
    </CodeBlock><br />
    <p>This topographic map contains <Glow>two</Glow> trailheads; the trailhead at the top has a score of <Code>1</Code>, while the trailhead at the bottom has a score of <Code>2</Code>:</p><br />
    <CodeBlock>
        10..9..<br />
        2...8..<br />
        3...7..<br />
        4567654<br />
        ...8..3<br />
        ...9..2<br />
        .....01
    </CodeBlock><br />
    <p>Here's a larger example:</p><br />
    <CodeBlock>
        89010123<br />
        78121874<br />
        87430965<br />
        96549874<br />
        45678903<br />
        32019012<br />
        01329801<br />
        10456732
    </CodeBlock><br />
    <p>This larger example has 9 trailheads. Considering the trailheads in reading order, they have scores of <Code>5</Code>, <Code>6</Code>, <Code>5</Code>, <Code>3</Code>, <Code>1</Code>, <Code>3</Code>, <Code>5</Code>, <Code>3</Code>, and <Code>5</Code>. Adding these scores together, the sum of the scores of all trailheads is <Code><Glow>36</Glow></Code>.</p><br />
    <p>The reindeer gleefully carries over a protractor and adds it to the pile. <Glow>What is the sum of the scores of all trailheads on your topographic map?</Glow></p>
</>);

export const part2Description = (<>
    <p>The reindeer spends a few minutes reviewing your hiking trail map before realizing something, disappearing for a few minutes, and finally returning with yet another slightly-charred piece of paper.</p><br />
    <p>The paper describes a second way to measure a trailhead called its <Glow>rating</Glow>. A trailhead's rating is the <Glow>number of distinct hiking trails</Glow> which begin at that trailhead. For example:</p><br />
    <CodeBlock>
        .....0.<br />
        ..4321.<br />
        ..5..2.<br />
        ..6543.<br />
        ..7..4.<br />
        ..8765.<br />
        ..9....
    </CodeBlock><br />
    <p>The above map has a single trailhead; its rating is <Code>3</Code> because there are exactly three distinct hiking trails which begin at that position:</p><br />
    <CodeBlock>
        .....0.   .....0.   .....0.<br />
        ..4321.   .....1.   .....1.<br />
        ..5....   .....2.   .....2.<br />
        ..6....   ..6543.   .....3.<br />
        ..7....   ..7....   .....4.<br />
        ..8....   ..8....   ..8765.<br />
        ..9....   ..9....   ..9....
    </CodeBlock><br />
    <p>Here is a map containing a single trailhead with rating <Code>13</Code>:</p><br />
    <CodeBlock>
        ..90..9<br />
        ...1.98<br />
        ...2..7<br />
        6543456<br />
        765.987<br />
        876....<br />
        987....
    </CodeBlock><br />
    <p>This map contains a single trailhead with rating <Code>227</Code> (because there are <Code>121</Code> distinct hiking trails that lead to the <Code>9</Code> on the right edge and <Code>106</Code> that lead to the <Code>9</Code> on the bottom edge):</p><br />
    <CodeBlock>
        012345<br />
        123456<br />
        234567<br />
        345678<br />
        4.6789<br />
        56789.
    </CodeBlock><br />
    <p>Here's the larger example from before:</p><br />
    <CodeBlock>
        89010123<br />
        78121874<br />
        87430965<br />
        96549874<br />
        45678903<br />
        32019012<br />
        01329801<br />
        10456732
    </CodeBlock><br />
    <p>Considering its trailheads in reading order, they have ratings of <Code>20</Code>, <Code>24</Code>, <Code>10</Code>, <Code>4</Code>, <Code>1</Code>, <Code>4</Code>, <Code>5</Code>, <Code>8</Code>, and <Code>5</Code>. The sum of all trailhead ratings in this larger example topographic map is <Code><Glow>81</Glow></Code>.</p><br />
    <p>You're not sure how, but the reindeer seems to have crafted some tiny flags out of toothpicks and bits of paper and is using them to mark trailheads on your topographic map. <Glow>What is the sum of the ratings of all trailheads?</Glow></p>
</>);
