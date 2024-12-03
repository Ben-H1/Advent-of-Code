import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import List from '@components/text/List';

export const part1Description = (<>
    <p>You ask the submarine to determine the best route out of the deep-sea cave, but it only replies:</p><br />
    <CodeBlock>
        Syntax error in navigation subsystem on line: <Hidden content={`Some days, that's just how it is.`}>all of them</Hidden>
    </CodeBlock><br />
    <p><Glow>All of them?!</Glow> The damage is worse than you thought. You bring up a copy of the navigation subsystem (your puzzle input).</p><br />
    <p>The navigation subsystem syntax is made of several lines containing <Glow>chunks</Glow>. There are one or more chunks on each line, and chunks contain zero or more other chunks. Adjacent chunks are not separated by any delimiter; if one chunk stops, the next chunk (if any) can immediately start. Every chunk must <Glow>open</Glow> and <Glow>close</Glow> with one of four legal pairs of matching characters:</p><br />
    <List>
        <li>If a chunk opens with <Code>(</Code>, it must close with <Code>)</Code>.</li>
        <li>If a chunk opens with <Code>[</Code>, it must close with <Code>]</Code>.</li>
        <li>If a chunk opens with <Code>{'{'}</Code>, it must close with <Code>{'}'}</Code>.</li>
        <li>If a chunk opens with <Code>{'<'}</Code>, it must close with <Code>{'>'}</Code>.</li>
    </List><br />
    <p>So, <Code>()</Code> is a legal chunk that contains no other chunks, as is <Code>[]</Code>. More complex but valid chunks include <Code>([])</Code>, <Code>{'{()()()}'}</Code>, <Code>{'<([{}])>'}</Code>, <Code>{'[<>({}){}[([])<>]]'}</Code>, and even <Code>(((((((((())))))))))</Code>.</p><br />
    <p>Some lines are <Glow>incomplete</Glow>, but others are <Glow>corrupted</Glow>. Find and discard the corrupted lines first.</p><br />
    <p>A corrupted line is one where a chunk <Glow>closes with the wrong character</Glow> - that is, where the characters it opens and closes with do not form one of the four legal pairs listed above.</p><br />
    <p>Examples of corrupted chunks include <Code>(]</Code>, <Code>{'{()()()>'}</Code>, <Code>{'(((()))}'}</Code>, and <Code>{'<([]){()}[{}])'}</Code>. Such a chunk can appear anywhere within a line, and its presence causes the whole line to be considered corrupted.</p><br />
    <p>For example, consider the following navigation subsystem:</p><br />
    <CodeBlock>
        {'[({(<(())[]>[[{[]{<()<>>'}<br />
        {'[(()[<>])]({[<{<<[]>>('}<br />
        {'{([(<{}[<>[]}>{[]{[(<()>'}<br />
        {'(((({<>}<{<{<>}{[]{[]{}'}<br />
        {'[[<[([]))<([[{}[[()]]]'}<br />
        {'[{[{({}]{}}([{[{{{}}([]'}<br />
        {'{<[[]]>}<{[{[{[]{()[[[]'}<br />
        {'[<(<(<(<{}))><([]([]()'}<br />
        {'<{([([[(<>()){}]>(<<{{'}<br />
        {'<{([{{}}[<[[[<>{}]]]>[]]'}
    </CodeBlock><br />
    <p>Some of the lines aren't corrupted, just incomplete; you can ignore these lines for now. The remaining five lines are corrupted:</p><br />
    <List>
        <li><Code>{'{([(<{}[<>[]}>{[]{[(<()>'}</Code> - Expected <Code>]</Code>, but found <Code>{'}'}</Code> instead.</li>
        <li><Code>{'[[<[([]))<([[{}[[()]]]'}</Code> - Expected <Code>]</Code>, but found <Code>)</Code> instead.</li>
        <li><Code>{'[{[{({}]{}}([{[{{{}}([]'}</Code> - Expected <Code>)</Code>, but found <Code>]</Code> instead.</li>
        <li><Code>{'[<(<(<(<{}))><([]([]()'}</Code> - Expected <Code>{'>'}</Code>, but found <Code>)</Code> instead.</li>
        <li><Code>{'<{([([[(<>()){}]>(<<{{'}</Code> - Expected <Code>]</Code>, but found <Code>{'>'}</Code> instead.</li>
    </List><br />
    <p>Stop at the first incorrect closing character on each corrupted line.</p><br />
    <p>Did you know that syntax checkers actually have contests to see who can get the high score for syntax errors in a file? It's true! To calculate the syntax error score for a line, take the <Glow>first illegal character</Glow> on the line and look it up in the following table:</p><br />
    <List>
        <li><Code>)</Code>: <Code>3</Code> points.</li>
        <li><Code>]</Code>: <Code>57</Code> points.</li>
        <li><Code>{'}'}</Code>: <Code>1197</Code> points.</li>
        <li><Code>{'>'}</Code>: <Code>25137</Code> points.</li>
    </List><br />
    <p>In the above example, an illegal <Code>)</Code> was found twice (<Code>2*3 = <Glow>6</Glow></Code> points), an illegal <Code>]</Code> was found once (<Code><Glow>57</Glow></Code> points), an illegal <Code>{'}'}</Code> was found once (<Code><Glow>1197</Glow></Code> points), and an illegal <Code>{'>'}</Code> was found once (<Code><Glow>25137</Glow></Code> points). So, the total syntax error score for this file is <Code>6+57+1197+25137 = <Glow>26397</Glow></Code> points!</p><br />
    <p>Find the first illegal character in each corrupted line of the navigation subsystem. <Glow>What is the total syntax error score for those errors?</Glow></p>
