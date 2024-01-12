import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Link from '@components/text/Link';

const part1Description = (<>
    <p>You and the Elf eventually reach a gondola lift station; he says the <Link link='https://en.wikipedia.org/wiki/Gondola_lift'>gondola lift</Link> will take you up to the <Glow>water source</Glow>, but this is as far as he can bring you. You go inside.</p><br/>
    <p>It doesn't take long to find the gondolas, but there seems to be a problem: they're not moving.</p><br/>
    <p>"Aaah!"</p><br/>
    <p>You turn around to see a slightly-greasy Elf with a wrench and a look of surprise. "Sorry, I wasn't expecting anyone! The gondola lift isn't working right now; it'll still be a while before I can fix it." You offer to help.</p><br/>
    <p>The engineer explains that an engine part seems to be missing from the engine, but nobody can figure out which one. If you can <Glow>add up all the part numbers</Glow> in the engine schematic, it should be easy to work out which part is missing.</p><br/>
    <p>The engine schematic (your puzzle input) consists of a visual representation of the engine. There are lots of numbers and symbols you don't really understand, but apparently <Glow>any number adjacent to a symbol</Glow>, even diagonally, is a "part number" and should be included in your sum. (Periods (<Code>.</Code>) do not count as a symbol.)</p><br/>
    <p>Here is an example engine schematic:</p><br/>
    <CodeBlock>
        467..114..<br/>
        ...*......<br/>
        ..35..633.<br/>
        ......#...<br/>
        617*......<br/>
        .....+.58.<br/>
        ..592.....<br/>
        ......755.<br/>
        ...$.*....<br/>
        .664.598..
    </CodeBlock><br/>
    <p>In this schematic, two numbers are <Glow>not</Glow> part numbers because they are not adjacent to a symbol: <Code>114</Code> (top right) and <Code>58</Code> (middle right). Every other number is adjacent to a symbol and so <Glow>is</Glow> a part number; their sum is <Code><Glow>4361</Glow></Code>.</p><br/>
    <p>Of course, the actual engine schematic is much larger. <Glow>What is the sum of all of the part numbers in the engine schematic?</Glow></p>
</>);

const part2Description = (<>
    <p>The engineer finds the missing part and installs it in the engine! As the engine springs to life, you jump in the closest gondola, finally ready to ascend to the water source.</p><br/>
    <p>You don't seem to be going very fast, though. Maybe something is still wrong? Fortunately, the gondola has a phone labeled "help", so you pick it up and the engineer answers.</p><br/>
    <p>Before you can explain the situation, she suggests that you look out the window. There stands the engineer, holding a phone in one hand and waving with the other. You're going so slowly that you haven't even left the station. You exit the gondola.</p><br/>
    <p>The missing part wasn't the only issue - one of the gears in the engine is wrong. A <Glow>gear</Glow> is any <Code>*</Code> symbol that is adjacent to <Glow>exactly two part numbers</Glow>. Its <Glow>gear ratio</Glow> is the result of multiplying those two numbers together.</p><br/>
    <p>This time, you need to find the gear ratio of every gear and add them all up so that the engineer can figure out which gear needs to be replaced.</p><br/>
    <p>Consider the same engine schematic again:</p><br/>
    <CodeBlock>
        467..114..<br/>
        ...*......<br/>
        ..35..633.<br/>
        ......#...<br/>
        617*......<br/>
        .....+.58.<br/>
        ..592.....<br/>
        ......755.<br/>
        ...$.*....<br/>
        .664.598..
    </CodeBlock><br/>
    <p>In this schematic, there are <Glow>two</Glow> gears. The first is in the top left; it has part numbers <Code>467</Code> and <Code>35</Code>, so its gear ratio is <Code>16345</Code>. The second gear is in the lower right; its gear ratio is <Code>451490</Code>. (The <Code>*</Code> adjacent to <Code>617</Code> is <Glow>not</Glow> a gear because it is only adjacent to one part number.) Adding up all of the gear ratios produces <Code><Glow>467835</Glow></Code>.</p><br/>
    <p><Glow>What is the sum of all of the gear ratios in your engine schematic?</Glow></p>
</>);

export const descriptions = {
    part1Description,
    part2Description
};
