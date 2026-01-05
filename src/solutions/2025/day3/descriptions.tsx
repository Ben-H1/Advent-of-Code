import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>You descend a short staircase, enter the surprisingly vast lobby, and are quickly cleared by the security checkpoint. When you get to the main elevators, however, you discover that each one has a red light above it: they're all <Glow>offline</Glow>.</p><br />
    <p>"Sorry about that," an Elf apologizes as she tinkers with a nearby control panel. "Some kind of electrical surge seems to have fried them. I'll try to get them online soon."</p><br />
    <p>You explain your need to get further underground. "Well, you could at least take the escalator down to the printing department, not that you'd get much further than that without the elevators working. That is, you could if the escalator weren't also <Hidden content='Escalator temporarily stairs. Sorry for the convenience.'>offline</Hidden>."</p><br />
    <p>"But, don't worry! It's not fried; it just needs power. Maybe you can get it running while I keep working on the elevators."</p><br />
    <p>There are batteries nearby that can supply emergency power to the escalator for just such an occasion. The batteries are each labeled with their <Link link='https://adventofcode.com/2020/day/10'>joltage</Link> rating, a value from <Code>1</Code> to <Code>9</Code>. You make a note of their joltage ratings (your puzzle input). For example:</p><br />
    <CodeBlock>
        987654321111111<br />
        811111111111119<br />
        234234234234278<br />
        818181911112111
    </CodeBlock><br />
    <p>The batteries are arranged into <Glow>banks</Glow>; each line of digits in your input corresponds to a single bank of batteries. Within each bank, you need to turn on <Glow>exactly two</Glow> batteries; the joltage that the bank produces is equal to the number formed by the digits on the batteries you've turned on. For example, if you have a bank like <Code>12345</Code> and you turn on batteries <Code>2</Code> and <Code>4</Code>, the bank would produce <Code>24</Code> jolts. (You cannot rearrange batteries.)</p><br />
    <p>You'll need to find the largest possible joltage each bank can produce. In the above example:</p><br />
    <List>
        <li>In <Code><Glow>98</Glow>7654321111111</Code>, you can make the largest joltage possible, <Code><Glow>98</Glow></Code>, by turning on the first two batteries.</li>
        <li>In <Code><Glow>8</Glow>1111111111111<Glow>9</Glow></Code>, you can make the largest joltage possible by turning on the batteries labeled <Code>8</Code> and <Code>9</Code>, producing <Code><Glow>89</Glow></Code> jolts.</li>
        <li>In <Code>2342342342342<Glow>78</Glow></Code>, you can make <Code><Glow>78</Glow></Code> by turning on the last two batteries (marked <Code>7</Code> and <Code>8</Code>).</li>
        <li>In <Code>818181<Glow>9</Glow>1111<Glow>2</Glow>111</Code>, the largest joltage you can produce is <Code><Glow>92</Glow></Code>.</li>
    </List><br />
    <p>The total output joltage is the sum of the maximum joltage from each bank, so in this example, the total output joltage is <Code>98</Code> + <Code>89</Code> + <Code>78</Code> + <Code>92</Code> = <Code><Glow>357</Glow></Code>.</p><br />
    <p>There are many batteries in front of you. Find the maximum joltage possible from each bank; <Glow>what is the total output joltage?</Glow></p>
</>);

export const part2Description = (<>
    <p>The escalator doesn't move. The Elf explains that it probably needs more joltage to overcome the <Link link='https://en.wikipedia.org/wiki/Static_friction'>static friction</Link> of the system and hits the big red "joltage limit safety override" button. You lose count of the number of times she needs to confirm "yes, I'm sure" and decorate the lobby a bit while you wait.</p><br />
    <p>Now, you need to make the largest joltage by turning on <Glow>exactly twelve</Glow> batteries within each bank.</p><br />
    <p>The joltage output for the bank is still the number formed by the digits of the batteries you've turned on; the only difference is that now there will be <Code><Glow>12</Glow></Code> digits in each bank's joltage output instead of two.</p><br />
    <p>Consider again the example from before:</p><br />
    <CodeBlock>
        987654321111111<br />
        811111111111119<br />
        234234234234278<br />
        818181911112111
    </CodeBlock><br />
    <p>Now, the joltages are much larger:</p><br />
    <List>
        <li>In <Code><Glow>987654321111</Glow>111</Code>, the largest joltage can be found by turning on everything except some <Code>1</Code>s at the end to produce <Code><Glow>987654321111</Glow></Code>.</li>
        <li>In the digit sequence <Code><Glow>81111111111</Glow>111<Glow>9</Glow></Code>, the largest joltage can be found by turning on everything except some <Code>1</Code>s, producing <Code><Glow>811111111119</Glow></Code>.</li>
        <li>In <Code>23<Glow>4</Glow>2<Glow>34234234278</Glow></Code>, the largest joltage can be found by turning on everything except a <Code>2</Code> battery, a <Code>3</Code> battery, and another <Code>2</Code> battery near the start to produce <Code><Glow>434234234278</Glow></Code>.</li>
        <li>In <Code><Glow>8</Glow>1<Glow>8</Glow>1<Glow>8</Glow>1<Glow>911112111</Glow></Code>, the joltage <Code><Glow>888911112111</Glow></Code> is produced by turning on everything except some <Code>1</Code>s near the front.</li>
    </List><br />
    <p>The total output joltage is now much larger: <Code>987654321111</Code> + <Code>811111111119</Code> + <Code>434234234278</Code> + <Code>888911112111</Code> = <Code><Glow>3121910778619</Glow></Code>.</p><br />
    <p><Glow>What is the new total output joltage?</Glow></p>
</>);
