import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Link from '@components/text/Link';
import List from '@components/text/List';

const part1Description = (<>
    <p>The Elves of Gear Island are thankful for your help and send you on your way. They even have a hang glider that someone <Link link='https://adventofcode.com/2023/day/9'>stole</Link> from Desert Island; since you're already going that direction, it would help them a lot if you would use it to get down there and return it to them.</p><br/>
    <p>As you reach the bottom of the <Glow>relentless avalanche of machine parts</Glow>, you discover that they're already forming a formidable heap. Don't worry, though - a group of Elves is already here organizing the parts, and they have a <Glow>system</Glow>.</p><br/>
    <p>To start, each part is rated in each of four categories:</p><br/>
    <List>
        <li><Code>x</Code>: E<Glow>x</Glow>tremely cool looking</li>
        <li><Code>m</Code>: <Glow>M</Glow>usical (it makes a noise when you hit it)</li>
        <li><Code>a</Code>: <Glow>A</Glow>erodynamic</li>
        <li><Code>s</Code>: <Glow>S</Glow>hiny</li>
    </List><br/>
    <p>Then, each part is sent through a series of <Glow>workflows</Glow> that will ultimately <Glow>accept</Glow> or <Glow>reject</Glow> the part. Each workflow has a name and contains a list of <Glow>rules</Glow>; each rule specifies a condition and where to send the part if the condition is true. The first rule that matches the part being considered is applied immediately, and the part moves on to the destination described by the rule. (The last rule in each workflow has no condition and always applies if reached.)</p><br/>
    <p>Consider the workflow <Code>ex{'{'}x{'>'}10:one,m{'<'}20:two,a{'>'}30:R,A{'}'}</Code>. This workflow is named <Code>ex</Code> and contains four rules. If workflow <Code>ex</Code> were considering a specific part, it would perform the following steps in order:</p><br/>
    <List>
        <li>Rule "<Code>x{'>'}10:one</Code>": If the part's <Code>x</Code> is more than <Code>10</Code>, send the part to the workflow named <Code>one</Code>.</li>
        <li>Rule "<Code>m{'<'}20:two</Code>": Otherwise, if the part's <Code>m</Code> is less than <Code>20</Code>, send the part to the workflow named <Code>two</Code>.</li>
        <li>Rule "<Code>a{'>'}30:R</Code>": Otherwise, if the part's <Code>a</Code> is more than <Code>30</Code>, the part is immediately <Glow>rejected</Glow> (<Code>R</Code>).</li>
        <li>Rule "<Code>A</Code>": Otherwise, because no other rules matched the part, the part is immediately <Glow>accepted</Glow> (<Code>A</Code>).</li>
    </List><br/>
    <p>If a part is sent to another workflow, it immediately switches to the start of that workflow instead and never returns. If a part is <Glow>accepted</Glow> (sent to <Code>A</Code>) or <Glow>rejected</Glow> (sent to <Code>R</Code>), the part immediately stops any further processing.</p><br/>
    <p>The system works, but it's not keeping up with the torrent of weird metal shapes. The Elves ask if you can help sort a few parts and give you the list of workflows and some part ratings (your puzzle input). For example:</p><br/>
    <CodeBlock>
        px{'{'}a{'<'}2006:qkq,m{'>'}2090:A,rfg{'}'}<br/>
        pv{'{'}a{'>'}1716:R,A{'}'}<br/>
        lnx{'{'}m{'>'}1548:A,A{'}'}<br/>
        rfg{'{'}s{'<'}537:gd,x{'>'}2440:R,A{'}'}<br/>
        qs{'{'}s{'>'}3448:A,lnx{'}'}<br/>
        qkq{'{'}x{'<'}1416:A,crn{'}'}<br/>
        crn{'{'}x{'>'}2662:A,R{'}'}<br/>
        in{'{'}s{'<'}1351:px,qqz{'}'}<br/>
        qqz{'{'}s{'>'}2770:qs,m{'<'}1801:hdj,R{'}'}<br/>
        gd{'{'}a{'>'}3333:R,R{'}'}<br/>
        hdj{'{'}m{'>'}838:A,pv{'}'}<br/>
        <br/>
        {'{'}x=787,m=2655,a=1222,s=2876{'}'}<br/>
        {'{'}x=1679,m=44,a=2067,s=496{'}'}<br/>
        {'{'}x=2036,m=264,a=79,s=2244{'}'}<br/>
        {'{'}x=2461,m=1339,a=466,s=291{'}'}<br/>
        {'{'}x=2127,m=1623,a=2188,s=1013{'}'}
    </CodeBlock><br/>
    <p>The workflows are listed first, followed by a blank line, then the ratings of the parts the Elves would like you to sort. All parts begin in the workflow named <Code>in</Code>. In this example, the five listed parts go through the following workflows:</p><br/>
    <List>
        <li><Code>{'{'}x=787,m=2655,a=1222,s=2876{'}'}</Code>: <Code>in</Code> -{'>'} <Code>qqz</Code> -{'>'} <Code>qs</Code> -{'>'} <Code>lnx</Code> -{'>'} <Code><Glow>A</Glow></Code></li>
        <li><Code>{'{'}x=1679,m=44,a=2067,s=496{'}'}</Code>: <Code>in</Code> -{'>'} <Code>px</Code> -{'>'} <Code>rfg</Code> -{'>'} <Code>gd</Code> -{'>'} <Code><Glow>R</Glow></Code></li>
        <li><Code>{'{'}x=2036,m=264,a=79,s=2244{'}'}</Code>: <Code>in</Code> -{'>'} <Code>qqz</Code> -{'>'} <Code>hdj</Code> -{'>'} <Code>pv</Code> -{'>'} <Code><Glow>A</Glow></Code></li>
        <li><Code>{'{'}x=2461,m=1339,a=466,s=291{'}'}</Code>: <Code>in</Code> -{'>'} <Code>px</Code> -{'>'} <Code>qkq</Code> -{'>'} <Code>crn</Code> -{'>'} <Code><Glow>R</Glow></Code></li>
        <li><Code>{'{'}x=2127,m=1623,a=2188,s=1013{'}'}</Code>: <Code>in</Code> -{'>'} <Code>px</Code> -{'>'} <Code>rfg</Code> -{'>'} <Code><Glow>A</Glow></Code></li>
    </List><br/>
    <p>Ultimately, three parts are <Glow>accepted</Glow>. Adding up the <Code>x</Code>, <Code>m</Code>, <Code>a</Code>, and <Code>s</Code> rating for each of the accepted parts gives <Code>7540</Code> for the part with <Code>x=787</Code>, <Code>4623</Code> for the part with <Code>x=2036</Code>, and <Code>6951</Code> for the part with <Code>x=2127</Code>. Adding all of the ratings for <Glow>all</Glow> of the accepted parts gives the sum total of <Code><Glow>19114</Glow></Code>.</p><br/>
    <p>Sort through all of the parts you've been given; <Glow>what do you get if you add together all of the rating numbers for all of the parts that ultimately get accepted?</Glow></p>
</>);

const part2Description = (<>
    <p>Even with your help, the sorting process <Glow>still</Glow> isn't fast enough.</p><br/>
    <p>One of the Elves comes up with a new plan: rather than sort parts individually through all of these workflows, maybe you can figure out in advance which combinations of ratings will be accepted or rejected.</p><br/>
    <p>Each of the four ratings (<Code>x</Code>, <Code>m</Code>, <Code>a</Code>, <Code>s</Code>) can have an integer value ranging from a minimum of <Code>1</Code> to a maximum of <Code>4000</Code>. Of <Glow>all possible distinct combinations</Glow> of ratings, your job is to figure out which ones will be <Glow>accepted</Glow>.</p><br/>
    <p>In the above example, there are <Code><Glow>167409079868000</Glow></Code> distinct combinations of ratings that will be accepted.</p><br/>
    <p>Consider only your list of workflows; the list of part ratings that the Elves wanted you to sort is no longer relevant. <Glow>How many distinct combinations of ratings will be accepted by the Elves' workflows?</Glow></p>
</>);

export const descriptions = {
    part1Description,
    part2Description
};
