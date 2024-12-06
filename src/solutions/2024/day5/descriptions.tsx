import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>Satisfied with their search on Ceres, the squadron of scholars suggests subsequently scanning the <Hidden content='Specifically, the surely-stationary stationery stacks.'>stationery</Hidden> stacks of sub-basement 17.</p><br />
    <p>The North Pole printing department is busier than ever this close to Christmas, and while The Historians continue their search of this historically significant facility, an Elf operating a <Link link='https://adventofcode.com/2017/day/1'>very familiar printer</Link> beckons you over.</p><br />
    <p>The Elf must recognize you, because they waste no time explaining that the new <Glow>sleigh launch safety manual</Glow> updates won't print correctly. Failure to update the safety manuals would be dire indeed, so you offer your services.</p><br />
    <p>Safety protocols clearly indicate that new pages for the safety manuals must be printed in a <Glow>very specific order</Glow>. The notation <Code>X|Y</Code> means that if both page number <Code>X</Code> and page number <Code>Y</Code> are to be produced as part of an update, page number <Code>X</Code> <Glow>must</Glow> be printed at some point before page number <Code>Y</Code>.</p><br />
    <p>The Elf has for you both the <Glow>page ordering rules</Glow> and the <Glow>pages to produce in each update</Glow> (your puzzle input), but can't figure out whether each update has the pages in the right order.</p><br />
    <p>For example:</p><br />
    <CodeBlock>
        47|53<br />
        97|13<br />
        97|61<br />
        97|47<br />
        75|29<br />
        61|13<br />
        75|53<br />
        29|13<br />
        97|29<br />
        53|29<br />
        61|53<br />
        97|53<br />
        61|29<br />
        47|13<br />
        75|47<br />
        97|75<br />
        47|61<br />
        75|61<br />
        47|29<br />
        75|13<br />
        53|13<br />
        <br />
        75,47,61,53,29<br />
        97,61,53,29,13<br />
        75,29,13<br />
        75,97,47,61,53<br />
        61,13,29<br />
        97,13,75,29,47
    </CodeBlock><br />
    <p>The first section specifies the <Glow>page ordering rules</Glow>, one per line. The first rule, <Code>47|53</Code>, means that if an update includes both page number 47 and page number 53, then page number 47 <Glow>must</Glow> be printed at some point before page number 53. (47 doesn't necessarily need to be <Glow>immediately</Glow> before 53; other pages are allowed to be between them.)</p><br />
    <p>The second section specifies the page numbers of each <Glow>update</Glow>. Because most safety manuals are different, the pages needed in the updates are different too. The first update, <Code>75,47,61,53,29</Code>, means that the update consists of page numbers 75, 47, 61, 53, and 29.</p><br />
    <p>To get the printers going as soon as possible, start by identifying <Glow>which updates are already in the right order</Glow>.</p><br />
    <p>In the above example, the first update (<Code>75,47,61,53,29</Code>) is in the right order:</p><br />
    <List>
        <li><Code>75</Code> is correctly first because there are rules that put each other page after it: <Code>75|47</Code>, <Code>75|61</Code>, <Code>75|53</Code>, and <Code>75|29</Code>.</li>
        <li><Code>47</Code> is correctly second because 75 must be before it (<Code>75|47</Code>) and every other page must be after it according to <Code>47|61</Code>, <Code>47|53</Code>, and <Code>47|29</Code>.</li>
        <li><Code>61</Code> is correctly in the middle because 75 and 47 are before it (<Code>75|61</Code> and <Code>47|61</Code>) and 53 and 29 are after it (<Code>61|53</Code> and <Code>61|29</Code>).</li>
        <li><Code>53</Code> is correctly fourth because it is before page number 29 (<Code>53|29</Code>).</li>
        <li><Code>29</Code> is the only page left and so is correctly last.</li>
    </List>
    <p>Because the first update does not include some page numbers, the ordering rules involving those missing page numbers are ignored.</p><br />
    <p>The second and third updates are also in the correct order according to the rules. Like the first update, they also do not include every page number, and so only some of the ordering rules apply - within each update, the ordering rules that involve missing page numbers are not used.</p><br />
    <p>The fourth update, <Code>75,97,47,61,53</Code>, is <Glow>not</Glow> in the correct order: it would print 75 before 97, which violates the rule <Code>97|75</Code>.</p><br />
    <p>The fifth update, <Code>61,13,29</Code>, is also <Glow>not</Glow> in the correct order, since it breaks the rule <Code>29|13</Code>.</p><br />
    <p>The last update, <Code>97,13,75,29,47</Code>, is <Glow>not</Glow> in the correct order due to breaking several rules.</p><br />
    <p>For some reason, the Elves also need to know the <Glow>middle page number</Glow> of each update being printed. Because you are currently only printing the correctly-ordered updates, you will need to find the middle page number of each correctly-ordered update. In the above example, the correctly-ordered updates are:</p><br />
    <CodeBlock>
        75,47,<Glow>61</Glow>,53,29<br />
        97,61,<Glow>53</Glow>,29,13<br />
        75,<Glow>29</Glow>,13
    </CodeBlock><br />
    <p>These have middle page numbers of <Code>61</Code>, <Code>53</Code>, and <Code>29</Code> respectively. Adding these page numbers together gives <Code><Glow>143</Glow></Code>.</p><br />
    <p>Of course, you'll need to be careful: the actual list of <Glow>page ordering rules</Glow> is bigger and more complicated than the above example.</p><br />
    <p>Determine which updates are already in the correct order. <Glow>What do you get if you add up the middle page number from those correctly-ordered updates?</Glow></p>
</>);

export const part2Description = (<>
    <p>While the Elves get to work printing the correctly-ordered updates, you have a little time to fix the rest of them.</p><br />
    <p>For each of the <Glow>incorrectly-ordered updates</Glow>, use the page ordering rules to put the page numbers in the right order. For the above example, here are the three incorrectly-ordered updates and their correct orderings:</p><br />
    <List>
        <li><Code>75,97,47,61,53</Code> becomes <Code>97,75,<Glow>47</Glow>,61,53</Code>.</li>
        <li><Code>61,13,29</Code> becomes <Code>61,<Glow>29</Glow>,13</Code>.</li>
        <li><Code>97,13,75,29,47</Code> becomes <Code>97,75,<Glow>47</Glow>,29,13</Code>.</li>
    </List><br />
    <p>After taking <Glow>only the incorrectly-ordered updates</Glow> and ordering them correctly, their middle page numbers are <Code>47</Code>, <Code>29</Code>, and <Code>47</Code>. Adding these together produces <Code><Glow>123</Glow></Code>.</p><br />
    <p>Find the updates which are not in the correct order. <Glow>What do you get if you add up the middle page numbers after correctly ordering just those updates?</Glow></p>
</>);
