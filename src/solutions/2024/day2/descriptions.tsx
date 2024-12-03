import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>Fortunately, the first location The Historians want to search isn't a long walk from the Chief Historian's office.</p><br />
    <p>While the <Link link='https://adventofcode.com/2015/day/19'>Red-Nosed Reindeer nuclear fusion/fission plant</Link> appears to contain no sign of the Chief Historian, the engineers there run up to you as soon as they see you. Apparently, they <Glow>still</Glow> talk about the time Rudolph was saved through molecular synthesis from a single electron.</p><br />
    <p>They're quick to add that - since you're already here - they'd really appreciate your help analyzing some unusual data from the Red-Nosed reactor. You turn to check if The Historians are waiting for you, but they seem to have already divided into groups that are currently searching every corner of the facility. You offer to help with the unusual data.</p><br />
    <p>The unusual data (your puzzle input) consists of many <Glow>reports</Glow>, one report per line. Each report is a list of numbers called <Glow>levels</Glow> that are separated by spaces. For example:</p><br />
    <CodeBlock>
        7 6 4 2 1<br />
        1 2 7 8 9<br />
        9 7 6 2 1<br />
        1 3 2 4 5<br />
        8 6 4 4 1<br />
        1 3 6 7 9
    </CodeBlock><br />
    <p>This example data contains six reports each containing five levels.</p><br />
    <p>The engineers are trying to figure out which reports are <Glow>safe</Glow>. The Red-Nosed reactor safety systems can only tolerate levels that are either gradually increasing or gradually decreasing. So, a report only counts as safe if both of the following are true:</p><br />
    <List>
        <li>The levels are either <Glow>all increasing</Glow> or <Glow>all decreasing</Glow>.</li>
        <li>Any two adjacent levels differ by <Glow>at least one</Glow> and <Glow>at most three</Glow>.</li>
    </List><br />
    <p>In the example above, the reports can be found safe or unsafe by checking those rules:</p><br />
    <List>
        <li><Code>7 6 4 2 1</Code>: <Glow>Safe</Glow> because the levels are all decreasing by 1 or 2.</li>
        <li><Code>1 2 7 8 9</Code>: <Glow>Unsafe</Glow> because <Code>2 7</Code> is an increase of 5.</li>
        <li><Code>9 7 6 2 1</Code>: <Glow>Unsafe</Glow> because <Code>6 2</Code> is a decrease of 4.</li>
        <li><Code>1 3 2 4 5</Code>: <Glow>Unsafe</Glow> because <Code>1 3</Code> is increasing but <Code>3 2</Code> is decreasing.</li>
        <li><Code>8 6 4 4 1</Code>: <Glow>Unsafe</Glow> because <Code>4 4</Code> is neither an increase or a decrease.</li>
        <li><Code>1 3 6 7 9</Code>: <Glow>Safe</Glow> because the levels are all increasing by 1, 2, or 3.</li>
    </List><br />
    <p>So, in this example, <Code><Glow>2</Glow></Code> reports are <Glow>safe</Glow>.</p><br />
    <p>Analyze the unusual data from the engineers. <Glow>How many reports are safe?</Glow></p>
</>);

export const part2Description = (<>
    <p>The engineers are surprised by the low number of safe reports until they realize they forgot to tell you about the <Hidden content='I need to get one of these!'>Problem Dampener</Hidden>.</p><br />
    <p>The Problem Dampener is a reactor-mounted module that lets the reactor safety systems <Glow>tolerate a single bad level</Glow> in what would otherwise be a safe report. It's like the bad level never happened!</p><br />
    <p>Now, the same rules apply as before, except if removing a single level from an unsafe report would make it safe, the report instead counts as safe.</p><br />
    <p>More of the above example's reports are now safe:</p><br />
    <List>
        <li><Code>7 6 4 2 1</Code>: <Glow>Safe</Glow> without removing any level.</li>
        <li><Code>1 2 7 8 9</Code>: <Glow>Unsafe</Glow> regardless of which level is removed.</li>
        <li><Code>9 7 6 2 1</Code>: <Glow>Unsafe</Glow> regardless of which level is removed.</li>
        <li><Code>1 <Glow>3</Glow> 2 4 5</Code>: <Glow>Safe</Glow> by removing the second level, <Code>3</Code>.</li>
        <li><Code>8 6 <Glow>4</Glow> 4 1</Code>: <Glow>Safe</Glow> by removing the third level, <Code>4</Code>.</li>
        <li><Code>1 3 6 7 9</Code>: <Glow>Safe</Glow> without removing any level.</li>
    </List><br />
    <p>Thanks to the Problem Dampener, <Code><Glow>4</Glow></Code> reports are actually <Glow>safe</Glow>!</p><br />
    <p>Update your analysis by handling situations where the Problem Dampener can remove a single level from unsafe reports. <Glow>How many reports are now safe?</Glow></p>
</>);
