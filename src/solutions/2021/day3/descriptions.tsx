import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import List from '@components/text/List';

export const part1Description = (<>
    <p>The submarine has been making some <Hidden content='Turns out oceans are heavy.'>odd creaking noises</Hidden>, so you ask it to produce a diagnostic report just in case.</p><br />
    <p>The diagnostic report (your puzzle input) consists of a list of binary numbers which, when decoded properly, can tell you many useful things about the conditions of the submarine. The first parameter to check is the <Glow>power consumption</Glow>.</p><br />
    <p>You need to use the binary numbers in the diagnostic report to generate two new binary numbers (called the <Glow>gamma rate</Glow> and the <Glow>epsilon rate</Glow>). The power consumption can then be found by multiplying the gamma rate by the epsilon rate.</p><br />
    <p>Each bit in the gamma rate can be determined by finding the <Glow>most common bit in the corresponding position</Glow> of all numbers in the diagnostic report. For example, given the following diagnostic report:</p><br />
    <CodeBlock>
        00100<br />
        11110<br />
        10110<br />
        10111<br />
        10101<br />
        01111<br />
        00111<br />
        11100<br />
        10000<br />
        11001<br />
        00010<br />
        01010
    </CodeBlock><br />
    <p>Considering only the first bit of each number, there are five <Code>0</Code> bits and seven <Code>1</Code> bits. Since the most common bit is <Code>1</Code>, the first bit of the gamma rate is <Code>1</Code>.</p><br />
    <p>The most common second bit of the numbers in the diagnostic report is <Code>0</Code>, so the second bit of the gamma rate is <Code>0</Code>.</p><br />
    <p>The most common value of the third, fourth, and fifth bits are <Code>1</Code>, <Code>1</Code>, and <Code>0</Code>, respectively, and so the final three bits of the gamma rate are <Code>110</Code>.</p><br />
    <p>So, the gamma rate is the binary number <Code>10110</Code>, or <Code><Glow>22</Glow></Code> in decimal.</p><br />
    <p>The epsilon rate is calculated in a similar way; rather than use the most common bit, the least common bit from each position is used. So, the epsilon rate is <Code>01001</Code>, or <Code><Glow>9</Glow></Code> in decimal. Multiplying the gamma rate (<Code>22</Code>) by the epsilon rate (<Code>9</Code>) produces the power consumption, <Code><Glow>198</Glow></Code>.</p><br />
    <p>Use the binary numbers in your diagnostic report to calculate the gamma rate and epsilon rate, then multiply them together. <Glow>What is the power consumption of the submarine?</Glow> (Be sure to represent your answer in decimal, not binary.)</p>
</>);

