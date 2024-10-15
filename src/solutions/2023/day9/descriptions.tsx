import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Link from '@components/text/Link';

export const part1Description = (<>
    <p>You ride the camel through the sandstorm and stop where the ghost's maps told you to stop. The sandstorm subsequently subsides, somehow seeing you standing at an <Glow>oasis</Glow>!</p><br/>
    <p>The camel goes to get some water and you stretch your neck. As you look up, you discover what must be yet another giant floating island, this one made of metal! That must be where the <Glow>parts to fix the sand machines</Glow> come from.</p><br/>
    <p>There's even a <Link link='https://en.wikipedia.org/wiki/Hang_gliding'></Link>hang glider partially buried in the sand here; once the sun rises and heats up the sand, you might be able to use the glider and the hot air to get all the way up to the metal island!</p><br/>
    <p>While you wait for the sun to rise, you admire the oasis hidden here in the middle of Desert Island. It must have a delicate ecosystem; you might as well take some ecological readings while you wait. Maybe you can report any environmental instabilities you find to someone so the oasis can be around for the next sandstorm-worn traveler.</p><br/>
    <p>You pull out your handy <Glow>Oasis And Sand Instability Sensor</Glow> and analyze your surroundings. The OASIS produces a report of many values and how they are changing over time (your puzzle input). Each line in the report contains the <Glow>history</Glow> of a single value. For example:</p><br/>
    <CodeBlock>
        0 3 6 9 12 15<br/>
        1 3 6 10 15 21<br/>
        10 13 16 21 30 45
    </CodeBlock><br/>
    <p>To best protect the oasis, your environmental report should include a <Glow>prediction of the next value</Glow> in each history. To do this, start by making a new sequence from the <Glow>difference at each step</Glow> of your history. If that sequence is <Glow>not</Glow> all zeroes, repeat this process, using the sequence you just generated as the input sequence. Once all of the values in your latest sequence are zeroes, you can extrapolate what the next value of the original history should be.</p><br/>
    <p>In the above dataset, the first history is <Code>0 3 6 9 12 15</Code>. Because the values increase by <Code>3</Code> each step, the first sequence of differences that you generate will be <Code>3 3 3 3 3</Code>. Note that this sequence has one fewer value than the input sequence because at each step it considers two numbers from the input. Since these values aren't <Glow>all zero</Glow>, repeat the process: the values differ by <Code>0</Code> at each step, so the next sequence is <Code>0 0 0 0</Code>. This means you have enough information to extrapolate the history! Visually, these sequences can be arranged like this:</p><br/>
    <CodeBlock>
        0   3   6   9  12  15<br/>
        &nbsp; 3   3   3   3   3<br/>
        &nbsp;   0   0   0   0
    </CodeBlock><br/>
    <p>To extrapolate, start by adding a new zero to the end of your list of zeroes; because the zeroes represent differences between the two values above them, this also means there is now a placeholder in every sequence above it:</p><br/>
    <CodeBlock>
        0   3   6   9  12  15   <Glow>B</Glow><br/>
        &nbsp; 3   3   3   3   3   <Glow>A</Glow><br/>
        &nbsp;   0   0   0   0   <Glow>0</Glow>
    </CodeBlock><br/>
    <p>You can then start filling in placeholders from the bottom up. <Code>A</Code> needs to be the result of increasing <Code>3</Code> (the value to its left) by <Code>0</Code> (the value below it); this means <Code>A</Code> must be <Code><Glow>3</Glow></Code>:</p><br/>
    <CodeBlock>
        0   3   6   9  12  15   B<br/>
        &nbsp; 3   3   3   3   <Glow>3</Glow>   <Glow>3</Glow><br/>
        &nbsp;   0   0   0   0   <Glow>0</Glow>
    </CodeBlock><br/>
    <p>Finally, you can fill in <Code>B</Code>, which needs to be the result of increasing <Code>15</Code> (the value to its left) by <Code>3</Code> (the value below it), or <Code><Glow>18</Glow></Code>:</p><br/>
    <CodeBlock>
        0   3   6   9  12  <Glow>15</Glow>  <Glow>18</Glow><br/>
        &nbsp; 3   3   3   3   3   <Glow>3</Glow><br/>
        &nbsp;   0   0   0   0   0
    </CodeBlock><br/>
    <p>So, the next value of the first history is <Code><Glow>18</Glow></Code>.</p><br/>
    <p>Finding all-zero differences for the second history requires an additional sequence:</p><br/>
    <CodeBlock>
        1   3   6  10  15  21<br/>
        &nbsp; 2   3   4   5   6<br/>
        &nbsp;   1   1   1   1<br/>
        &nbsp;     0   0   0
    </CodeBlock><br/>
    <p>Then, following the same process as before, work out the next value in each sequence from the bottom up:</p><br/>
    <CodeBlock>
        1   3   6  10  15  21  <Glow>28</Glow><br/>
        &nbsp; 2   3   4   5   6   <Glow>7</Glow><br/>
        &nbsp;   1   1   1   1   <Glow>1</Glow><br/>
        &nbsp;     0   0   0   <Glow>0</Glow>
    </CodeBlock><br/>
    <p>So, the next value of the second history is <Code><Glow>28</Glow></Code>.</p><br/>
    <p>The third history requires even more sequences, but its next value can be found the same way:</p><br/>
    <CodeBlock>
        10  13  16  21  30  45  <Glow>68</Glow><br/>
        &nbsp;  3   3   5   9  15  <Glow>23</Glow><br/>
        &nbsp;    0   2   4   6   <Glow>8</Glow><br/>
        &nbsp;      2   2   2   <Glow>2</Glow><br/>
        &nbsp;        0   0   <Glow>0</Glow>
    </CodeBlock><br/>
    <p>So, the next value of the third history is <Code><Glow>68</Glow></Code>.</p><br/>
    <p>If you find the next value for each history in this example and add them together, you get <Code><Glow>114</Glow></Code>.</p><br/>
    <p>Analyze your OASIS report and extrapolate the next value for each history. <Glow>What is the sum of these extrapolated values?</Glow></p>
</>);

