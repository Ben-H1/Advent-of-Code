import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import Quiet from '@components/text/Quiet';

export const part1Description = (<>
    <p>Another push of the button leaves you in the familiar hallways of some friendly <Link link='https://adventofcode.com/2021/day/23'>amphipods</Link>! Good thing you each somehow got your own personal mini submarine. The Historians jet away in search of the Chief, mostly by driving directly into walls.</p><br />
    <p>While The Historians quickly figure out how to pilot these things, you notice an amphipod in the corner struggling with his computer. He's trying to make more contiguous free space by compacting all of the files, but his program isn't working; you offer to help.</p><br />
    <p>He shows you the <Glow>disk map</Glow> (your puzzle input) he's already generated. For example:</p><br />
    <CodeBlock>
        2333133121414131402
    </CodeBlock><br />
    <p>The disk map uses a dense format to represent the layout of <Glow>files</Glow> and <Glow>free space</Glow> on the disk. The digits alternate between indicating the length of a file and the length of free space.</p><br />
    <p>So, a disk map like <Code>12345</Code> would represent a one-block file, two blocks of free space, a three-block file, four blocks of free space, and then a five-block file. A disk map like <Code>90909</Code> would represent three nine-block files in a row (with no free space between them).</p><br />
    <p>Each file on disk also has an <Glow>ID number</Glow> based on the order of the files as they appear <Glow>before</Glow> they are rearranged, starting with ID <Code>0</Code>. So, the disk map <Code>12345</Code> has three files: a one-block file with ID <Code>0</Code>, a three-block file with ID <Code>1</Code>, and a five-block file with ID <Code>2</Code>. Using one character for each block where digits are the file ID and <Code>.</Code> is free space, the disk map <Code>12345</Code> represents these individual blocks:</p><br />
    <CodeBlock>
        0..111....22222
    </CodeBlock><br />
    <p>The first example above, <Code>2333133121414131402</Code>, represents these individual blocks:</p><br />
    <CodeBlock>
        00...111...2...333.44.5555.6666.777.888899
    </CodeBlock><br />
    <p>The amphipod would like to <Glow>move file blocks one at a time</Glow> from the end of the disk to the leftmost free space block (until there are no gaps remaining between file blocks). For the disk map <Code>12345</Code>, the process looks like this:</p><br />
    <CodeBlock>
        0..111....22222<br />
        02.111....2222.<br />
        022111....222..<br />
        0221112...22...<br />
        02211122..2....<br />
        022111222......
    </CodeBlock><br />
    <p>The first example requires a few more steps:</p><br />
    <CodeBlock>
        00...111...2...333.44.5555.6666.777.888899<br />
        009..111...2...333.44.5555.6666.777.88889.<br />
        0099.111...2...333.44.5555.6666.777.8888..<br />
        00998111...2...333.44.5555.6666.777.888...<br />
        009981118..2...333.44.5555.6666.777.88....<br />
        0099811188.2...333.44.5555.6666.777.8.....<br />
        009981118882...333.44.5555.6666.777.......<br />
        0099811188827..333.44.5555.6666.77........<br />
        00998111888277.333.44.5555.6666.7.........<br />
        009981118882777333.44.5555.6666...........<br />
        009981118882777333644.5555.666............<br />
        00998111888277733364465555.66.............<br />
        0099811188827773336446555566..............
    </CodeBlock><br />
    <p>The final step of this file-compacting process is to update the <Glow>filesystem checksum</Glow>. To calculate the checksum, add up the result of multiplying each of these blocks' position with the file ID number it contains. The leftmost block is in position <Code>0</Code>. If a block contains free space, skip it instead.</p><br />
    <p>Continuing the first example, the first few blocks' position multiplied by its file ID number are <Code>0 * 0 = 0</Code>, <Code>1 * 0 = 0</Code>, <Code>2 * 9 = 18</Code>, <Code>3 * 9 = 27</Code>, <Code>4 * 8 = 32</Code>, and so on. In this example, the checksum is the sum of these, <Code><Glow>1928</Glow></Code>.</p><br />
    <p><Hidden content='Bonus points if you make a cool animation of this process.'>Compact the amphipod's hard drive</Hidden> using the process he requested. <Glow>What is the resulting filesystem checksum?</Glow> <Quiet>(Be careful copy/pasting the input for this puzzle; it is a single, very long line.)</Quiet></p>
</>);

export const part2Description = (<>
    <p>Upon completion, two things immediately become clear. First, the disk definitely has a lot more contiguous free space, just like the amphipod hoped. Second, the computer is running much more slowly! Maybe introducing all of that <Link link='https://en.wikipedia.org/wiki/File_system_fragmentation'>file system fragmentation</Link> was a bad idea?</p><br />
    <p>The eager amphipod already has a new plan: rather than move individual blocks, he'd like to try compacting the files on his disk by moving <Glow>whole files</Glow> instead.</p><br />
    <p>This time, attempt to move whole files to the leftmost span of free space blocks that could fit the file. Attempt to move each file exactly once in order of <Glow>decreasing file ID number</Glow> starting with the file with the highest file ID number. If there is no span of free space to the left of a file that is large enough to fit the file, the file does not move.</p><br />
    <p>The first example from above now proceeds differently:</p><br />
    <CodeBlock>
    00...111...2...333.44.5555.6666.777.888899<br />
    0099.111...2...333.44.5555.6666.777.8888..<br />
    0099.1117772...333.44.5555.6666.....8888..<br />
    0099.111777244.333....5555.6666.....8888..<br />
    00992111777.44.333....5555.6666.....8888..
    </CodeBlock><br />
    <p>The process of updating the filesystem checksum is the same; now, this example's checksum would be <Code><Glow>2858</Glow></Code>.</p><br />
    <p>Start over, now compacting the amphipod's hard drive using this new method instead. <Glow>What is the resulting filesystem checksum?</Glow></p>
</>);
