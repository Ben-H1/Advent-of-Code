import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>Just across the hall, you find a large factory. Fortunately, the Elves here have plenty of time to decorate. Unfortunately, it's because the factory machines are all offline, and none of the Elves can figure out the initialization procedure.</p><br />
    <p>The Elves do have the manual for the machines, but the section detailing the initialization procedure was eaten by a <Link link='https://en.wikipedia.org/wiki/Shiba_Inu'>Shiba Inu</Link>. All that remains of the manual are some indicator light diagrams, button wiring schematics, and <Link link='https://adventofcode.com/2025/day/3'>joltage</Link> requirements for each machine.</p><br />
    <p>For example:</p><br />
    <CodeBlock>
        [.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {'{'}3,5,4,7{'}'}<br />
        [...#.] (0,2,3,4) (2,3) (0,4) (0,1,2) (1,2,3,4) {'{'}7,5,12,7,2{'}'}<br />
        [.###.#] (0,1,2,3,4) (0,3,4) (0,1,2,4,5) (1,2) {'{'}10,11,11,5,10,5{'}'}
    </CodeBlock><br />
    <p>The manual describes one machine per line. Each line contains a single indicator light diagram in <Code>[</Code>square brackets<Code>]</Code>, one or more button wiring schematics in <Code>(</Code>parentheses<Code>)</Code>, and joltage requirements in <Code>{'{'}</Code>curly braces<Code>{'}'}</Code>.</p><br />
    <p>To start a machine, its <Glow>indicator lights</Glow> must match those shown in the diagram, where <Code>.</Code> means <Glow>off</Glow> and <Code>#</Code> means <Glow>on</Glow>. The machine has the number of indicator lights shown, but its indicator lights are all <Glow>initially off</Glow>.</p><br />
    <p>So, an indicator light diagram like <Code>[.##.]</Code> means that the machine has four indicator lights which are initially off and that the goal is to simultaneously configure the first light to be off, the second light to be on, the third to be on, and the fourth to be off.</p><br />
    <p>You can <Glow>toggle</Glow> the state of indicator lights by pushing any of the listed <Glow>buttons</Glow>. Each button lists which indicator lights it toggles, where <Code>0</Code> means the first light, <Code>1</Code> means the second light, and so on. When you push a button, each listed indicator light either turns on (if it was off) or turns off (if it was on). You have to push each button an integer number of times; there's no such thing as "<span title="But only because these aren't A buttons.">0.5 presses</span>" (nor can you push a button a negative number of times).</p><br />
    <p>So, a button wiring schematic like <Code>(0,3,4)</Code> means that each time you push that button, the first, fourth, and fifth indicator lights would all toggle between on and off. If the indicator lights were <Code>[#.....]</Code>, pushing the button would change them to be <Code>[...##.]</Code> instead.</p><br />
    <p>Because none of the machines are running, the joltage requirements are irrelevant and can be safely ignored.</p><br />
    <p>You can push each button as many times as you like. However, to save on time, you will need to determine the <Glow>fewest total presses</Glow> required to correctly configure all indicator lights for all machines in your list.</p><br />
    <p>There are a few ways to correctly configure the first machine:</p><br />
    <CodeBlock>
        [.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {'{'}3,5,4,7{'}'}
    </CodeBlock><br />
    <List>
        <li>You could press the first three buttons once each, a total of <Code>3</Code> button presses.</li>
        <li>You could press <Code>(1,3)</Code> once, <Code>(2,3)</Code> once, and <Code>(0,1)</Code> twice, a total of <Code>4</Code> button presses.</li>
        <li>You could press all of the buttons except <Code>(1,3)</Code> once each, a total of <Code>5</Code> button presses.</li>
    </List><br />
    <p>However, the fewest button presses required is <Code><Glow>2</Glow></Code>. One way to do this is by pressing the last two buttons (<Code>(0,2)</Code> and <Code>(0,1)</Code>) once each.</p><br />
    <p>The second machine can be configured with as few as <Code><Glow>3</Glow></Code> button presses:</p><br />
    <CodeBlock>
        [...#.] (0,2,3,4) (2,3) (0,4) (0,1,2) (1,2,3,4) {'{'}7,5,12,7,2{'}'}
    </CodeBlock><br />
    <p>One way to achieve this is by pressing the last three buttons (<Code>(0,4)</Code>, <Code>(0,1,2)</Code>, and <Code>(1,2,3,4)</Code>) once each.</p><br />
    <p>The third machine has a total of six indicator lights that need to be configured correctly:</p><br />
    <CodeBlock>
        [.###.#] (0,1,2,3,4) (0,3,4) (0,1,2,4,5) (1,2) {'{'}10,11,11,5,10,5{'}'}
    </CodeBlock><br />
    <p>The fewest presses required to correctly configure it is <Code><Glow>2</Glow></Code>; one way to do this is by pressing buttons <Code>(0,3,4)</Code> and <Code>(0,1,2,4,5)</Code> once each.</p><br />
    <p>So, the fewest button presses required to correctly configure the indicator lights on all of the machines is <Code>2</Code> + <Code>3</Code> + <Code>2</Code> = <Code><Glow>7</Glow></Code>.</p><br />
    <p>Analyze each machine's indicator light diagram and button wiring schematics. <Glow>What is the fewest button presses required to correctly configure the indicator lights on all of the machines?</Glow></p>
</>);

export const part2Description = (<>
    <p>All of the machines are starting to come online! Now, it's time to worry about the joltage requirements.</p><br />
    <p>Each machine needs to be configured to <Glow>exactly the specified joltage levels</Glow> to function properly. Below the buttons on each machine is a big lever that you can use to switch the buttons from configuring the indicator lights to increasing the joltage levels. (Ignore the indicator light diagrams.)</p><br />
    <p>The machines each have a set of <Glow>numeric counters</Glow> tracking its joltage levels, one counter per joltage requirement. The counters are all <Glow>initially set to zero</Glow>.</p><br />
    <p>So, joltage requirements like <Code>{'{'}3,5,4,7{'}'}</Code> mean that the machine has four counters which are initially <Code>0</Code> and that the goal is to simultaneously configure the first counter to be <Code>3</Code>, the second counter to be <Code>5</Code>, the third to be <Code>4</Code>, and the fourth to be <Code>7</Code>.</p><br />
    <p>The button wiring schematics are still relevant: in this new joltage configuration mode, each button now indicates which counters it affects, where <Code>0</Code> means the first counter, <Code>1</Code> means the second counter, and so on. When you push a button, each listed counter is <Glow>increased by</Glow> <Code><Glow>1</Glow></Code>.</p><br />
    <p>So, a button wiring schematic like <Code>(1,3)</Code> means that each time you push that button, the second and fourth counters would each increase by <Code>1</Code>. If the current joltage levels were <Code>{'{'}0,1,2,3{'}'}</Code>, pushing the button would change them to be <Code>{'{'}0,2,2,4{'}'}</Code>.</p><br />
    <p>You can push each button as many times as you like. However, your finger is getting sore from all the button pushing, and so you will need to determine the <Glow>fewest total presses</Glow> required to correctly configure each machine's joltage level counters to match the specified joltage requirements.</p><br />
    <p>Consider again the example from before:</p><br />
    <CodeBlock>
        [.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {'{'}3,5,4,7{'}'}<br />
        [...#.] (0,2,3,4) (2,3) (0,4) (0,1,2) (1,2,3,4) {'{'}7,5,12,7,2{'}'}<br />
        [.###.#] (0,1,2,3,4) (0,3,4) (0,1,2,4,5) (1,2) {'{'}10,11,11,5,10,5{'}'}
    </CodeBlock><br />
    <p>Configuring the first machine's counters requires a minimum of <Code><Glow>10</Glow></Code> button presses. One way to do this is by pressing <Code>(3)</Code> once, <Code>(1,3)</Code> three times, <Code>(2,3)</Code> three times, <Code>(0,2)</Code> once, and <Code>(0,1)</Code> twice.</p><br />
    <p>Configuring the second machine's counters requires a minimum of <Code><Glow>12</Glow></Code> button presses. One way to do this is by pressing <Code>(0,2,3,4)</Code> twice, <Code>(2,3)</Code> five times, and <Code>(0,1,2)</Code> five times.</p><br />
    <p>Configuring the third machine's counters requires a minimum of <Code><Glow>11</Glow></Code> button presses. One way to do this is by pressing <Code>(0,1,2,3,4)</Code> five times, <Code>(0,1,2,4,5)</Code> five times, and <Code>(1,2)</Code> once.</p><br />
    <p>So, the fewest button presses required to correctly configure the joltage level counters on all of the machines is <Code>10</Code> + <Code>12</Code> + <Code>11</Code> = <Code><Glow>33</Glow></Code>.</p><br />
    <p>Analyze each machine's joltage requirements and button wiring schematics. <Glow>What is the fewest button presses required to correctly configure the joltage level counters on all of the machines?</Glow></p>
</>);
