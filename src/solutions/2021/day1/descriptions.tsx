import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';

export const part1Description = (<>
    <p>You're minding your own business on a ship at sea when the overboard alarm goes off! You rush to see if you can help. Apparently, one of the Elves tripped and accidentally sent the sleigh keys flying into the ocean!</p><br />
    <p>Before you know it, you're inside a submarine the Elves keep ready for situations like this. It's covered in Christmas lights (because of course it is), and it even has an experimental antenna that should be able to track the keys if you can boost its signal strength high enough; there's a little meter that indicates the antenna's signal strength by displaying 0-50 <Glow color='yellow'>stars</Glow>.</p><br />
    <p>Your instincts tell you that in order to save Christmas, you'll need to get all <Glow color='yellow'>fifty stars</Glow> by December 25th.</p><br />
    <p>Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants <Glow color='yellow'>one star</Glow>. Good luck!</p><br />
    <p>As the submarine drops below the surface of the ocean, it automatically performs a sonar sweep of the nearby sea floor. On a small screen, the sonar sweep report (your puzzle input) appears: each line is a measurement of the sea floor depth as the sweep looks further and further away from the submarine.</p><br />
    <p>For example, suppose you had the following report:</p><br />
    <CodeBlock>
        199<br />
        200<br />
        208<br />
        210<br />
        200<br />
        207<br />
        240<br />
        269<br />
        260<br />
        263
    </CodeBlock><br />
    <p>This report indicates that, scanning outward from the submarine, the sonar sweep found depths of <Code>199</Code>, <Code>200</Code>, <Code>208</Code>, <Code>210</Code>, and so on.</p><br />
    <p>The first order of business is to figure out how quickly the depth increases, just so you know what you're dealing with - you never know if the keys will get <Hidden content='Does this premise seem fishy to you?'>carried into deeper water</Hidden> by an ocean current or a fish or something.</p><br />
    <p>To do this, count <Glow>the number of times a depth measurement increases</Glow> from the previous measurement. (There is no measurement before the first measurement.) In the example above, the changes are as follows:</p><br />
    <CodeBlock>
        199 (N/A - no previous measurement)<br />
        200 (<Glow>increased</Glow>)<br />
        208 (<Glow>increased</Glow>)<br />
        210 (<Glow>increased</Glow>)<br />
        200 (decreased)<br />
        207 (<Glow>increased</Glow>)<br />
        240 (<Glow>increased</Glow>)<br />
        269 (<Glow>increased</Glow>)<br />
        260 (decreased)<br />
        263 (<Glow>increased</Glow>)
    </CodeBlock><br />
    <p>In this example, there are <Code><Glow>7</Glow></Code> measurements that are larger than the previous measurement.</p><br />
    <p><Glow>How many measurements are larger than the previous measurement?</Glow></p>
</>);

export const part2Description = (<>
    <p>Considering every single measurement isn't as useful as you expected: there's just too much noise in the data.</p><br />
    <p>Instead, consider sums of a <Glow>three-measurement sliding window</Glow>. Again considering the above example:</p><br />
    <CodeBlock>
        199  A      <br />
        200  A B    <br />
        208  A B C  <br />
        210    B C D<br />
        200  E   C D<br />
        207  E F   D<br />
        240  E F G  <br />
        269    F G H<br />
        260      G H<br />
        263        H
    </CodeBlock><br />
    <p>Start by comparing the first and second three-measurement windows. The measurements in the first window are marked <Code>A</Code> (<Code>199</Code>, <Code>200</Code>, <Code>208</Code>); their sum is <Code>199 + 200 + 208 = 607</Code>. The second window is marked <Code>B</Code> (<Code>200</Code>, <Code>208</Code>, <Code>210</Code>); its sum is <Code>618</Code>. The sum of measurements in the second window is larger than the sum of the first, so this first comparison <Glow>increased</Glow>.</p><br />
    <p>Your goal now is to count <Glow>the number of times the sum of measurements in this sliding window increases</Glow> from the previous sum. So, compare <Code>A</Code> with <Code>B</Code>, then compare <Code>B</Code> with <Code>C</Code>, then <Code>C</Code> with <Code>D</Code>, and so on. Stop when there aren't enough measurements left to create a new three-measurement sum.</p><br />
    <p>In the above example, the sum of each three-measurement window is as follows:</p><br />
    <CodeBlock>
        A: 607 (N/A - no previous sum)<br />
        B: 618 (<Glow>increased</Glow>)<br />
        C: 618 (no change)<br />
        D: 617 (decreased)<br />
        E: 647 (<Glow>increased</Glow>)<br />
        F: 716 (<Glow>increased</Glow>)<br />
        G: 769 (<Glow>increased</Glow>)<br />
        H: 792 (<Glow>increased</Glow>)
    </CodeBlock><br />
    <p>In this example, there are <Code><Glow>5</Glow></Code> sums that are larger than the previous sum.</p><br />
    <p>Consider sums of a three-measurement sliding window. <Glow>How many sums are larger than the previous sum?</Glow></p>
</>);
