import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Hidden from '@components/text/Hidden';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>You enter a large cavern full of rare bioluminescent <Link link='https://www.youtube.com/watch?v=eih-VSaS2g0'>dumbo octopuses</Link>! They seem to not like the Christmas lights on your submarine, so you turn them off for now.</p><br />
    <p>There are 100 <Hidden content={`I know it's weird; I grew up saying 'octopi' too.`}>octopuses</Hidden> arranged neatly in a 10 by 10 grid. Each octopus slowly gains <Glow>energy</Glow> over time and <Glow>flashes</Glow> brightly for a moment when its energy is full. Although your lights are off, maybe you could navigate through the cave without disturbing the octopuses if you could predict when the flashes of light will happen.</p><br />
    <p>Each octopus has an <Glow>energy level</Glow> - your submarine can remotely measure the energy level of each octopus (your puzzle input). For example:</p><br />
    <CodeBlock>
        5483143223<br />
        2745854711<br />
        5264556173<br />
        6141336146<br />
        6357385478<br />
        4167524645<br />
        2176841721<br />
        6882881134<br />
        4846848554<br />
        5283751526
    </CodeBlock><br />
    <p>The energy level of each octopus is a value between <Code>0</Code> and <Code>9</Code>. Here, the top-left octopus has an energy level of <Code>5</Code>, the bottom-right one has an energy level of <Code>6</Code>, and so on.</p><br />
    <p>You can model the energy levels and flashes of light in <Glow>steps</Glow>. During a single step, the following occurs:</p><br />
    <List>
        <li>First, the energy level of each octopus increases by <Code>1</Code>.</li>
        <li>Then, any octopus with an energy level greater than <Code>9</Code> <Glow>flashes</Glow>. This increases the energy level of all adjacent octopuses by <Code>1</Code>, including octopuses that are diagonally adjacent. If this causes an octopus to have an energy level greater than <Code>9</Code>, it <Glow>also flashes</Glow>. This process continues as long as new octopuses keep having their energy level increased beyond <Code>9</Code>. (An octopus can only flash <Glow>at most once per step</Glow>.)</li>
        <li>Finally, any octopus that flashed during this step has its energy level set to <Code>0</Code>, as it used all of its energy to flash.</li>
    </List><br />
    <p>Adjacent flashes can cause an octopus to flash on a step even if it begins that step with very little energy. Consider the middle octopus with <Code>1</Code> energy in this situation:</p><br />
    <CodeBlock>
        Before any steps:<br />
        11111<br />
        19991<br />
        19191<br />
        19991<br />
        11111<br />
        <br />
        After step 1:<br />
        34543<br />
        4<Glow>000</Glow>4<br />
        5<Glow>000</Glow>5<br />
        4<Glow>000</Glow>4<br />
        34543<br />
        <br />
        After step 2:<br />
        45654<br />
        51115<br />
        61116<br />
        51115<br />
        45654
    </CodeBlock><br />
    <p>An octopus is <Glow>highlighted</Glow> when it flashed during the given step.</p><br />
    <p>Here is how the larger example above progresses:</p><br />
    <CodeBlock>
        Before any steps:<br />
        5483143223<br />
        2745854711<br />
        5264556173<br />
        6141336146<br />
        6357385478<br />
        4167524645<br />
        2176841721<br />
        6882881134<br />
        4846848554<br />
        5283751526<br />
        <br />
        After step 1:<br />
        6594254334<br />
        3856965822<br />
        6375667284<br />
        7252447257<br />
        7468496589<br />
        5278635756<br />
        3287952832<br />
        7993992245<br />
        5957959665<br />
        6394862637<br />
        <br />
        After step 2:<br />
        88<Glow>0</Glow>7476555<br />
        5<Glow>0</Glow>89<Glow>0</Glow>87<Glow>0</Glow>54<br />
        85978896<Glow>0</Glow>8<br />
        84857696<Glow>00</Glow><br />
        87<Glow>00</Glow>9<Glow>0</Glow>88<Glow>00</Glow><br />
        66<Glow>000</Glow>88989<br />
        68<Glow>0000</Glow>5943<br />
        <Glow>000000</Glow>7456<br />
        9<Glow>000000</Glow>876<br />
        87<Glow>0000</Glow>6848<br />
        <br />
        After step 3:<br />
        <Glow>00</Glow>5<Glow>0</Glow>9<Glow>00</Glow>866<br />
        85<Glow>00</Glow>8<Glow>00</Glow>575<br />
        99<Glow>000000</Glow>39<br />
        97<Glow>000000</Glow>41<br />
        9935<Glow>0</Glow>8<Glow>00</Glow>63<br />
        77123<Glow>00000</Glow><br />
        791125<Glow>000</Glow>9<br />
        221113<Glow>0000</Glow><br />
        <Glow>0</Glow>421125<Glow>000</Glow><br />
        <Glow>00</Glow>21119<Glow>000</Glow><br />
        <br />
        After step 4:<br />
        2263<Glow>0</Glow>31977<br />
        <Glow>0</Glow>923<Glow>0</Glow>31697<br />
        <Glow>00</Glow>3222115<Glow>0</Glow><br />
        <Glow>00</Glow>41111163<br />
        <Glow>00</Glow>76191174<br />
        <Glow>00</Glow>53411122<br />
        <Glow>00</Glow>4236112<Glow>0</Glow><br />
        5532241122<br />
        1532247211<br />
        113223<Glow>0</Glow>211<br />
        <br />
        After step 5:<br />
        4484144<Glow>000</Glow><br />
        2<Glow>0</Glow>44144<Glow>000</Glow><br />
        2253333493<br />
        1152333274<br />
        11873<Glow>0</Glow>3285<br />
        1164633233<br />
        1153472231<br />
        6643352233<br />
        2643358322<br />
        2243341322<br />
        <br />
        After step 6:<br />
        5595255111<br />
        3155255222<br />
        33644446<Glow>0</Glow>5<br />
        2263444496<br />
        2298414396<br />
        2275744344<br />
        2264583342<br />
        7754463344<br />
        3754469433<br />
        3354452433<br />
        <br />
        After step 7:<br />
        67<Glow>0</Glow>7366222<br />
        4377366333<br />
        4475555827<br />
        34966557<Glow>0</Glow>9<br />
        35<Glow>00</Glow>6256<Glow>0</Glow>9<br />
        35<Glow>0</Glow>9955566<br />
        3486694453<br />
        8865585555<br />
        486558<Glow>0</Glow>644<br />
        4465574644<br />
        <br />
        After step 8:<br />
        7818477333<br />
        5488477444<br />
        5697666949<br />
        46<Glow>0</Glow>876683<Glow>0</Glow><br />
        473494673<Glow>0</Glow><br />
        474<Glow>00</Glow>97688<br />
        69<Glow>0000</Glow>7564<br />
        <Glow>000000</Glow>9666<br />
        8<Glow>00000</Glow>4755<br />
        68<Glow>0000</Glow>7755<br />
        <br />
        After step 9:<br />
        9<Glow>0</Glow>6<Glow>0000</Glow>644<br />
        78<Glow>00000</Glow>976<br />
        69<Glow>000000</Glow>8<Glow>0</Glow><br />
        584<Glow>00000</Glow>82<br />
        5858<Glow>0000</Glow>93<br />
        69624<Glow>00000</Glow><br />
        8<Glow>0</Glow>2125<Glow>000</Glow>9<br />
        222113<Glow>000</Glow>9<br />
        9111128<Glow>0</Glow>97<br />
        7911119976<br />
        <br />
        After step 10:<br />
        <Glow>0</Glow>481112976<br />
        <Glow>00</Glow>31112<Glow>00</Glow>9<br />
        <Glow>00</Glow>411125<Glow>0</Glow>4<br />
        <Glow>00</Glow>811114<Glow>0</Glow>6<br />
        <Glow>00</Glow>991113<Glow>0</Glow>6<br />
        <Glow>00</Glow>93511233<br />
        <Glow>0</Glow>44236113<Glow>0</Glow><br />
        553225235<Glow>0</Glow><br />
        <Glow>0</Glow>53225<Glow>0</Glow>6<Glow>00</Glow><br />
        <Glow>00</Glow>3224<Glow>0000</Glow>
    </CodeBlock><br />
    <p>After step 10, there have been a total of <Code>204</Code> flashes. Fast forwarding, here is the same configuration every 10 steps:</p><br />
    <CodeBlock>
        After step 20:<br />
        3936556452<br />
        56865568<Glow>0</Glow>6<br />
        449655569<Glow>0</Glow><br />
        444865558<Glow>0</Glow><br />
        445686557<Glow>0</Glow><br />
        568<Glow>00</Glow>86577<br />
        7<Glow>00000</Glow>9896<br />
        <Glow>0000000</Glow>344<br />
        6<Glow>000000</Glow>364<br />
        46<Glow>0000</Glow>9543<br />
        <br />
        After step 30:<br />
        <Glow>0</Glow>643334118<br />
        4253334611<br />
        3374333458<br />
        2225333337<br />
        2229333338<br />
        2276733333<br />
        2754574565<br />
        5544458511<br />
        9444447111<br />
        7944446119<br />
        <br />
        After step 40:<br />
        6211111981<br />
        <Glow>0</Glow>421111119<br />
        <Glow>00</Glow>42111115<br />
        <Glow>000</Glow>3111115<br />
        <Glow>000</Glow>3111116<br />
        <Glow>00</Glow>65611111<br />
        <Glow>0</Glow>532351111<br />
        3322234597<br />
        2222222976<br />
        2222222762<br />
        <br />
        After step 50:<br />
        9655556447<br />
        48655568<Glow>0</Glow>5<br />
        448655569<Glow>0</Glow><br />
        445865558<Glow>0</Glow><br />
        457486557<Glow>0</Glow><br />
        57<Glow>000</Glow>86566<br />
        6<Glow>00000</Glow>9887<br />
        8<Glow>000000</Glow>533<br />
        68<Glow>00000</Glow>633<br />
        568<Glow>0000</Glow>538<br />
        <br />
        After step 60:<br />
        25333342<Glow>00</Glow><br />
        274333464<Glow>0</Glow><br />
        2264333458<br />
        2225333337<br />
        2225333338<br />
        2287833333<br />
        3854573455<br />
        1854458611<br />
        1175447111<br />
        1115446111<br />
        <br />
        After step 70:<br />
        8211111164<br />
        <Glow>0</Glow>421111166<br />
        <Glow>00</Glow>42111114<br />
        <Glow>000</Glow>4211115<br />
        <Glow>0000</Glow>211116<br />
        <Glow>00</Glow>65611111<br />
        <Glow>0</Glow>532351111<br />
        7322235117<br />
        5722223475<br />
        4572222754<br />
        <br />
        After step 80:<br />
        1755555697<br />
        59655556<Glow>0</Glow>9<br />
        448655568<Glow>0</Glow><br />
        445865558<Glow>0</Glow><br />
        457<Glow>0</Glow>86557<Glow>0</Glow><br />
        57<Glow>000</Glow>86566<br />
        7<Glow>00000</Glow>8666<br />
        <Glow>0000000</Glow>99<Glow>0</Glow><br />
        <Glow>0000000</Glow>8<Glow>00</Glow><br />
        <Glow>0000000000</Glow><br />
        <br />
        After step 90:<br />
        7433333522<br />
        2643333522<br />
        2264333458<br />
        2226433337<br />
        2222433338<br />
        2287833333<br />
        2854573333<br />
        4854458333<br />
        3387779333<br />
        3333333333<br />
        <br />
        After step 100:<br />
        <Glow>0</Glow>397666866<br />
        <Glow>0</Glow>749766918<br />
        <Glow>00</Glow>53976933<br />
        <Glow>000</Glow>4297822<br />
        <Glow>000</Glow>4229892<br />
        <Glow>00</Glow>53222877<br />
        <Glow>0</Glow>532222966<br />
        9322228966<br />
        7922286866<br />
        6789998766
    </CodeBlock><br />
    <p>After 100 steps, there have been a total of <Code><Glow>1656</Glow></Code> flashes.</p><br />
    <p>Given the starting energy levels of the dumbo octopuses in your cavern, simulate 100 steps. <Glow>How many total flashes are there after 100 steps?</Glow></p>
