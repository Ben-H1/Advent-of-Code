import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>The Historians use their fancy <Link link='https://adventofcode.com/2024/day/4'>device</Link> again, this time to whisk you all away to the North Pole prototype suit manufacturing lab... in the year <Link link='https://adventofcode.com/2018/day/5'>1518</Link>! It turns out that having direct access to history is very convenient for a group of historians.</p><br />
    <p>You still have to be careful of time paradoxes, and so it will be important to avoid anyone from 1518 while The Historians search for the Chief. Unfortunately, a single <Glow>guard</Glow> is patrolling this part of the lab.</p><br />
    <p>Maybe you can work out where the guard will go ahead of time so that The Historians can search safely?</p><br />
    <p>You start by making a map (your puzzle input) of the situation. For example:</p><br />
    <CodeBlock>
        ....#.....<br />
        .........#<br />
        ..........<br />
        ..#.......<br />
        .......#..<br />
        ..........<br />
        .#..^.....<br />
        ........#.<br />
        #.........<br />
        ......#...
    </CodeBlock><br />
    <p>The map shows the current position of the guard with <Code>^</Code> (to indicate the guard is currently facing <Glow>up</Glow> from the perspective of the map). Any <Glow>obstructions</Glow> - crates, desks, alchemical reactors, etc. - are shown as <Code>#</Code>.</p><br />
    <p>Lab guards in 1518 follow a very strict patrol protocol which involves repeatedly following these steps:</p><br />
    <List>
        <li>If there is something directly in front of you, turn right 90 degrees.</li>
        <li>Otherwise, take a step forward.</li>
    </List><br />
    <p>Following the above protocol, the guard moves up several times until she reaches an obstacle (in this case, a pile of failed suit prototypes):</p><br />
    <CodeBlock>
        ....#.....<br />
        ....^....#<br />
        ..........<br />
        ..#.......<br />
        .......#..<br />
        ..........<br />
        .#........<br />
        ........#.<br />
        #.........<br />
        ......#...
    </CodeBlock><br />
    <p>Because there is now an obstacle in front of the guard, she turns right before continuing straight in her new facing direction:</p><br />
    <CodeBlock>
        ...#.....<br />
        ........{'>'}#<br />
        ..........<br />
        ..#.......<br />
        .......#..<br />
        ..........<br />
        .#........<br />
        ........#.<br />
        #.........<br />
        ......#...
    </CodeBlock><br />
    <p>Reaching another obstacle (a spool of several <Glow>very</Glow> long polymers), she turns right again and continues downward:</p><br />
    <CodeBlock>
        ....#.....<br />
        .........#<br />
        ..........<br />
        ..#.......<br />
        .......#..<br />
        ..........<br />
        .#......v.<br />
        ........#.<br />
        #.........<br />
        ......#...
    </CodeBlock><br />
    <p>This process continues for a while, but the guard eventually leaves the mapped area (after walking past a tank of universal solvent):</p><br />
    <CodeBlock>
        ....#.....<br />
        .........#<br />
        ..........<br />
        ..#.......<br />
        .......#..<br />
        ..........<br />
        .#........<br />
        ........#.<br />
        #.........<br />
        ......#v..
    </CodeBlock><br />
    <p>By predicting the guard's route, you can determine which specific positions in the lab will be in the patrol path. <Glow>Including the guard's starting position</Glow>, the positions visited by the guard before leaving the area are marked with an <Code>X</Code>:</p><br />
    <CodeBlock>
        ....#.....<br />
        ....XXXXX#<br />
        ....X...X.<br />
        ..#.X...X.<br />
        ..XXXXX#X.<br />
        ..X.X.X.X.<br />
        .#XXXXXXX.<br />
        .XXXXXXX#.<br />
        #XXXXXXX..<br />
        ......#X..
    </CodeBlock><br />
    <p>In this example, the guard will visit <Code><Glow>41</Glow></Code> distinct positions on your map.</p><br />
    <p>Predict the path of the guard. <Glow>How many distinct positions will the guard visit before leaving the mapped area?</Glow></p>
</>);

