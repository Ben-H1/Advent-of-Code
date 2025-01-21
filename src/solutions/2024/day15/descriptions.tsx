import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>You appear back inside your own mini submarine! Each Historian drives their mini submarine in a different direction; maybe the Chief has his own submarine down here somewhere as well?</p><br />
    <p>You look up to see a vast school of <Link link='https://adventofcode.com/2021/day/6'>lanternfish</Link> swimming past you. On closer inspection, they seem quite anxious, so you drive your mini submarine over to see if you can help.</p><br />
    <p>Because lanternfish populations grow rapidly, they need a lot of food, and that food needs to be stored somewhere. That's why these lanternfish have built elaborate warehouse complexes operated by robots!</p><br />
    <p>These lanternfish seem so anxious because they have lost control of the robot that operates one of their most important warehouses! It is currently running <Hidden content='Wesnoth players might solve their Warehouse Woes with a Warehouse Wose!'>amok</Hidden>, pushing around boxes in the warehouse with no regard for lanternfish logistics <Glow>or</Glow> lanternfish inventory management strategies.</p><br />
    <p>Right now, none of the lanternfish are brave enough to swim up to an unpredictable robot so they could shut it off. However, if you could anticipate the robot's movements, maybe they could find a safe option.</p><br />
    <p>The lanternfish already have a map of the warehouse and a list of movements the robot will <Glow>attempt</Glow> to make (your puzzle input). The problem is that the movements will sometimes fail as boxes are shifted around, making the actual movements of the robot difficult to predict.</p><br />
    <p>For example:</p><br />
    <CodeBlock>
        ##########<br />
        #..O..O.O#<br />
        #......O.#<br />
        #.OO..O.O#<br />
        #..O@..O.#<br />
        #O#..O...#<br />
        #O..O..O.#<br />
        #.OO.O.OO#<br />
        #....O...#<br />
        ##########<br />
        <br />
        {'<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^'}<br />
        {'vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v'}<br />
        {'><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<'}<br />
        {'<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^'}<br />
        {'^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><'}<br />
        {'^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^'}<br />
        {'>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^'}<br />
        {'<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>'}<br />
        {'^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>'}<br />
        {'v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^'}
    </CodeBlock><br />
    <p>As the robot (<Code>@</Code>) attempts to move, if there are any boxes (<Code>O</Code>) in the way, the robot will also attempt to push those boxes. However, if this action would cause the robot or a box to move into a wall (<Code>#</Code>), nothing moves instead, including the robot. The initial positions of these are shown on the map at the top of the document the lanternfish gave you.</p><br />
    <p>The rest of the document describes the <Glow>moves</Glow> (<Code>^</Code> for up, <Code>v</Code> for down, <Code>{'<'}</Code> for left, <Code>{'>'}</Code> for right) that the robot will attempt to make, in order. (The moves form a single giant sequence; they are broken into multiple lines just to make copy-pasting easier. Newlines within the move sequence should be ignored.)</p><br />
    <p>Here is a smaller example to get started:</p><br />
    <CodeBlock>
        ########<br />
        #..O.O.#<br />
        ##@.O..#<br />
        #...O..#<br />
        #.#.O..#<br />
        #...O..#<br />
        #......#<br />
        ########<br />
        <br />
        {'<^^>>>vv<v>>v<<'}
    </CodeBlock><br />
    <p>Were the robot to attempt the given sequence of moves, it would push around the boxes as follows:</p><br />
    <CodeBlock>
        Initial state:<br />
        ########<br />
        #..O.O.#<br />
        ##<Glow>@</Glow>.O..#<br />
        #...O..#<br />
        #.#.O..#<br />
        #...O..#<br />
        #......#<br />
        ########<br />
        <br />
        Move {'<'}:<br />
        ########<br />
        #..O.O.#<br />
        ##<Glow>@</Glow>.O..#<br />
        #...O..#<br />
        #.#.O..#<br />
        #...O..#<br />
        #......#<br />
        ########<br />
        <br />
        Move ^:<br />
        ########<br />
        #.<Glow>@</Glow>O.O.#<br />
        ##..O..#<br />
        #...O..#<br />
        #.#.O..#<br />
        #...O..#<br />
        #......#<br />
        ########<br />
        <br />
        Move ^:<br />
        ########<br />
        #.<Glow>@</Glow>O.O.#<br />
        ##..O..#<br />
        #...O..#<br />
        #.#.O..#<br />
        #...O..#<br />
        #......#<br />
        ########<br />
        <br />
        Move {'>'}:<br />
        ########<br />
        #..<Glow>@</Glow>OO.#<br />
        ##..O..#<br />
        #...O..#<br />
        #.#.O..#<br />
        #...O..#<br />
        #......#<br />
        ########<br />
        <br />
        Move {'>'}:<br />
        ########<br />
        #...<Glow>@</Glow>OO#<br />
        ##..O..#<br />
        #...O..#<br />
        #.#.O..#<br />
        #...O..#<br />
        #......#<br />
        ########<br />
        <br />
        Move {'>'}:<br />
        ########<br />
        #...<Glow>@</Glow>OO#<br />
        ##..O..#<br />
        #...O..#<br />
        #.#.O..#<br />
        #...O..#<br />
        #......#<br />
        ########<br />
        <br />
        Move v:<br />
        ########<br />
        #....OO#<br />
        ##..<Glow>@</Glow>..#<br />
        #...O..#<br />
        #.#.O..#<br />
        #...O..#<br />
        #...O..#<br />
        ########<br />
        <br />
        Move v:<br />
        ########<br />
        #....OO#<br />
        ##..<Glow>@</Glow>..#<br />
        #...O..#<br />
        #.#.O..#<br />
        #...O..#<br />
        #...O..#<br />
        ########<br />
        <br />
        Move {'<'}:<br />
        ########<br />
        #....OO#<br />
        ##.<Glow>@</Glow>...#<br />
        #...O..#<br />
        #.#.O..#<br />
        #...O..#<br />
        #...O..#<br />
        ########<br />
        <br />
        Move v:<br />
        ########<br />
        #....OO#<br />
        ##.....#<br />
        #..<Glow>@</Glow>O..#<br />
        #.#.O..#<br />
        #...O..#<br />
        #...O..#<br />
        ########<br />
        <br />
        Move {'>'}:<br />
        ########<br />
        #....OO#<br />
        ##.....#<br />
        #...<Glow>@</Glow>O.#<br />
        #.#.O..#<br />
        #...O..#<br />
        #...O..#<br />
        ########<br />
        <br />
        Move {'>'}:<br />
        ########<br />
        #....OO#<br />
        ##.....#<br />
        #....<Glow>@</Glow>O#<br />
        #.#.O..#<br />
        #...O..#<br />
        #...O..#<br />
        ########<br />
        <br />
        Move v:<br />
        ########<br />
        #....OO#<br />
        ##.....#<br />
        #.....O#<br />
        #.#.O<Glow>@</Glow>.#<br />
        #...O..#<br />
        #...O..#<br />
        ########<br />
        <br />
        Move {'<'}:<br />
        ########<br />
        #....OO#<br />
        ##.....#<br />
        #.....O#<br />
        #.#O<Glow>@</Glow>..#<br />
        #...O..#<br />
        #...O..#<br />
        ########<br />
        <br />
        Move {'<'}:<br />
        ########<br />
        #....OO#<br />
        ##.....#<br />
        #.....O#<br />
        #.#O<Glow>@</Glow>..#<br />
        #...O..#<br />
        #...O..#<br />
        ########
    </CodeBlock><br />
    <p>The larger example has many more moves; after the robot has finished those moves, the warehouse would look like this:</p><br />
    <CodeBlock>
        ##########<br />
        #.O.O.OOO#<br />
        #........#<br />
        #OO......#<br />
        #OO<Glow>@</Glow>.....#<br />
        #O#.....O#<br />
        #O.....OO#<br />
        #O.....OO#<br />
        #OO....OO#<br />
        ##########
    </CodeBlock><br />
    <p>The lanternfish use their own custom Goods Positioning System (GPS for short) to track the locations of the boxes. The <Glow>GPS coordinate</Glow> of a box is equal to 100 times its distance from the top edge of the map plus its distance from the left edge of the map. (This process does not stop at wall tiles; measure all the way to the edges of the map.)</p><br />
    <p>So, the box shown below has a distance of <Code>1</Code> from the top edge of the map and <Code>4</Code> from the left edge of the map, resulting in a GPS coordinate of <Code>100 * 1 + 4 = 104</Code>.</p><br />
    <CodeBlock>
        #######<br />
        #...O..<br />
        #......
    </CodeBlock><br />
    <p>The lanternfish would like to know the <Glow>sum of all boxes' GPS coordinates</Glow> after the robot finishes moving. In the larger example, the sum of all boxes' GPS coordinates is <Code><Glow>10092</Glow></Code>. In the smaller example, the sum is <Code><Glow>2028</Glow></Code>.</p><br />
    <p>Predict the motion of the robot and boxes in the warehouse. After the robot is finished moving, <Glow>what is the sum of all boxes' GPS coordinates?</Glow></p>
</>);

