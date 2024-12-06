import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';

export const part1Description = (<>
    <p>"Looks like the Chief's not here. Next!" One of The Historians pulls out a device and pushes the only button on it. After a brief flash, you recognize the interior of the <Link link='https://adventofcode.com/2019/day/10'>Ceres monitoring station</Link>!</p><br />
    <p>As the search for the Chief continues, a small Elf who lives on the station tugs on your shirt; she'd like to know if you could help her with her <Glow>word search</Glow> (your puzzle input). She only has to find one word: <Code>XMAS</Code>.</p><br />
    <p>This word search allows words to be horizontal, vertical, diagonal, written backwards, or even overlapping other words. It's a little unusual, though, as you don't merely need to find one instance of <Code>XMAS</Code> - you need to find <Glow>all of them</Glow>. Here are a few ways <Code>XMAS</Code> might appear, where irrelevant characters have been replaced with <Code>.</Code>:</p><br />
    <CodeBlock>
        ..X...<br />
        .SAMX.<br />
        .A..A.<br />
        XMAS.S<br />
        .X....
    </CodeBlock><br />
    <p>The actual word search will be full of letters instead. For example:</p><br />
    <CodeBlock>
        MMMSXXMASM<br />
        MSAMXMSMSA<br />
        AMXSXMAAMM<br />
        MSAMASMSMX<br />
        XMASAMXAMM<br />
        XXAMMXXAMA<br />
        SMSMSASXSS<br />
        SAXAMASAAA<br />
        MAMMMXMMMM<br />
        MXMXAXMASX
    </CodeBlock><br />
    <p>In this word search, <Code>XMAS</Code> occurs a total of <Code><Glow>18</Glow></Code> times; here's the same word search again, but where letters not involved in any <Code>XMAS</Code> have been replaced with <Code>.</Code>:</p><br />
    <CodeBlock>
        ....XXMAS.<br />
        .SAMXMS...<br />
        ...S..A...<br />
        ..A.A.MS.X<br />
        XMASAMX.MM<br />
        X.....XA.A<br />
        S.S.S.S.SS<br />
        .A.A.A.A.A<br />
        ..M.M.M.MM<br />
        .X.X.XMASX
    </CodeBlock><br />
    <p>Take a look at the little Elf's word search. <Glow>How many times does</Glow> <Code><Glow>XMAS</Glow></Code> <Glow>appear?</Glow></p>
</>);

export const part2Description = (<>
    <p>The Elf looks quizzically at you. Did you misunderstand the assignment?</p><br />
    <p>Looking for the instructions, you flip over the word search to find that this isn't actually an <Code><Glow>XMAS</Glow></Code> puzzle; it's an <Hidden content='This part originally involved searching for something else, but this joke was too dumb to pass up.'><Code><Glow>X-MAS</Glow></Code></Hidden> puzzle in which you're supposed to find two <Code>MAS</Code> in the shape of an <Code>X</Code>. One way to achieve that is like this:</p><br />
    <CodeBlock>
        M.S<br />
        .A.<br />
        M.S
    </CodeBlock><br />
    <p>Irrelevant characters have again been replaced with <Code>.</Code> in the above diagram. Within the <Code>X</Code>, each <Code>MAS</Code> can be written forwards or backwards.</p><br />
    <p>Here's the same example from before, but this time all of the <Code>X-MAS</Code>es have been kept instead:</p><br />
    <CodeBlock>
        .M.S......<br />
        ..A..MSMS.<br />
        .M.S.MAA..<br />
        ..A.ASMSM.<br />
        .M.S.M....<br />
        ..........<br />
        S.S.S.S.S.<br />
        .A.A.A.A..<br />
        M.M.M.M.M.<br />
        ..........
    </CodeBlock><br />
    <p>In this example, an <Code>X-MAS</Code> appears <Code><Glow>9</Glow></Code> times.</p><br />
    <p>Flip the word search from the instructions back over to the word search side and try again. <Glow>How many times does an</Glow> <Code><Glow>X-MAS</Glow></Code> <Glow>appear?</Glow></p>
</>);
