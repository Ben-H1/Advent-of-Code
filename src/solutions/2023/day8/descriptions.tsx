import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import List from '@components/text/List';

export const part1Description = (<>
    <p>You're still riding a camel across Desert Island when you spot a sandstorm quickly approaching. When you turn to warn the Elf, she disappears before your eyes! To be fair, she had just finished warning you about <Glow>ghosts</Glow> a few minutes ago.</p><br/>
    <p>One of the camel's pouches is labeled "maps" - sure enough, it's full of documents (your puzzle input) about how to navigate the desert. At least, you're pretty sure that's what they are; one of the documents contains a list of left/right instructions, and the rest of the documents seem to describe some kind of <Glow>network</Glow> of labeled nodes.</p><br/>
    <p>It seems like you're meant to use the <Glow>left/right</Glow> instructions to <Glow>navigate the network</Glow>. Perhaps if you have the camel follow the same instructions, you can escape the haunted wasteland!</p><br/>
    <p>After examining the maps for a bit, two nodes stick out: <Code>AAA</Code> and <Code>ZZZ</Code>. You feel like <Code>AAA</Code> is where you are now, and you have to follow the left/right instructions until you reach <Code>ZZZ</Code>.</p><br/>
    <p>This format defines each <Glow>node</Glow> of the network individually. For example:</p><br/>
    <CodeBlock>
        RL<br/>
        <br/>
        AAA = (BBB, CCC)<br/>
        BBB = (DDD, EEE)<br/>
        CCC = (ZZZ, GGG)<br/>
        DDD = (DDD, DDD)<br/>
        EEE = (EEE, EEE)<br/>
        GGG = (GGG, GGG)<br/>
        ZZZ = (ZZZ, ZZZ)
    </CodeBlock><br/>
    <p>Starting with <Code>AAA</Code>, you need to <Glow>look up the next element</Glow> based on the next left/right instruction in your input. In this example, start with <Code>AAA</Code> and go <Glow>right</Glow> (<Code>R</Code>) by choosing the right element of <Code>AAA</Code>, <Code><Glow>CCC</Glow></Code>. Then, <Code>L</Code> means to choose the <Glow>left</Glow> element of <Code>CCC</Code>, <Code><Glow>ZZZ</Glow></Code>. By following the left/right instructions, you reach <Code>ZZZ</Code> in <Code><Glow>2</Glow></Code> steps.</p><br/>
    <p>Of course, you might not find <Code>ZZZ</Code> right away. If you run out of left/right instructions, repeat the whole sequence of instructions as necessary: <Code>RL</Code> really means <Code>RLRLRLRLRLRLRLRL...</Code> and so on. For example, here is a situation that takes <Code><Glow>6</Glow></Code> steps to reach <Code>ZZZ</Code>:</p><br/>
    <CodeBlock>
        LLR<br/>
        <br/>
        AAA = (BBB, BBB)<br/>
        BBB = (AAA, ZZZ)<br/>
        ZZZ = (ZZZ, ZZZ)
    </CodeBlock><br/>
    <p>Starting at <Code>AAA</Code>, follow the left/right instructions. <Glow>How many steps are required to reach</Glow> <Code><Glow>ZZZ</Glow></Code><Glow>?</Glow></p>
</>);

export const part2Description = (<>
    <p>The sandstorm is upon you and you aren't any closer to escaping the wasteland. You had the camel follow the instructions, but you've barely left your starting position. It's going to take <Glow>significantly more steps</Glow> to escape!</p><br/>
    <p>What if the map isn't for people - what if the map is for <Glow>ghosts</Glow>? Are ghosts even bound by the laws of spacetime? Only one way to find out.</p><br/>
    <p>After examining the maps a bit longer, your attention is drawn to a curious fact: the number of nodes with names ending in <Code>A</Code> is equal to the number ending in <Code>Z</Code>! If you were a ghost, you'd probably just <Glow>start at every node that ends with</Glow> <Code><Glow>A</Glow></Code> and follow all of the paths at the same time until they all simultaneously end up at nodes that end with <Code>Z</Code>.</p><br/>
    <p>For example:</p><br/>
    <CodeBlock>
        LR<br/>
        <br/>
        11A = (11B, XXX)<br/>
        11B = (XXX, 11Z)<br/>
        11Z = (11B, XXX)<br/>
        22A = (22B, XXX)<br/>
        22B = (22C, 22C)<br/>
        22C = (22Z, 22Z)<br/>
        22Z = (22B, 22B)<br/>
        XXX = (XXX, XXX)
    </CodeBlock><br/>
    <p>Here, there are two starting nodes, <Code>11A</Code> and <Code>22A</Code> (because they both end with <Code>A</Code>). As you follow each left/right instruction, use that instruction to <Glow>simultaneously</Glow> navigate away from both nodes you're currently on. Repeat this process until <Glow>all</Glow> of the nodes you're currently on end with <Code>Z</Code>. (If only some of the nodes you're on end with <Code>Z</Code>, they act like any other node and you continue as normal.) In this example, you would proceed as follows:</p><br/>
    <List>
        <li>Step 0: You are at <Code>11A</Code> and <Code>22A</Code>.</li>
        <li>Step 1: You choose all of the <Glow>left</Glow> paths, leading you to <Code>11B</Code> and <Code>22B</Code>.</li>
        <li>Step 2: You choose all of the <Glow>right</Glow> paths, leading you to <Code><Glow>11Z</Glow></Code> and <Code>22C</Code>.</li>
        <li>Step 3: You choose all of the <Glow>left</Glow> paths, leading you to <Code>11B</Code> and <Code><Glow>22Z</Glow></Code>.</li>
        <li>Step 4: You choose all of the <Glow>right</Glow> paths, leading you to <Code><Glow>11Z</Glow></Code> and <Code>22B</Code>.</li>
        <li>Step 5: You choose all of the <Glow>left</Glow> paths, leading you to <Code>11B</Code> and <Code>22C</Code>.</li>
        <li>Step 6: You choose all of the <Glow>right</Glow> paths, leading you to <Code><Glow>11Z</Glow></Code> and <Code><Glow>22Z</Glow></Code>.</li>
    </List><br/>
    <p>So, in this example, you end up entirely on nodes that end in <Code>Z</Code> after <Code><Glow>6</Glow></Code> steps.</p><br/>
    <p>Simultaneously start on every node that ends with <Code>A</Code>. <Glow>How many steps does it take before you're only on nodes that end with</Glow> <Code><Glow>Z</Glow></Code>?</p>
</>);
