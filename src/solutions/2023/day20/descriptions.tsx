import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';

export const part1Description = (<>
    <p>With your help, the Elves manage to find the right parts and fix all of the machines. Now, they just need to send the command to boot up the machines and get the sand flowing again.</p><br />
    <p>The machines are far apart and wired together with long <Glow>cables</Glow>. The cables don't connect to the machines directly, but rather to communication <Glow>modules</Glow> attached to the machines that perform various initialization tasks and also act as communication relays.</p><br />
    <p>Modules communicate using <Glow>pulses</Glow>. Each pulse is either a <Glow>high pulse</Glow> or a <Glow>low pulse</Glow>. When a module sends a pulse, it sends that type of pulse to each module in its list of <Glow>destination modules</Glow>.</p><br />
    <p>There are several different types of modules:</p><br />
    <p><Glow>Flip-flop</Glow> modules (prefix <Code>%</Code>) are either <Glow>on</Glow> or <Glow>off</Glow>; they are initially <Glow>off</Glow>. If a flip-flop module receives a high pulse, it is ignored and nothing happens. However, if a flip-flop module receives a low pulse, it <Glow>flips between on and off</Glow>. If it was off, it turns on and sends a high pulse. If it was on, it turns off and sends a low pulse.</p><br />
    <p><Glow>Conjunction</Glow> modules (prefix <Code>&</Code>) <Glow>remember</Glow> the type of the most recent pulse received from <Glow>each</Glow> of their connected input modules; they initially default to remembering a <Glow>low pulse</Glow> for each input. When a pulse is received, the conjunction module first updates its memory for that input. Then, if it remembers <Glow>high pulses</Glow> for all inputs, it sends a <Glow>low pulse</Glow>; otherwise, it sends a <Glow>high pulse</Glow>.</p><br />
    <p>There is a single <Glow>broadcast module</Glow> (named <Code>broadcaster</Code>). When it receives a pulse, it sends the same pulse to all of its destination modules.</p><br />
    <p>Here at Desert Machine Headquarters, there is a module with a single button on it called, aptly, the <Glow>button module</Glow>. When you push the button, a single <Glow>low pulse</Glow> is sent directly to the <Code>broadcaster</Code> module.</p><br />
    <p>After pushing the button, you must wait until all pulses have been delivered and fully handled before pushing it again. Never push the button if modules are still processing pulses.</p><br />
    <p>Pulses are always processed <Glow>in the order they are sent</Glow>. So, if a pulse is sent to modules <Code>a</Code>, <Code>b</Code>, and <Code>c</Code>, and then module <Code>a</Code> processes its pulse and sends more pulses, the pulses sent to modules <Code>b</Code> and <Code>c</Code> would have to be handled first.</p><br />
    <p>The module configuration (your puzzle input) lists each module. The name of the module is preceded by a symbol identifying its type, if any. The name is then followed by an arrow and a list of its destination modules. For example:</p><br />
    <CodeBlock>
        broadcaster -{'>'} a, b, c<br/>
        %a -{'>'} b<br/>
        %b -{'>'} c<br/>
        %c -{'>'} inv<br/>
        &inv -{'>'} a
    </CodeBlock><br />
    <p>In this module configuration, the broadcaster has three destination modules named <Code>a</Code>, <Code>b</Code>, and <Code>c</Code>. Each of these modules is a flip-flop module (as indicated by the <Code>%</Code> prefix). <Code>a</Code> outputs to <Code>b</Code> which outputs to <Code>c</Code> which outputs to another module named <Code>inv</Code>. <Code>inv</Code> is a conjunction module (as indicated by the <Code>&</Code> prefix) which, because it has only one input, acts like an <Hidden content='This puzzle originally had a separate inverter module type until I realized it was just a worse conjunction module.'>inverter</Hidden> (it sends the opposite of the pulse type it receives); it outputs to <Code>a</Code>.</p><br />
    <p>By pushing the button once, the following pulses are sent:</p><br />
    <CodeBlock>
        button -low-{'>'} broadcaster<br/>
        broadcaster -low-{'>'} a<br/>
        broadcaster -low-{'>'} b<br/>
        broadcaster -low-{'>'} c<br/>
        a -high-{'>'} b<br/>
        b -high-{'>'} c<br/>
        c -high-{'>'} inv<br/>
        inv -low-{'>'} a<br/>
        a -low-{'>'} b<br/>
        b -low-{'>'} c<br/>
        c -low-{'>'} inv<br/>
        inv -high-{'>'} a
    </CodeBlock><br />
    <p>After this sequence, the flip-flop modules all end up <Glow>off</Glow>, so pushing the button again repeats the same sequence.</p><br />
    <p>Here's a more interesting example:</p><br />
    <CodeBlock>
        broadcaster -{'>'} a<br/>
        %a -{'>'} inv, con<br/>
        &inv -{'>'} b<br/>
        %b -{'>'} con<br/>
        &con -{'>'} output
    </CodeBlock><br />
    <p>This module configuration includes the <Code>broadcaster</Code>, two flip-flops (named <Code>a</Code> and <Code>b</Code>), a single-input conjunction module (<Code>inv</Code>), a multi-input conjunction module (<Code>con</Code>), and an untyped module named <Code>output</Code> (for testing purposes). The multi-input conjunction module <Code>con</Code> watches the two flip-flop modules and, if they're both on, sends a <Glow>low pulse</Glow> to the <Code>output</Code> module.</p><br />
    <p>Here's what happens if you push the button once:</p><br />
    <CodeBlock>
        button -low-{'>'} broadcaster<br/>
        broadcaster -low-{'>'} a<br/>
        a -high-{'>'} inv<br/>
        a -high-{'>'} con<br/>
        inv -low-{'>'} b<br/>
        con -high-{'>'} output<br/>
        b -high-{'>'} con<br/>
        con -low-{'>'} output
    </CodeBlock><br />
    <p>Both flip-flops turn on and a low pulse is sent to <Code>output</Code>! However, now that both flip-flops are on and <Code>con</Code> remembers a high pulse from each of its two inputs, pushing the button a second time does something different:</p><br />
    <CodeBlock>
        button -low-{'>'} broadcaster<br/>
        broadcaster -low-{'>'} a<br/>
        a -low-{'>'} inv<br/>
        a -low-{'>'} con<br/>
        inv -high-{'>'} b<br/>
        con -high-{'>'} output
    </CodeBlock><br />
    <p>Flip-flop <Code>a</Code> turns off! Now, <Code>con</Code> remembers a low pulse from module <Code>a</Code>, and so it sends only a high pulse to <Code>output</Code>.</p><br />
    <p>Push the button a third time:</p><br />
    <CodeBlock>
        button -low-{'>'} broadcaster<br/>
        broadcaster -low-{'>'} a<br/>
        a -high-{'>'} inv<br/>
        a -high-{'>'} con<br/>
        inv -low-{'>'} b<br/>
        con -low-{'>'} output<br/>
        b -low-{'>'} con<br/>
        con -high-{'>'} output
    </CodeBlock><br />
    <p>This time, flip-flop <Code>a</Code> turns on, then flip-flop <Code>b</Code> turns off. However, before <Code>b</Code> can turn off, the pulse sent to <Code>con</Code> is handled first, so it <Glow>briefly remembers all high pulses</Glow> for its inputs and sends a low pulse to <Code>output</Code>. After that, flip-flop <Code>b</Code> turns off, which causes <Code>con</Code> to update its state and send a high pulse to <Code>output</Code>.</p><br />
    <p>Finally, with <Code>a</Code> on and <Code>b</Code> off, push the button a fourth time:</p><br />
    <CodeBlock>
        button -low-{'>'} broadcaster<br/>
        broadcaster -low-{'>'} a<br/>
        a -low-{'>'} inv<br/>
        a -low-{'>'} con<br/>
        inv -high-{'>'} b<br/>
        con -high-{'>'} output
    </CodeBlock><br />
    <p>This completes the cycle: <Code>a</Code> turns off, causing <Code>con</Code> to remember only low pulses and restoring all modules to their original states.</p><br />
    <p>To get the cables warmed up, the Elves have pushed the button <Code>1000</Code> times. How many pulses got sent as a result (including the pulses sent by the button itself)?</p><br />
    <p>In the first example, the same thing happens every time the button is pushed: <Code>8</Code> low pulses and <Code>4</Code> high pulses are sent. So, after pushing the button <Code>1000</Code> times, <Code>8000</Code> low pulses and <Code>4000</Code> high pulses are sent. Multiplying these together gives <Code><Glow>32000000</Glow></Code>.</p><br />
    <p>In the second example, after pushing the button <Code>1000</Code> times, <Code>4250</Code> low pulses and <Code>2750</Code> high pulses are sent. Multiplying these together gives <Code><Glow>11687500</Glow></Code>.</p><br />
    <p>Consult your module configuration; determine the number of low pulses and high pulses that would be sent after pushing the button <Code>1000</Code> times, waiting for all pulses to be fully handled after each push of the button. <Glow>What do you get if you multiply the total number of low pulses sent by the total number of high pulses sent?</Glow></p>
</>);

export const part2Description = (<>
</>);
