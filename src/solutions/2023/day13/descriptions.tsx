import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';

export const part1Description = (<>
    <p>With your help, the hot springs team locates an appropriate spring which launches you neatly and precisely up to the edge of <Glow>Lava Island</Glow>.</p><br/>
    <p>There's just one problem: you don't see any <Glow>lava</Glow>.</p><br/>
    <p>You <Glow>do</Glow> see a lot of ash and igneous rock; there are even what look like gray mountains scattered around. After a while, you make your way to a nearby cluster of mountains only to discover that the valley between them is completely full of large <Glow>mirrors</Glow>. Most of the mirrors seem to be aligned in a consistent way; perhaps you should head in that direction?</p><br/>
    <p>As you move through the valley of mirrors, you find that several of them have fallen from the large metal frames keeping them in place. The mirrors are extremely flat and shiny, and many of the fallen mirrors have lodged into the ash at strange angles. Because the terrain is all one color, it's hard to tell where it's safe to walk or where you're about to run into a mirror.</p><br/>
    <p>You note down the patterns of ash (<Code>.</Code>) and rocks (<Code>#</Code>) that you see as you walk (your puzzle input); perhaps by carefully analyzing these patterns, you can figure out where the mirrors are!</p><br/>
    <p>For example:</p><br/>
    <CodeBlock>
        #.##..##.<br/>
        ..#.##.#.<br/>
        ##......#<br/>
        ##......#<br/>
        ..#.##.#.<br/>
        ..##..##.<br/>
        #.#.##.#.<br/>
        <br/>
        #...##..#<br/>
        #....#..#<br/>
        ..##..###<br/>
        #####.##.<br/>
        #####.##.<br/>
        ..##..###<br/>
        #....#..#
    </CodeBlock><br/>
    <p>To find the reflection in each pattern, you need to find a perfect reflection across either a horizontal line between two rows or across a vertical line between two columns.</p><br/>
    <p>In the first pattern, the reflection is across a vertical line between two columns; arrows on each of the two columns point at the line between the columns:</p><br/>
    <CodeBlock>
        123456789<br/>
        &nbsp;   {'>'}{'<'}<br/>
        #.##..##.<br/>
        ..#.##.#.<br/>
        ##......#<br/>
        ##......#<br/>
        ..#.##.#.<br/>
        ..##..##.<br/>
        #.#.##.#.<br/>
        &nbsp;   {'>'}{'<'}<br/>
        123456789
    </CodeBlock><br/>
    <p>In this pattern, the line of reflection is the vertical line between columns 5 and 6. Because the vertical line is not perfectly in the middle of the pattern, part of the pattern (column 1) has nowhere to reflect onto and can be ignored; every other column has a reflected column within the pattern and must match exactly: column 2 matches column 9, column 3 matches 8, 4 matches 7, and 5 matches 6.</p><br/>
    <p>The second pattern reflects across a horizontal line instead:</p><br/>
    <CodeBlock>
        1 #...##..# 1<br/>
        2 #....#..# 2<br/>
        3 ..##..### 3<br/>
        4v#####.##.v4<br/>
        5^#####.##.^5<br/>
        6 ..##..### 6<br/>
        7 #....#..# 7
    </CodeBlock><br/>
    <p>This pattern reflects across the horizontal line between rows 4 and 5. Row 1 would reflect with a hypothetical row 8, but since that's not in the pattern, row 1 doesn't need to match anything. The remaining rows match: row 2 matches row 7, row 3 matches row 6, and row 4 matches row 5.</p><br/>
    <p>To summarize your pattern notes, add up <Glow>the number of columns</Glow> to the left of each vertical line of reflection; to that, also add <Glow>100 multiplied by the number of rows</Glow> above each horizontal line of reflection. In the above example, the first pattern's vertical line has <Code>5</Code> columns to its left and the second pattern's horizontal line has <Code>4</Code> rows above it, a total of <Code><Glow>405</Glow></Code>.</p><br/>
    <p>Find the line of reflection in each of the patterns in your notes. <Glow>What number do you get after summarizing all of your notes?</Glow></p>
</>);

export const part2Description = (<>
    <p>You resume walking through the valley of mirrors and - <Glow>SMACK!</Glow> - run directly into one. Hopefully <Hidden content='Sorry, Nobody saw that.'>nobody</Hidden> was watching, because that must have been pretty embarrassing.</p><br/>
    <p>Upon closer inspection, you discover that every mirror has exactly one <Glow>smudge</Glow>: exactly one <Code>.</Code> or <Code>#</Code> should be the opposite type.</p><br/>
    <p>In each pattern, you'll need to locate and fix the smudge that causes a <Glow>different reflection line</Glow> to be valid. (The old reflection line won't necessarily continue being valid after the smudge is fixed.)</p><br/>
    <p>Here's the above example again:</p><br/>
    <CodeBlock>
        #.##..##.<br/>
        ..#.##.#.<br/>
        ##......#<br/>
        ##......#<br/>
        ..#.##.#.<br/>
        ..##..##.<br/>
        #.#.##.#.<br/>
        <br/>
        #...##..#<br/>
        #....#..#<br/>
        ..##..###<br/>
        #####.##.<br/>
        #####.##.<br/>
        ..##..###<br/>
        #....#..#
    </CodeBlock><br/>
    <p>The first pattern's smudge is in the top-left corner. If the top-left <Code>#</Code> were instead <Code>.</Code>, it would have a different, horizontal line of reflection:</p><br/>
    <CodeBlock>
        1 ..##..##. 1<br/>
        2 ..#.##.#. 2<br/>
        3v##......#v3<br/>
        4^##......#^4<br/>
        5 ..#.##.#. 5<br/>
        6 ..##..##. 6<br/>
        7 #.#.##.#. 7
    </CodeBlock><br/>
    <p>With the smudge in the top-left corner repaired, a new horizontal line of reflection between rows 3 and 4 now exists. Row 7 has no corresponding reflected row and can be ignored, but every other row matches exactly: row 1 matches row 6, row 2 matches row 5, and row 3 matches row 4.</p><br/>
    <p>In the second pattern, the smudge can be fixed by changing the fifth symbol on row 2 from <Code>.</Code> to <Code>#</Code>:</p><br/>
    <CodeBlock>
        1v#...##..#v1<br/>
        2^#...##..#^2<br/>
        3 ..##..### 3<br/>
        4 #####.##. 4<br/>
        5 #####.##. 5<br/>
        6 ..##..### 6<br/>
        7 #....#..# 7
    </CodeBlock><br/>
    <p>Now, the pattern has a different horizontal line of reflection between rows 1 and 2.</p><br/>
    <p>Summarize your notes as before, but instead use the new different reflection lines. In this example, the first pattern's new horizontal line has 3 rows above it and the second pattern's new horizontal line has 1 row above it, summarizing to the value <Code><Glow>400</Glow></Code>.</p><br/>
    <p>In each pattern, fix the smudge and find the different line of reflection. <Glow>What number do you get after summarizing the new reflection line in each pattern in your notes?</Glow></p>
</>);
