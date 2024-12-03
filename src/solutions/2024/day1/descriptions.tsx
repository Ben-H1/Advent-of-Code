import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import List from '@components/text/List';

export const part1Description = (<>
    <p>The <Glow>Chief Historian</Glow> is always present for the big Christmas sleigh launch, but nobody has seen him in months! Last anyone heard, he was visiting locations that are historically significant to the North Pole; a group of Senior Historians has asked you to accompany them as they check the places they think he was most likely to visit.</p><br />
    <p>As each location is checked, they will mark it on their list with a <Glow color='yellow'>star</Glow>. They figure the Chief Historian <Glow>must</Glow> be in one of the first fifty places they'll look, so in order to save Christmas, you need to help them get <Glow color='yellow'>fifty stars</Glow> on their list before Santa takes off on December 25th.</p><br />
    <p>Collect stars by solving puzzles.  Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first.  Each puzzle grants <Glow color='yellow'>one star</Glow>. Good luck!</p><br />
    <p>You haven't even left yet and the group of Elvish Senior Historians has already hit a problem: their list of locations to check is currently <Glow>empty</Glow>. Eventually, someone decides that the best place to check first would be the Chief Historian's office.</p><br />
    <p>Upon pouring into the office, everyone confirms that the Chief Historian is indeed nowhere to be found. Instead, the Elves discover an assortment of notes and lists of historically significant locations! This seems to be the planning the Chief Historian was doing before he left. Perhaps these notes can be used to determine which locations to search?</p><br />
    <p>Throughout the Chief's office, the historically significant locations are listed not by name but by a unique number called the <Glow>location ID</Glow>. To make sure they don't miss anything, The Historians split into two groups, each searching the office and trying to create their own complete list of location IDs.</p><br />
    <p>There's just one problem: by holding the two lists up <Glow>side by side</Glow> (your puzzle input), it quickly becomes clear that the lists aren't very similar. Maybe you can help The Historians reconcile their lists?</p><br />
    <p>For example:</p><br />
    <CodeBlock>
        3   4<br />
        4   3<br />
        2   5<br />
        1   3<br />
        3   9<br />
        3   3
    </CodeBlock><br />
    <p>Maybe the lists are only off by a small amount! To find out, pair up the numbers and measure how far apart they are. Pair up the <Glow>smallest number in the left list</Glow> with the <Glow>smallest number in the right list</Glow>, then the <Glow>second-smallest left number</Glow> with the <Glow>second-smallest right number</Glow>, and so on.</p><br />
    <p>Within each pair, figure out <Glow>how far apart</Glow> the two numbers are; you'll need to <Glow>add up all of those distances</Glow>. For example, if you pair up a <Code>3</Code> from the left list with a <Code>7</Code> from the right list, the distance apart is <Code>4</Code>; if you pair up a <Code>9</Code> with a <Code>3</Code>, the distance apart is <Code>6</Code>.</p><br />
    <p>In the example list above, the pairs and distances would be as follows:</p><br />
    <List>
        <li>The smallest number in the left list is <Code>1</Code>, and the smallest number in the right list is <Code>3</Code>. The distance between them is <Code><Glow>2</Glow></Code>.</li>
        <li>The second-smallest number in the left list is <Code>2</Code>, and the second-smallest number in the right list is another <Code>3</Code>. The distance between them is <Code><Glow>1</Glow></Code>.</li>
        <li>The third-smallest number in both lists is <Code>3</Code>, so the distance between them is <Code><Glow>0</Glow></Code>.</li>
        <li>The next numbers to pair up are <Code>3</Code> and <Code>4</Code>, a distance of <Code><Glow>1</Glow></Code>.</li>
        <li>The fifth-smallest numbers in each list are <Code>3</Code> and <Code>5</Code>, a distance of <Code><Glow>2</Glow></Code>.</li>
        <li>Finally, the largest number in the left list is <Code>4</Code>, while the largest number in the right list is <Code>9</Code>; these are a distance <Code><Glow>5</Glow></Code> apart.</li>
    </List><br />
    <p>To find the <Glow>total distance</Glow> between the left list and the right list, add up the distances between all of the pairs you found. In the example above, this is <Code>2 + 1 + 0 + 1 + 2 + 5</Code>, a total distance of <Code><Glow>11</Glow></Code>!</p><br />
    <p>Your actual left and right lists contain many location IDs. <Glow>What is the total distance between your lists?</Glow></p>
</>);

export const part2Description = (<>
    <p>Your analysis only confirmed what everyone feared: the two lists of location IDs are indeed very different.</p><br />
    <p>Or are they?</p><br />
    <p>The Historians can't agree on which group made the mistakes <Glow>or</Glow> how to read most of the Chief's handwriting, but in the commotion you notice an interesting detail: <Hidden content='We were THIS close to summoning the Alot of Location IDs!'>a lot</Hidden> of location IDs appear in both lists! Maybe the other numbers aren't location IDs at all but rather misinterpreted handwriting.</p><br />
    <p>This time, you'll need to figure out exactly how often each number from the left list appears in the right list. Calculate a total <Glow>similarity score</Glow> by adding up each number in the left list after multiplying it by the number of times that number appears in the right list.</p><br />
    <p>Here are the same example lists again:</p><br />
    <CodeBlock>
        3   4<br />
        4   3<br />
        2   5<br />
        1   3<br />
        3   9<br />
        3   3
    </CodeBlock><br />
    <p>For these example lists, here is the process of finding the similarity score:</p><br />
    <List>
        <li>The first number in the left list is <Code>3</Code>. It appears in the right list three times, so the similarity score increases by <Code>3 * 3 = <Glow>9</Glow></Code>.</li>
        <li>The second number in the left list is <Code>4</Code>. It appears in the right list once, so the similarity score increases by <Code>4 * 1 = <Glow>4</Glow></Code>.</li>
        <li>The third number in the left list is <Code>2</Code>. It does not appear in the right list, so the similarity score does not increase (<Code>2 * 0 = 0</Code>).</li>
        <li>The fourth number, <Code>1</Code>, also does not appear in the right list.</li>
        <li>The fifth number, <Code>3</Code>, appears in the right list three times; the similarity score increases by <Code><Glow>9</Glow></Code>.</li>
        <li>The last number, <Code>3</Code>, appears in the right list three times; the similarity score again increases by <Code><Glow>9</Glow></Code>.</li>
    </List><br />
    <p>So, for these example lists, the similarity score at the end of this process is <Code><Glow>31</Glow></Code> (<Code>9 + 4 + 0 + 0 + 9 + 9</Code>).</p><br />
    <p>Once again consider your left and right lists. <Glow>What is their similarity score?</Glow></p>
</>);
