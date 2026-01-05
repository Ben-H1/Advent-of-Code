import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>After helping the Elves in the kitchen, you were taking a break and helping them re-enact a movie scene when you over-enthusiastically jumped into the garbage chute!</p><br />
    <p>A brief fall later, you find yourself in a <Hidden content="To your surprise, the smell isn't that bad.">garbage smasher</Hidden>. Unfortunately, the door's been magnetically sealed.</p><br />
    <p>As you try to find a way out, you are approached by a family of cephalopods! They're pretty sure they can get the door open, but it will take some time. While you wait, they're curious if you can help the youngest cephalopod with her <Link link='https://adventofcode.com/2021/day/18'>math homework</Link>.</p><br />
    <p>Cephalopod math doesn't look that different from normal math. The math worksheet (your puzzle input) consists of a list of <Glow>problems</Glow>; each problem has a group of numbers that need to be either <Glow>added</Glow> (<Code>+</Code>) or <Glow>multiplied</Glow> (<Code>*</Code>) together.</p><br />
    <p>However, the problems are arranged a little strangely; they seem to be presented next to each other in a very long horizontal list. For example:</p><br />
    <CodeBlock>
        123 328  51 64 <br />
        &nbsp;45 64  387 23 <br />
        &nbsp;&nbsp;6 98  215 314<br />
        *   +   *   +&nbsp;&nbsp;
    </CodeBlock><br />
    <p>Each problem's numbers are arranged vertically; at the bottom of the problem is the symbol for the operation that needs to be performed. Problems are separated by a full column of only spaces. The left/right alignment of numbers within each problem can be ignored.</p><br />
    <p>So, this worksheet contains four problems:</p><br />
    <List>
        <li><Code>123</Code> * <Code>45</Code> * <Code>6</Code> = <Code><Glow>33210</Glow></Code></li>
        <li><Code>328</Code> + <Code>64</Code> + <Code>98</Code> = <Code><Glow>490</Glow></Code></li>
        <li><Code>51</Code> * <Code>387</Code> * <Code>215</Code> = <Code><Glow>4243455</Glow></Code></li>
        <li><Code>64</Code> + <Code>23</Code> + <Code>314</Code> = <Code><Glow>401</Glow></Code></li>
    </List><br />
    <p>To check their work, cephalopod students are given the <Glow>grand total</Glow> of adding together all of the answers to the individual problems. In this worksheet, the grand total is <Code>33210</Code> + <Code>490</Code> + <Code>4243455</Code> + <Code>401</Code> = <Code><Glow>4277556</Glow></Code>.</p><br />
    <p>Of course, the actual worksheet is <Glow>much</Glow> wider. You'll need to make sure to unroll it completely so that you can read the problems clearly.</p><br />
    <p>Solve the problems on the math worksheet. <Glow>What is the grand total found by adding together all of the answers to the individual problems?</Glow></p>
</>);

export const part2Description = (<>
    <p>The big cephalopods come back to check on how things are going. When they see that your grand total doesn't match the one expected by the worksheet, they realize they forgot to explain how to read cephalopod math.</p><br />
    <p>Cephalopod math is written <Glow>right-to-left in columns</Glow>. Each number is given in its own column, with the most significant digit at the top and the least significant digit at the bottom. (Problems are still separated with a column consisting only of spaces, and the symbol at the bottom of the problem is still the operator to use.)</p><br />
    <p>Here's the example worksheet again:</p><br />
    <CodeBlock>
        123 328  51 64 <br />
        &nbsp;45 64  387 23 <br />
        &nbsp;&nbsp;6 98  215 314<br />
        *   +   *   +&nbsp;&nbsp;
    </CodeBlock><br />
    <p>Reading the problems right-to-left one column at a time, the problems are now quite different:</p><br />
    <List>
        <li>The rightmost problem is <Code>4</Code> + <Code>431</Code> + <Code>623</Code> = <Code><Glow>1058</Glow></Code></li>
        <li>The second problem from the right is <Code>175</Code> * <Code>581</Code> * <Code>32</Code> = <Code><Glow>3253600</Glow></Code></li>
        <li>The third problem from the right is <Code>8</Code> + <Code>248</Code> + <Code>369</Code> = <Code><Glow>625</Glow></Code></li>
        <li>Finally, the leftmost problem is <Code>356</Code> * <Code>24</Code> * <Code>1</Code> = <Code><Glow>8544</Glow></Code></li>
    </List><br />
    <p>Now, the grand total is <Code>1058</Code> + <Code>3253600</Code> + <Code>625</Code> + <Code>8544</Code> = <Code><Glow>3263827</Glow></Code>.</p><br />
    <p>Solve the problems on the math worksheet again. <Glow>What is the grand total found by adding together all of the answers to the individual problems?</Glow></p>
</>);
