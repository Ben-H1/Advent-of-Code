import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';

export const part1Description = (<>
    <p>You're already almost 1.5km (almost a mile) below the surface of the ocean, already so deep that you can't see any sunlight. What you <Glow>can</Glow> see, however, is a giant squid that has attached itself to the outside of your submarine.</p><br />
    <p>Maybe it wants to play <Link link='https://en.wikipedia.org/wiki/Bingo_(American_version)'>bingo</Link>?</p><br />
    <p>Bingo is played on a set of boards each consisting of a 5x5 grid of numbers. Numbers are chosen at random, and the chosen number is <Glow>marked</Glow> on all boards on which it appears. (Numbers may not appear on all boards.) If all numbers in any row or any column of a board are marked, that board <Glow>wins</Glow>. (Diagonals don't count.)</p><br />
    <p>The submarine has a <Glow>bingo subsystem</Glow> to help passengers (currently, you and the giant squid) pass the time. It automatically generates a random order in which to draw numbers and a random set of boards (your puzzle input). For example:</p><br />
    <CodeBlock>
        7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1<br />
        <br />
        22 13 17 11  0<br />
        &nbsp;8  2 23  4 24<br />
        21  9 14 16  7<br />
        &nbsp;6 10  3 18  5<br />
        &nbsp;1 12 20 15 19<br />
        <br />
        &nbsp;3 15  0  2 22<br />
        &nbsp;9 18 13 17  5<br />
        19  8  7 25 23<br />
        20 11 10 24  4<br />
        14 21 16 12  6<br />
        <br />
        14 21 17 24  4<br />
        10 16 15  9 19<br />
        18  8 23 26 20<br />
        22 11 13  6  5<br />
        &nbsp;2  0 12  3  7
    </CodeBlock><br />
    <p>After the first five numbers are drawn (<Code>7</Code>, <Code>4</Code>, <Code>9</Code>, <Code>5</Code>, and <Code>11</Code>), there are no winners, but the boards are marked as follows (shown here adjacent to each other to save space):</p><br />
    <CodeBlock>
        22 13 17 <Glow>11</Glow>  0         3 15  0  2 22        14 21 17 24  <Glow>4</Glow><br />
        &nbsp;8  2 23  <Glow>4</Glow> 24         <Glow>9</Glow> 18 13 17  <Glow>5</Glow>        10 16 15  <Glow>9</Glow> 19<br />
        21  <Glow>9</Glow> 14 16  <Glow>7</Glow>        19  8  <Glow>7</Glow> 25 23        18  8 23 26 20<br />
        &nbsp;6 10  3 18  <Glow>5</Glow>        20 <Glow>11</Glow> 10 24  <Glow>4</Glow>        22 <Glow>11</Glow> 13  6  <Glow>5</Glow><br />
        &nbsp;1 12 20 15 19        14 21 16 12  6         2  0 12  3  <Glow>7</Glow>
    </CodeBlock><br />
    <p>After the next six numbers are drawn (<Code>17</Code>, <Code>23</Code>, <Code>2</Code>, <Code>0</Code>, <Code>14</Code>, and <Code>21</Code>), there are still no winners:</p><br />
    <CodeBlock>
        22 13 <Glow>17</Glow> <Glow>11</Glow>  <Glow>0</Glow>         3 15  <Glow>0</Glow>  <Glow>2</Glow> 22        <Glow>14</Glow> <Glow>21</Glow> <Glow>17</Glow> 24  <Glow>4</Glow><br />
        &nbsp;8  <Glow>2</Glow> <Glow>23</Glow>  <Glow>4</Glow> 24         <Glow>9</Glow> 18 13 <Glow>17</Glow>  <Glow>5</Glow>        10 16 15  <Glow>9</Glow> 19<br />
        <Glow>21</Glow>  <Glow>9</Glow> <Glow>14</Glow> 16  <Glow>7</Glow>        19  8  <Glow>7</Glow> 25 <Glow>23</Glow>        18  8 <Glow>23</Glow> 26 20<br />
        &nbsp;6 10  3 18  <Glow>5</Glow>        20 <Glow>11</Glow> 10 24  <Glow>4</Glow>        22 <Glow>11</Glow> 13  6  <Glow>5</Glow><br />
        &nbsp;1 12 20 15 19        <Glow>14</Glow> <Glow>21</Glow> 16 12  6         <Glow>2</Glow>  <Glow>0</Glow> 12  3  <Glow>7</Glow>
    </CodeBlock><br />
    <p>Finally, <Code>24</Code> is drawn:</p><br />
    <CodeBlock>
        22 13 <Glow>17</Glow> <Glow>11</Glow>  <Glow>0</Glow>         3 15  <Glow>0</Glow>  <Glow>2</Glow> 22        <Glow>14</Glow> <Glow>21</Glow> <Glow>17</Glow> <Glow>24</Glow>  <Glow>4</Glow><br />
        &nbsp;8  <Glow>2</Glow> <Glow>23</Glow>  <Glow>4</Glow> <Glow>24</Glow>         <Glow>9</Glow> 18 13 <Glow>17</Glow>  <Glow>5</Glow>        10 16 15  <Glow>9</Glow> 19<br />
        <Glow>21</Glow>  <Glow>9</Glow> <Glow>14</Glow> 16  <Glow>7</Glow>        19  8  <Glow>7</Glow> 25 <Glow>23</Glow>        18  8 <Glow>23</Glow> 26 20<br />
        &nbsp;6 10  3 18  <Glow>5</Glow>        20 <Glow>11</Glow> 10 <Glow>24</Glow>  <Glow>4</Glow>        22 <Glow>11</Glow> 13  6  <Glow>5</Glow><br />
        &nbsp;1 12 20 15 19        <Glow>14</Glow> <Glow>21</Glow> 16 12  6         <Glow>2</Glow>  <Glow>0</Glow> 12  3  <Glow>7</Glow>
    </CodeBlock><br />
    <p>At this point, the third board <Glow>wins</Glow> because it has at least one complete row or column of marked numbers (in this case, the entire top row is marked: <Code><Glow>14 21 17 24 4</Glow></Code>).</p><br />
    <p>The <Glow>score</Glow> of the winning board can now be calculated. Start by finding the <Glow>sum of all unmarked numbers</Glow> on that board; in this case, the sum is <Code>188</Code>. Then, multiply that sum by <Glow>the number that was just called</Glow> when the board won, <Code>24</Code>, to get the final score, <Code>188 * 24 = <Glow>4512</Glow></Code>.</p><br />
    <p>To guarantee victory against the giant squid, figure out which board will win first. <Glow>What will your final score be if you choose that board?</Glow></p>
</>);

export const part2Description = (<>
    <p>On the other hand, it might be wise to try a different strategy: <Hidden content={`That's 'cuz a submarine don't pull things' antennas out of their sockets when they lose. Giant squid are known to do that.`}>let the giant squid win</Hidden>.</p><br />
    <p>You aren't sure how many bingo boards a giant squid could play at once, so rather than waste time counting its arms, the safe thing to do is to <Glow>figure out which board will win last</Glow> and choose that one. That way, no matter which boards it picks, it will win for sure.</p><br />
    <p>In the above example, the second board is the last to win, which happens after <Code>13</Code> is eventually called and its middle column is completely marked. If you were to keep playing until this point, the second board would have a sum of unmarked numbers equal to <Code>148</Code> for a final score of <Code>148 * 13 = <Glow>1924</Glow></Code>.</p><br />
    <p>Figure out which board will win last. <Glow>Once it wins, what would its final score be?</Glow></p>
</>);