export const part2Description = (<>
    <p>Of course, it would be nice to have <Glow>even more history</Glow> included in your report. Surely it's safe to just <Glow>extrapolate backwards</Glow> as well, right?</p><br/>
    <p>For each history, repeat the process of finding differences until the sequence of differences is entirely zero. Then, rather than adding a zero to the end and filling in the next values of each previous sequence, you should instead add a zero to the <Glow>beginning</Glow> of your sequence of zeroes, then fill in new <Glow>first</Glow> values for each previous sequence.</p><br/>
    <p>In particular, here is what the third example history looks like when extrapolating back in time:</p><br/>
    <CodeBlock>
        <Glow>5</Glow>  10  13  16  21  30  45<br/>
        &nbsp; <Glow>5</Glow>   3   3   5   9  15<br/>
        &nbsp;  <Glow>-2</Glow>   0   2   4   6<br/>
        &nbsp;     <Glow>2</Glow>   2   2   2<br/>
        &nbsp;       <Glow>0</Glow>   0   0
    </CodeBlock><br/>
    <p>Adding the new values on the left side of each sequence from bottom to top eventually reveals the new left-most history value: <Code><Glow>5</Glow></Code>.</p><br/>
    <p>Doing this for the remaining example data above results in previous values of <Code><Glow>-3</Glow></Code> for the first history and <Code><Glow>0</Glow></Code> for the second history. Adding all three new values together produces <Code><Glow>2</Glow></Code>.</p><br/>
    <p>Analyze your OASIS report again, this time extrapolating the <Glow>previous</Glow> value for each history. <Glow>What is the sum of these extrapolated values?</Glow></p>
</>);
