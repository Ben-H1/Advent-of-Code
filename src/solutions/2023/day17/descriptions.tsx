import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Link from '@components/text/Link';

const part1Description = (<>
    <p>The lava starts flowing rapidly once the Lava Production Facility is operational. As you leave, the reindeer offers you a parachute, allowing you to quickly reach Gear Island.</p><br/>
    <p>As you descend, your bird's-eye view of Gear Island reveals why you had trouble finding anyone on your way up: half of Gear Island is empty, but the half below you is a giant factory city!</p><br/>
    <p>You land near the gradually-filling pool of lava at the base of your new <Glow>lavafall</Glow>. Lavaducts will eventually carry the lava throughout the city, but to make use of it immediately, Elves are loading it into large <Link link='https://en.wikipedia.org/wiki/Crucible'>crucibles</Link> on wheels.</p><br/>
    <p>The crucibles are top-heavy and pushed by hand. Unfortunately, the crucibles become very difficult to steer at high speeds, and so it can be hard to go in a straight line for very long.</p><br/>
    <p>To get Desert Island the machine parts it needs as soon as possible, you'll need to find the best way to get the crucible <Glow>from the lava pool to the machine parts factory</Glow>. To do this, you need to minimize <Glow>heat loss</Glow> while choosing a route that doesn't require the crucible to go in a <Glow>straight line</Glow> for too long.</p><br/>
    <p>Fortunately, the Elves here have a map (your puzzle input) that uses traffic patterns, ambient temperature, and hundreds of other parameters to calculate exactly how much heat loss can be expected for a crucible entering any particular city block.</p><br/>
    <p>For example:</p><br/>
    <CodeBlock>
        2413432311323<br/>
        3215453535623<br/>
        3255245654254<br/>
        3446585845452<br/>
        4546657867536<br/>
        1438598798454<br/>
        4457876987766<br/>
        3637877979653<br/>
        4654967986887<br/>
        4564679986453<br/>
        1224686865563<br/>
        2546548887735<br/>
        4322674655533
    </CodeBlock><br/>
    <p>Each city block is marked by a single digit that represents the <Glow>amount of heat loss if the crucible enters that block</Glow>. The starting point, the lava pool, is the top-left city block; the destination, the machine parts factory, is the bottom-right city block. (Because you already start in the top-left block, you don't incur that block's heat loss unless you leave that block and then return to it.)</p><br/>
    <p>Because it is difficult to keep the top-heavy crucible going in a straight line for very long, it can move <Glow>at most three blocks</Glow> in a single direction before it must turn 90 degrees left or right. The crucible also can't reverse direction; after entering each city block, it may only turn left, continue straight, or turn right.</p><br/>
    <p>One way to <Glow>minimize heat loss</Glow> is this path:</p><br/>
    <CodeBlock>
        2<Glow>{'>'}{'>'}</Glow>34<Glow>^{'>'}{'>'}{'>'}</Glow>1323<br/>
        32<Glow>v{'>'}{'>'}{'>'}</Glow>35<Glow>v</Glow>5623<br/>
        32552456<Glow>v{'>'}{'>'}</Glow>54<br/>
        3446585845<Glow>v</Glow>52<br/>
        4546657867<Glow>v{'>'}</Glow>6<br/>
        14385987984<Glow>v</Glow>4<br/>
        44578769877<Glow>v</Glow>6<br/>
        36378779796<Glow>v{'>'}</Glow><br/>
        465496798688<Glow>v</Glow><br/>
        456467998645<Glow>v</Glow><br/>
        12246868655<Glow>{'<'}v</Glow><br/>
        25465488877<Glow>v</Glow>5<br/>
        43226746555<Glow>v{'>'}</Glow>
    </CodeBlock><br/>
    <p>This path never moves more than three consecutive blocks in the same direction and incurs a heat loss of only <Code><Glow>102</Glow></Code>.</p><br/>
    <p>Directing the crucible from the lava pool to the machine parts factory, but not moving more than three consecutive blocks in the same direction, <Glow>what is the least heat loss it can incur?</Glow></p>
</>);

const part2Description = (<>
</>);

export const descriptions = {
    part1Description,
    part2Description
};
