import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>You barely reach the safety of the cave when the whale smashes into the cave mouth, collapsing it. Sensors indicate another exit to this cave at a much greater depth, so you have no choice but to press on.</p><br />
    <p>As your submarine slowly makes its way through the cave system, you notice that the four-digit <Link link='https://en.wikipedia.org/wiki/Seven-segment_display'>seven-segment displays</Link> in your submarine are malfunctioning; <Hidden content='Yes, just the four-digit seven-segment ones. Whole batch must have been faulty.'>they must have been damaged</Hidden> during the escape. You'll be in a lot of trouble without them, so you'd better figure out what's wrong.</p><br />
    <p>Each digit of a seven-segment display is rendered by turning on or off any of seven segments named <Code>a</Code> through <Code>g</Code>:</p><br />
    <CodeBlock>
        &nbsp; 0:      1:      2:      3:      4:<br />
        &nbsp;<Glow>aaaa</Glow>    ....    <Glow>aaaa    aaaa</Glow>    ....<br />
        <Glow>b    c</Glow>  .    <Glow>c</Glow>  .    <Glow>c</Glow>  .    <Glow>c  b    c</Glow><br />
        <Glow>b    c</Glow>  .    <Glow>c</Glow>  .    <Glow>c</Glow>  .    <Glow>c  b    c</Glow><br />
        &nbsp;....    ....    <Glow>dddd    dddd    dddd</Glow><br />
        <Glow>e    f</Glow>  .    <Glow>f  e</Glow>    .  .    <Glow>f</Glow>  .    <Glow>f</Glow><br />
        <Glow>e    f</Glow>  .    <Glow>f  e</Glow>    .  .    <Glow>f</Glow>  .    <Glow>f</Glow><br />
        &nbsp;<Glow>gggg</Glow>    ....    <Glow>gggg    gggg</Glow>    ....<br />
        <br />
        &nbsp; 5:      6:      7:      8:      9:<br />
        &nbsp;<Glow>aaaa    aaaa    aaaa    aaaa    aaaa</Glow><br />
        <Glow>b</Glow>    .  <Glow>b</Glow>    .  .    <Glow>c  b    c  b    c</Glow><br />
        <Glow>b</Glow>    .  <Glow>b</Glow>    .  .    <Glow>c  b    c  b    c</Glow><br />
        &nbsp;<Glow>dddd    dddd</Glow>    ....    <Glow>dddd    dddd</Glow><br />
        .    <Glow>f  e    f</Glow>  .    <Glow>f  e    f</Glow>  .    <Glow>f</Glow><br />
        .    <Glow>f  e    f</Glow>  .    <Glow>f  e    f</Glow>  .    <Glow>f</Glow><br />
        &nbsp;<Glow>gggg    gggg</Glow>    ....    <Glow>gggg    gggg</Glow>
    </CodeBlock><br />
    <p>So, to render a <Code>1</Code>, only segments <Code>c</Code> and <Code>f</Code> would be turned on; the rest would be off. To render a <Code>7</Code>, only segments <Code>a</Code>, <Code>c</Code>, and <Code>f</Code> would be turned on.</p><br />
    <p>The problem is that the signals which control the segments have been mixed up on each display. The submarine is still trying to display numbers by producing output on signal wires <Code>a</Code> through <Code>g</Code>, but those wires are connected to segments <Glow>randomly</Glow>. Worse, the wire/segment connections are mixed up separately for each four-digit display! (All of the digits <Glow>within</Glow> a display use the same connections, though.)</p><br />
    <p>So, you might know that only signal wires <Code>b</Code> and <Code>g</Code> are turned on, but that doesn't mean <Glow>segments</Glow> <Code>b</Code> and <Code>g</Code> are turned on: the only digit that uses two segments is <Code>1</Code>, so it must mean segments <Code>c</Code> and <Code>f</Code> are meant to be on. With just that information, you still can't tell which wire (<Code>b</Code>/<Code>g</Code>) goes to which segment (<Code>c</Code>/<Code>f</Code>). For that, you'll need to collect more information.</p><br />
    <p>For each display, you watch the changing signals for a while, make a note of <Glow>all ten unique signal patterns</Glow> you see, and then write down a single <Glow>four digit output value</Glow> (your puzzle input). Using the signal patterns, you should be able to work out which pattern corresponds to which digit.</p><br />
    <p>For example, here is what you might see in a single entry in your notes:</p><br />
    <CodeBlock>
        acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab |<br />
        cdfeb fcadb cdfeb cdbaf
    </CodeBlock><br />
    <p>(The entry is wrapped here to two lines so it fits; in your notes, it will all be on a single line.)</p><br />
    <p>Each entry consists of ten <Glow>unique signal patterns</Glow>, a <Code>|</Code> delimiter, and finally the <Glow>four digit output value</Glow>. Within an entry, the same wire/segment connections are used (but you don't know what the connections actually are). The unique signal patterns correspond to the ten different ways the submarine tries to render a digit using the current wire/segment connections. Because <Code>7</Code> is the only digit that uses three segments, <Code>dab</Code> in the above example means that to render a <Code>7</Code>, signal lines <Code>d</Code>, <Code>a</Code>, and <Code>b</Code> are on. Because <Code>4</Code> is the only digit that uses four segments, <Code>eafb</Code> means that to render a <Code>4</Code>, signal lines <Code>e</Code>, <Code>a</Code>, <Code>f</Code>, and <Code>b</Code> are on.</p><br />
    <p>Using this information, you should be able to work out which combination of signal wires corresponds to each of the ten digits. Then, you can decode the four digit output value. Unfortunately, in the above example, all of the digits in the output value (<Code>cdfeb fcadb cdfeb cdbaf</Code>) use five segments and are more difficult to deduce.</p><br />
    <p>For now, <Glow>focus on the easy digits</Glow>. Consider this larger example:</p><br />
    <CodeBlock>
        be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb |<br />
        <Glow>fdgacbe</Glow> cefdb cefbgd <Glow>gcbe</Glow><br />
        edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec |<br />
        fcgedb <Glow>cgb</Glow> <Glow>dgebacf</Glow> <Glow>gc</Glow><br />
        fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef |<br />
        <Glow>cg</Glow> <Glow>cg</Glow> fdcagb <Glow>cbg</Glow><br />
        fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega |<br />
        efabcd cedba gadfec <Glow>cb</Glow><br />
        aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga |<br />
        <Glow>gecf</Glow> <Glow>egdcabf</Glow> <Glow>bgf</Glow> bfgea<br />
        fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf |<br />
        <Glow>gebdcfa</Glow> <Glow>ecba</Glow> <Glow>ca</Glow> <Glow>fadegcb</Glow><br />
        dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf |<br />
        <Glow>cefg</Glow> dcbef <Glow>fcge</Glow> <Glow>gbcadfe</Glow><br />
        bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd |<br />
        <Glow>ed</Glow> bcgafe cdgba cbgef<br />
        egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg |<br />
        <Glow>gbdfcae</Glow> <Glow>bgc</Glow> <Glow>cg</Glow> <Glow>cgb</Glow><br />
        gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc |<br />
        <Glow>fgae</Glow> cfgab <Glow>fg</Glow> bagce
    </CodeBlock><br />
    <p>Because the digits <Code>1</Code>, <Code>4</Code>, <Code>7</Code>, and <Code>8</Code> each use a unique number of segments, you should be able to tell which combinations of signals correspond to those digits. Counting <Glow>only digits in the output values</Glow> (the part after <Code>|</Code> on each line), in the above example, there are <Code><Glow>26</Glow></Code> instances of digits that use a unique number of segments (highlighted above).</p><br />
    <p><Glow>In the output values, how many times do digits</Glow> <Code><Glow>1</Glow></Code><Glow>,</Glow> <Code><Glow>4</Glow></Code><Glow>,</Glow> <Code><Glow>7</Glow></Code><Glow>, or</Glow> <Code><Glow>8</Glow></Code> <Glow>appear?</Glow></p>
</>);