</>);

export const part2Description = (<>
    <p>It seems like the individual flashes aren't bright enough to navigate. However, you might have a better option: the flashes seem to be <Glow>synchronizing</Glow>!</p><br />
    <p>In the example above, the first time all octopuses flash simultaneously is step <Code><Glow>195</Glow></Code>:</p><br />
    <CodeBlock>
        After step 193:<br />
        5877777777<br />
        8877777777<br />
        7777777777<br />
        7777777777<br />
        7777777777<br />
        7777777777<br />
        7777777777<br />
        7777777777<br />
        7777777777<br />
        7777777777<br />
        <br />
        After step 194:<br />
        6988888888<br />
        9988888888<br />
        8888888888<br />
        8888888888<br />
        8888888888<br />
        8888888888<br />
        8888888888<br />
        8888888888<br />
        8888888888<br />
        8888888888<br />
        <br />
        After step 195:<br />
        <Glow>0000000000</Glow><br />
        <Glow>0000000000</Glow><br />
        <Glow>0000000000</Glow><br />
        <Glow>0000000000</Glow><br />
        <Glow>0000000000</Glow><br />
        <Glow>0000000000</Glow><br />
        <Glow>0000000000</Glow><br />
        <Glow>0000000000</Glow><br />
        <Glow>0000000000</Glow><br />
        <Glow>0000000000</Glow>
    </CodeBlock><br />
    <p>If you can calculate the exact moments when the octopuses will all flash simultaneously, you should be able to navigate through the cavern. <Glow>What is the first step during which all octopuses flash?</Glow></p>
</>);