export const part2Description = (<>
    <p>While The Historians begin working around the guard's patrol route, you borrow their fancy device and step outside the lab. From the safety of a supply closet, you time travel through the last few months and <Link link='https://adventofcode.com/2018/day/4'>record</Link> the nightly status of the lab's guard post on the walls of the closet.</p><br />
    <p>Returning after what seems like only a few seconds to The Historians, they explain that the guard's patrol area is simply too large for them to safely search the lab without getting caught.</p><br />
    <p>Fortunately, they are <Glow>pretty sure</Glow> that adding a single new obstruction <Glow>won't</Glow> cause a time paradox. They'd like to place the new obstruction in such a way that the guard will get <Hidden content='This vulnerability was later fixed by having the guard always turn left instead.'><Glow>stuck in a loop</Glow></Hidden>, making the rest of the lab safe to search.</p><br />
    <p>To have the lowest chance of creating a time paradox, The Historians would like to know <Glow>all</Glow> of the possible positions for such an obstruction. The new obstruction can't be placed at the guard's starting position - the guard is there right now and would notice.</p><br />
    <p>In the above example, there are only <Code><Glow>6</Glow></Code> different positions where a new obstruction would cause the guard to get stuck in a loop. The diagrams of these six situations use <Code>O</Code> to mark the new obstruction, <Code>|</Code> to show a position where the guard moves up/down, <Code>-</Code> to show a position where the guard moves left/right, and <Code>+</Code> to show a position where the guard moves both up/down and left/right.</p><br />
    <p>Option one, put a printing press next to the guard's starting position:</p><br />
    <CodeBlock>
        ....#.....<br />
        ....+---+#<br />
        ....|...|.<br />
        ..#.|...|.<br />
        ....|..#|.<br />
        ....|...|.<br />
        .#.<Glow>O</Glow>^---+.<br />
        ........#.<br />
        #.........<br />
        ......#...
    </CodeBlock><br />
    <p>Option two, put a stack of failed suit prototypes in the bottom right quadrant of the mapped area:</p><br />
    <CodeBlock>
        ....#.....<br />
        ....+---+#<br />
        ....|...|.<br />
        ..#.|...|.<br />
        ..+-+-+#|.<br />
        ..|.|.|.|.<br />
        .#+-^-+-+.<br />
        ......<Glow>O</Glow>.#.<br />
        #.........<br />
        ......#...
    </CodeBlock><br />
    <p>Option three, put a crate of chimney-squeeze prototype fabric next to the standing desk in the bottom right quadrant:</p><br />
    <CodeBlock>
        ....#.....<br />
        ....+---+#<br />
        ....|...|.<br />
        ..#.|...|.<br />
        ..+-+-+#|.<br />
        ..|.|.|.|.<br />
        .#+-^-+-+.<br />
        .+----+<Glow>O</Glow>#.<br />
        #+----+...<br />
        ......#...
    </CodeBlock><br />
    <p>Option four, put an alchemical retroencabulator near the bottom left corner:</p><br />
    <CodeBlock>
        ....#.....<br />
        ....+---+#<br />
        ....|...|.<br />
        ..#.|...|.<br />
        ..+-+-+#|.<br />
        ..|.|.|.|.<br />
        .#+-^-+-+.<br />
        ..|...|.#.<br />
        #<Glow>O</Glow>+---+...<br />
        ......#...
    </CodeBlock><br />
    <p>Option five, put the alchemical retroencabulator a bit to the right instead:</p><br />
    <CodeBlock>
        ....#.....<br />
        ....+---+#<br />
        ....|...|.<br />
        ..#.|...|.<br />
        ..+-+-+#|.<br />
        ..|.|.|.|.<br />
        .#+-^-+-+.<br />
        ....|.|.#.<br />
        #..<Glow>O</Glow>+-+...<br />
        ......#...
    </CodeBlock><br />
    <p>Option six, put a tank of sovereign glue right next to the tank of universal solvent:</p><br />
    <CodeBlock>
        ....#.....<br />
        ....+---+#<br />
        ....|...|.<br />
        ..#.|...|.<br />
        ..+-+-+#|.<br />
        ..|.|.|.|.<br />
        .#+-^-+-+.<br />
        .+----++#.<br />
        #+----++..<br />
        ......#<Glow>O</Glow>..
    </CodeBlock><br />
    <p>It doesn't really matter what you choose to use as an obstacle so long as you and The Historians can put it into position without the guard noticing. The important thing is having enough options that you can find one that minimizes time paradoxes, and in this example, there are <Code><Glow>6</Glow></Code> different positions you could choose.</p><br />
    <p>You need to get the guard stuck in a loop by adding a single new obstruction. <Glow>How many different positions could you choose for this obstruction?</Glow></p>
</>);
