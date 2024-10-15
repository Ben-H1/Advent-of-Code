import Code from '@components/text/Code';
import CodeBlock from '@components/text/CodeBlock';
import Glow from '@components/text/Glow';
import Link from '@components/text/Link';
import List from '@components/text/List';

export const part1Description = (<>
    <p>You take the boat and find the gardener right where you were told he would be: managing a giant "garden" that looks more to you like a farm.</p><br/>
    <p>"A water source? Island Island <Glow>is</Glow> the water source!" You point out that Snow Island isn't receiving any water.</p><br/>
    <p>"Oh, we had to stop the water because we <Glow>ran out of sand</Glow> to <Link link='https://en.wikipedia.org/wiki/Sand_filter'>filter</Link> it with! Can't make snow with dirty water. Don't worry, I'm sure we'll get more sand soon; we only turned off the water a few days... weeks... oh no." His face sinks into a look of horrified realization.</p><br/>
    <p>"I've been so busy making sure everyone here has food that I completely forgot to check why we stopped getting more sand! There's a ferry leaving soon that is headed over in that direction - it's much faster than your boat. Could you please go check it out?"</p><br/>
    <p>You barely have time to agree to this request when he brings up another. "While you wait for the ferry, maybe you can help us with our <Glow>food production problem</Glow>. The latest Island Island <Link link='https://en.wikipedia.org/wiki/Almanac'>Almanac</Link> just arrived and we're having trouble making sense of it."</p><br/>
    <p>The almanac (your puzzle input) lists all of the seeds that need to be planted. It also lists what type of soil to use with each kind of seed, what type of fertilizer to use with each kind of soil, what type of water to use with each kind of fertilizer, and so on. Every type of seed, soil, fertilizer and so on is identified with a number, but numbers are reused by each category - that is, soil <Code>123</Code> and fertilizer <Code>123</Code> aren't necessarily related to each other.</p><br/>
    <p>For example:</p><br/>
    <CodeBlock>
        seeds: 79 14 55 13<br/>
        <br/>
        seed-to-soil map:<br/>
        50 98 2<br/>
        52 50 48<br/>
        <br/>
        soil-to-fertilizer map:<br/>
        0 15 37<br/>
        37 52 2<br/>
        39 0 15<br/>
        <br/>
        fertilizer-to-water map:<br/>
        49 53 8<br/>
        0 11 42<br/>
        42 0 7<br/>
        57 7 4<br/>
        <br/>
        water-to-light map:<br/>
        88 18 7<br/>
        18 25 70<br/>
        <br/>
        light-to-temperature map:<br/>
        45 77 23<br/>
        81 45 19<br/>
        68 64 13<br/>
        <br/>
        temperature-to-humidity map:<br/>
        0 69 1<br/>
        1 0 69<br/>
        <br/>
        humidity-to-location map:<br/>
        60 56 37<br/>
        56 93 4
    </CodeBlock><br/>
    <p>The almanac starts by listing which seeds need to be planted: seeds <Code>79</Code>, <Code>14</Code>, <Code>55</Code>, and <Code>13</Code>.</p><br/>
    <p>The rest of the almanac contains a list of <Glow>maps</Glow> which describe how to convert numbers from a <Glow>source category</Glow> into numbers in a <Glow>destination category</Glow>. That is, the section that starts with <Code>seed-to-soil map:</Code> describes how to convert a <Glow>seed number</Glow> (the source) to a <Glow>soil number</Glow> (the destination). This lets the gardener and his team know which soil to use with which seeds, which water to use with which fertilizer, and so on.</p><br/>
    <p>Rather than list every source number and its corresponding destination number one by one, the maps describe entire <Glow>ranges</Glow> of numbers that can be converted. Each line within a map contains three numbers: the <Glow>destination range start</Glow>, the <Glow>source range start</Glow>, and the <Glow>range length</Glow>.</p><br/>
    <p>Consider again the example <Code>seed-to-soil map</Code>:</p><br/>
    <CodeBlock>
        50 98 2<br/>
        52 50 48
    </CodeBlock><br/>
    <p>The first line has a <Glow>destination range start</Glow> of <Code>50</Code>, a <Glow>source range start</Glow> of <Code>98</Code>, and a <Glow>range length</Glow> of <Code>2</Code>. This line means that the source range starts at <Code>98</Code> and contains two values: <Code>98</Code> and <Code>99</Code>. The destination range is the same length, but it starts at <Code>50</Code>, so its two values are <Code>50</Code> and <Code>51</Code>. With this information, you know that seed number <Code>98</Code> corresponds to soil number <Code>50</Code> and that seed number <Code>99</Code> corresponds to soil number <Code>51</Code>.</p><br/>
    <p>The second line means that the source range starts at <Code>50</Code> and contains <Code>48</Code> values: <Code>50</Code>, <Code>51</Code>, ..., <Code>96</Code>, <Code>97</Code>. This corresponds to a destination range starting at <Code>52</Code> and also containing <Code>48</Code> values: <Code>52</Code>, <Code>53</Code>, ..., <Code>98</Code>, <Code>99</Code>. So, seed number <Code>53</Code> corresponds to soil number <Code>55</Code>.</p><br/>
    <p>Any source numbers that <Glow>aren't mapped</Glow> correspond to the <Glow>same</Glow> destination number. So, seed number <Code>10</Code> corresponds to soil number <Code>10</Code>.</p><br/>
    <p>So, the entire list of seed numbers and their corresponding soil numbers looks like this:</p><br/>
    <CodeBlock>
        seed  soil<br/>
        0     0<br/>
        1     1<br/>
        ...   ...<br/>
        48    48<br/>
        49    49<br/>
        50    52<br/>
        51    53<br/>
        ...   ...<br/>
        96    98<br/>
        97    99<br/>
        98    50<br/>
        99    51
    </CodeBlock><br/>
    <p>With this map, you can look up the soil number required for each initial seed number:</p><br/>
    <List>
        <li>Seed number <Code>79</Code> corresponds to soil number <Code>81</Code>.</li>
        <li>Seed number <Code>14</Code> corresponds to soil number <Code>14</Code>.</li>
        <li>Seed number <Code>55</Code> corresponds to soil number <Code>57</Code>.</li>
        <li>Seed number <Code>13</Code> corresponds to soil number <Code>13</Code>.</li>
    </List><br/>
    <p>The gardener and his team want to get started as soon as possible, so they'd like to know the closest location that needs a seed. Using these maps, find <Glow>the lowest location number that corresponds to any of the initial seeds</Glow>. To do this, you'll need to convert each seed number through other categories until you can find its corresponding <Glow>location number</Glow>. In this example, the corresponding types are:</p><br/>
    <List>
        <li>Seed <Code>79</Code>, soil <Code>81</Code>, fertilizer <Code>81</Code>, water <Code>81</Code>, light <Code>74</Code>, temperature <Code>78</Code>, humidity <Code>78</Code>, <Glow>location</Glow> <Code><Glow>82</Glow></Code>.</li>
        <li>Seed <Code>14</Code>, soil <Code>14</Code>, fertilizer <Code>53</Code>, water <Code>49</Code>, light <Code>42</Code>, temperature <Code>42</Code>, humidity <Code>43</Code>, <Glow>location</Glow> <Code><Glow>43</Glow></Code>.</li>
        <li>Seed <Code>55</Code>, soil <Code>57</Code>, fertilizer <Code>57</Code>, water <Code>53</Code>, light <Code>46</Code>, temperature <Code>82</Code>, humidity <Code>82</Code>, <Glow>location</Glow> <Code><Glow>86</Glow></Code>.</li>
        <li>Seed <Code>13</Code>, soil <Code>13</Code>, fertilizer <Code>52</Code>, water <Code>41</Code>, light <Code>34</Code>, temperature <Code>34</Code>, humidity <Code>35</Code>, <Glow>location</Glow> <Code><Glow>35</Glow></Code>.</li>
    </List><br/>
    <p>So, the lowest location number in this example is <Code><Glow>35</Glow></Code>.</p><br/>
    <p><Glow>What is the lowest location number that corresponds to any of the initial seed numbers?</Glow></p>
</>);

