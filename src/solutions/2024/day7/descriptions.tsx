import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>The Historians take you to a familiar <Link link='https://adventofcode.com/2022/day/9'>rope bridge</Link> over a river in the middle of a jungle. The Chief isn't on this side of the bridge, though; maybe he's on the other side?</p><br />
    <p>When you go to cross the bridge, you notice a group of engineers trying to repair it. (Apparently, it breaks pretty frequently.) You won't be able to cross until it's fixed.</p><br />
    <p>You ask how long it'll take; the engineers tell you that it only needs final calibrations, but some young elephants were playing nearby and <Glow>stole all the operators</Glow> from their calibration equations! They could finish the calibrations if only someone could determine which test values could possibly be produced by placing any combination of operators into their calibration equations (your puzzle input).</p><br />
    <p>For example:</p><br />
    <CodeBlock>
        190: 10 19<br />
        3267: 81 40 27<br />
        83: 17 5<br />
        156: 15 6<br />
        7290: 6 8 6 15<br />
        161011: 16 10 13<br />
        192: 17 8 14<br />
        21037: 9 7 18 13<br />
        292: 11 6 16 20
    </CodeBlock><br />
    <p>Each line represents a single equation. The test value appears before the colon on each line; it is your job to determine whether the remaining numbers can be combined with operators to produce the test value.</p><br />
    <p>Operators are <Glow>always evaluated left-to-right</Glow>, <Glow>not</Glow> according to precedence rules. Furthermore, numbers in the equations cannot be rearranged. Glancing into the jungle, you can see elephants holding two different types of operators: <Glow>add</Glow> (<Code>+</Code>) and <Glow>multiply</Glow> (<Code>*</Code>).</p><br />
    <p>Only three of the above equations can be made true by inserting operators:</p><br />
    <List>
        <li><Code>190: 10 19</Code> has only one position that accepts an operator: between <Code>10</Code> and <Code>19</Code>. Choosing <Code>+</Code> would give <Code>29</Code>, but choosing <Code>*</Code> would give the test value (<Code>10 * 19 = 190</Code>).</li>
        <li><Code>3267: 81 40 27</Code> has two positions for operators. Of the four possible configurations of the operators, <Glow>two</Glow> cause the right side to match the test value: <Code>81 + 40 * 27</Code> and <Code>81 * 40 + 27</Code> both equal <Code>3267</Code> (when evaluated left-to-right)!</li>
        <li><Code>292: 11 6 16 20</Code> can be solved in exactly one way: <Code>11 + 6 * 16 + 20</Code>.</li>
    </List><br />
    <p>The engineers just need the <Glow>total calibration result</Glow>, which is the sum of the test values from just the equations that could possibly be true. In the above example, the sum of the test values for the three equations listed above is <Code><Glow>3749</Glow></Code>.</p><br />
    <p>Determine which equations could possibly be true. <Glow>What is their total calibration result?</Glow></p>
</>);

export const part2Description = (<>
    <p>The engineers seem concerned; the total calibration result you gave them is nowhere close to being within safety tolerances. Just then, you spot your mistake: some well-hidden elephants are holding a <Glow>third type of operator</Glow>.</p><br />
    <p>The <Link link='https://en.wikipedia.org/wiki/Concatenation'>concatenation</Link> operator (<Code><Hidden content={`I think you mean ".".`}>||</Hidden></Code>) combines the digits from its left and right inputs into a single number. For example, <Code>12 || 345</Code> would become <Code>12345</Code>. All operators are still evaluated left-to-right.</p><br />
    <p>Now, apart from the three equations that could be made true using only addition and multiplication, the above example has three more equations that can be made true by inserting operators:</p><br />
    <List>
        <li><Code>156: 15 6</Code> can be made true through a single concatenation: <Code>15 || 6 = 156</Code>.</li>
        <li><Code>7290: 6 8 6 15</Code> can be made true using <Code>6 * 8 || 6 * 15</Code>.</li>
        <li><Code>192: 17 8 14</Code> can be made true using <Code>17 || 8 + 14</Code>.</li>
    </List><br />
    <p>Adding up all six test values (the three that could be made before using only <Code>+</Code> and <Code>*</Code> plus the new three that can now be made by also using <Code>||</Code>) produces the new <Glow>total calibration result</Glow> of <Code><Glow>11387</Glow></Code>.</p><br />
    <p>Using your new knowledge of elephant hiding spots, determine which equations could possibly be true. <Glow>What is their total calibration result?</Glow></p>
</>);
