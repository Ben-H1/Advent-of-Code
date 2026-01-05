import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>The expedition comes across a peculiar patch of tall trees all planted carefully in a grid. The Elves explain that a previous expedition planted these trees as a reforestation effort. Now, they're curious if this would be a good location for a <Link link='https://en.wikipedia.org/wiki/Tree_house'>tree house</Link>.</p><br />
    <p>First, determine whether there is enough tree cover here to keep a tree house <Glow>hidden</Glow>. To do this, you need to count the number of trees that are <Glow>visible from outside the grid</Glow> when looking directly along a row or column.</p><br />
    <p>The Elves have already launched a <Link link='https://en.wikipedia.org/wiki/Quadcopter'>quadcopter</Link> to generate a map with the height of each tree (<Hidden content='The Elves have already launched a quadcopter (your puzzle input).'>your puzzle input</Hidden>). For example:</p><br />
    <CodeBlock>
        30373<br />
        25512<br />
        65332<br />
        33549<br />
        35390
    </CodeBlock><br />
    <p>Each tree is represented as a single digit whose value is its height, where <Code>0</Code> is the shortest and <Code>9</Code> is the tallest.</p><br />
    <p>A tree is <Glow>visible</Glow> if all of the other trees between it and an edge of the grid are <Glow>shorter</Glow> than it. Only consider trees in the same row or column; that is, only look up, down, left, or right from any given tree.</p><br />
    <p>All of the trees around the edge of the grid are <Glow>visible</Glow> - since they are already on the edge, there are no trees to block the view. In this example, that only leaves the <Glow>interior nine trees</Glow> to consider:</p><br />
    <List>
        <li>The top-left <Code>5</Code> is <Glow>visible</Glow> from the left and top. (It isn't visible from the right or bottom since other trees of height <Code>5</Code> are in the way.)</li>
        <li>The top-middle <Code>5</Code> is <Glow>visible</Glow> from the top and right.</li>
        <li>The top-right <Code>1</Code> is not visible from any direction; for it to be visible, there would need to only be trees of height <Glow>0</Glow> between it and an edge.</li>
        <li>The left-middle <Code>5</Code> is <Glow>visible</Glow>, but only from the right.</li>
        <li>The center <Code>3</Code> is not visible from any direction; for it to be visible, there would need to be only trees of at most height <Code>2</Code> between it and an edge.</li>
        <li>The right-middle <Code>3</Code> is <Glow>visible</Glow> from the right.</li>
        <li>In the bottom row, the middle <Code>5</Code> is <Glow>visible</Glow>, but the <Code>3</Code> and <Code>4</Code> are not.</li>
    </List><br />
    <p>With 16 trees visible on the edge and another 5 visible in the interior, a total of <Code><Glow>21</Glow></Code> trees are visible in this arrangement.</p><br />
    <p>Consider your map; <Glow>how many trees are visible from outside the grid?</Glow></p>
</>);

export const part2Description = (<>
    <p>Content with the amount of tree cover available, the Elves just need to know the best spot to build their tree house: they would like to be able to see a lot of <Glow>trees</Glow>.</p><br />
    <p>To measure the viewing distance from a given tree, look up, down, left, and right from that tree; stop if you reach an edge or at the first tree that is the same height or taller than the tree under consideration. (If a tree is right on the edge, at least one of its viewing distances will be zero.)</p><br />
    <p>The Elves don't care about distant trees taller than those found by the rules above; the proposed tree house has large <Link link='https://en.wikipedia.org/wiki/Eaves'>eaves</Link> to keep it dry, so they wouldn't be able to see higher than the tree house anyway.</p><br />
    <p>In the example above, consider the middle <Code>5</Code> in the second row:</p><br />
    <CodeBlock>
        30373<br />
        25<Glow>5</Glow>12<br />
        65332<br />
        33549<br />
        35390
    </CodeBlock><br />
    <List>
        <li>Looking up, its view is not blocked; it can see <Code><Glow>1</Glow></Code> tree (of height <Code>3</Code>).</li>
        <li>Looking left, its view is blocked immediately; it can see only <Code><Glow>1</Glow></Code> tree (of height <Code>5</Code>, right next to it).</li>
        <li>Looking right, its view is not blocked; it can see <Code><Glow>2</Glow></Code> trees.</li>
        <li>Looking down, its view is blocked eventually; it can see <Code><Glow>2</Glow></Code> trees (one of height <Code>3</Code>, then the tree of height <Code>5</Code> that blocks its view).</li>
    </List><br />
    <p>A tree's <Glow>scenic score</Glow> is found by <Glow>multiplying together</Glow> its viewing distance in each of the four directions. For this tree, this is <Code><Glow>4</Glow></Code> (found by multiplying <Code>1 * 1 * 2 * 2</Code>).</p><br />
    <p>However, you can do even better: consider the tree of height <Code>5</Code> in the middle of the fourth row:</p><br />
    <CodeBlock>
        30373<br />
        25512<br />
        65332<br />
        33<Glow>5</Glow>49<br />
        35390
    </CodeBlock><br />
    <List>
        <li>Looking up, its view is blocked at <Code><Glow>2</Glow></Code> trees (by another tree with a height of <Code>5</Code>).</li>
        <li>Looking left, its view is not blocked; it can see <Code><Glow>2</Glow></Code> trees.</li>
        <li>Looking down, its view is also not blocked; it can see <Code><Glow>1</Glow></Code> tree.</li>
        <li>Looking right, its view is blocked at <Code><Glow>2</Glow></Code> trees (by a massive tree of height <Code>9</Code>).</li>
    </List><br />
    <p>This tree's scenic score is <Code><Glow>8</Glow></Code> (<Code>2 * 2 * 1 * 2</Code>); this is the ideal spot for the tree house.</p><br />
    <p>Consider each tree on your map. <Glow>What is the highest scenic score possible for any tree?</Glow></p>
</>);
