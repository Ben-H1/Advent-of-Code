import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';

export const part1Description = (<>
    <p>With your <Hidden content='Sublime.'>submarine's subterranean subsystems subsisting suboptimally</Hidden>, the only way you're getting out of this cave anytime soon is by finding a path yourself. Not just <Glow>a</Glow> path - the only way to know if you've found the <Glow>best</Glow> path is to find <Glow>all</Glow> of them.</p><br />
    <p>Fortunately, the sensors are still mostly working, and so you build a rough map of the remaining caves (your puzzle input). For example:</p><br />
    <CodeBlock>
        start-A<br />
        start-b<br />
        A-c<br />
        A-b<br />
        b-d<br />
        A-end<br />
        b-end
    </CodeBlock><br />
    <p>This is a list of how all of the caves are connected. You start in the cave named <Code>start</Code>, and your destination is the cave named <Code>end</Code>. An entry like <Code>b-d</Code> means that cave <Code>b</Code> is connected to cave <Code>d</Code> - that is, you can move between them.</p><br />
    <p>So, the above cave system looks roughly like this:</p><br />
    <CodeBlock>
        &nbsp;   start<br />
        &nbsp;   /   \<br />
        c--A-----b--d<br />
        &nbsp;   \   /<br />
        &nbsp;    end
    </CodeBlock><br />
    <p>Your goal is to find the number of distinct <Glow>paths</Glow> that start at <Code>start</Code>, end at <Code>end</Code>, and don't visit small caves more than once. There are two types of caves: <Glow>big</Glow> caves (written in uppercase, like <Code>A</Code>) and <Glow>small</Glow> caves (written in lowercase, like <Code>b</Code>). It would be a waste of time to visit any small cave more than once, but big caves are large enough that it might be worth visiting them multiple times. So, all paths you find should <Glow>visit small caves at most once</Glow>, and can <Glow>visit big caves any number of times</Glow>.</p><br />
    <p>Given these rules, there are <Code><Glow>10</Glow></Code> paths through this example cave system:</p><br />
    <CodeBlock>
        start,A,b,A,c,A,end<br />
        start,A,b,A,end<br />
        start,A,b,end<br />
        start,A,c,A,b,A,end<br />
        start,A,c,A,b,end<br />
        start,A,c,A,end<br />
        start,A,end<br />
        start,b,A,c,A,end<br />
        start,b,A,end<br />
        start,b,end
    </CodeBlock><br />
    <p>(Each line in the above list corresponds to a single path; the caves visited by that path are listed in the order they are visited and separated by commas.)</p><br />
    <p>Note that in this cave system, cave <Code>d</Code> is never visited by any path: to do so, cave <Code>b</Code> would need to be visited twice (once on the way to cave <Code>d</Code> and a second time when returning from cave <Code>d</Code>), and since cave <Code>b</Code> is small, this is not allowed.</p><br />
    <p>Here is a slightly larger example:</p><br />
    <CodeBlock>
        dc-end<br />
        HN-start<br />
        start-kj<br />
        dc-start<br />
        dc-HN<br />
        LN-dc<br />
        HN-end<br />
        kj-sa<br />
        kj-HN<br />
        kj-dc
    </CodeBlock><br />
    <p>The <Code>19</Code> paths through it are as follows:</p><br />
    <CodeBlock>
        start,HN,dc,HN,end<br />
        start,HN,dc,HN,kj,HN,end<br />
        start,HN,dc,end<br />
        start,HN,dc,kj,HN,end<br />
        start,HN,end<br />
        start,HN,kj,HN,dc,HN,end<br />
        start,HN,kj,HN,dc,end<br />
        start,HN,kj,HN,end<br />
        start,HN,kj,dc,HN,end<br />
        start,HN,kj,dc,end<br />
        start,dc,HN,end<br />
        start,dc,HN,kj,HN,end<br />
        start,dc,end<br />
        start,dc,kj,HN,end<br />
        start,kj,HN,dc,HN,end<br />
        start,kj,HN,dc,end<br />
        start,kj,HN,end<br />
        start,kj,dc,HN,end<br />
        start,kj,dc,end
    </CodeBlock><br />
    <p>Finally, this even larger example has <Code>226</Code> paths through it:</p><br />
    <CodeBlock>
        fs-end<br />
        he-DX<br />
        fs-he<br />
        start-DX<br />
        pj-DX<br />
        end-zg<br />
        zg-sl<br />
        zg-pj<br />
        pj-he<br />
        RW-he<br />
        fs-DX<br />
        pj-RW<br />
        zg-RW<br />
        start-pj<br />
        he-WI<br />
        zg-he<br />
        pj-fs<br />
        start-RW
    </CodeBlock><br />
    <p><Glow>How many paths through this cave system are there that visit small caves at most once?</Glow></p>
</>);

export const part2Description = (<>
    <p>Part 2 description</p>
</>);
