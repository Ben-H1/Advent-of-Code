import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Link from '@components/text/Link';
import List from '@components/text/List';

const part1Description = (<>
    <p>You finally reach the hot springs! You can see steam rising from secluded areas attached to the primary, ornate building.</p><br/>
    <p>As you turn to enter, the <Link link='https://adventofcode.com/2023/day/11'>researcher</Link> stops you. "Wait - I thought you were looking for the hot springs, weren't you?" You indicate that this definitely looks like hot springs to you.</p><br/>
    <p>"Oh, sorry, common mistake! This is actually the <Link link='https://en.wikipedia.org/wiki/Onsen'>onsen</Link>! The hot springs are next door."</p><br/>
    <p>You look in the direction the researcher is pointing and suddenly notice the massive metal helixes towering overhead. "This way!"</p><br/>
    <p>It only takes you a few more steps to reach the main gate of the massive fenced-off area containing the springs. You go through the gate and into a small administrative building.</p><br/>
    <p>"Hello! What brings you to the hot springs today? Sorry they're not very hot right now; we're having a <Glow>lava shortage</Glow> at the moment." You ask about the missing machine parts for Desert Island.</p><br/>
    <p>"Oh, all of Gear Island is currently offline! Nothing is being manufactured at the moment, not until we get more lava to heat our forges. And our springs. The springs aren't very springy unless they're hot!"</p><br/>
    <p>"Say, could you go up and see why the lava stopped flowing? The springs are too cold for normal operation, but we should be able to find one springy enough to launch <Glow>you</Glow> up there!"</p><br/>
    <p>There's just one problem - many of the springs have fallen into disrepair, so they're not actually sure which springs would even be <Glow>safe</Glow> to use! Worse yet, their <Glow>condition records of which springs are damaged</Glow> (your puzzle input) are also damaged! You'll need to help them repair the damaged records.</p><br/>
    <p>In the giant field just outside, the springs are arranged into <Glow>rows</Glow>. For each row, the condition records show every spring and whether it is <Glow>operational</Glow> (<Code>.</Code>) or <Glow>damaged</Glow> (<Code>#</Code>). This is the part of the condition records that is itself damaged; for some springs, it is simply <Glow>unknown</Glow> (<Code>?</Code>) whether the spring is operational or damaged.</p><br/>
    <p>However, the engineer that produced the condition records also duplicated some of this information in a different format! After the list of springs for a given row, the size of each <Glow>contiguous group of damaged springs</Glow> is listed in the order those groups appear in the row. This list always accounts for every damaged spring, and each number is the entire size of its contiguous group (that is, groups are always separated by at least one operational spring: <Code>####</Code> would always be <Code>4</Code>, never <Code>2,2</Code>).</p><br/>
    <p>So, condition records with no unknown spring conditions might look like this:</p><br/>
    <CodeBlock>
        #.#.### 1,1,3<br/>
        .#...#....###. 1,1,3<br/>
        .#.###.#.###### 1,3,1,6<br/>
        ####.#...#... 4,1,1<br/>
        #....######..#####. 1,6,5<br/>
        .###.##....# 3,2,1
    </CodeBlock><br/>
    <p>However, the condition records are partially damaged; some of the springs' conditions are actually <Glow>unknown</Glow> (<Code>?</Code>). For example:</p><br/>
    <CodeBlock>
        ???.### 1,1,3<br/>
        .??..??...?##. 1,1,3<br/>
        ?#?#?#?#?#?#?#? 1,3,1,6<br/>
        ????.#...#... 4,1,1<br/>
        ????.######..#####. 1,6,5<br/>
        ?###???????? 3,2,1
    </CodeBlock><br/>
    <p>Equipped with this information, it is your job to figure out <Glow>how many different arrangements</Glow> of operational and broken springs fit the given criteria in each row.</p><br/>
    <p>In the first line (<Code>???.### 1,1,3</Code>), there is exactly <Glow>one</Glow> way separate groups of one, one, and three broken springs (in that order) can appear in that row: the first three unknown springs must be broken, then operational, then broken (<Code>#.#</Code>), making the whole row <Code>#.#.###</Code>.</p><br/>
    <p>The second line is more interesting: <Code>.??..??...?##. 1,1,3</Code> could be a total of <Glow>four</Glow> different arrangements. The last <Code>?</Code> must always be broken (to satisfy the final contiguous group of three broken springs), and each <Code>??</Code> must hide exactly one of the two broken springs. (Neither <Code>??</Code> could be both broken springs or they would form a single contiguous group of two; if that were true, the numbers afterward would have been <Code>2,3</Code> instead.) Since each <Code>??</Code> can either be <Code>#.</Code> or <Code>.#</Code>, there are four possible arrangements of springs.</p><br/>
    <p>The last line is actually consistent with <Glow>ten</Glow> different arrangements! Because the first number is <Code>3</Code>, the first and second <Code>?</Code> must both be <Code>.</Code> (if either were <Code>#</Code>, the first number would have to be <Code>4</Code> or higher). However, the remaining run of unknown spring conditions have many different ways they could hold groups of two and one broken springs:</p><br/>
    <CodeBlock>
        ?###???????? 3,2,1<br/>
        .###.##.#...<br/>
        .###.##..#..<br/>
        .###.##...#.<br/>
        .###.##....#<br/>
        .###..##.#..<br/>
        .###..##..#.<br/>
        .###..##...#<br/>
        .###...##.#.<br/>
        .###...##..#<br/>
        .###....##.#
    </CodeBlock><br/>
    <p>In this example, the number of possible arrangements for each row is:</p><br/>
    <List>
        <li><Code>???.### 1,1,3</Code> - <Code><Glow>1</Glow></Code> arrangement</li>
        <li><Code>.??..??...?##. 1,1,3</Code> - <Code><Glow>4</Glow></Code> arrangements</li>
        <li><Code>?#?#?#?#?#?#?#? 1,3,1,6</Code> - <Code><Glow>1</Glow></Code> arrangement</li>
        <li><Code>????.#...#... 4,1,1</Code> - <Code><Glow>1</Glow></Code> arrangement</li>
        <li><Code>????.######..#####. 1,6,5</Code> - <Code><Glow>4</Glow></Code> arrangements</li>
        <li><Code>?###???????? 3,2,1</Code> - <Code><Glow>10</Glow></Code> arrangements</li>
    </List><br/>
    <p>Adding all of the possible arrangement counts together produces a total of <Code><Glow>21</Glow></Code> arrangements.</p><br/>
    <p>For each row, count all of the different arrangements of operational and broken springs that meet the given criteria. <Glow>What is the sum of those counts?</Glow></p>
</>);

const part2Description = (<>
    <p>As you look out at the field of springs, you feel like there are way more springs than the condition records list. When you examine the records, you discover that they were actually <Glow>folded up</Glow> this whole time!</p><br/>
    <p>To <Glow>unfold the records</Glow>, on each row, replace the list of spring conditions with five copies of itself (separated by <Code>?</Code>) and replace the list of contiguous groups of damaged springs with five copies of itself (separated by <Code>,</Code>).</p><br/>
    <p>So, this row:</p><br/>
    <CodeBlock>
        .# 1
    </CodeBlock><br/>
    <p>Would become:</p><br/>
    <CodeBlock>
        .#?.#?.#?.#?.# 1,1,1,1,1
    </CodeBlock><br/>
    <p>The first line of the above example would become:</p><br/>
    <CodeBlock>
        ???.###????.###????.###????.###????.### 1,1,3,1,1,3,1,1,3,1,1,3,1,1,3
    </CodeBlock><br/>
    <p>In the above example, after unfolding, the number of possible arrangements for some rows is now much larger:</p><br/>
    <List>
        <li><Code>???.### 1,1,3</Code> - <Code><Glow>1</Glow></Code> arrangement</li>
        <li><Code>.??..??...?##. 1,1,3</Code> - <Code><Glow>16384</Glow></Code> arrangements</li>
        <li><Code>?#?#?#?#?#?#?#? 1,3,1,6</Code> - <Code><Glow>1</Glow></Code> arrangement</li>
        <li><Code>????.#...#... 4,1,1</Code> - <Code><Glow>16</Glow></Code> arrangements</li>
        <li><Code>????.######..#####. 1,6,5</Code> - <Code><Glow>2500</Glow></Code> arrangements</li>
        <li><Code>?###???????? 3,2,1</Code> - <Code><Glow>506250</Glow></Code> arrangements</li>
    </List><br/>
    <p>After unfolding, adding all of the possible arrangement counts together produces <Code><Glow>525152</Glow></Code>.</p><br/>
    <p>Unfold your condition records; <Glow>what is the new sum of possible arrangement counts?</Glow></p>
</>);

export const descriptions = {
    part1Description,
    part2Description
};