export const part2Description = (<>
    <p>Through a little deduction, you should now be able to determine the remaining digits. Consider again the first example above:</p><br />
    <CodeBlock>
        acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab |<br />
        cdfeb fcadb cdfeb cdbaf
    </CodeBlock><br />
    <p>After some careful analysis, the mapping between signal wires and segments only make sense in the following configuration:</p><br />
    <CodeBlock>
        &nbsp;dddd<br />
        e    a<br />
        e    a<br />
        &nbsp;ffff<br />
        g    b<br />
        g    b<br />
        &nbsp;cccc
    </CodeBlock><br />
    <p>So, the unique signal patterns would correspond to the following digits:</p><br />
    <List>
        <li><Code>acedgfb</Code>: <Code>8</Code></li>
        <li><Code>cdfbe</Code>: <Code>5</Code></li>
        <li><Code>gcdfa</Code>: <Code>2</Code></li>
        <li><Code>fbcad</Code>: <Code>3</Code></li>
        <li><Code>dab</Code>: <Code>7</Code></li>
        <li><Code>cefabd</Code>: <Code>9</Code></li>
        <li><Code>cdfgeb</Code>: <Code>6</Code></li>
        <li><Code>eafb</Code>: <Code>4</Code></li>
        <li><Code>cagedb</Code>: <Code>0</Code></li>
        <li><Code>ab</Code>: <Code>1</Code></li>
    </List><br />
    <p>Then, the four digits of the output value can be decoded:</p><br />
    <List>
        <li><Code>cdfeb</Code>: <Code><Glow>5</Glow></Code></li>
        <li><Code>fcadb</Code>: <Code><Glow>3</Glow></Code></li>
        <li><Code>cdfeb</Code>: <Code><Glow>5</Glow></Code></li>
        <li><Code>cdbaf</Code>: <Code><Glow>3</Glow></Code></li>
    </List><br />
    <p>Therefore, the output value for this entry is <Code><Glow>5353</Glow></Code>.</p><br />
    <p>Following this same process for each entry in the second, larger example above, the output value of each entry can be determined:</p><br />
    <List>
        <li><Code>fdgacbe cefdb cefbgd gcbe</Code>: <Code>8394</Code></li>
        <li><Code>fcgedb cgb dgebacf gc</Code>: <Code>9781</Code></li>
        <li><Code>cg cg fdcagb cbg</Code>: <Code>1197</Code></li>
        <li><Code>efabcd cedba gadfec cb</Code>: <Code>9361</Code></li>
        <li><Code>gecf egdcabf bgf bfgea</Code>: <Code>4873</Code></li>
        <li><Code>gebdcfa ecba ca fadegcb</Code>: <Code>8418</Code></li>
        <li><Code>cefg dcbef fcge gbcadfe</Code>: <Code>4548</Code></li>
        <li><Code>ed bcgafe cdgba cbgef</Code>: <Code>1625</Code></li>
        <li><Code>gbdfcae bgc cg cgb</Code>: <Code>8717</Code></li>
        <li><Code>fgae cfgab fg bagce</Code>: <Code>4315</Code></li>
    </List><br />
    <p>Adding all of the output values in this larger example produces <Code><Glow>61229</Glow></Code>.</p><br />
    <p>For each entry, determine all of the wire/segment connections and decode the four-digit output values. <Glow>What do you get if you add up all of the output values?</Glow></p>
</>);
