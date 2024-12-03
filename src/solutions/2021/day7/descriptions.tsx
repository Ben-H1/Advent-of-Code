import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>A giant <Link link='https://en.wikipedia.org/wiki/Sperm_whale'>whale</Link> has decided your submarine is its next meal, and it's much faster than you are. There's nowhere to run!</p><br />
    <p>Suddenly, a swarm of crabs (each in its own tiny submarine - it's too deep for them otherwise) zooms in to rescue you! They seem to be preparing to blast a hole in the ocean floor; sensors indicate a <Glow>massive underground cave system</Glow> just beyond where they're aiming!</p><br />
    <p>The crab submarines all need to be aligned before they'll have enough power to blast a large enough hole for your submarine to get through. However, it doesn't look like they'll be aligned before the whale catches you! Maybe you can help?</p><br />
    <p>There's one major catch - crab submarines can only move horizontally.</p><br />
    <p>You quickly make a list of <Glow>the horizontal position of each crab</Glow> (your puzzle input). Crab submarines have limited fuel, so you need to find a way to make all of their horizontal positions match while requiring them to spend as little fuel as possible.</p><br />
    <p>For example, consider the following horizontal positions:</p><br />
    <CodeBlock>
        16,1,2,0,4,2,7,1,2,14
    </CodeBlock><br />
    <p>This means there's a crab with horizontal position <Code>16</Code>, a crab with horizontal position <Code>1</Code>, and so on.</p><br />
    <p>Each change of 1 step in horizontal position of a single crab costs 1 fuel. You could choose any horizontal position to align them all on, but the one that costs the least fuel is horizontal position <Code>2</Code>:</p><br />
    <List>
        <li>Move from <Code>16</Code> to <Code>2</Code>: <Code>14</Code> fuel</li>
        <li>Move from <Code>1</Code> to <Code>2</Code>: <Code>1</Code> fuel</li>
        <li>Move from <Code>2</Code> to <Code>2</Code>: <Code>0</Code> fuel</li>
        <li>Move from <Code>0</Code> to <Code>2</Code>: <Code>2</Code> fuel</li>
        <li>Move from <Code>4</Code> to <Code>2</Code>: <Code>2</Code> fuel</li>
        <li>Move from <Code>2</Code> to <Code>2</Code>: <Code>0</Code> fuel</li>
        <li>Move from <Code>7</Code> to <Code>2</Code>: <Code>5</Code> fuel</li>
        <li>Move from <Code>1</Code> to <Code>2</Code>: <Code>1</Code> fuel</li>
        <li>Move from <Code>2</Code> to <Code>2</Code>: <Code>0</Code> fuel</li>
        <li>Move from <Code>14</Code> to <Code>2</Code>: <Code>12</Code> fuel</li>
    </List><br />
    <p>This costs a total of <Code><Glow>37</Glow></Code> fuel. This is the cheapest possible outcome; more expensive outcomes include aligning at position <Code>1</Code> (<Code>41</Code> fuel), position <Code>3</Code> (<Code>39</Code> fuel), or position <Code>10</Code> (<Code>71</Code> fuel).</p><br />
    <p>Determine the horizontal position that the crabs can align to using the least fuel possible. <Glow>How much fuel must they spend to align to that position?</Glow></p>
</>);

export const part2Description = (<>
    <p>The crabs don't seem interested in your proposed solution. Perhaps you misunderstand crab engineering?</p><br />
    <p>As it turns out, crab submarine engines <Hidden content='This appears to be due to the modial interaction of magneto-reluctance and capacitive duractance.'>don't burn fuel at a constant rate</Hidden>. Instead, each change of 1 step in horizontal position costs 1 more unit of fuel than the last: the first step costs <Code>1</Code>, the second step costs <Code>2</Code>, the third step costs <Code>3</Code>, and so on.</p><br />
    <p>As each crab moves, moving further becomes more expensive. This changes the best horizontal position to align them all on; in the example above, this becomes <Code>5</Code>:</p><br />
    <List>
        <li>Move from <Code>16</Code> to <Code>5</Code>: <Code>66</Code> fuel</li>
        <li>Move from <Code>1</Code> to <Code>5</Code>: <Code>10</Code> fuel</li>
        <li>Move from <Code>2</Code> to <Code>5</Code>: <Code>6</Code> fuel</li>
        <li>Move from <Code>0</Code> to <Code>5</Code>: <Code>15</Code> fuel</li>
        <li>Move from <Code>4</Code> to <Code>5</Code>: <Code>1</Code> fuel</li>
        <li>Move from <Code>2</Code> to <Code>5</Code>: <Code>6</Code> fuel</li>
        <li>Move from <Code>7</Code> to <Code>5</Code>: <Code>3</Code> fuel</li>
        <li>Move from <Code>1</Code> to <Code>5</Code>: <Code>10</Code> fuel</li>
        <li>Move from <Code>2</Code> to <Code>5</Code>: <Code>6</Code> fuel</li>
        <li>Move from <Code>14</Code> to <Code>5</Code>: <Code>45</Code> fuel</li>
    </List><br />
    <p>This costs a total of <Code><Glow>168</Glow></Code> fuel. This is the new cheapest possible outcome; the old alignment position (<Code>2</Code>) now costs <Code>206</Code> fuel instead.</p><br />
    <p>Determine the horizontal position that the crabs can align to using the least fuel possible so they can make you an escape route! <Glow>How much fuel must they spend to align to that position?</Glow></p>
</>);
