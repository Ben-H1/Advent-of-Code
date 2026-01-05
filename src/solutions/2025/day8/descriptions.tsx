import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';

export const part1Description = (<>
    <p>Equipped with a new understanding of teleporter maintenance, you confidently step onto the repaired teleporter pad.</p><br />
    <p>You rematerialize on an unfamiliar teleporter pad and find yourself in a vast underground space which contains a giant playground!</p><br />
    <p>Across the playground, a group of Elves are working on setting up an ambitious Christmas decoration project. Through careful rigging, they have suspended a large number of small electrical <Link link='https://en.wikipedia.org/wiki/Junction_box'>junction boxes</Link>.</p><br />
    <p>Their plan is to connect the junction boxes with long strings of lights. Most of the junction boxes don't provide electricity; however, when two junction boxes are connected by a string of lights, electricity can pass between those two junction boxes.</p><br />
    <p>The Elves are trying to figure out <Glow>which junction boxes to connect</Glow> so that electricity can reach <Glow>every</Glow> junction box. They even have a list of all of the junction boxes' positions in 3D space (your puzzle input).</p><br />
    <p>For example:</p><br />
    <CodeBlock>
        162,817,812<br />
        57,618,57<br />
        906,360,560<br />
        592,479,940<br />
        352,342,300<br />
        466,668,158<br />
        542,29,236<br />
        431,825,988<br />
        739,650,466<br />
        52,470,668<br />
        216,146,977<br />
        819,987,18<br />
        117,168,530<br />
        805,96,715<br />
        346,949,466<br />
        970,615,88<br />
        941,993,340<br />
        862,61,35<br />
        984,92,344<br />
        425,690,689
    </CodeBlock><br />
    <p>This list describes the position of 20 junction boxes, one per line. Each position is given as <Code>X,Y,Z</Code> coordinates. So, the first junction box in the list is at <Code>X=162</Code>, <Code>Y=817</Code>, <Code>Z=812</Code>.</p><br />
    <p>To save on string lights, the Elves would like to focus on connecting pairs of junction boxes that are <Glow>as close together as possible</Glow> according to <Link link='https://en.wikipedia.org/wiki/Euclidean_distance'>straight-line distance</Link>. In this example, the two junction boxes which are closest together are <Code>162,817,812</Code> and <Code>425,690,689</Code>.</p><br />
    <p>By connecting these two junction boxes together, because electricity can flow between them, they become part of the same <Glow>circuit</Glow>. After connecting them, there is a single circuit which contains two junction boxes, and the remaining 18 junction boxes remain in their own individual circuits.</p><br />
    <p>Now, the two junction boxes which are closest together but aren't already directly connected are <Code>162,817,812</Code> and <Code>431,825,988</Code>. After connecting them, since <Code>162,817,812</Code> is already connected to another junction box, there is now a single circuit which contains <Glow>three</Glow> junction boxes and an additional 17 circuits which contain one junction box each.</p><br />
    <p>The next two junction boxes to connect are <Code>906,360,560</Code> and <Code>805,96,715</Code>. After connecting them, there is a circuit containing 3 junction boxes, a circuit containing 2 junction boxes, and 15 circuits which contain one junction box each.</p><br />
    <p>The next two junction boxes are <Code>431,825,988</Code> and <Code>425,690,689</Code>. Because these two junction boxes were <Glow>already in the same circuit</Glow>, nothing happens!</p><br />
    <p>This process continues for a while, and the Elves are concerned that they don't have enough extension cables for all these circuits. They would like to know how big the circuits will be.</p><br />
    <p>After making the ten shortest connections, there are 11 circuits: one circuit which contains <Glow>5</Glow> junction boxes, one circuit which contains <Glow>4</Glow> junction boxes, two circuits which contain <Glow>2</Glow> junction boxes each, and seven circuits which each contain a single junction box. Multiplying together the sizes of the three largest circuits (5, 4, and one of the circuits of size 2) produces <Code><Glow>40</Glow></Code>.</p><br />
    <p>Your list contains many junction boxes; connect together the <Glow>1000</Glow> pairs of junction boxes which are closest together. Afterward, <Glow>what do you get if you multiply together the sizes of the three largest circuits?</Glow></p>
</>);

export const part2Description = (<>
    <p>The Elves were right; they <Glow>definitely</Glow> don't have enough extension cables. You'll need to keep connecting junction boxes together until they're all in <Glow>one large circuit</Glow>.</p><br />
    <p>Continuing the above example, the first connection which causes all of the junction boxes to form a single circuit is between the junction boxes at <Code>216,146,977</Code> and <Code>117,168,530</Code>. The Elves need to know how far those junction boxes are from the wall so they can pick the right extension cable; multiplying the X coordinates of those two junction boxes (<Code>216</Code> and <Code>117</Code>) produces <Code><Glow>25272</Glow></Code>.</p><br />
    <p>Continue connecting the closest unconnected pairs of junction boxes together until they're <Hidden content='I strongly recommend making an interactive visualizer for this one; it reminds me a lot of maps from futuristic space games.'>all in the same circuit</Hidden>. <Glow>What do you get if you multiply together the X coordinates of the last two junction boxes you need to connect?</Glow></p>
</>);
