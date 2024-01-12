import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Link from '@components/text/Link';
import List from '@components/text/List';

const part1Description = (<>
    <p>The gondola takes you up. Strangely, though, the ground doesn't seem to be coming with you; you're not climbing a mountain. As the circle of Snow Island recedes below you, an entire new landmass suddenly appears above you! The gondola carries you to the surface of the new island and lurches into the station.</p><br/>
    <p>As you exit the gondola, the first thing you notice is that the air here is much <Glow>warmer</Glow> than it was on Snow Island. It's also quite <Glow>humid</Glow>. Is this where the water source is?</p><br/>
    <p>The next thing you notice is an Elf sitting on the floor across the station in what seems to be a pile of colorful square cards.</p><br/>
    <p>"Oh! Hello!" The Elf excitedly runs over to you. "How may I be of service?" You ask about water sources.</p><br/>
    <p>"I'm not sure; I just operate the gondola lift. That does sound like something we'd have, though - this is <Glow>Island Island</Glow>, after all! I bet the <Glow>gardener</Glow> would know. He's on a different island, though - er, the small kind surrounded by water, not the floating kind. We really need to come up with a better naming scheme. Tell you what: if you can help me with something quick, I'll let you <Glow>borrow my boat</Glow> and you can go visit the gardener. I got all these <Link link='https://en.wikipedia.org/wiki/Scratchcard'>scratchcards</Link> as a gift, but I can't figure out what I've won."</p><br/>
    <p>The Elf leads you over to the pile of colorful cards. There, you discover dozens of scratchcards, all with their opaque covering already scratched off. Picking one up, it looks like each card has two lists of numbers separated by a vertical bar (<Code>|</Code>): a list of <Glow>winning numbers</Glow> and then a list of <Glow>numbers you have</Glow>. You organize the information into a table (your puzzle input).</p><br/>
    <p>As far as the Elf has been able to figure out, you have to figure out which of the <Glow>numbers you have</Glow> appear in the list of <Glow>winning numbers</Glow>. The first match makes the card worth <Glow>one point</Glow> and each match after the first <Glow>doubles</Glow> the point value of that card.</p><br/>
    <p>For example:</p><br/>
    <CodeBlock>
        Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53<br/>
        Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19<br/>
        Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1<br/>
        Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83<br/>
        Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36<br/>
        Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
    </CodeBlock><br/>
    <p>In the above example, card 1 has five winning numbers (<Code>41</Code>, <Code>48</Code>, <Code>83</Code>, <Code>86</Code>, and <Code>17</Code>) and eight numbers you have (<Code>83</Code>, <Code>86</Code>, <Code>6</Code>, <Code>31</Code>, <Code>17</Code>, <Code>9</Code>, <Code>48</Code>, and <Code>53</Code>). Of the numbers you have, four of them (<Code>48</Code>, <Code>83</Code>, <Code>17</Code>, and <Code>86</Code>) are winning numbers! That means card 1 is worth <Code><Glow>8</Glow></Code> points (1 for the first match, then doubled three times for each of the three matches after the first).</p><br/>
    <List>
        <li>Card 2 has two winning numbers (<Code>32</Code> and <Code>61</Code>), so it is worth <Code><Glow>2</Glow></Code> points.</li>
        <li>Card 3 has two winning numbers (<Code>1</Code> and <Code>21</Code>), so it is worth <Code><Glow>2</Glow></Code> points.</li>
        <li>Card 4 has one winning number (<Code>84</Code>), so it is worth <Code><Glow>1</Glow></Code> point.</li>
        <li>Card 5 has no winning numbers, so it is worth no points.</li>
        <li>Card 6 has no winning numbers, so it is worth no points.</li>
    </List><br/>
    <p>So, in this example, the Elf's pile of scratchcards is worth <Code><Glow>13</Glow></Code> points.</p><br/>
    <p>Take a seat in the large pile of colorful cards. <Glow>How many points are they worth in total?</Glow></p>
</>);

const part2Description = (<>
    <p>Just as you're about to report your findings to the Elf, one of you realizes that the rules have actually been printed on the back of every card this whole time.</p><br/>
    <p>There's no such thing as "points". Instead, scratchcards only cause you to <Glow>win more scratchcards</Glow> equal to the number of winning numbers you have.</p><br/>
    <p>Specifically, you win <Glow>copies</Glow> of the scratchcards below the winning card equal to the number of matches. So, if card 10 were to have 5 matching numbers, you would win one copy each of cards 11, 12, 13, 14, and 15.</p><br/>
    <p>Copies of scratchcards are scored like normal scratchcards and have the <Glow>same card number</Glow> as the card they copied. So, if you win a copy of card 10 and it has 5 matching numbers, it would then win a copy of the same cards that the original card 10 won: cards 11, 12, 13, 14, and 15. This process repeats until none of the copies cause you to win any more cards. (Cards will never make you copy a card past the end of the table.)</p><br/>
    <p>This time, the above example goes differently:</p><br/>
    <CodeBlock>
        Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53<br/>
        Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19<br/>
        Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1<br/>
        Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83<br/>
        Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36<br/>
        Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
    </CodeBlock><br/>
    <List>
        <li>Card 1 has four matching numbers, so you win one copy each of the next four cards: cards 2, 3, 4, and 5.</li>
        <li>Your original card 2 has two matching numbers, so you win one copy each of cards 3 and 4.</li>
        <li>Your copy of card 2 also wins one copy each of cards 3 and 4.</li>
        <li>Your four instances of card 3 (one original and three copies) have two matching numbers, so you win <Glow>four</Glow> copies each of cards 4 and 5.</li>
        <li>Your eight instances of card 4 (one original and seven copies) have one matching number, so you win <Glow>eight</Glow> copies of card 5.</li>
        <li>Your fourteen instances of card 5 (one original and thirteen copies) have no matching numbers and win no more cards.</li>
        <li>Your one instance of card 6 (one original) has no matching numbers and wins no more cards.</li>
    </List><br/>
    <p>Once all of the originals and copies have been processed, you end up with <Code><Glow>1</Glow></Code> instance of card 1, <Code><Glow>2</Glow></Code> instances of card 2, <Code><Glow>4</Glow></Code> instances of card 3, <Code><Glow>8</Glow></Code> instances of card 4, <Code><Glow>14</Glow></Code> instances of card 5, and <Code><Glow>1</Glow></Code> instance of card 6. In total, this example pile of scratchcards causes you to ultimately have <Code><Glow>30</Glow></Code> scratchcards!</p><br/>
    <p>Process all of the original and copied scratchcards until no more scratchcards are won. Including the original set of scratchcards, <Glow>how many total scratchcards do you end up with?</Glow></p>
</>);

export const descriptions = {
    part1Description,
    part2Description
};
