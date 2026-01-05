import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>You hear some loud beeping coming from a hatch in the floor of the factory, so you decide to check it out. Inside, you find several large electrical conduits and a ladder.</p><br />
    <p>Climbing down the ladder, you discover the source of the <Hidden content='The beeping is unrelated to the issue with the server rack. The reactor is just hungry.'>beeping</Hidden>: a large, toroidal reactor which powers the factory above. Some Elves here are hurriedly running between the reactor and a nearby server rack, apparently trying to fix something.</p><br />
    <p>One of the Elves notices you and rushes over. "It's a good thing you're here! We just installed a new <Glow>server rack</Glow>, but we aren't having any luck getting the reactor to communicate with it!" You glance around the room and see a tangle of cables and devices running from the server rack to the reactor. She rushes off, returning a moment later with a list of the devices and their outputs (your puzzle input).</p><br />
    <p>For example:</p><br />
    <CodeBlock>
        aaa: you hhh<br />
        you: bbb ccc<br />
        bbb: ddd eee<br />
        ccc: ddd eee fff<br />
        ddd: ggg<br />
        eee: out<br />
        fff: out<br />
        ggg: out<br />
        hhh: ccc fff iii<br />
        iii: out
    </CodeBlock><br />
    <p>Each line gives the name of a device followed by a list of the devices to which its outputs are attached. So, <Code>bbb: ddd eee</Code> means that device <Code>bbb</Code> has two outputs, one leading to device <Code>ddd</Code> and the other leading to device <Code>eee</Code>.</p><br />
    <p>The Elves are pretty sure that the issue isn't due to any specific device, but rather that the issue is triggered by data following some specific <Glow>path</Glow> through the devices. Data only ever flows from a device through its outputs; it can't flow backwards.</p><br />
    <p>After dividing up the work, the Elves would like you to focus on the devices starting with the one next to you (an Elf hastily attaches a label which just says <Code><Glow>you</Glow></Code>) and ending with the main output to the reactor (which is the device with the label <Code><Glow>out</Glow></Code>).</p><br />
    <p>To help the Elves figure out which path is causing the issue, they need you to find <Glow>every</Glow> path from <Code>you</Code> to <Code>out</Code>.</p><br />
    <p>In this example, these are all of the paths from <Code>you</Code> to <Code>out</Code>:</p><br />
    <List>
        <li>Data could take the connection from <Code>you</Code> to <Code>bbb</Code>, then from <Code>bbb</Code> to <Code>ddd</Code>, then from <Code>ddd</Code> to <Code>ggg</Code>, then from <Code>ggg</Code> to <Code>out</Code>.</li>
        <li>Data could take the connection to <Code>bbb</Code>, then to <Code>eee</Code>, then to <Code>out</Code>.</li>
        <li>Data could go to <Code>ccc</Code>, then <Code>ddd</Code>, then <Code>ggg</Code>, then <Code>out</Code>.</li>
        <li>Data could go to <Code>ccc</Code>, then <Code>eee</Code>, then <Code>out</Code>.</li>
        <li>Data could go to <Code>ccc</Code>, then <Code>fff</Code>, then <Code>out</Code>.</li>
    </List><br />
    <p>In total, there are <Code><Glow>5</Glow></Code> different paths leading from <Code>you</Code> to <Code>out</Code>.</p><br />
    <p><Glow>How many different paths lead from</Glow> <Code><Glow>you</Glow></Code> <Glow>to</Glow> <Code><Glow>out</Glow></Code><Glow>?</Glow></p>
</>);

export const part2Description = (<>
    <p>Thanks in part to your analysis, the Elves have figured out a little bit about the issue. They now know that the problematic data path passes through both <Code>dac</Code> (a <Link link='https://en.wikipedia.org/wiki/Digital-to-analog_converter'>digital-to-analog converter</Link>) and <Code>fft</Code> (a device which performs a <Link link='https://en.wikipedia.org/wiki/Fast_Fourier_transform'>fast Fourier transform</Link>).</p><br />
    <p>They're still not sure which specific path is the problem, and so they now need you to find every path from <Code>svr</Code> (the server rack) to <Code>out</Code>. However, the paths you find must all also visit both <Code>dac</Code> <Glow>and</Glow> <Code>fft</Code> (in any order).</p><br />
    <p>For example:</p><br />
    <CodeBlock>
        svr: aaa bbb<br />
        aaa: fft<br />
        fft: ccc<br />
        bbb: tty<br />
        tty: ccc<br />
        ccc: ddd eee<br />
        ddd: hub<br />
        hub: fff<br />
        eee: dac<br />
        dac: fff<br />
        fff: ggg hhh<br />
        ggg: out<br />
        hhh: out
    </CodeBlock><br />
    <p>This new list of devices contains many paths from <Code>svr</Code> to <Code>out</Code>:</p><br />
    <CodeBlock>
        svr,aaa,<Glow>fft</Glow>,ccc,ddd,hub,fff,ggg,out<br />
        svr,aaa,<Glow>fft</Glow>,ccc,ddd,hub,fff,hhh,out<br />
        svr,aaa,<Glow>fft</Glow>,ccc,eee,<Glow>dac</Glow>,fff,ggg,out<br />
        svr,aaa,<Glow>fft</Glow>,ccc,eee,<Glow>dac</Glow>,fff,hhh,out<br />
        svr,bbb,tty,ccc,ddd,hub,fff,ggg,out<br />
        svr,bbb,tty,ccc,ddd,hub,fff,hhh,out<br />
        svr,bbb,tty,ccc,eee,<Glow>dac</Glow>,fff,ggg,out<br />
        svr,bbb,tty,ccc,eee,<Glow>dac</Glow>,fff,hhh,out
    </CodeBlock><br />
    <p>However, only <Code><Glow>2</Glow></Code> paths from <Code>svr</Code> to <Code>out</Code> visit both <Code>dac</Code> and <Code>fft</Code>.</p><br />
    <p>Find all of the paths that lead from <Code>svr</Code> to <Code>out</Code>. <Glow>How many of those paths visit both</Glow> <Code><Glow>dac</Glow></Code> <Glow>and</Glow> <Code><Glow>fft</Glow></Code><Glow>?</Glow></p>
</>);
