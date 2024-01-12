import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import List from '@components/text/List';

const part1Description = (<>
    <p>Space needs to be cleared before the last supplies can be unloaded from the ships, and so several Elves have been assigned the job of cleaning up sections of the camp. Every section has a unique <Glow>ID number</Glow>, and each Elf is assigned a range of section IDs.</p><br/>
    <p>However, as some of the Elves compare their section assignments with each other, they've noticed that many of the assignments <Glow>overlap</Glow>. To try to quickly find overlaps and reduce duplicated effort, the Elves pair up and make a <Glow>big list of the section assignments for each pair</Glow> (your puzzle input).</p><br/>
    <p>For example, consider the following list of section assignment pairs:</p><br/>
    <CodeBlock>
        2-4,6-8<br/>
        2-3,4-5<br/>
        5-7,7-9<br/>
        2-8,3-7<br/>
        6-6,4-6<br/>
        2-6,4-8
    </CodeBlock><br/>
    <p>For the first few pairs, this list means:</p><br/>
    <List>
        <li>Within the first pair of Elves, the first Elf was assigned sections <Code>2-4</Code> (sections <Code>2</Code>, <Code>3</Code>, and <Code>4</Code>), while the second Elf was assigned sections <Code>6-8</Code> (sections <Code>6</Code>, <Code>7</Code>, <Code>8</Code>).</li>
        <li>The Elves in the second pair were each assigned two sections.</li>
        <li>The Elves in the third pair were each assigned three sections: one got sections <Code>5</Code>, <Code>6</Code>, and <Code>7</Code>, while the other also got <Code>7</Code>, plus <Code>8</Code> and <Code>9</Code>.</li>
    </List><br/>
    <p>This example list uses single-digit section IDs to make it easier to draw; your actual list might contain larger numbers. Visually, these pairs of section assignments look like this:</p><br/>
    <CodeBlock>
        .234.....  2-4<br/>
        .....678.  6-8<br/>
        <br/>
        .23......  2-3<br/>
        ...45....  4-5<br/>
        <br/>
        ....567..  5-7<br/>
        ......789  7-9<br/>
        <br/>
        .2345678.  2-8<br/>
        ..34567..  3-7<br/>
        <br/>
        .....6...  6-6<br/>
        ...456...  4-6<br/>
        <br/>
        .23456...  2-6<br/>
        ...45678.  4-8
    </CodeBlock><br/>
    <p>Some of the pairs have noticed that one of their assignments <Glow>fully contains</Glow> the other. For example, <Code>2-8</Code> fully contains <Code>3-7</Code>, and <Code>6-6</Code> is fully contained by <Code>4-6</Code>. In pairs where one assignment fully contains the other, one Elf in the pair would be exclusively cleaning sections their partner will already be cleaning, so these seem like the most in need of reconsideration. In this example, there are <Code><Glow>2</Glow></Code> such pairs.</p><br/>
    <p><Glow>In how many assignment pairs does one range fully contain the other?</Glow></p>
</>);

const part2Description = (<>
    <p>It seems like there is still quite a bit of duplicate work planned. Instead, the Elves would like to know the number of pairs that <Glow>overlap at all</Glow>.</p><br/>
    <p>In the above example, the first two pairs (<Code>2-4,6-8</Code> and <Code>2-3,4-5</Code>) don't overlap, while the remaining four pairs (<Code>5-7,7-9</Code>, <Code>2-8,3-7</Code>, <Code>6-6,4-6</Code>, and <Code>2-6,4-8</Code>) do overlap:</p><br/>
    <List>
        <li><Code>5-7,7-9</Code> overlaps in a single section, <Code>7</Code>.</li>
        <li><Code>2-8,3-7</Code> overlaps all of the sections <Code>3</Code> through <Code>7</Code>.</li>
        <li><Code>6-6,4-6</Code> overlaps in a single section, <Code>6</Code>.</li>
        <li><Code>2-6,4-8</Code> overlaps in sections <Code>4</Code>, <Code>5</Code>, and <Code>6</Code>.</li>
    </List><br/>
    <p>So, in this example, the number of overlapping assignment pairs is <Code><Glow>4</Glow></Code>.</p><br/>
    <p><Glow>In how many assignment pairs do the ranges overlap?</Glow></p>
</>);

export const descriptions = {
    part1Description,
    part2Description
};
