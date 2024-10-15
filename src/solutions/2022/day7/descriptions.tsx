import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import List from '@components/text/List';

export const part1Description = (<>
    <p>You can hear birds chirping and raindrops hitting leaves as the expedition proceeds. Occasionally, you can even hear much louder sounds in the distance; how big do the animals get out here, anyway?</p><br/>
    <p>The device the Elves gave you has problems with more than just its communication system. You try to run a system update:</p><br/>
    <CodeBlock>
        $ system-update --please --pretty-please-with-sugar-on-top<br/>
        Error: No space left on device
    </CodeBlock><br/>
    <p>Perhaps you can delete some files to make space for the update?</p><br/>
    <p>You browse around the filesystem to assess the situation and save the resulting terminal output (your puzzle input). For example:</p><br/>
    <CodeBlock>
        $ cd /<br/>
        $ ls<br/>
        dir a<br/>
        14848514 b.txt<br/>
        8504156 c.dat<br/>
        dir d<br/>
        $ cd a<br/>
        $ ls<br/>
        dir e<br/>
        29116 f<br/>
        2557 g<br/>
        62596 h.lst<br/>
        $ cd e<br/>
        $ ls<br/>
        584 i<br/>
        $ cd ..<br/>
        $ cd ..<br/>
        $ cd d<br/>
        $ ls<br/>
        4060174 j<br/>
        8033020 d.log<br/>
        5626152 d.ext<br/>
        7214296 k
    </CodeBlock><br/>
    <p>The filesystem consists of a tree of files (plain data) and directories (which can contain other directories or files). The outermost directory is called <Code>/</Code>. You can navigate around the filesystem, moving into or out of directories and listing the contents of the directory you're currently in.</p><br/>
    <p>Within the terminal output, lines that begin with <Code>$</Code> are <Glow>commands you executed</Glow>, very much like some modern computers:</p><br/>
    <List>
        <li><Code>cd</Code> means <Glow>change directory</Glow>. This changes which directory is the current directory, but the specific result depends on the argument:</li>
        <List>
            <li><Code>cd x</Code> moves <Glow>in</Glow> one level: it looks in the current directory for the directory named <Code>x</Code> and makes it the current directory.</li>
            <li><Code>cd ..</Code> moves <Glow>out</Glow> one level: it finds the directory that contains the current directory, then makes that directory the current directory.</li>
            <li><Code>cd /</Code> switches the current directory to the outermost directory, <Code>/</Code>.</li>
        </List>
        <li><Code>ls</Code> means <Glow>list</Glow>. It prints out all of the files and directories immediately contained by the current directory: </li>
        <List>
            <li><Code>123 abc</Code> means that the current directory contains a file named <Code>abc</Code> with size <Code>123</Code>.</li>
            <li><Code>dir xyz</Code> means that the current directory contains a directory named <Code>xyz</Code>.</li>
        </List>
    </List><br/>
    <p>Given the commands and output in the example above, you can determine that the filesystem looks visually like this:</p><br/>
    <CodeBlock>
        - / (dir)<br/>
        &nbsp; - a (dir)<br/>
        &nbsp;   - e (dir)<br/>
        &nbsp;     - i (file, size=584)<br/>
        &nbsp;   - f (file, size=29116)<br/>
        &nbsp;   - g (file, size=2557)<br/>
        &nbsp;   - h.lst (file, size=62596)<br/>
        &nbsp; - b.txt (file, size=14848514)<br/>
        &nbsp; - c.dat (file, size=8504156)<br/>
        &nbsp; - d (dir)<br/>
        &nbsp;   - j (file, size=4060174)<br/>
        &nbsp;   - d.log (file, size=8033020)<br/>
        &nbsp;   - d.ext (file, size=5626152)<br/>
        &nbsp;   - k (file, size=7214296)
    </CodeBlock><br/>
    <p>Here, there are four directories: <Code>/</Code> (the outermost directory), <Code>a</Code> and <Code>d</Code> (which are in <Code>/</Code>), and <Code>e</Code> (which is in <Code>a</Code>). These directories also contain files of various sizes.</p><br/>
    <p>Since the disk is full, your first step should probably be to find directories that are good candidates for deletion. To do this, you need to determine the <Glow>total size</Glow> of each directory. The total size of a directory is the sum of the sizes of the files it contains, directly or indirectly. (Directories themselves do not count as having any intrinsic size.)</p><br/>
    <p>The total sizes of the directories above can be found as follows:</p><br/>
    <List>
        <li>The total size of directory <Code>e</Code> is <Glow>584</Glow> because it contains a single file <Code>i</Code> of size 584 and no other directories.</li>
        <li>The directory <Code>a</Code> has total size <Glow>94853</Glow> because it contains files <Code>f</Code> (size 29116), <Code>g</Code> (size 2557), and <Code>h.lst</Code> (size 62596), plus file <Code>i</Code> indirectly (<Code>a</Code> contains <Code>e</Code> which contains <Code>i</Code>).</li>
        <li>Directory <Code>d</Code> has total size <Glow>24933642</Glow>.</li>
        <li>As the outermost directory, <Code>/</Code> contains every file. Its total size is <Glow>48381165</Glow>, the sum of the size of every file.</li>
    </List><br/>
    <p>To begin, find all of the directories with a total size of <Glow>at most 100000</Glow>, then calculate the sum of their total sizes. In the example above, these directories are <Code>a</Code> and <Code>e</Code>; the sum of their total sizes is <Code><Glow>95437</Glow></Code> (94853 + 584). (As in this example, this process can count files more than once!)</p><br/>
    <p>Find all of the directories with a total size of at most 100000. <Glow>What is the sum of the total sizes of those directories?</Glow></p>
</>);

export const part2Description = (<>
</>);