</>);

export const part2Description = (<>
    <p>Now, discard the corrupted lines.  The remaining lines are <Glow>incomplete</Glow>.</p><br />
    <p>Incomplete lines don't have any incorrect characters - instead, they're missing some closing characters at the end of the line. To repair the navigation subsystem, you just need to figure out <Glow>the sequence of closing characters</Glow> that complete all open chunks in the line.</p><br />
    <p>You can only use closing characters (<Code>)</Code>, <Code>]</Code>, <Code>{'}'}</Code>, or <Code>{'>'}</Code>), and you must add them in the correct order so that only legal pairs are formed and all chunks end up closed.</p><br />
    <p>In the example above, there are five incomplete lines:</p><br />
    <List>
        <li><Code>{'[({(<(())[]>[[{[]{<()<>'}</Code> - Complete by adding <Code>{'}}]])})]'}</Code>.</li>
        <li><Code>{'[(()[<>])]({[<{<[]>('}</Code> - Complete by adding <Code>{')}>]})'}</Code>.</li>
        <li><Code>{'(((({<>}<{<{<>}{[]{[]{}'}</Code> - Complete by adding <Code>{'}}>}>))))'}</Code>.</li>
        <li><Code>{'{<[[]]>}<{[{[{[]{()[[[]'}</Code> - Complete by adding <Code>{']]}}]}]}>'}</Code>.</li>
        <li><Code>{'<{([{{}}[<[[[<>{}]]]>[]]'}</Code> - Complete by adding <Code>{'])}>'}</Code>.</li>
    </List><br />
    <p>Did you know that autocomplete tools <Glow>also</Glow> have contests? It's true! The score is determined by considering the completion string character-by-character. Start with a total score of <Code>0</Code>. Then, for each character, multiply the total score by 5 and then increase the total score by the point value given for the character in the following table:</p><br />
    <List>
        <li><Code>)</Code>: <Code>1</Code> point.</li>
        <li><Code>]</Code>: <Code>2</Code> points.</li>
        <li><Code>{'}'}</Code>: <Code>3</Code> points.</li>
        <li><Code>{'>'}</Code>: <Code>4</Code> points.</li>
    </List><br />
    <p>So, the last completion string above - <Code>{'])}>'}</Code> - would be scored as follows:</p><br />
    <List>
        <li>Start with a total score of <Code>0</Code>.</li>
        <li>Multiply the total score by 5 to get <Code>0</Code>, then add the value of <Code>]</Code> (2) to get a new total score of <Code>2</Code>.</li>
        <li>Multiply the total score by 5 to get <Code>10</Code>, then add the value of <Code>)</Code> (1) to get a new total score of <Code>11</Code>.</li>
        <li>Multiply the total score by 5 to get <Code>55</Code>, then add the value of <Code>{'}'}</Code> (3) to get a new total score of <Code>58</Code>.</li>
        <li>Multiply the total score by 5 to get <Code>290</Code>, then add the value of <Code>{'>'}</Code> (4) to get a new total score of <Code>294</Code>.</li>
    </List><br />
    <p>The five lines' completion strings have total scores as follows:</p><br />
    <List>
        <li><Code>{'}}]])})]'}</Code> - <Code>288957</Code> total points.</li>
        <li><Code>{')}>]})'}</Code> - <Code>5566</Code> total points.</li>
        <li><Code>{'}}>}>))))'}</Code> - <Code>1480781</Code> total points.</li>
        <li><Code>{']]}}]}]}>'}</Code> - <Code>995444</Code> total points.</li>
        <li><Code>{'])}>'}</Code> - <Code>294</Code> total points.</li>
    </List><br />
    <p>Autocomplete tools are an odd bunch: the winner is found by <Glow>sorting</Glow> all of the scores and then taking the <Glow>middle</Glow> score. (There will always be an odd number of scores to consider.) In this example, the middle score is <Code><Glow>288957</Glow></Code> because there are the same number of scores smaller and larger than it.</p><br />
    <p>Find the completion string for each incomplete line, score the completion strings, and sort the scores. <Glow>What is the middle score?</Glow></p>
</>);
