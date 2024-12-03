import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>"Our computers are having issues, so I have no idea if we have any Chief Historians <Hidden content={`There's a spot reserved for Chief Historians between the green toboggans and the red toboggans. They've never actually had any Chief Historians in stock, but it's best to be prepared.`}>in stock</Hidden>! You're welcome to check the warehouse, though," says the mildly flustered shopkeeper at the <Link link='https://adventofcode.com/2020/day/2'>North Pole Toboggan Rental Shop</Link>. The Historians head out to take a look.</p><br />
    <p>The shopkeeper turns to you. "Any chance you can see why our computers are having issues again?"</p><br />
    <p>The computer appears to be trying to run a program, but its memory (your puzzle input) is <Glow>corrupted</Glow>. All of the instructions have been jumbled up!</p><br />
    <p>It seems like the goal of the program is just to <Glow>multiply some numbers</Glow>. It does that with instructions like <Code>mul(X,Y)</Code>, where <Code>X</Code> and <Code>Y</Code> are each 1-3 digit numbers. For instance, <Code>mul(44,46)</Code> multiplies <Code>44</Code> by <Code>46</Code> to get a result of <Code>2024</Code>. Similarly, <Code>mul(123,4)</Code> would multiply <Code>123</Code> by <Code>4</Code>.</p><br />
    <p>However, because the program's memory has been corrupted, there are also many invalid characters that should be <Glow>ignored</Glow>, even if they look like part of a <Code>mul</Code> instruction. Sequences like <Code>mul(4*</Code>, <Code>mul(6,9!</Code>, <Code>?(12,34)</Code>, or <Code>mul ( 2 , 4 )</Code> do <Glow>nothing</Glow>.</p><br />
    <p>For example, consider the following section of corrupted memory:</p><br />
    <CodeBlock>
        x<Glow>mul(2,4)</Glow>%&mul[3,7]!@^do_not_<Glow>mul(5,5)</Glow>+mul(32,64]then(<Glow>mul(11,8)mul(8,5)</Glow>)
    </CodeBlock><br />
    <p>Only the four highlighted sections are real <Code>mul</Code> instructions. Adding up the result of each instruction produces <Code><Glow>161</Glow></Code> (<Code>2*4 + 5*5 + 11*8 + 8*5</Code>).</p><br />
    <p>Scan the corrupted memory for uncorrupted <Code>mul</Code> instructions. <Glow>What do you get if you add up all of the results of the multiplications?</Glow></p>
</>);

export const part2Description = (<>
    <p>As you scan through the corrupted memory, you notice that some of the conditional statements are also still intact. If you handle some of the uncorrupted conditional statements in the program, you might be able to get an even more accurate result.</p><br />
    <p>There are two new instructions you'll need to handle:</p><br />
    <List>
        <li>The <Code>do()</Code> instruction <Glow>enables</Glow> future <Code>mul</Code> instructions.</li>
        <li>The <Code>don't()</Code> instruction <Glow>disables</Glow> future <Code>mul</Code> instructions.</li>
    </List><br />
    <p>Only the <Glow>most recent</Glow> <Code>do()</Code> or <Code>don't()</Code> instruction applies. At the beginning of the program, <Code>mul</Code> instructions are <Glow>enabled</Glow>.</p><br />
    <p>For example:</p><br />
    <CodeBlock>
        x<Glow>mul(2,4)</Glow>&mul[3,7]!^<Glow>don't()</Glow>_mul(5,5)+mul(32,64](mul(11,8)un<Glow>do()</Glow>?<Glow>mul(8,5)</Glow>)
    </CodeBlock><br />
    <p>This corrupted memory is similar to the example from before, but this time the <Code>mul(5,5)</Code> and <Code>mul(11,8)</Code> instructions are <Glow>disabled</Glow> because there is a <Code>don't()</Code> instruction before them. The other <Code>mul</Code> instructions function normally, including the one at the end that gets re-<Glow>enabled</Glow> by a <Code>do()</Code> instruction.</p><br />
    <p>This time, the sum of the results is <Code><Glow>48</Glow></Code> (<Code>2*4 + 8*5</Code>).</p><br />
    <p>Handle the new instructions; <Glow>what do you get if you add up all of the results of just the enabled multiplications?</Glow></p>
</>);
