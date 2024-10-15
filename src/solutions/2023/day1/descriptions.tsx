import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Link from '@components/text/Link';

export const part1Description = (<>
    <p>Something is wrong with global snow production, and you've been selected to take a look. The Elves have even given you a map; on it, they've used stars to mark the top fifty locations that are likely to be having problems.</p><br/>
    <p>You've been doing this long enough to know that to restore snow operations, you need to check all <Glow color='yellow'>fifty stars</Glow> by December 25th.</p><br/>
    <p>Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants <Glow color='yellow'>one star</Glow>. Good luck!</p><br/>
    <p>You try to ask why they can't just use a <Link link='https://adventofcode.com/2015/day/1'>weather machine</Link> ("not powerful enough") and where they're even sending you ("the sky") and why your map looks mostly blank ("you sure ask a lot of questions") and hang on did you just say the sky ("of course, where do you think snow comes from") when you realize that the Elves are already loading you into a <Link link='https://en.wikipedia.org/wiki/Trebuchet'>trebuchet</Link> ("please hold still, we need to strap you in").</p><br/>
    <p>As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been <Glow>amended</Glow> by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document.</p><br/>
    <p>The newly-improved calibration document consists of lines of text; each line originally contained a specific <Glow>calibration value</Glow> that the Elves now need to recover. On each line, the calibration value can be found by combining the <Glow>first digit</Glow> and the <Glow>last digit</Glow> (in that order) to form a single <Glow>two-digit number</Glow>.</p><br/>
    <p>For example:</p><br/>
    <CodeBlock>
        1abc2<br/>
        pqr3stu8vwx<br/>
        a1b2c3d4e5f<br/>
        treb7uchet
    </CodeBlock><br/>
    <p>In this example, the calibration values of these four lines are <Code>12</Code>, <Code>38</Code>, <Code>15</Code>, and <Code>77</Code>. Adding these together produces <Code><Glow>142</Glow></Code>.</p><br/>
    <p>Consider your entire calibration document. <Glow>What is the sum of all of the calibration values?</Glow></p>
</>);

export const part2Description = (<>
    <p>Your calculation isn't quite right. It looks like some of the digits are actually <Glow>spelled out with letters</Glow>: <Code>one</Code>, <Code>two</Code>, <Code>three</Code>, <Code>four</Code>, <Code>five</Code>, <Code>six</Code>, <Code>seven</Code>, <Code>eight</Code>, and <Code>nine</Code> <Glow>also</Glow> count as valid "digits".</p><br/>
    <p>Equipped with this new information, you now need to find the real first and last digit on each line. For example:</p><br/>
    <CodeBlock>
        two1nine<br/>
        eightwothree<br/>
        abcone2threexyz<br/>
        xtwone3four<br/>
        4nineeightseven2<br/>
        zoneight234<br/>
        7pqrstsixteen
    </CodeBlock><br/>
    <p>In this example, the calibration values are <Code>29</Code>, <Code>83</Code>, <Code>13</Code>, <Code>24</Code>, <Code>42</Code>, <Code>14</Code>, and <Code>76</Code>. Adding these together produces <Code><Glow>281</Glow></Code>.</p><br/>
    <p><Glow>What is the sum of all of the calibration values?</Glow></p>
</>);
