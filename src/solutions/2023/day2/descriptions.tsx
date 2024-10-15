import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import List from '@components/text/List';

export const part1Description = (<>
    <p>You're launched high into the atmosphere! The apex of your trajectory just barely reaches the surface of a large island floating in the sky. You gently land in a fluffy pile of leaves. It's quite cold, but you don't see much snow. An Elf runs over to greet you.</p><br/>
    <p>The Elf explains that you've arrived at <Glow>Snow Island</Glow> and apologizes for the lack of snow. He'll be happy to explain the situation, but it's a bit of a walk, so you have some time. They don't get many visitors up here; would you like to play a game in the meantime?</p><br/>
    <p>As you walk, the Elf shows you a small bag and some cubes which are either red, green, or blue. Each time you play this game, he will hide a secret number of cubes of each color in the bag, and your goal is to figure out information about the number of cubes.</p><br/>
    <p>To get information, once a bag has been loaded with cubes, the Elf will reach into the bag, grab a handful of random cubes, show them to you, and then put them back in the bag. He'll do this a few times per game.</p><br/>
    <p>You play several games and record the information from each game (your puzzle input). Each game is listed with its ID number (like the <Code>11</Code> in <Code>Game 11: ...</Code>) followed by a semicolon-separated list of subsets of cubes that were revealed from the bag (like <Code>3 red, 5 green, 4 blue</Code>).</p><br/>
    <p>For example, the record of a few games might look like this:</p><br/>
    <CodeBlock>
        Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green<br/>
        Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue<br/>
        Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red<br/>
        Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red<br/>
        Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
    </CodeBlock><br/>
    <p>In game 1, three sets of cubes are revealed from the bag (and then put back again). The first set is 3 blue cubes and 4 red cubes; the second set is 1 red cube, 2 green cubes, and 6 blue cubes; the third set is only 2 green cubes.</p><br/>
    <p>The Elf would first like to know which games would have been possible if the bag contained <Glow>only 12 red cubes, 13 green cubes, and 14 blue cubes</Glow>?</p><br/>
    <p>In the example above, games 1, 2, and 5 would have been <Glow>possible</Glow> if the bag had been loaded with that configuration. However, game 3 would have been <Glow>impossible</Glow> because at one point the Elf showed you 20 red cubes at once; similarly, game 4 would also have been <Glow>impossible</Glow> because the Elf showed you 15 blue cubes at once. If you add up the IDs of the games that would have been possible, you get <Code><Glow>8</Glow></Code>.</p><br/>
    <p>Determine which games would have been possible if the bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes. <Glow>What is the sum of the IDs of those games?</Glow></p>
</>);

export const part2Description = (<>
    <p>The Elf says they've stopped producing snow because they aren't getting any <Glow>water</Glow>! He isn't sure why the water stopped; however, he can show you how to get to the water source to check it out for yourself. It's just up ahead!</p><br/>
    <p>As you continue your walk, the Elf poses a second question: in each game you played, what is the <Glow>fewest number of cubes of each color</Glow> that could have been in the bag to make the game possible?</p><br/>
    <p>Again consider the example games from earlier:</p><br/>
    <CodeBlock>
        Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green<br/>
        Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue<br/>
        Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red<br/>
        Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red<br/>
        Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
    </CodeBlock><br/>
    <List>
        <li>In game 1, the game could have been played with as few as 4 red, 2 green, and 6 blue cubes. If any color had even one fewer cube, the game would have been impossible.</li>
        <li>Game 2 could have been played with a minimum of 1 red, 3 green, and 4 blue cubes.</li>
        <li>Game 3 must have been played with at least 20 red, 13 green, and 6 blue cubes.</li>
        <li>Game 4 required at least 14 red, 3 green, and 15 blue cubes.</li>
        <li>Game 5 needed no fewer than 6 red, 3 green, and 2 blue cubes in the bag.</li>
    </List><br/>
    <p>The <Glow>power</Glow> of a set of cubes is equal to the numbers of red, green, and blue cubes multiplied together. The power of the minimum set of cubes in game 1 is <Code>48</Code>. In games 2-5 it was <Code>12</Code>, <Code>1560</Code>, <Code>630</Code>, and <Code>36</Code>, respectively. Adding up these five powers produces the sum <Code><Glow>2286</Glow></Code>.</p><br/>
    <p>For each game, find the minimum set of cubes that must have been present. <Glow>What is the sum of the power of these sets?</Glow></p>
</>);
