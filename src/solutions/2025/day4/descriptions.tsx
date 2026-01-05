import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';

export const part1Description = (<>
    <p>You ride the escalator down to the printing department. They're clearly getting ready for Christmas; they have lots of large rolls of paper everywhere, and there's even a massive printer in the corner (to handle the really <Hidden content='This joke is stupid and I love it.'>big</Hidden> print jobs).</p><br />
    <p>Decorating here will be easy: they can make their own decorations. What you really need is a way to get further into the North Pole base while the elevators are offline.</p><br />
    <p>"Actually, maybe we can help with that," one of the Elves replies when you ask for help. "We're pretty sure there's a cafeteria on the other side of the back wall. If we could break through the wall, you'd be able to keep moving. It's too bad all of our forklifts are so busy moving those big rolls of paper around."</p><br />
    <p>If you can optimize the work the forklifts are doing, maybe they would have time to spare to break through the wall.</p><br />
    <p>The rolls of paper (<Code>@</Code>) are arranged on a large grid; the Elves even have a helpful diagram (your puzzle input) indicating where everything is located.</p><br />
    <p>For example:</p><br />
    <CodeBlock>
        ..@@.@@@@.<br />
        @@@.@.@.@@<br />
        @@@@@.@.@@<br />
        @.@@@@..@.<br />
        @@.@@@@.@@<br />
        .@@@@@@@.@<br />
        .@.@.@.@@@<br />
        @.@@@.@@@@<br />
        .@@@@@@@@.<br />
        @.@.@@@.@.
    </CodeBlock><br />
    <p>The forklifts can only access a roll of paper if there are <Glow>fewer than four rolls of paper</Glow> in the eight adjacent positions. If you can figure out which rolls of paper the forklifts can access, they'll spend less time looking and more time breaking down the wall to the cafeteria.</p><br />
    <p>In this example, there are <Code><Glow>13</Glow></Code> rolls of paper that can be accessed by a forklift (marked with <Code>x</Code>):</p><br />
    <CodeBlock>
        ..xx.xx@x.<br />
        x@@.@.@.@@<br />
        @@@@@.x.@@<br />
        @.@@@@..@.<br />
        x@.@@@@.@x<br />
        .@@@@@@@.@<br />
        .@.@.@.@@@<br />
        x.@@@.@@@@<br />
        .@@@@@@@@.<br />
        x.x.@@@.x.
    </CodeBlock><br />
    <p>Consider your complete diagram of the paper roll locations. <Glow>How many rolls of paper can be accessed by a forklift?</Glow></p>
</>);

