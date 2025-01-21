import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';

export const part1Description = (<>
    <p>It's time again for the <Link link='https://adventofcode.com/2015/day/14'>Reindeer Olympics</Link>! This year, the big event is the <Glow>Reindeer Maze</Glow>, where the Reindeer compete for the <Hidden content={`I would say it's like Reindeer Golf, but knowing Reindeer, it's almost certainly nothing like Reindeer Golf.`}><Glow>lowest score</Glow></Hidden>.</p><br />
    <p>You and The Historians arrive to search for the Chief right as the event is about to start. It wouldn't hurt to watch a little, right?</p><br />
    <p>The Reindeer start on the Start Tile (marked <Code>S</Code>) facing <Glow>East</Glow> and need to reach the End Tile (marked <Code>E</Code>). They can move forward one tile at a time (increasing their score by <Code>1</Code> point), but never into a wall (<Code>#</Code>). They can also rotate clockwise or counterclockwise 90 degrees at a time (increasing their score by <Code>1000</Code> points).</p><br />
    <p>To figure out the best place to sit, you start by grabbing a map (your puzzle input) from a nearby kiosk. For example:</p><br />
    <CodeBlock>
        ###############<br />
        #.......#....E#<br />
        #.#.###.#.###.#<br />
        #.....#.#...#.#<br />
        #.###.#####.#.#<br />
        #.#.#.......#.#<br />
        #.#.#####.###.#<br />
        #...........#.#<br />
        ###.#.#####.#.#<br />
        #...#.....#.#.#<br />
        #.#.#.###.#.#.#<br />
        #.....#...#.#.#<br />
        #.###.#.#.#.#.#<br />
        #S..#.....#...#<br />
        ###############
    </CodeBlock><br />
    <p>There are many paths through this maze, but taking any of the best paths would incur a score of only <Code><Glow>7036</Glow></Code>. This can be achieved by taking a total of <Code>36</Code> steps forward and turning 90 degrees a total of <Code>7</Code> times:</p><br />
    <CodeBlock>
        ###############<br />
        #.......#....<Glow>E</Glow>#<br />
        #.#.###.#.###<Glow>^</Glow>#<br />
        #.....#.#...#<Glow>^</Glow>#<br />
        #.###.#####.#<Glow>^</Glow>#<br />
        #.#.#.......#<Glow>^</Glow>#<br />
        #.#.#####.###<Glow>^</Glow>#<br />
        #..<Glow>{'>'}</Glow><Glow>{'>'}</Glow><Glow>{'>'}</Glow><Glow>{'>'}</Glow><Glow>{'>'}</Glow><Glow>{'>'}</Glow><Glow>{'>'}</Glow><Glow>{'>'}</Glow><Glow>v</Glow>#<Glow>^</Glow>#<br />
        ###<Glow>^</Glow>#.#####<Glow>v</Glow>#<Glow>^</Glow>#<br />
        #<Glow>{'>'}</Glow><Glow>{'>'}</Glow><Glow>^</Glow>#.....#<Glow>v</Glow>#<Glow>^</Glow>#<br />
        #<Glow>^</Glow>#.#.###.#<Glow>v</Glow>#<Glow>^</Glow>#<br />
        #<Glow>^</Glow>....#...#<Glow>v</Glow>#<Glow>^</Glow>#<br />
        #<Glow>^</Glow>###.#.#.#<Glow>v</Glow>#<Glow>^</Glow>#<br />
        #S..#.....#<Glow>{'>'}</Glow><Glow>{'>'}</Glow><Glow>^</Glow>#<br />
        ###############
    </CodeBlock><br />
    <p>Here's a second example:</p><br />
    <CodeBlock>
        #################<br />
        #...#...#...#..E#<br />
        #.#.#.#.#.#.#.#.#<br />
        #.#.#.#...#...#.#<br />
        #.#.#.#.###.#.#.#<br />
        #...#.#.#.....#.#<br />
        #.#.#.#.#.#####.#<br />
        #.#...#.#.#.....#<br />
        #.#.#####.#.###.#<br />
        #.#.#.......#...#<br />
        #.#.###.#####.###<br />
        #.#.#...#.....#.#<br />
        #.#.#.#####.###.#<br />
        #.#.#.........#.#<br />
        #.#.#.#########.#<br />
        #S#.............#<br />
        #################
    </CodeBlock><br />
    <p>In this maze, the best paths cost <Code><Glow>11048</Glow></Code> points; following one such path would look like this:</p><br />
    <CodeBlock>
        #################<br />
        #...#...#...#..<Glow>E</Glow>#<br />
        #.#.#.#.#.#.#.#<Glow>^</Glow>#<br />
        #.#.#.#...#...#<Glow>^</Glow>#<br />
        #.#.#.#.###.#.#<Glow>^</Glow>#<br />
        #<Glow>{'>'}</Glow><Glow>{'>'}</Glow><Glow>v</Glow>#.#.#.....#<Glow>^</Glow>#<br />
        #<Glow>^</Glow>#<Glow>v</Glow>#.#.#.#####<Glow>^</Glow>#<br />
        #<Glow>^</Glow>#<Glow>v</Glow>..#.#.#<Glow>{'>'}</Glow><Glow>{'>'}</Glow><Glow>{'>'}</Glow><Glow>{'>'}</Glow><Glow>^</Glow>#<br />
        #<Glow>^</Glow>#<Glow>v</Glow>#####.#<Glow>^</Glow>###.#<br />
        #<Glow>^</Glow>#<Glow>v</Glow>#..<Glow>{'>'}</Glow><Glow>{'>'}</Glow><Glow>{'>'}</Glow><Glow>{'>'}</Glow><Glow>^</Glow>#...#<br />
        #<Glow>^</Glow>#<Glow>v</Glow>###<Glow>^</Glow>#####.###<br />
        #<Glow>^</Glow>#<Glow>v</Glow>#<Glow>{'>'}</Glow><Glow>{'>'}</Glow><Glow>^</Glow>#.....#.#<br />
        #<Glow>^</Glow>#<Glow>v</Glow>#<Glow>^</Glow>#####.###.#<br />
        #<Glow>^</Glow>#<Glow>v</Glow>#<Glow>^</Glow>........#.#<br />
        #<Glow>^</Glow>#<Glow>v</Glow>#<Glow>^</Glow>#########.#<br />
        #S#<Glow>{'>'}</Glow><Glow>{'>'}</Glow><Glow>^</Glow>..........#<br />
        #################
    </CodeBlock><br />
    <p>Note that the path shown above includes one 90 degree turn as the very first move, rotating the Reindeer from facing East to facing North.</p><br />
    <p>Analyze your map carefully. <Glow>What is the lowest score a Reindeer could possibly get?</Glow></p>
</>);

export const part2Description = (<>
    <p>Part 2 description</p>
</>);
