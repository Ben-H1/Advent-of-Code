import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>The newly-focused parabolic reflector dish is sending all of the collected light to a point on the side of yet another mountain - the largest mountain on Lava Island. As you approach the mountain, you find that the light is being collected by the wall of a large facility embedded in the mountainside.</p><br/>
    <p>You find a door under a large sign that says "Lava Production Facility" and next to a smaller sign that says "Danger - Personal Protective Equipment required beyond this point".</p><br/>
    <p>As you step inside, you are immediately greeted by a somewhat panicked reindeer wearing goggles and a loose-fitting <Link link='https://en.wikipedia.org/wiki/Hard_hat'>hard hat</Link>. The reindeer leads you to a shelf of goggles and hard hats (you quickly find some that fit) and then further into the facility. At one point, you pass a button with a faint snout mark and the label "PUSH FOR HELP". No wonder you were loaded into that <Link link='https://adventofcode.com/2023/day/1'>trebuchet</Link> so quickly!</p><br/>
    <p>You pass through a final set of doors surrounded with even more warning signs and into what must be the room that collects all of the light from outside. As you admire the large assortment of lenses available to further focus the light, the reindeer brings you a book titled "Initialization Manual".</p><br/>
    <p>"Hello!", the book cheerfully begins, apparently unaware of the concerned reindeer reading over your shoulder. "This procedure will let you bring the Lava Production Facility online - all without burning or melting anything unintended!"</p><br/>
    <p>"Before you begin, please be prepared to use the Holiday ASCII String Helper algorithm (appendix 1A)." You turn to appendix 1A. The reindeer leans closer with interest.</p><br/>
    <p>The HASH algorithm is a way to turn any <Link link='https://en.wikipedia.org/wiki/String_(computer_science)'>string</Link> of characters into a single <Glow>number</Glow> in the range 0 to 255. To run the HASH algorithm on a string, start with a <Glow>current value</Glow> of <Code>0</Code>. Then, for each character in the string starting from the beginning:</p><br/>
    <List>
        <li>Determine the <Link link='https://en.wikipedia.org/wiki/ASCII#Printable_characters'>ASCII code</Link> for the current character of the string.</li>
        <li>Increase the <Glow>current value</Glow> by the ASCII code you just determined.</li>
        <li>Set the <Glow>current value</Glow> to itself multiplied by <Code>17</Code>.</li>
        <li>Set the <Glow>current value</Glow> to the <Link link='https://en.wikipedia.org/wiki/Modulo'>remainder</Link> of dividing itself by <Code>256</Code>.</li>
    </List><br/>
    <p>After following these steps for each character in the string in order, the <Glow>current value</Glow> is the output of the HASH algorithm.</p><br/>
    <p>So, to find the result of running the HASH algorithm on the string <Code>HASH</Code>:</p><br/>
    <List>
        <li>The <Glow>current value</Glow> starts at <Code>0</Code>.</li>
        <li>The first character is <Code>H</Code>; its ASCII code is <Code>72</Code>.</li>
        <li>The <Glow>current value</Glow> increases to <Code>72</Code>.</li>
        <li>The <Glow>current value</Glow> is multiplied by <Code>17</Code> to become <Code>1224</Code>.</li>
        <li>The <Glow>current value</Glow> becomes <Code><Glow>200</Glow></Code> (the remainder of <Code>1224</Code> divided by <Code>256</Code>).</li>
        <li>The next character is <Code>A</Code>; its ASCII code is <Code>65</Code>.</li>
        <li>The <Glow>current value</Glow> increases to <Code>265</Code>.</li>
        <li>The <Glow>current value</Glow> is multiplied by <Code>17</Code> to become <Code>4505</Code>.</li>
        <li>The <Glow>current value</Glow> becomes <Code><Glow>153</Glow></Code> (the remainder of <Code>4505</Code> divided by <Code>256</Code>).</li>
        <li>The next character is <Code>S</Code>; its ASCII code is <Code>83</Code>.</li>
        <li>The <Glow>current value</Glow> increases to <Code>236</Code>.</li>
        <li>The <Glow>current value</Glow> is multiplied by <Code>17</Code> to become <Code>4012</Code>.</li>
        <li>The <Glow>current value</Glow> becomes <Code><Glow>172</Glow></Code> (the remainder of <Code>4012</Code> divided by <Code>256</Code>).</li>
        <li>The next character is <Code>H</Code>; its ASCII code is <Code>72</Code>.</li>
        <li>The <Glow>current value</Glow> increases to <Code>244</Code>.</li>
        <li>The <Glow>current value</Glow> is multiplied by <Code>17</Code> to become <Code>4148</Code>.</li>
        <li>The <Glow>current value</Glow> becomes <Code><Glow>52</Glow></Code> (the remainder of <Code>4148</Code> divided by <Code>256</Code>).</li>
    </List><br/>
    <p>So, the result of running the HASH algorithm on the string <Code>HASH</Code> is <Code><Glow>52</Glow></Code>.</p><br/>
    <p>The <Glow>initialization sequence</Glow> (your puzzle input) is a comma-separated list of steps to start the Lava Production Facility. <Glow>Ignore newline characters</Glow> when parsing the initialization sequence. To verify that your HASH algorithm is working, the book offers the sum of the result of running the HASH algorithm on each step in the initialization sequence.</p><br/>
    <p>For example:</p><br/>
    <CodeBlock>
        rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7
    </CodeBlock><br/>
    <p>This initialization sequence specifies 11 individual steps; the result of running the HASH algorithm on each of the steps is as follows:</p><br/>
    <List>
        <li><Code>rn=1</Code> becomes <Code><Glow>30</Glow></Code>.</li>
        <li><Code>cm-</Code> becomes <Code><Glow>253</Glow></Code>.</li>
        <li><Code>qp=3</Code> becomes <Code><Glow>97</Glow></Code>.</li>
        <li><Code>cm=2</Code> becomes <Code><Glow>47</Glow></Code>.</li>
        <li><Code>qp-</Code> becomes <Code><Glow>14</Glow></Code>.</li>
        <li><Code>pc=4</Code> becomes <Code><Glow>180</Glow></Code>.</li>
        <li><Code>ot=9</Code> becomes <Code><Glow>9</Glow></Code>.</li>
        <li><Code>ab=5</Code> becomes <Code><Glow>197</Glow></Code>.</li>
        <li><Code>pc-</Code> becomes <Code><Glow>48</Glow></Code>.</li>
        <li><Code>pc=6</Code> becomes <Code><Glow>214</Glow></Code>.</li>
        <li><Code>ot=7</Code> becomes <Code><Glow>231</Glow></Code>.</li>
    </List><br/>
    <p>In this example, the sum of these results is <Code><Glow>1320</Glow></Code>. Unfortunately, the reindeer has stolen the page containing the expected verification number and is currently running around the facility with it excitedly.</p><br/>
    <p>Run the HASH algorithm on each step in the initialization sequence. <Glow>What is the sum of the results?</Glow> (The initialization sequence is one long line; be careful when copy-pasting it.)</p>