export const part2Description = (<>
    <p>Now, the Elves just need help accessing as much of the paper as they can.</p><br />
    <p>Once a roll of paper can be accessed by a forklift, it can be <Glow>removed</Glow>. Once a roll of paper is removed, the forklifts might be able to access <Glow>more</Glow> rolls of paper, which they might also be able to remove. How many total rolls of paper could the Elves remove if they keep repeating this process?</p><br />
    <p>Starting with the same example as above, here is one way you could remove as many rolls of paper as possible, using highlighted <Code><Glow>@</Glow></Code> to indicate that a roll of paper is about to be removed, and using <Code>x</Code> to indicate that a roll of paper was just removed:</p><br />
    <CodeBlock>
        Initial state:<br />
        ..<Glow>@</Glow><Glow>@</Glow>.<Glow>@</Glow><Glow>@</Glow>@<Glow>@</Glow>.<br />
        <Glow>@</Glow>@@.@.@.@@<br />
        @@@@@.<Glow>@</Glow>.@@<br />
        @.@@@@..@.<br />
        <Glow>@</Glow>@.@@@@.@<Glow>@</Glow><br />
        .@@@@@@@.@<br />
        .@.@.@.@@@<br />
        <Glow>@</Glow>.@@@.@@@@<br />
        .@@@@@@@@.<br />
        <Glow>@</Glow>.<Glow>@</Glow>.@@@.<Glow>@</Glow>.<br />
        <br />
        Remove 13 rolls of paper:<br />
        ..xx.xx<Glow>@</Glow>x.<br />
        x@@.<Glow>@</Glow>.<Glow>@</Glow>.@<Glow>@</Glow><br />
        <Glow>@</Glow>@@@@.x.@@<br />
        <Glow>@</Glow>.@@@@..<Glow>@</Glow>.<br />
        x@.@@@@.<Glow>@</Glow>x<br />
        .<Glow>@</Glow>@@@@@@.<Glow>@</Glow><br />
        .<Glow>@</Glow>.@.@.@@@<br />
        x.@@@.@@@@<br />
        .<Glow>@</Glow>@@@@@@@.<br />
        x.x.@@@.x.<br />
        <br />
        Remove 12 rolls of paper:<br />
        .......x..<br />
        .<Glow>@</Glow>@.x.x.<Glow>@</Glow>x<br />
        x@@@@...<Glow>@</Glow><Glow>@</Glow><br />
        x.@@@@..x.<br />
        .<Glow>@</Glow>.@@@@.x.<br />
        .x@@@@@@.x<br />
        .x.@.@.@@<Glow>@</Glow><br />
        ..@@@.@@@@<br />
        .x<Glow>@</Glow>@@@@@@.<br />
        ....@@@...<br />
        <br />
        Remove 7 rolls of paper:<br />
        ..........<br />
        .x<Glow>@</Glow>.....x.<br />
        .<Glow>@</Glow>@@@...xx<br />
        ..@@@@....<br />
        .x.@@@@...<br />
        ..<Glow>@</Glow>@@@@@..<br />
        ...@.@.@@x<br />
        ..<Glow>@</Glow>@@.@@@<Glow>@</Glow><br />
        ..x@@@@@@.<br />
        ....@@@...<br />
        <br />
        Remove 5 rolls of paper:<br />
        ..........<br />
        ..x.......<br />
        .x<Glow>@</Glow>@@.....<br />
        ..@@@@....<br />
        ...@@@@...<br />
        ..x@@@@@..<br />
        ...@.@.@@.<br />
        ..x@@.@@@x<br />
        ...@@@@@<Glow>@</Glow>.<br />
        ....@@@...<br />
        <br />
        Remove 2 rolls of paper:<br />
        ..........<br />
        ..........<br />
        ..x@@.....<br />
        ..<Glow>@</Glow>@@@....<br />
        ...@@@@...<br />
        ...@@@@@..<br />
        ...@.@.@@.<br />
        ...@@.@@@.<br />
        ...@@@@@x.<br />
        ....@@@...<br />
        <br />
        Remove 1 roll of paper:<br />
        ..........<br />
        ..........<br />
        ...<Glow>@</Glow>@.....<br />
        ..x@@@....<br />
        ...@@@@...<br />
        ...@@@@@..<br />
        ...@.@.@@.<br />
        ...@@.@@@.<br />
        ...@@@@@..<br />
        ....@@@...<br />
        <br />
        Remove 1 roll of paper:<br />
        ..........<br />
        ..........<br />
        ...x<Glow>@</Glow>.....<br />
        ...@@@....<br />
        ...@@@@...<br />
        ...@@@@@..<br />
        ...@.@.@@.<br />
        ...@@.@@@.<br />
        ...@@@@@..<br />
        ....@@@...<br />
        <br />
        Remove 1 roll of paper:<br />
        ..........<br />
        ..........<br />
        ....x.....<br />
        ...<Glow>@</Glow>@@....<br />
        ...@@@@...<br />
        ...@@@@@..<br />
        ...@.@.@@.<br />
        ...@@.@@@.<br />
        ...@@@@@..<br />
        ....@@@...<br />
        <br />
        Remove 1 roll of paper:<br />
        ..........<br />
        ..........<br />
        ..........<br />
        ...x@@....<br />
        ...@@@@...<br />
        ...@@@@@..<br />
        ...@.@.@@.<br />
        ...@@.@@@.<br />
        ...@@@@@..<br />
        ....@@@...
    </CodeBlock><br />
    <p>Stop once no more rolls of paper are accessible by a forklift. In this example, a total of <Code><Glow>43</Glow></Code> rolls of paper can be removed.</p><br />
    <p>Start with your original diagram. <Glow>How many rolls of paper in total can be removed by the Elves and their forklifts?</Glow></p>
</>);
