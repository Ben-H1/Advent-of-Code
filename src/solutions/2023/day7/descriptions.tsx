import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>Your all-expenses-paid trip turns out to be a one-way, five-minute ride in an <Link link='https://en.wikipedia.org/wiki/Airship'></Link>airship. (At least it's a <Hidden content={`Please only read this sentence while listening to 'The Airship Blackjack' from the Final Fantasy 6 soundtrack.`}><Glow>cool</Glow> airship</Hidden>!) It drops you off at the edge of a vast desert and descends back to Island Island.</p><br/>
    <p>"Did you bring the parts?"</p><br/>
    <p>You turn around to see an Elf completely covered in white clothing, wearing goggles, and riding a large <Link link='https://en.wikipedia.org/wiki/Dromedary'>camel</Link>.</p><br/>
    <p>"Did you bring the parts?" she asks again, louder this time. You aren't sure what parts she's looking for; you're here to figure out why the sand stopped.</p><br/>
    <p>"The parts! For the sand, yes! Come with me; I will show you." She beckons you onto the camel.</p><br/>
    <p>After riding a bit across the sands of Desert Island, you can see what look like very large rocks covering half of the horizon. The Elf explains that the rocks are all along the part of Desert Island that is directly above Island Island, making it hard to even get there. Normally, they use big machines to move the rocks and filter the sand, but the machines have broken down because Desert Island recently stopped receiving the parts they need to fix the machines.</p><br/>
    <p>You've already assumed it'll be your job to figure out why the parts stopped when she asks if you can help. You agree automatically.</p><br/>
    <p>Because the journey will take a few days, she offers to teach you the game of <Glow>Camel Cards</Glow>. Camel Cards is sort of similar to <Link link='https://en.wikipedia.org/wiki/List_of_poker_hands'>poker</Link> except it's designed to be easier to play while riding a camel.</p><br/>
    <p>In Camel Cards, you get a list of <Glow>hands</Glow>, and your goal is to order them based on the <Glow>strength</Glow> of each hand. A hand consists of <Glow>five cards</Glow> labeled one of <Code>A</Code>, <Code>K</Code>, <Code>Q</Code>, <Code>J</Code>, <Code>T</Code>, <Code>9</Code>, <Code>8</Code>, <Code>7</Code>, <Code>6</Code>, <Code>5</Code>, <Code>4</Code>, <Code>3</Code>, or <Code>2</Code>. The relative strength of each card follows this order, where <Code>A</Code> is the highest and <Code>2</Code> is the lowest.</p><br/>
    <p>Every hand is exactly one <Glow>type</Glow>. From strongest to weakest, they are:</p><br/>
    <List>
        <li><Glow>Five of a kind</Glow>, where all five cards have the same label: <Code>AAAAA</Code></li>
        <li><Glow>Four of a kind</Glow>, where four cards have the same label and one card has a different label: <Code>AA8AA</Code></li>
        <li><Glow>Full house</Glow>, where three cards have the same label, and the remaining two cards share a different label: <Code>23332</Code></li>
        <li><Glow>Three of a kind</Glow>, where three cards have the same label, and the remaining two cards are each different from any other card in the hand: <Code>TTT98</Code></li>
        <li><Glow>Two pair</Glow>, where two cards share one label, two other cards share a second label, and the remaining card has a third label: <Code>23432</Code></li>
        <li><Glow>One pair</Glow>, where two cards share one label, and the other three cards have a different label from the pair and each other: <Code>A23A4</Code></li>
        <li><Glow>High card</Glow>, where all cards' labels are distinct: <Code>23456</Code></li>
    </List><br/>
    <p>Hands are primarily ordered based on type; for example, every <Glow>full house</Glow> is stronger than any <Glow>three of a kind</Glow>.</p><br/>
    <p>If two hands have the same type, a second ordering rule takes effect. Start by comparing the <Glow>first card in each hand</Glow>. If these cards are different, the hand with the stronger first card is considered stronger. If the first card in each hand have the <Glow>same label</Glow>, however, then move on to considering the <Glow>second card in each hand</Glow>. If they differ, the hand with the higher second card wins; otherwise, continue with the third card in each hand, then the fourth, then the fifth.</p><br/>
    <p>So, <Code>33332</Code> and <Code>2AAAA</Code> are both <Glow>four of a kind</Glow> hands, but <Code>33332</Code> is stronger because its first card is stronger. Similarly, <Code>77888</Code> and <Code>77788</Code> are both a <Glow>full house</Glow>, but <Code>77888</Code> is stronger because its third card is stronger (and both hands have the same first and second card).</p><br/>
    <p>To play Camel Cards, you are given a list of hands and their corresponding <Glow>bid</Glow> (your puzzle input). For example:</p><br/>
    <CodeBlock>
        32T3K 765<br/>
        T55J5 684<br/>
        KK677 28<br/>
        KTJJT 220<br/>
        QQQJA 483
    </CodeBlock><br/>
    <p>This example shows five hands; each hand is followed by its <Glow>bid</Glow> amount. Each hand wins an amount equal to its bid multiplied by its <Glow>rank</Glow>, where the weakest hand gets rank 1, the second-weakest hand gets rank 2, and so on up to the strongest hand. Because there are five hands in this example, the strongest hand will have rank 5 and its bid will be multiplied by 5.</p><br/>
    <p>So, the first step is to put the hands in order of strength:</p><br/>
    <List>
        <li><Code>32T3K</Code> is the only <Glow>one pair</Glow> and the other hands are all a stronger type, so it gets rank <Glow>1</Glow>.</li>
        <li><Code>KK677</Code> and <Code>KTJJT</Code> are both <Glow>two pair</Glow>. Their first cards both have the same label, but the second card of <Code>KK677</Code> is stronger (<Code>K</Code> vs <Code>T</Code>), so <Code>KTJJT</Code> gets rank <Glow>2</Glow> and <Code>KK677</Code> gets rank <Glow>3</Glow>.</li>
        <li><Code>T55J5</Code> and <Code>QQQJA</Code> are both <Glow>three of a kind</Glow>. <Code>QQQJA</Code> has a stronger first card, so it gets rank <Glow>5</Glow> and <Code>T55J5</Code> gets rank <Glow>4</Glow>.</li>
    </List><br/>
    <p>Now, you can determine the total winnings of this set of hands by adding up the result of multiplying each hand's bid with its rank (<Code>765</Code> * <Code>1</Code> + <Code>220</Code> * <Code>2</Code> + <Code>28</Code> * <Code>3</Code> + <Code>684</Code> * <Code>4</Code> + <Code>483</Code> * <Code>5</Code>). So the <Glow>total winnings</Glow> in this example are <Code><Glow>6440</Glow></Code>.</p><br/>
    <p>Find the rank of every hand in your set. <Glow>What are the total winnings?</Glow></p>
</>);

