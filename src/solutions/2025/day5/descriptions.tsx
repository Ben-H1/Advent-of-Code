import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import List from '@components/text/List';

export const part1Description = (<>
    <p>As the forklifts break through the wall, the Elves are delighted to discover that there was a cafeteria on the other side after all.</p><br />
    <p>You can hear a commotion coming from the kitchen. "At this rate, we won't have any time left to put the wreaths up in the dining hall!" Resolute in your quest, you investigate.</p><br />
    <p>"If only we hadn't switched to the new inventory management system right before Christmas!" another Elf exclaims. You ask what's going on.</p><br />
    <p>The Elves in the kitchen explain the situation: because of their complicated new inventory management system, they can't figure out which of their ingredients are <Glow>fresh</Glow> and which are <Hidden content='No, this puzzle does not take place on Gleba. Why do you ask?'><Glow>spoiled</Glow></Hidden>. When you ask how it works, they give you a copy of their database (your puzzle input).</p><br />
    <p>The database operates on <Glow>ingredient IDs</Glow>. It consists of a list of <Glow>fresh ingredient ID ranges</Glow>, a blank line, and a list of <Glow>available ingredient IDs</Glow>. For example:</p><br />
    <CodeBlock>
        3-5<br />
        10-14<br />
        16-20<br />
        12-18<br />
        <br />
        1<br />
        5<br />
        8<br />
        11<br />
        17<br />
        32
    </CodeBlock><br />
    <p>The fresh ID ranges are <Glow>inclusive</Glow>: the range <Code>3-5</Code> means that ingredient IDs <Code>3</Code>, <Code>4</Code>, and <Code>5</Code> are all <Glow>fresh</Glow>. The ranges can also <Glow>overlap</Glow>; an ingredient ID is fresh if it is in <Glow>any</Glow> range.</p><br />
    <p>The Elves are trying to determine which of the <Glow>available ingredient IDs</Glow> are <Glow>fresh</Glow>. In this example, this is done as follows:</p><br />
    <List>
        <li>Ingredient ID <Code>1</Code> is spoiled because it does not fall into any range.</li>
        <li>Ingredient ID <Code>5</Code> is <Glow>fresh</Glow> because it falls into range <Code>3-5</Code>.</li>
        <li>Ingredient ID <Code>8</Code> is spoiled.</li>
        <li>Ingredient ID <Code>11</Code> is <Glow>fresh</Glow> because it falls into range <Code>10-14</Code>.</li>
        <li>Ingredient ID <Code>17</Code> is <Glow>fresh</Glow> because it falls into range <Code>16-20</Code> as well as range <Code>12-18</Code>.</li>
        <li>Ingredient ID <Code>32</Code> is spoiled.</li>
    </List><br />
    <p>So, in this example, <Code><Glow>3</Glow></Code> of the available ingredient IDs are fresh.</p><br />
    <p>Process the database file from the new inventory management system. <Glow>How many of the available ingredient IDs are fresh?</Glow></p>
</>);

export const part2Description = (<>
    <p>The Elves start bringing their spoiled inventory to the trash chute at the back of the kitchen.</p><br />
    <p>So that they can stop bugging you when they get new inventory, the Elves would like to know <Glow>all</Glow> of the IDs that the <Glow>fresh ingredient ID ranges</Glow> consider to be <Glow>fresh</Glow>. An ingredient ID is still considered fresh if it is in any range.</p><br />
    <p>Now, the second section of the database (the available ingredient IDs) is irrelevant. Here are the fresh ingredient ID ranges from the above example:</p><br />
    <CodeBlock>
        3-5<br />
        10-14<br />
        16-20<br />
        12-18
    </CodeBlock><br />
    <p>The ingredient IDs that these ranges consider to be fresh are <Code>3</Code>, <Code>4</Code>, <Code>5</Code>, <Code>10</Code>, <Code>11</Code>, <Code>12</Code>, <Code>13</Code>, <Code>14</Code>, <Code>15</Code>, <Code>16</Code>, <Code>17</Code>, <Code>18</Code>, <Code>19</Code>, and <Code>20</Code>. So, in this example, the fresh ingredient ID ranges consider a total of <Code><Glow>14</Glow></Code> ingredient IDs to be fresh.</p><br />
    <p>Process the database file again. <Glow>How many ingredient IDs are considered to be fresh according to the fresh ingredient ID ranges?</Glow></p>
</>);