export const part2Description = (<>
    <p>Everyone will starve if you only plant such a small number of seeds. Re-reading the almanac, it looks like the <Code>seeds:</Code> line actually describes <Glow>ranges of seed numbers</Glow>.</p><br/>
    <p>The values on the initial <Code>seeds:</Code> line come in pairs. Within each pair, the first value is the <Glow>start</Glow> of the range and the second value is the <Glow>length</Glow> of the range. So, in the first line of the example above:</p><br/>
    <CodeBlock>
        seeds: 79 14 55 13
    </CodeBlock><br/>
    <p>This line describes two ranges of seed numbers to be planted in the garden. The first range starts with seed number <Code>79</Code> and contains <Code>14</Code> values: <Code>79</Code>, <Code>80</Code>, ..., <Code>91</Code>, <Code>92</Code>. The second range starts with seed number <Code>55</Code> and contains <Code>13</Code> values: <Code>55</Code>, <Code>56</Code>, ..., <Code>66</Code>, <Code>67</Code>.</p><br/>
    <p>Now, rather than considering four seed numbers, you need to consider a total of <Glow>27</Glow> seed numbers.</p><br/>
    <p>In the above example, the lowest location number can be obtained from seed number <Code>82</Code>, which corresponds to soil <Code>84</Code>, fertilizer <Code>84</Code>, water <Code>84</Code>, light <Code>77</Code>, temperature <Code>45</Code>, humidity <Code>46</Code>, and <Glow>location</Glow> <Code><Glow>46</Glow></Code>. So, the lowest location number is <Code><Glow>46</Glow></Code>.</p><br/>
    <p>Consider all of the initial seed numbers listed in the ranges on the first line of the almanac. <Glow>What is the lowest location number that corresponds to any of the initial seed numbers?</Glow></p>
</>);
