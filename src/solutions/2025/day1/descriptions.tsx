import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>The Elves have good news and bad news.</p><br />
    <p>The good news is that they've discovered <Link link='https://en.wikipedia.org/wiki/Project_management'>project management</Link>! This has given them the tools they need to prevent their usual Christmas emergency. For example, they now know that the North Pole decorations need to be finished soon so that other critical tasks can start on time.</p><br />
    <p>The bad news is that they've realized they have a <Glow>different</Glow> emergency: according to their resource planning, none of them have any time left to decorate the North Pole!</p><br />
    <p>To save Christmas, the Elves need <Glow>you</Glow> to <Glow>finish decorating the North Pole by December 12th</Glow>.</p><br />
    <p>Collect stars by solving puzzles.  Two puzzles will be made available on each day; the second puzzle is unlocked when you complete the first.  Each puzzle grants <Glow color='yellow'>one star</Glow>. Good luck!</p><br />
    <p>You arrive at the secret entrance to the North Pole base ready to start decorating. Unfortunately, the <Glow>password</Glow> seems to have been changed, so you can't get in. A document taped to the wall helpfully explains:</p><br />
    <p>"Due to new security protocols, the password is locked in the safe below. Please see the attached document for the new combination."</p><br />
    <p>The safe has a dial with only an arrow on it; around the dial are the numbers <Code>0</Code> through <Code>99</Code> in order. As you turn the dial, it makes a small <Glow>click</Glow> noise as it reaches each number.</p><br />
    <p>The attached document (your puzzle input) contains a sequence of <Glow>rotations</Glow>, one per line, which tell you how to open the safe. A rotation starts with an <Code>L</Code> or <Code>R</Code> which indicates whether the rotation should be to the <Glow>left</Glow> (toward lower numbers) or to the <Glow>right</Glow> (toward higher numbers). Then, the rotation has a <Glow>distance</Glow> value which indicates how many clicks the dial should be rotated in that direction.</p><br />
    <p>So, if the dial were pointing at <Code>11</Code>, a rotation of <Code>R8</Code> would cause the dial to point at <Code>19</Code>. After that, a rotation of <Code>L19</Code> would cause it to point at <Code>0</Code>.</p><br />
    <p>Because the dial is a circle, turning the dial <Glow>left from</Glow> <Code><Glow>0</Glow></Code> one click makes it point at <Code>99</Code>. Similarly, turning the dial <Glow>right from</Glow> <Code><Glow>99</Glow></Code> one click makes it point at <Code>0</Code>.</p><br />
    <p>So, if the dial were pointing at <Code>5</Code>, a rotation of <Code>L10</Code> would cause it to point at <Code>95</Code>. After that, a rotation of <Code>R5</Code> could cause it to point at <Code>0</Code>.</p><br />
    <p>The dial starts by pointing at <Code>50</Code>.</p><br />
    <p>You could follow the instructions, but your recent required official North Pole secret entrance security training seminar taught you that the safe is actually a decoy. The actual password is <Glow>the number of times the dial is left pointing at</Glow> <Code><Glow>0</Glow></Code> <Glow>after any rotation in the sequence</Glow>.</p><br />
    <p>For example, suppose the attached document contained the following rotations:</p><br />
    <CodeBlock>
        L68<br />
        L30<br />
        R48<br />
        L5<br />
        R60<br />
        L55<br />
        L1<br />
        L99<br />
        R14<br />
        L82
    </CodeBlock><br />
    <p>Following these rotations would cause the dial to move as follows:</p><br />
    <List>
        <li>The dial starts by pointing at <Code>50</Code>.</li>
        <li>The dial is rotated <Code>L68</Code> to point at <Code>82</Code>.</li>
        <li>The dial is rotated <Code>L30</Code> to point at <Code>52</Code>.</li>
        <li>The dial is rotated <Code>R48</Code> to point at <Code><Glow>0</Glow></Code>.</li>
        <li>The dial is rotated <Code>L5</Code> to point at <Code>95</Code>.</li>
        <li>The dial is rotated <Code>R60</Code> to point at <Code>55</Code>.</li>
        <li>The dial is rotated <Code>L55</Code> to point at <Code><Glow>0</Glow></Code>.</li>
        <li>The dial is rotated <Code>L1</Code> to point at <Code>99</Code>.</li>
        <li>The dial is rotated <Code>L99</Code> to point at <Code><Glow>0</Glow></Code>.</li>
        <li>The dial is rotated <Code>R14</Code> to point at <Code>14</Code>.</li>
        <li>The dial is rotated <Code>L82</Code> to point at <Code>32</Code>.</li>
    </List><br />
    <p>Because the dial points at <Code>0</Code> a total of three times during this process, the password in this example is <Code><Glow>3</Glow></Code>.</p><br />
    <p>Analyze the rotations in your attached document. <Glow>What's the actual password to open the door?</Glow></p>
</>);

export const part2Description = (<>
    <p>You're sure that's the right password, but the door won't open. You knock, but nobody answers. You build a snowman while you think.</p><br />
    <p>As you're rolling the snowballs for your snowman, you find another security document that must have fallen into the snow:</p><br />
    <p>"Due to newer security protocols, please use <Glow>password method</Glow> <Hidden content='You should have seen the chaos when the Elves overflowed their 32-bit password method counter.'><Glow>0x434C49434B</Glow></Hidden> until further notice."</p><br />
    <p>You remember from the training seminar that "method 0x434C49434B" means you're actually supposed to count the number of times <Glow>any click</Glow> causes the dial to point at <Code>0</Code>, regardless of whether it happens during a rotation or at the end of one.</p><br />
    <p>Following the same rotations as in the above example, the dial points at zero a few extra times during its rotations:</p><br />
    <List>
        <li>The dial starts by pointing at <Code>50</Code>.</li>
        <li>The dial is rotated <Code>L68</Code> to point at <Code>82</Code>; during this rotation, it points at <Code>0</Code> <Glow>once</Glow>.</li>
        <li>The dial is rotated <Code>L30</Code> to point at <Code>52</Code>.</li>
        <li>The dial is rotated <Code>R48</Code> to point at <Code><Glow>0</Glow></Code>.</li>
        <li>The dial is rotated <Code>L5</Code> to point at <Code>95</Code>.</li>
        <li>The dial is rotated <Code>R60</Code> to point at <Code>55</Code>; during this rotation, it points at <Code>0</Code> <Glow>once</Glow>.</li>
        <li>The dial is rotated <Code>L55</Code> to point at <Code><Glow>0</Glow></Code>.</li>
        <li>The dial is rotated <Code>L1</Code> to point at <Code>99</Code>.</li>
        <li>The dial is rotated <Code>L99</Code> to point at <Code><Glow>0</Glow></Code>.</li>
        <li>The dial is rotated <Code>R14</Code> to point at <Code>14</Code>.</li>
        <li>The dial is rotated <Code>L82</Code> to point at <Code>32</Code>; during this rotation, it points at <Code>0</Code> <Glow>once</Glow>.</li>
    </List><br />
    <p>In this example, the dial points at <Code>0</Code> three times at the end of a rotation, plus three more times during a rotation. So, in this example, the new password would be <Code><Glow>6</Glow></Code>.</p><br />
    <p>Be careful: if the dial were pointing at <Code>50</Code>, a single rotation like <Code>R1000</Code> would cause the dial to point at <Code>0</Code> ten times before returning back to <Code>50</Code>!</p><br />
    <p>Using password method 0x434C49434B, <Glow>what is the password to open the door?</Glow></p>
</>);