</>);

export const part2Description = (<>
    <p>You convince the reindeer to bring you the page; the page confirms that your HASH algorithm is working.</p><br/>
    <p>The book goes on to describe a series of 256 <Glow>boxes</Glow> numbered <Code>0</Code> through <Code>255</Code>. The boxes are arranged in a line starting from the point where light enters the facility. The boxes have holes that allow light to pass from one box to the next all the way down the line.</p><br/>
    <CodeBlock>
        &nbsp;     +-----+  +-----+         +-----+<br/>
        Light | Box |  | Box |   ...   | Box |<br/>
        -----------------------------------------{'>'}<br/>
        &nbsp;     |  0  |  |  1  |   ...   | 255 |<br/>
        &nbsp;     +-----+  +-----+         +-----+
    </CodeBlock><br/>
    <p>Inside each box, there are several <Glow>lens slots</Glow> that will keep a lens correctly positioned to focus light passing through the box. The side of each box has a panel that opens to allow you to insert or remove lenses as necessary.</p><br/>
    <p>Along the wall running parallel to the boxes is a large library containing lenses organized by <Glow>focal length</Glow> ranging from <Code>1</Code> through <Code>9</Code>. The reindeer also brings you a small handheld <Link link='https://en.wikipedia.org/wiki/Label_printer'>label printer</Link>.</p><br/>
    <p>The book goes on to explain how to perform each step in the initialization sequence, a process it calls the Holiday ASCII String Helper Manual Arrangement Procedure, or <Glow>HASHMAP</Glow> for short.</p><br/>
    <p>Each step begins with a sequence of letters that indicate the <Glow>label</Glow> of the lens on which the step operates. The result of running the HASH algorithm on the label indicates the correct box for that step.</p><br/>
    <p>The label will be immediately followed by a character that indicates the <Glow>operation</Glow> to perform: either an equals sign (<Code>=</Code>) or a dash (<Code>-</Code>).</p><br/>
    <p>If the operation character is a <Glow>dash</Glow> (<Code>-</Code>), go to the relevant box and remove the lens with the given label if it is present in the box. Then, move any remaining lenses as far forward in the box as they can go without changing their order, filling any space made by removing the indicated lens. (If no lens in that box has the given label, nothing happens.)</p><br/>
    <p>If the operation character is an <Glow>equals sign</Glow> (<Code>=</Code>), it will be followed by a number indicating the <Glow>focal length</Glow> of the lens that needs to go into the relevant box; be sure to use the label maker to mark the lens with the label given in the beginning of the step so you can find it later. There are two possible situations:</p><br/>
    <List>
        <li>If there is already a lens in the box with the same label, <Glow>replace the old lens</Glow> with the new lens: remove the old lens and put the new lens in its place, not moving any other lenses in the box.</li>
        <li>If there is <Glow>not</Glow> already a lens in the box with the same label, add the lens to the box immediately behind any lenses already in the box. Don't move any of the other lenses when you do this. If there aren't any lenses in the box, the new lens goes all the way to the front of the box.</li>
    </List><br/>
    <p>Here is the contents of every box after each step in the example initialization sequence above:</p><br/>
    <CodeBlock>
        After "rn=1":<br/>
        Box 0: [rn 1]<br/>
        <br/>
        After "cm-":<br/>
        Box 0: [rn 1]<br/>
        <br/>
        After "qp=3":<br/>
        Box 0: [rn 1]<br/>
        Box 1: [qp 3]<br/>
        <br/>
        After "cm=2":<br/>
        Box 0: [rn 1] [cm 2]<br/>
        Box 1: [qp 3]<br/>
        <br/>
        After "qp-":<br/>
        Box 0: [rn 1] [cm 2]<br/>
        <br/>
        After "pc=4":<br/>
        Box 0: [rn 1] [cm 2]<br/>
        Box 3: [pc 4]<br/>
        <br/>
        After "ot=9":<br/>
        Box 0: [rn 1] [cm 2]<br/>
        Box 3: [pc 4] [ot 9]<br/>
        <br/>
        After "ab=5":<br/>
        Box 0: [rn 1] [cm 2]<br/>
        Box 3: [pc 4] [ot 9] [ab 5]<br/>
        <br/>
        After "pc-":<br/>
        Box 0: [rn 1] [cm 2]<br/>
        Box 3: [ot 9] [ab 5]<br/>
        <br/>
        After "pc=6":<br/>
        Box 0: [rn 1] [cm 2]<br/>
        Box 3: [ot 9] [ab 5] [pc 6]<br/>
        <br/>
        After "ot=7":<br/>
        Box 0: [rn 1] [cm 2]<br/>
        Box 3: [ot 7] [ab 5] [pc 6]
    </CodeBlock><br/>
    <p>All 256 boxes are always present; only the boxes that contain any lenses are shown here. Within each box, lenses are listed from front to back; each lens is shown as its label and focal length in square brackets.</p><br/>
    <p>To confirm that all of the lenses are installed correctly, add up the <Glow>focusing power</Glow> of all of the lenses. The focusing power of a single lens is the result of multiplying together:</p><br/>
    <List>
        <li>One plus the box number of the lens in question.</li>
        <li>The slot number of the lens within the box: <Code>1</Code> for the first lens, <Code>2</Code> for the second lens, and so on.</li>
        <li>The focal length of the lens.</li>
    </List><br/>
    <p>At the end of the above example, the focusing power of each lens is as follows:</p><br/>
    <List>
        <li><Code>rn</Code>: <Code>1</Code> (box 0) * <Code>1</Code> (first slot) * <Code>1</Code> (focal length) = <Code><Glow>1</Glow></Code></li>
        <li><Code>cm</Code>: <Code>1</Code> (box 0) * <Code>2</Code> (second slot) * <Code>2</Code> (focal length) = <Code><Glow>4</Glow></Code></li>
        <li><Code>ot</Code>: <Code>4</Code> (box 3) * <Code>1</Code> (first slot) * <Code>7</Code> (focal length) = <Code><Glow>28</Glow></Code></li>
        <li><Code>ab</Code>: <Code>4</Code> (box 3) * <Code>2</Code> (second slot) * <Code>5</Code> (focal length) = <Code><Glow>40</Glow></Code></li>
        <li><Code>pc</Code>: <Code>4</Code> (box 3) * <Code>3</Code> (third slot) * <Code>6</Code> (focal length) = <Code><Glow>72</Glow></Code></li>
    </List><br/>
    <p>So, the above example ends up with a total focusing power of <Code><Glow>145</Glow></Code>.</p><br/>
    <p>With the help of an over-enthusiastic reindeer in a hard hat, follow the initialization sequence. <Glow>What is the focusing power of the resulting lens configuration?</Glow></p>
</>);
