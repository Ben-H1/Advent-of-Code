import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>One Elf has the important job of loading all of the <Link link='https://en.wikipedia.org/wiki/Rucksack'>rucksacks</Link> with supplies for the jungle journey. Unfortunately, that Elf didn't quite follow the packing instructions, and so a few items now need to be rearranged.</p><br/>
    <p>Each rucksack has two large <Glow>compartments</Glow>. All items of a given type are meant to go into exactly one of the two compartments. The Elf that did the packing failed to follow this rule for exactly one item type per rucksack.</p><br/>
    <p>The Elves have made a list of all of the items currently in each rucksack (your puzzle input), but they need your help finding the errors. Every item type is identified by a single lowercase or uppercase letter (that is, <Code>a</Code> and <Code>A</Code> refer to different types of items).</p><br/>
    <p>The list of items for each rucksack is given as characters all on a single line. A given rucksack always has the same number of items in each of its two compartments, so the first half of the characters represent items in the first compartment, while the second half of the characters represent items in the second compartment.</p><br/>
    <p>For example, suppose you have the following list of contents from six rucksacks:</p><br/>
    <CodeBlock>
        vJrwpWtwJgWrhcsFMMfFFhFp<br/>
        jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL<br/>
        PmmdzqPrVvPwwTWBwg<br/>
        wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn<br/>
        ttgJtRGJQctTZtZT<br/>
        CrZsJsPPZsGzwwsLwLmpwMDw
    </CodeBlock><br/>
    <List>
        <li>The first rucksack contains the items <Code>vJrwpWtwJgWrhcsFMMfFFhFp</Code>, which means its first compartment contains the items <Code>vJrwpWtwJgWr</Code>, while the second compartment contains the items <Code>hcsFMMfFFhFp</Code>. The only item type that appears in both compartments is lowercase <Code><Glow>p</Glow></Code>.</li>
        <li>The second rucksack's compartments contain <Code>jqHRNqRjqzjGDLGL</Code> and <Code>rsFMfFZSrLrFZsSL</Code>. The only item type that appears in both compartments is uppercase <Code><Glow>L</Glow></Code>.</li>
        <li>The third rucksack's compartments contain <Code>PmmdzqPrV</Code> and <Code>vPwwTWBwg</Code>; the only common item type is uppercase <Code><Glow>P</Glow></Code>.</li>
        <li>The fourth rucksack's compartments only share item type <Code><Glow>v</Glow></Code>.</li>
        <li>The fifth rucksack's compartments only share item type <Code><Glow>t</Glow></Code>.</li>
        <li>The sixth rucksack's compartments only share item type <Code><Glow>s</Glow></Code>.</li>
    </List><br/>
    <p>To help prioritize item rearrangement, every item type can be converted to a <Glow>priority</Glow>:</p><br/>
    <List>
        <li>Lowercase item types <Code>a</Code> through <Code>z</Code> have priorities 1 through 26.</li>
        <li>Uppercase item types <Code>A</Code> through <Code>Z</Code> have priorities 27 through 52.</li>
    </List><br/>
    <p>In the above example, the priority of the item type that appears in both compartments of each rucksack is 16 (<Code>p</Code>), 38 (<Code>L</Code>), 42 (<Code>P</Code>), 22 (<Code>v</Code>), 20 (<Code>t</Code>), and 19 (<Code>s</Code>); the sum of these is <Code><Glow>157</Glow></Code>.</p><br/>
    <p>Find the item type that appears in both compartments of each rucksack. <Glow>What is the sum of the priorities of those item types?</Glow></p>
</>);

export const part2Description = (<>
    <p>As you finish identifying the misplaced items, the Elves come to you with another issue.</p><br/>
    <p>For safety, the Elves are divided into groups of three. Every Elf carries a badge that identifies their group. For efficiency, within each group of three Elves, the badge is the <Glow>only item type carried by all three Elves</Glow>. That is, if a group's badge is item type <Code>B</Code>, then all three Elves will have item type <Code>B</Code> somewhere in their rucksack, and at most two of the Elves will be carrying any other item type.</p><br/>
    <p>The problem is that someone forgot to put this year's updated authenticity sticker on the badges. All of the badges need to be pulled out of the rucksacks so the new authenticity stickers can be attached.</p><br/>
    <p>Additionally, nobody wrote down which item type corresponds to each group's badges. The only way to tell which item type is the right one is by finding the one item type that is <Glow>common between all three Elves</Glow> in each group.</p><br/>
    <p>Every set of three lines in your list corresponds to a single group, but each group can have a different badge item type. So, in the above example, the first group's rucksacks are the first three lines:</p><br/>
    <CodeBlock>
        vJrwpWtwJgWrhcsFMMfFFhFp<br/>
        jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL<br/>
        PmmdzqPrVvPwwTWBwg
    </CodeBlock><br/>
    <p>And the second group's rucksacks are the next three lines:</p><br/>
    <CodeBlock>
        wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn<br/>
        ttgJtRGJQctTZtZT<br/>
        CrZsJsPPZsGzwwsLwLmpwMDw
    </CodeBlock><br/>
    <p>In the first group, the only item type that appears in all three rucksacks is lowercase <Code>r</Code>; this must be their badges. In the second group, their badge item type must be <Code>Z</Code>.</p><br/>
    <p>Priorities for these items must still be found to organize the sticker attachment efforts: here, they are 18 (<Code>r</Code>) for the first group and 52 (<Code>Z</Code>) for the second group. The sum of these is <Code><Glow>70</Glow></Code>.</p><br/>
    <p>Find the item type that corresponds to the badges of each three-Elf group. <Glow>What is the sum of the priorities of those item types?</Glow></p>
</>);