export const part2Description = (<>
    <p>Next, you should verify the <Glow>life support rating</Glow>, which can be determined by multiplying the <Glow>oxygen generator rating</Glow> by the <Glow>CO2 scrubber rating</Glow>.</p><br />
    <p>Both the oxygen generator rating and the CO2 scrubber rating are values that can be found in your diagnostic report - finding them is the tricky part. Both values are located using a similar process that involves filtering out values until only one remains. Before searching for either rating value, start with the full list of binary numbers from your diagnostic report and <Glow>consider just the first bit</Glow> of those numbers. Then:</p><br />
    <List>
        <li>Keep only numbers selected by the <Glow>bit criteria</Glow> for the type of rating value for which you are searching. Discard numbers which do not match the bit criteria.</li>
        <li>If you only have one number left, stop; this is the rating value for which you are searching.</li>
        <li>Otherwise, repeat the process, considering the next bit to the right.</li>
    </List><br />
    <p>The <Glow>bit criteria</Glow> depends on which type of rating value you want to find:</p><br />
    <List>
        <li>To find <Glow>oxygen generator rating</Glow>, determine the <Glow>most common</Glow> value (<Code>0</Code> or <Code>1</Code>) in the current bit position, and keep only numbers with that bit in that position. If <Code>0</Code> and <Code>1</Code> are equally common, keep values with a <Code><Glow>1</Glow></Code> in the position being considered.</li>
        <li>To find <Glow>CO2 scrubber rating</Glow>, determine the <Glow>least common</Glow> value (<Code>0</Code> or <Code>1</Code>) in the current bit position, and keep only numbers with that bit in that position. If <Code>0</Code> and <Code>1</Code> are equally common, keep values with a <Code><Glow>0</Glow></Code> in the position being considered.</li>
    </List><br />
    <p>For example, to determine the <Glow>oxygen generator rating</Glow> value using the same example diagnostic report from above:</p><br />
    <List>
        <li>Start with all 12 numbers and consider only the first bit of each number. There are more <Code>1</Code> bits (7) than <Code>0</Code> bits (5), so keep only the 7 numbers with a <Code>1</Code> in the first position: <Code>11110</Code>, <Code>10110</Code>, <Code>10111</Code>, <Code>10101</Code>, <Code>11100</Code>, <Code>10000</Code>, and <Code>11001</Code>.</li>
        <li>Then, consider the second bit of the 7 remaining numbers: there are more <Code>0</Code> bits (4) than <Code>1</Code> bits (3), so keep only the 4 numbers with a <Code>0</Code> in the second position: <Code>10110</Code>, <Code>10111</Code>, <Code>10101</Code>, and <Code>10000</Code>.</li>
        <li>In the third position, three of the four numbers have a <Code>1</Code>, so keep those three: <Code>10110</Code>, <Code>10111</Code>, and <Code>10101</Code>.</li>
        <li>In the fourth position, two of the three numbers have a <Code>1</Code>, so keep those two: <Code>10110</Code> and <Code>10111</Code>.</li>
        <li>In the fifth position, there are an equal number of <Code>0</Code> bits and <Code>1</Code> bits (one each). So, to find the <Glow>oxygen generator rating</Glow>, keep the number with a <Code>1</Code> in that position: <Code>10111</Code>.</li>
        <li>As there is only one number left, stop; the <Glow>oxygen generator rating</Glow> is <Code>10111</Code>, or <Code><Glow>23</Glow></Code> in decimal.</li>
    </List><br />
    <p>Then, to determine the <Glow>CO2 scrubber rating</Glow> value from the same example above:</p><br />
    <List>
        <li>Start again with all 12 numbers and consider only the first bit of each number. There are fewer <Code>0</Code> bits (5) than <Code>1</Code> bits (7), so keep only the 5 numbers with a <Code>0</Code> in the first position: <Code>00100</Code>, <Code>01111</Code>, <Code>00111</Code>, <Code>00010</Code>, and <Code>01010</Code>.</li>
        <li>Then, consider the second bit of the 5 remaining numbers: there are fewer <Code>1</Code> bits (2) than <Code>0</Code> bits (3), so keep only the 2 numbers with a <Code>1</Code> in the second position: <Code>01111</Code> and <Code>01010</Code>.</li>
        <li>In the third position, there are an equal number of <Code>0</Code> bits and <Code>1</Code> bits (one each). So, to find the <Glow>CO2 scrubber rating</Glow>, keep the number with a <Code>0</Code> in that position: <Code>01010</Code>.</li>
        <li>As there is only one number left, stop; the <Glow>CO2 scrubber rating</Glow> is <Code>01010</Code>, or <Code><Glow>10</Glow></Code> in decimal.</li>
    </List><br />
    <p>Finally, to find the life support rating, multiply the oxygen generator rating (<Code>23</Code>) by the CO2 scrubber rating (<Code>10</Code>) to get <Code><Glow>230</Glow></Code>.</p><br />
    <p>Use the binary numbers in your diagnostic report to calculate the oxygen generator rating and CO2 scrubber rating, then multiply them together. <Glow>What is the life support rating of the submarine?</Glow> (Be sure to represent your answer in decimal, not binary.)</p>
</>);
