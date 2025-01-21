import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>The Historians push the button on their strange device, but this time, you all just feel like you're <Link link='https://adventofcode.com/2018/day/6'>falling</Link>.</p><br />
    <p>"Situation critical", the device announces in a familiar voice. "Bootstrapping process failed. Initializing debugger...."</p><br />
    <p>The small handheld device suddenly unfolds into an entire computer! The Historians look around nervously before one of them tosses it to you.</p><br />
    <p>This seems to be a 3-bit computer: its program is a list of 3-bit numbers (0 through 7), like <Code>0,1,2,3</Code>. The computer also has three <Glow>registers</Glow> named <Code>A</Code>, <Code>B</Code>, and <Code>C</Code>, but these registers aren't limited to 3 bits and can instead hold any integer.</p><br />
    <p>The computer knows <Glow>eight instructions</Glow>, each identified by a 3-bit number (called the instruction's <Glow>opcode</Glow>). Each instruction also reads the 3-bit number after it as an input; this is called its <Glow>operand</Glow>.</p><br />
    <p>A number called the <Glow>instruction pointer</Glow> identifies the position in the program from which the next opcode will be read; it starts at <Code>0</Code>, pointing at the first 3-bit number in the program. Except for jump instructions, the instruction pointer increases by <Code>2</Code> after each instruction is processed (to move past the instruction's opcode and its operand). If the computer tries to read an opcode past the end of the program, it instead <Glow>halts</Glow>.</p><br />
    <p>So, the program <Code>0,1,2,3</Code> would run the instruction whose opcode is <Code>0</Code> and pass it the operand <Code>1</Code>, then run the instruction having opcode <Code>2</Code> and pass it the operand <Code>3</Code>, then halt.</p><br />
    <p>There are two types of operands; each instruction specifies the type of its operand. The value of a <Glow>literal operand</Glow> is the operand itself. For example, the value of the literal operand <Code>7</Code> is the number <Code>7</Code>. The value of a <Glow>combo operand</Glow> can be found as follows:</p><br />
    <List>
        <li>Combo operands <Code>0</Code> through <Code>3</Code> represent literal values <Code>0</Code> through <Code>3</Code>.</li>
        <li>Combo operand <Code>4</Code> represents the value of register <Code>A</Code>.</li>
        <li>Combo operand <Code>5</Code> represents the value of register <Code>B</Code>.</li>
        <li>Combo operand <Code>6</Code> represents the value of register <Code>C</Code>.</li>
        <li>Combo operand <Code>7</Code> is reserved and will not appear in valid programs.</li>
    </List><br />
    <p>The eight instructions are as follows:</p><br />
    <p>The <Code><Glow>adv</Glow></Code> instruction (opcode <Code><Glow>0</Glow></Code>) performs <Glow>division</Glow>. The numerator is the value in the <Code>A</Code> register. The denominator is found by raising 2 to the power of the instruction's <Glow>combo</Glow> operand. (So, an operand of <Code>2</Code> would divide <Code>A</Code> by <Code>4</Code> (<Code>2^2</Code>); an operand of <Code>5</Code> would divide <Code>A</Code> by <Code>2^B</Code>.) The result of the division operation is <Glow>truncated</Glow> to an integer and then written to the <Code>A</Code> register.</p><br />
    <p>The <Code><Glow>bxl</Glow></Code> instruction (opcode <Code><Glow>1</Glow></Code>) calculates the <Link link='https://en.wikipedia.org/wiki/Bitwise_operation#XOR'>bitwise XOR</Link> of register <Code>B</Code> and the instruction's <Glow>literal</Glow> operand, then stores the result in register <Code>B</Code>.</p><br />
    <p>The <Code><Glow>bst</Glow></Code> instruction (opcode <Code><Glow>2</Glow></Code>) calculates the value of its <Glow>combo</Glow> operand <Link link='https://en.wikipedia.org/wiki/Modulo'>modulo</Link> 8 (thereby keeping only its lowest 3 bits), then writes that value to the <Code>B</Code> register.</p><br />
    <p>The <Code><Glow>jnz</Glow></Code> instruction (opcode <Code><Glow>3</Glow></Code>) does <Glow>nothing</Glow> if the <Code>A</Code> register is <Code>0</Code>. However, if the <Code>A</Code> register is <Glow>not zero</Glow>, it <Hidden content='The instruction does this using a little trampoline.'><Glow>jumps</Glow></Hidden> by setting the instruction pointer to the value of its <Glow>literal</Glow> operand; if this instruction jumps, the instruction pointer is <Glow>not</Glow> increased by <Code>2</Code> after this instruction.</p><br />
    <p>The <Code><Glow>bxc</Glow></Code> instruction (opcode <Code><Glow>4</Glow></Code>) calculates the <Glow>bitwise XOR</Glow> of register <Code>B</Code> and register <Code>C</Code>, then stores the result in register <Code>B</Code>. (For legacy reasons, this instruction reads an operand but <Glow>ignores</Glow> it.)</p><br />
    <p>The <Code><Glow>out</Glow></Code> instruction (opcode <Code><Glow>5</Glow></Code>) calculates the value of its <Glow>combo</Glow> operand modulo 8, then <Glow>outputs</Glow> that value. (If a program outputs multiple values, they are separated by commas.)</p><br />
    <p>The <Code><Glow>bdv</Glow></Code> instruction (opcode <Code><Glow>6</Glow></Code>) works exactly like the <Code>adv</Code> instruction except that the result is stored in the <Code><Glow>B</Glow></Code> <Glow>register</Glow>. (The numerator is still read from the <Code>A</Code> register.)</p><br />
    <p>The <Code><Glow>cdv</Glow></Code> instruction (opcode <Code><Glow>7</Glow></Code>) works exactly like the <Code>adv</Code> instruction except that the result is stored in the <Code><Glow>C</Glow></Code> <Glow>register</Glow>. (The numerator is still read from the <Code>A</Code> register.)</p><br />
    <p>Here are some examples of instruction operation:</p><br />
    <List>
        <li>If register <Code>C</Code> contains <Code>9</Code>, the program <Code>2,6</Code> would set register <Code>B</Code> to <Code>1</Code>.</li>
        <li>If register <Code>A</Code> contains <Code>10</Code>, the program <Code>5,0,5,1,5,4</Code> would output <Code>0,1,2</Code>.</li>
        <li>If register <Code>A</Code> contains <Code>2024</Code>, the program <Code>0,1,5,4,3,0</Code> would output <Code>4,2,5,6,7,7,7,7,3,1,0</Code> and leave <Code>0</Code> in register <Code>A</Code>.</li>
        <li>If register <Code>B</Code> contains <Code>29</Code>, the program <Code>1,7</Code> would set register <Code>B</Code> to <Code>26</Code>.</li>
        <li>If register <Code>B</Code> contains <Code>2024</Code> and register <Code>C</Code> contains <Code>43690</Code>, the program <Code>4,0</Code> would set register <Code>B</Code> to <Code>44354</Code>.</li>
    </List><br />
    <p>The Historians' strange device has finished initializing its debugger and is displaying some <Glow>information about the program it is trying to run</Glow> (your puzzle input). For example:</p><br />
    <CodeBlock>
    Register A: 729<br />
    Register B: 0<br />
    Register C: 0<br />
    <br />
    Program: 0,1,5,4,3,0
    </CodeBlock><br />
    <p>Your first task is to <Glow>determine what the program is trying to output</Glow>. To do this, initialize the registers to the given values, then run the given program, collecting any output produced by <Code>out</Code> instructions. (Always join the values produced by <Code>out</Code> instructions with commas.) After the above program halts, its final output will be <Code><Glow>4,6,3,5,6,3,5,2,1,0</Glow></Code>.</p><br />
    <p>Using the information provided by the debugger, initialize the registers to the given values, then run the program. Once it halts, <Glow>what do you get if you use commas to join the values it output into a single string?</Glow></p>
</>);

export const part2Description = (<>
    <p>Part 2 description</p>
</>);