export const part2Description = (<>
    <p>The lanternfish use your information to find a safe moment to swim in and turn off the malfunctioning robot! Just as they start preparing a festival in your honor, reports start coming in that a <Glow>second</Glow> warehouse's robot is <Glow>also</Glow> malfunctioning.</p><br />
    <p>This warehouse's layout is surprisingly similar to the one you just helped. There is one key difference: everything except the robot is <Glow>twice as wide</Glow>! The robot's list of movements doesn't change.</p><br />
    <p>To get the wider warehouse's map, start with your original map and, for each tile, make the following changes:</p><br />
    <List>
        <li>If the tile is <Code>#</Code>, the new map contains <Code>##</Code> instead.</li>
        <li>If the tile is <Code>O</Code>, the new map contains <Code>[]</Code> instead.</li>
        <li>If the tile is <Code>.</Code>, the new map contains <Code>..</Code> instead.</li>
        <li>If the tile is <Code>@</Code>, the new map contains <Code>@.</Code> instead.</li>
    </List><br />
    <p>This will produce a new warehouse map which is twice as wide and with wide boxes that are represented by <Code>[]</Code>. (The robot does not change size.)</p><br />
    <p>The larger example from before would now look like this:</p><br />
    <CodeBlock>
        ####################<br />
        ##....[]....[]..[]##<br />
        ##............[]..##<br />
        ##..[][]....[]..[]##<br />
        ##....[]@.....[]..##<br />
        ##[]##....[]......##<br />
        ##[]....[]....[]..##<br />
        ##..[][]..[]..[][]##<br />
        ##........[]......##<br />
        ####################
    </CodeBlock><br />
    <p>Because boxes are now twice as wide but the robot is still the same size and speed, boxes can be aligned such that they directly push two other boxes at once. For example, consider this situation:</p><br />
    <CodeBlock>
        #######<br />
        #...#.#<br />
        #.....#<br />
        #..OO@#<br />
        #..O..#<br />
        #.....#<br />
        #######<br />
        <br />
        {'<vv<<^^<<^^'}
    </CodeBlock><br />
    <p>After appropriately resizing this map, the robot would push around these boxes as follows:</p><br />
    <CodeBlock>
        Initial state:<br />
        ##############<br />
        ##......##..##<br />
        ##..........##<br />
        ##....[][]<Glow>@</Glow>.##<br />
        ##....[]....##<br />
        ##..........##<br />
        ##############<br />
        <br />
        Move {'<'}:<br />
        ##############<br />
        ##......##..##<br />
        ##..........##<br />
        ##...[][]<Glow>@</Glow>..##<br />
        ##....[]....##<br />
        ##..........##<br />
        ##############<br />
        <br />
        Move v:<br />
        ##############<br />
        ##......##..##<br />
        ##..........##<br />
        ##...[][]...##<br />
        ##....[].<Glow>@</Glow>..##<br />
        ##..........##<br />
        ##############<br />
        <br />
        Move v:<br />
        ##############<br />
        ##......##..##<br />
        ##..........##<br />
        ##...[][]...##<br />
        ##....[]....##<br />
        ##.......<Glow>@</Glow>..##<br />
        ##############<br />
        <br />
        Move {'<'}:<br />
        ##############<br />
        ##......##..##<br />
        ##..........##<br />
        ##...[][]...##<br />
        ##....[]....##<br />
        ##......<Glow>@</Glow>...##<br />
        ##############<br />
        <br />
        Move {'<'}:<br />
        ##############<br />
        ##......##..##<br />
        ##..........##<br />
        ##...[][]...##<br />
        ##....[]....##<br />
        ##.....<Glow>@</Glow>....##<br />
        ##############<br />
        <br />
        Move ^:<br />
        ##############<br />
        ##......##..##<br />
        ##...[][]...##<br />
        ##....[]....##<br />
        ##.....<Glow>@</Glow>....##<br />
        ##..........##<br />
        ##############<br />
        <br />
        Move ^:<br />
        ##############<br />
        ##......##..##<br />
        ##...[][]...##<br />
        ##....[]....##<br />
        ##.....<Glow>@</Glow>....##<br />
        ##..........##<br />
        ##############<br />
        <br />
        Move {'<'}:<br />
        ##############<br />
        ##......##..##<br />
        ##...[][]...##<br />
        ##....[]....##<br />
        ##....<Glow>@</Glow>.....##<br />
        ##..........##<br />
        ##############<br />
        <br />
        Move {'<'}:<br />
        ##############<br />
        ##......##..##<br />
        ##...[][]...##<br />
        ##....[]....##<br />
        ##...<Glow>@</Glow>......##<br />
        ##..........##<br />
        ##############<br />
        <br />
        Move ^:<br />
        ##############<br />
        ##......##..##<br />
        ##...[][]...##<br />
        ##...<Glow>@</Glow>[]....##<br />
        ##..........##<br />
        ##..........##<br />
        ##############<br />
        <br />
        Move ^:<br />
        ##############<br />
        ##...[].##..##<br />
        ##...<Glow>@</Glow>.[]...##<br />
        ##....[]....##<br />
        ##..........##<br />
        ##..........##<br />
        ##############
    </CodeBlock><br />
    <p>This warehouse also uses GPS to locate the boxes. For these larger boxes, distances are measured from the edge of the map to the closest edge of the box in question. So, the box shown below has a distance of <Code>1</Code> from the top edge of the map and <Code>5</Code> from the left edge of the map, resulting in a GPS coordinate of <Code>100 * 1 + 5 = 105</Code>.</p><br />
    <CodeBlock>
        ##########<br />
        ##...[]...<br />
        ##........
    </CodeBlock><br />
    <p>In the scaled-up version of the larger example from above, after the robot has finished all of its moves, the warehouse would look like this:</p><br />
    <CodeBlock>
        ####################<br />
        ##[].......[].[][]##<br />
        ##[]...........[].##<br />
        ##[]........[][][]##<br />
        ##[]......[]....[]##<br />
        ##..##......[]....##<br />
        ##..[]............##<br />
        ##..<Glow>@</Glow>......[].[][]##<br />
        ##......[][]..[]..##<br />
        ####################
    </CodeBlock><br />
    <p>The sum of these boxes' GPS coordinates is <Code><Glow>9021</Glow></Code>.</p><br />
    <p>Predict the motion of the robot and boxes in this new, scaled-up warehouse. <Glow>What is the sum of all boxes' final GPS coordinates?</Glow></p>
</>);