export const part2Description = (<>
    <p>To make things a little more interesting, the Elf introduces one additional rule. Now, <Code>J</Code> cards are <Link link='https://en.wikipedia.org/wiki/Joker_(playing_card)'>jokers</Link> - wildcards that can act like whatever card would make the hand the strongest type possible.</p><br/>
    <p>To balance this, <Code><Glow>J</Glow></Code> <Glow>cards are now the weakest</Glow> individual cards, weaker even than <Code>2</Code>. The other cards stay in the same order: <Code>A</Code>, <Code>K</Code>, <Code>Q</Code>, <Code>T</Code>, <Code>9</Code>, <Code>8</Code>, <Code>7</Code>, <Code>6</Code>, <Code>5</Code>, <Code>4</Code>, <Code>3</Code>, <Code>2</Code>, <Code>J</Code>.</p><br/>
    <p><Code>J</Code> cards can pretend to be whatever card is best for the purpose of determining hand type; for example, <Code>QJJQ2</Code> is now considered <Glow>four of a kind</Glow>. However, for the purpose of breaking ties between two hands of the same type, <Code>J</Code> is always treated as <Code>J</Code>, not the card it's pretending to be: <Code>JKKK2</Code> is weaker than <Code>QQQQ2</Code> because <Code>J</Code> is weaker than <Code>Q</Code>.</p><br/>
    <p>Now, the above example goes very differently:</p><br/>
    <CodeBlock>
        32T3K 765<br/>
        T55J5 684<br/>
        KK677 28<br/>
        KTJJT 220<br/>
        QQQJA 483
    </CodeBlock><br/>
    <List>
        <li><Code>32T3K</Code> is still the only <Glow>one pair</Glow>; it doesn't contain any jokers, so its strength doesn't increase.</li>
        <li><Code>KK677</Code> is now the only <Glow>two pair</Glow>, making it the second-weakest hand.</li>
        <li><Code>T55J5</Code>, <Code>KTJJT</Code>, and <Code>QQQJA</Code> are now all <Glow>four of a kind</Glow>! <Code>T55J5</Code> gets rank 3, <Code>QQQJA</Code> gets rank 4, and <Code>KTJJT</Code> gets rank 5.</li>
    </List><br/>
    <p>With the new joker rule, the total winnings in this example are <Code><Glow>5905</Glow></Code>.</p><br/>
    <p>Using the new joker rule, find the rank of every hand in your set. <Glow>What are the new total winnings?</Glow></p>
</>);
