import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';

export const part1Description = (<>
    <p>You're almost out of time, but there can't be much left to decorate. Although there are no stairs, elevators, escalators, tunnels, chutes, teleporters, firepoles, or conduits here that would take you deeper into the North Pole base, there <Glow>is</Glow> a ventilation duct. You jump in.</p><br />
    <p>After bumping around for a few minutes, you emerge into a large, well-lit cavern full of Christmas trees!</p><br />
    <p>There are a few Elves here frantically decorating before the deadline. They think they'll be able to finish most of the work, but the one thing they're worried about is the <Glow>presents</Glow> for all the young Elves that live here at the North Pole. It's an ancient tradition to put the presents under the trees, but the Elves are worried they won't <Glow>fit</Glow>.</p><br />
    <p>The presents come in a few standard but very weird shapes. The shapes and the regions into which they need to fit are all measured in standard <Glow>units</Glow>. To be aesthetically pleasing, the presents need to be placed into the regions in a way that follows a standardized two-dimensional unit grid; you also can't stack presents.</p><br />
    <p>As always, the Elves have a summary of the situation (your puzzle input) for you. First, it contains a list of the presents' shapes. Second, it contains the size of the region under each tree and a list of the number of presents of each shape that need to fit into that region. For example:</p><br />
    <CodeBlock>
        0:<br />
        ###<br />
        ##.<br />
        ##.<br />
        <br />
        1:<br />
        ###<br />
        ##.<br />
        .##<br />
        <br />
        2:<br />
        .##<br />
        ###<br />
        ##.<br />
        <br />
        3:<br />
        ##.<br />
        ###<br />
        ##.<br />
        <br />
        4:<br />
        ###<br />
        #..<br />
        ###<br />
        <br />
        5:<br />
        ###<br />
        .#.<br />
        ###<br />
        <br />
        4x4: 0 0 0 0 2 0<br />
        12x5: 1 0 1 0 2 2<br />
        12x5: 1 0 1 0 3 2
    </CodeBlock><br />
    <p>The first section lists the standard present <Glow>shapes</Glow>. For convenience, each shape starts with its <Glow>index</Glow> and a colon; then, the shape is displayed visually, where <Code>#</Code> is part of the shape and <Code>.</Code> is not.</p><br />
    <p>The second section lists the <Glow>regions</Glow> under the trees. Each line starts with the width and length of the region; <Code>12x5</Code> means the region is <Code>12</Code> units wide and <Code>5</Code> units long. The rest of the line describes the presents that need to fit into that region by listing the <Glow>quantity of each shape</Glow> of present; <Code>1 0 1 0 3 2</Code> means you need to fit one present with shape index 0, no presents with shape index 1, one present with shape index 2, no presents with shape index 3, three presents with shape index 4, and two presents with shape index 5.</p><br />
    <p>Presents can be <Glow>rotated and flipped</Glow> as necessary to make them fit in the available space, but they have to always be placed perfectly on the grid. Shapes can't overlap (that is, the <Code>#</Code> part from two different presents can't go in the same place on the grid), but they <Glow>can</Glow> fit together (that is, the <Code>.</Code> part in a present's shape's diagram does not block another present from occupying that space on the grid).</p><br />
    <p>The Elves need to know <Glow>how many of the regions</Glow> can fit the presents listed. In the above example, there are six unique present shapes and three regions that need checking.</p><br />
    <p>The first region is 4x4:</p><br />
    <CodeBlock>
        ....<br />
        ....<br />
        ....<br />
        ....
    </CodeBlock><br />
    <p>In it, you need to determine whether you could fit two presents that have shape index <Code>4</Code>:</p><br />
    <CodeBlock>
        ###<br />
        #..<br />
        ###
    </CodeBlock><br />
    <p>After some experimentation, it turns out that you <Glow>can</Glow> fit both presents in this region. Here is one way to do it, using <Code>A</Code> to represent one present and <Code>B</Code> to represent the other:</p><br />
    <CodeBlock>
        AAA.<br />
        ABAB<br />
        ABAB<br />
        .BBB
    </CodeBlock><br />
    <p>The second region, <Code>12x5: 1 0 1 0 2 2</Code>, is <Code>12</Code> units wide and <Code>5</Code> units long. In that region, you need to try to fit one present with shape index <Code>0</Code>, one present with shape index <Code>2</Code>, two presents with shape index <Code>4</Code>, and two presents with shape index <Code>5</Code>.</p><br />
    <p>It turns out that these presents <Glow>can</Glow> all fit in this region. Here is one way to do it, again using different capital letters to represent all the required presents:</p><br />
    <CodeBlock>
        ....AAAFFE.E<br />
        .BBBAAFFFEEE<br />
        DDDBAAFFCECE<br />
        DBBB....CCC.<br />
        DDD.....C.C.
    </CodeBlock><br />
    <p>The third region, <Code>12x5: 1 0 1 0 3 2</Code>, is the same size as the previous region; the only difference is that this region needs to fit one additional present with shape index <Code>4</Code>. Unfortunately, no matter how hard you try, there is <Glow>no way to fit all of the presents</Glow> into this region.</p><br />
    <p>So, in this example, <Code><Glow>2</Glow></Code> regions can fit all of their listed presents.</p><br />
    <p>Consider the regions beneath each tree and the presents the Elves would like to fit into each of them. <Glow>How many of the regions can fit all of the presents listed?</Glow></p>
</>);

export const part2Description = (<>
    <p>The Elves thank you profusely for the <Hidden content='I need to throw in a puzzle like this occasionally to keep everyone on their toes, right?'>help</Hidden> and start rearranging the oddly-shaped presents. As you look up, you notice that a lot more Elves have arrived here at the Christmas tree farm.</p><br />
    <p>In fact, many of these new arrivals look <Glow>familiar</Glow>: they're the Elves you helped while decorating the North Pole base. Right on <Link link='https://adventofcode.com/2025/day/1'>schedule</Link>, each group seems to have brought a <Glow color='yellow'>star</Glow> to put atop one of the Christmas trees!</p><br />
    <p>Before any of them can find a ladder, a particularly large Christmas tree suddenly flashes brightly when a large <Glow color='yellow'>star</Glow> magically appears above it! As your eyes readjust, you think you notice a portly man with a white beard disappear into the crowd.</p><br />
    <p>You go look for a ladder; only <Glow color='yellow'>23 stars</Glow> to go.</p>
</>);
