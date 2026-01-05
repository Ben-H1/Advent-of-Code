import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import List from '@components/text/List';

export const part1Description = (<>
    <p>You get inside and take the elevator to its only other stop: the gift shop. "Thank you for visiting the North Pole!" gleefully exclaims a nearby sign. You aren't sure who is even allowed to visit the North Pole, but you know you can access the lobby through here, and from there you can access the rest of the North Pole base.</p><br />
    <p>As you make your way through the <Hidden content='They even sell lunch boxes and blue tents!'>surprisingly extensive</Hidden> selection, one of the clerks recognizes you and asks for your help.</p><br />
    <p>As it turns out, one of the younger Elves was playing on a gift shop computer and managed to add a whole bunch of invalid product IDs to their gift shop database! Surely, it would be no trouble for you to identify the invalid product IDs for them, right?</p><br />
    <p>They've even checked most of the product ID ranges already; they only have a few product ID ranges (your puzzle input) that you'll need to check. For example:</p><br />
    <CodeBlock>
        11-22,95-115,998-1012,1188511880-1188511890,222220-222224,<br />
        1698522-1698528,446443-446449,38593856-38593862,565653-565659,<br />
        824824821-824824827,2121212118-2121212124
    </CodeBlock><br />
    <p>(The ID ranges are wrapped here for legibility; in your input, they appear on a single long line.)</p><br />
    <p>The ranges are separated by commas (<Code>,</Code>); each range gives its <Glow>first ID</Glow> and <Glow>last ID</Glow> separated by a dash (<Code>-</Code>).</p><br />
    <p>Since the young Elf was just doing silly patterns, you can find the <Glow>invalid IDs</Glow> by looking for any ID which is made only of some sequence of digits repeated twice. So, <Code>55</Code> (<Code>5</Code> twice), <Code>6464</Code> (<Code>64</Code> twice), and <Code>123123</Code> (<Code>123</Code> twice) would all be invalid IDs.</p><br />
    <p>None of the numbers have leading zeroes; <Code>0101</Code> isn't an ID at all. (<Code>101</Code> is a <Glow>valid</Glow> ID that you would ignore.)</p><br />
    <p>Your job is to find all of the invalid IDs that appear in the given ranges. In the above example:</p><br />
    <List>
        <li><Code>11-22</Code> has two invalid IDs, <Code><Glow>11</Glow></Code> and <Code><Glow>22</Glow></Code>.</li>
        <li><Code>95-115</Code> has one invalid ID, <Code><Glow>99</Glow></Code>.</li>
        <li><Code>998-1012</Code> has one invalid ID, <Code><Glow>1010</Glow></Code>.</li>
        <li><Code>1188511880-1188511890</Code> has one invalid ID, <Code><Glow>1188511885</Glow></Code>.</li>
        <li><Code>222220-222224</Code> has one invalid ID, <Code><Glow>222222</Glow></Code>.</li>
        <li><Code>1698522-1698528</Code> contains no invalid IDs.</li>
        <li><Code>446443-446449</Code> has one invalid ID, <Code><Glow>446446</Glow></Code>.</li>
        <li><Code>38593856-38593862</Code> has one invalid ID, <Code><Glow>38593859</Glow></Code>.</li>
        <li>The rest of the ranges contain no invalid IDs.</li>
    </List><br />
    <p>Adding up all the invalid IDs in this example produces <Code><Glow>1227775554</Glow></Code>.</p><br />
    <p><Glow>What do you get if you add up all of the invalid IDs?</Glow></p>
</>);

export const part2Description = (<>
    <p>The clerk quickly discovers that there are still invalid IDs in the ranges in your list. Maybe the young Elf was doing other silly patterns as well?</p><br />
    <p>Now, an ID is invalid if it is made only of some sequence of digits repeated <Glow>at least</Glow> twice. So, <Code>12341234</Code> (<Code>1234</Code> two times), <Code>123123123</Code> (<Code>123</Code> three times), <Code>1212121212</Code> (<Code>12</Code> five times), and <Code>1111111</Code> (<Code>1</Code> seven times) are all invalid IDs.</p><br />
    <p>From the same example as before:</p><br />
    <List>
        <li><Code>11-22</Code> still has two invalid IDs, <Code><Glow>11</Glow></Code> and <Code><Glow>22</Glow></Code>.</li>
        <li><Code>95-115</Code> now has two invalid IDs, <Code><Glow>99</Glow></Code> and <Code><Glow>111</Glow></Code>.</li>
        <li><Code>998-1012</Code> now has two invalid IDs, <Code><Glow>999</Glow></Code> and <Code><Glow>1010</Glow></Code>.</li>
        <li><Code>1188511880-1188511890</Code> still has one invalid ID, <Code><Glow>1188511885</Glow></Code>.</li>
        <li><Code>222220-222224</Code> still has one invalid ID, <Code><Glow>222222</Glow></Code>.</li>
        <li><Code>1698522-1698528</Code> still contains no invalid IDs.</li>
        <li><Code>446443-446449</Code> still has one invalid ID, <Code><Glow>446446</Glow></Code>.</li>
        <li><Code>38593856-38593862</Code> still has one invalid ID, <Code><Glow>38593859</Glow></Code>.</li>
        <li><Code>565653-565659</Code> now has one invalid ID, <Code><Glow>565656</Glow></Code>.</li>
        <li><Code>824824821-824824827</Code> now has one invalid ID, <Code><Glow>824824824</Glow></Code>.</li>
        <li><Code>2121212118-2121212124</Code> now has one invalid ID, <Code><Glow>2121212121</Glow></Code>.</li>
    </List><br />
    <p>Adding up all the invalid IDs in this example produces <Code><Glow>4174379265</Glow></Code>.</p><br />
    <p><Glow>What do you get if you add up all of the invalid IDs using these new rules?</Glow></p>
</>);
