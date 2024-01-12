import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Link from '@components/text/Link';
import List from '@components/text/List';

const part1Description = (<>
    <p>The preparations are finally complete; you and the Elves leave camp on foot and begin to make your way toward the <Glow color='yellow'>star</Glow> fruit grove.</p><br/>
    <p>As you move through the dense undergrowth, one of the Elves gives you a handheld <Glow>device</Glow>. He says that it has many fancy features, but the most important one to set up right now is the <Glow>communication system</Glow>.</p><br/>
    <p>However, because he's heard you have <Link link='https://adventofcode.com/2016/day/6'>significant</Link> <Link link='https://adventofcode.com/2016/day/25'>experience</Link> <Link link='https://adventofcode.com/2019/day/7'>dealing</Link> <Link link='https://adventofcode.com/2019/day/9'>with</Link> <Link link='https://adventofcode.com/2019/day/16'>signal-based</Link> <Link link='https://adventofcode.com/2021/day/25'>systems</Link>, he convinced the other Elves that it would be okay to give you their one malfunctioning device - surely you'll have no problem fixing it.</p><br/>
    <p>As if inspired by comedic timing, the device emits a few colorful sparks.</p><br/>
    <p>To be able to communicate with the Elves, the device needs to <Glow>lock on to their signal</Glow>. The signal is a series of seemingly-random characters that the device receives one at a time.</p><br/>
    <p>To fix the communication system, you need to add a subroutine to the device that detects a <Glow>start-of-packet marker</Glow> in the datastream. In the protocol being used by the Elves, the start of a packet is indicated by a sequence of <Glow>four characters that are all different</Glow>.</p><br/>
    <p>The device will send your subroutine a datastream buffer (your puzzle input); your subroutine needs to identify the first position where the four most recently received characters were all different. Specifically, it needs to report the number of characters from the beginning of the buffer to the end of the first such four-character marker.</p><br/>
    <p>For example, suppose you receive the following datastream buffer:</p><br/>
    <CodeBlock>
        mjqjpqmgbljsphdztnvjfqwrcgsmlb
    </CodeBlock><br/>
    <p>After the first three characters (<Code>mjq</Code>) have been received, there haven't been enough characters received yet to find the marker. The first time a marker could occur is after the fourth character is received, making the most recent four characters <Code>mjqj</Code>. Because <Code>j</Code> is repeated, this isn't a marker.</p><br/>
    <p>The first time a marker appears is after the <Glow>seventh</Glow> character arrives. Once it does, the last four characters received are <Code>jpqm</Code>, which are all different. In this case, your subroutine should report the value <Code><Glow>7</Glow></Code>, because the first start-of-packet marker is complete after 7 characters have been processed.</p><br/>
    <p>Here are a few more examples:</p><br/>
    <List>
        <li><Code>bvwbjplbgvbhsrlpgdmjqwftvncz</Code>: first marker after character <Code><Glow>5</Glow></Code></li>
        <li><Code>nppdvjthqldpwncqszvftbrmjlhg</Code>: first marker after character <Code><Glow>6</Glow></Code></li>
        <li><Code>nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg</Code>: first marker after character <Code><Glow>10</Glow></Code></li>
        <li><Code>zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw</Code>: first marker after character <Code><Glow>11</Glow></Code></li>
    </List><br/>
    <p><Glow>How many characters need to be processed before the first start-of-packet marker is detected?</Glow></p>
</>);

const part2Description = (<>
    <p>Your device's communication system is correctly detecting packets, but still isn't working. It looks like it also needs to look for <Glow>messages</Glow>.</p><br/>
    <p>A <Glow>start-of-message marker</Glow> is just like a start-of-packet marker, except it consists of <Glow>14 distinct characters</Glow> rather than 4.</p><br/>
    <p>Here are the first positions of start-of-message markers for all of the above examples:</p><br/>
    <List>
        <li><Code>mjqjpqmgbljsphdztnvjfqwrcgsmlb</Code>: first marker after character <Code><Glow>19</Glow></Code></li>
        <li><Code>bvwbjplbgvbhsrlpgdmjqwftvncz</Code>: first marker after character <Code><Glow>23</Glow></Code></li>
        <li><Code>nppdvjthqldpwncqszvftbrmjlhg</Code>: first marker after character <Code><Glow>23</Glow></Code></li>
        <li><Code>nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg</Code>: first marker after character <Code><Glow>29</Glow></Code></li>
        <li><Code>zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw</Code>: first marker after character <Code><Glow>26</Glow></Code></li>
    </List><br/>
    <p><Glow>How many characters need to be processed before the first start-of-message marker is detected?</Glow></p>
</>);

export const descriptions = {
    part1Description,
    part2Description
};
