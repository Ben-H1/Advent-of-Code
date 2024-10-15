import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';

export const part1Description = (<>
    <p>The expedition can depart as soon as the final supplies have been unloaded from the ships. Supplies are stored in stacks of marked <Glow>crates</Glow>, but because the needed supplies are buried under many other crates, the crates need to be rearranged.</p><br/>
    <p>The ship has a <Glow>giant cargo crane</Glow> capable of moving crates between stacks. To ensure none of the crates get crushed or fall over, the crane operator will rearrange them in a series of carefully-planned steps. After the crates are rearranged, the desired crates will be at the top of each stack.</p><br/>
    <p>The Elves don't want to interrupt the crane operator during this delicate procedure, but they forgot to ask her <Glow>which</Glow> crate will end up where, and they want to be ready to unload them as soon as possible so they can embark.</p><br/>
    <p>They do, however, have a drawing of the starting stacks of crates <Glow>and</Glow> the rearrangement procedure (your puzzle input). For example:</p><br/>
    <CodeBlock>
        &nbsp;   [D]    <br/>
        [N] [C]    <br/>
        [Z] [M] [P]<br/>
        &nbsp;1   2   3<br/>
        <br/>
        move 1 from 2 to 1<br/>
        move 3 from 1 to 3<br/>
        move 2 from 2 to 1<br/>
        move 1 from 1 to 2
    </CodeBlock><br/>
    <p>In this example, there are three stacks of crates. Stack 1 contains two crates: crate <Code>Z</Code> is on the bottom, and crate <Code>N</Code> is on top. Stack 2 contains three crates; from bottom to top, they are crates <Code>M</Code>, <Code>C</Code>, and <Code>D</Code>. Finally, stack 3 contains a single crate, <Code>P</Code>.</p><br/>
    <p>Then, the rearrangement procedure is given. In each step of the procedure, a quantity of crates is moved from one stack to a different stack. In the first step of the above rearrangement procedure, one crate is moved from stack 2 to stack 1, resulting in this configuration:</p><br/>
    <CodeBlock>
        [D]        <br/>
        [N] [C]    <br/>
        [Z] [M] [P]<br/>
        &nbsp;1   2   3
    </CodeBlock><br/>
    <p>In the second step, three crates are moved from stack 1 to stack 3. Crates are moved <Glow>one at a time</Glow>, so the first crate to be moved (<Code>D</Code>) ends up below the second and third crates:</p><br/>
    <CodeBlock>
        &nbsp;       [Z]<br/>
        &nbsp;       [N]<br/>
        &nbsp;   [C] [D]<br/>
        &nbsp;   [M] [P]<br/>
        &nbsp;1   2   3
    </CodeBlock><br/>
    <p>Then, both crates are moved from stack 2 to stack 1. Again, because crates are moved <Glow>one at a time</Glow>, crate <Code>C</Code> ends up below crate <Code>M</Code>:</p><br/>
    <CodeBlock>
        &nbsp;       [Z]<br/>
        &nbsp;       [N]<br/>
        [M]     [D]<br/>
        [C]     [P]<br/>
        &nbsp;1   2   3
    </CodeBlock><br/>
    <p>Finally, one crate is moved from stack 1 to stack 2:</p><br/>
    <CodeBlock>
        &nbsp;       [<Glow>Z</Glow>]<br/>
        &nbsp;       [N]<br/>
        &nbsp;       [D]<br/>
        [<Glow>C</Glow>] [<Glow>M</Glow>] [P]<br/>
        &nbsp;1   2   3
    </CodeBlock><br/>
    <p>The Elves just need to know <Glow>which crate will end up on top of each stack</Glow>; in this example, the top crates are <Code>C</Code> in stack 1, <Code>M</Code> in stack 2, and <Code>Z</Code> in stack 3, so you should combine these together and give the Elves the message <Code><Glow>CMZ</Glow></Code>.</p><br/>
    <p><Glow>After the rearrangement procedure completes, what crate ends up on top of each stack?</Glow></p>
</>);

export const part2Description = (<>
    <p>As you watch the crane operator expertly rearrange the crates, you notice the process isn't following your prediction.</p><br/>
    <p>Some mud was covering the writing on the side of the crane, and you quickly wipe it away. The crane isn't a CrateMover 9000 - it's a <Glow>CrateMover 9001</Glow>.</p><br/>
    <p>The CrateMover 9001 is notable for many new and exciting features: air conditioning, leather seats, an extra cup holder, and <Glow>the ability to pick up and move multiple crates at once</Glow>.</p><br/>
    <p>Again considering the example above, the crates begin in the same configuration:</p><br/>
    <CodeBlock>
        &nbsp;   [D]    <br/>
        [N] [C]    <br/>
        [Z] [M] [P]<br/>
        &nbsp;1   2   3
    </CodeBlock><br/>
    <p>Moving a single crate from stack 2 to stack 1 behaves the same as before:</p><br/>
    <CodeBlock>
        [D]        <br/>
        [N] [C]    <br/>
        [Z] [M] [P]<br/>
        &nbsp;1   2   3
    </CodeBlock><br/>
    <p>However, the action of moving three crates from stack 1 to stack 3 means that those three moved crates <Glow>stay in the same order</Glow>, resulting in this new configuration:</p><br/>
    <CodeBlock>
        &nbsp;       [D]<br/>
        &nbsp;       [N]<br/>
        &nbsp;   [C] [Z]<br/>
        &nbsp;   [M] [P]<br/>
        &nbsp;1   2   3
    </CodeBlock><br/>
    <p>Next, as both crates are moved from stack 2 to stack 1, they <Glow>retain their order</Glow> as well:</p><br/>
    <CodeBlock>
        &nbsp;       [D]<br/>
        &nbsp;       [N]<br/>
        [C]     [Z]<br/>
        [M]     [P]<br/>
        &nbsp;1   2   3
    </CodeBlock><br/>
    <p>Finally, a single crate is still moved from stack 1 to stack 2, but now it's crate <Code>C</Code> that gets moved:</p><br/>
    <CodeBlock>
        &nbsp;       [<Glow>D</Glow>]<br/>
        &nbsp;       [N]<br/>
        &nbsp;       [Z]<br/>
        [<Glow>M</Glow>] [<Glow>C</Glow>] [P]<br/>
        &nbsp;1   2   3
    </CodeBlock><br/>
    <p>In this example, the CrateMover 9001 has put the crates in a totally different order: <Code><Glow>MCD</Glow></Code>.</p><br/>
    <p>Before the rearrangement process finishes, update your simulation so that the Elves know where they should stand to be ready to unload the final supplies. <Glow>After the rearrangement procedure completes, what crate ends up on top of each stack?</Glow></p>
</>);
