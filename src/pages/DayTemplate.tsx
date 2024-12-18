import Button from '@components/Button';
import IconButton from '@components/IconButton';
import Star from '@components/Star';
import Code from '@components/text/Code';
import Glow from '@components/text/Glow';
import Link from '@components/text/Link';
import Tooltip from '@components/Tooltip';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from 'contexts/AppContext';
import { ReactNode, useContext, useEffect, useState } from 'react';

type Part = {
    description: ReactNode;
    solution: (input: string) => string;
    exampleInput: string | string[];
    givenInput: string;
};

export type Day = {
    title: string;
    stars: number;
    part1: Part;
    part2?: Part;
};

type InputBoxProps = {
    part: Part;
};

const InputBox = ({ part }: InputBoxProps) => {
    const [input, setInput] = useState('');
    const [solution, setSolution] = useState('');
    const [runtime, setRuntime] = useState<number | null>(null);

    const { showPerformance } = useContext(AppContext);

    const resetInput = () => {
        setInput('');
    };

    const resetSolution = () => {
        setSolution('');
        setRuntime(null);
    };

    useEffect(() => {
        resetInput();
        resetSolution();
    }, [part]);

    return (<>
        <div className='mb-2'>Puzzle input:</div>
        <div className='flex'>
            <div className='flex flex-col w-full'>
                <textarea
                    className='h-48 p-2 mb-2 mr-2 font-mono text-white rounded-lg outline-none resize-none bg-aoc-medium scrollbar-thumb-aoc-lighter scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <div className='flex items-center mr-2'>
                    <Button onClick={() => {
                        const startTime = performance.now();
                        const result = part.solution(input);
                        const endTime = performance.now();

                        setSolution(result);
                        setRuntime(endTime - startTime);
                    }}>
                        Solve!
                    </Button>
                    {solution && (
                        <>
                            <span className='ml-8'>Solution:</span>
                            <Code className='ml-2'><Glow>{solution}</Glow></Code>
                            <Button
                                className='ml-8'
                                onClick={() => navigator.clipboard.writeText(solution)}
                                tempValue={'Copied!'}
                            >
                                Copy to clipboard
                            </Button>
                            {(showPerformance && runtime != null) && (
                                <span className='ml-8'>Found in {+runtime.toFixed(2)} ms</span>
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col'>
                    {Array.isArray(part.exampleInput) ? (
                        <>
                            <div className='mb-2'>Example inputs:</div>
                            <div className='flex mb-2 space-x-2'>
                                {part.exampleInput.map((exampleInput, i) => (
                                    <Button
                                        className='grow'
                                        key={`exampleInput-${i + 1}`}
                                        onClick={() => {
                                            setInput(exampleInput);
                                            resetSolution();
                                        }}
                                    >
                                        {i + 1}
                                    </Button>
                                ))}
                            </div>
                        </>
                    ) : (
                        <Button className='mb-2' onClick={() => {
                            setInput(part.exampleInput as string);
                            resetSolution();
                        }}>
                            Example input
                        </Button>
                    )}
                    <Button onClick={() => {
                        setInput(part.givenInput);
                        resetSolution();
                    }}>
                        Given input
                    </Button>
                </div>
                <div className='flex flex-col'>
                    <Button className='mb-2' onClick={() => {
                        resetInput();
                        resetSolution();
                    }}>
                        Clear input
                    </Button>
                    <Button
                        onClick={() => resetSolution()}
                        className={solution ? 'visible' : 'invisible'}
                    >
                        Clear solution
                    </Button>
                </div>
            </div>
        </div>
    </>);
};

const officialUrl = 'https://adventofcode.com';
const repoUrl = 'https://github.com/Ben-H1/Advent-of-Code';

type DayTemplateProps = {
    day: Day;
    year: string;
    dayNumber: number;
};

const DayTemplate = ({ day, year, dayNumber }: DayTemplateProps) => {
    return (
        <div>
            <div className='flex items-center justify-between mb-6'>
                <h1 id='part1' className='text-4xl font-bold'>{day.title}</h1>
                <Link
                    link={`${repoUrl}/blob/main/src/solutions/${year}/day${dayNumber}/solutions.ts`}
                    className='pl-8 text-right'
                >
                    View solution code on GitHub
                </Link>
            </div>
            <div className='flex items-center justify-between mb-6'>
                <div className='flex items-center space-x-4 shrink-0 group'>
                    <h2 className='text-3xl font-bold'>Part 1</h2>
                    {day.stars > 0 && (
                        <Star className='text-xl' />
                    )}
                    <Tooltip
                        tooltipContent='Copy link'
                        tooltipTempContent='Link copied!'
                    >
                        <IconButton
                            className='invisible group-hover:visible'
                            icon={faLink}
                            onClick={() => navigator.clipboard.writeText(`${window.location.origin}/${year}/day/${dayNumber}`)}
                        />
                    </Tooltip>
                </div>
                <Link
                    link={`${officialUrl}/${year}/day/${dayNumber}`}
                    className='pl-8 text-right'
                >
                    View on Advent of Code
                </Link>
            </div>
            <div>{day.part1.description}</div>
            <hr className='my-8' id='part1Input' />
            <InputBox part={day.part1} />
            {day.part2 && day.stars >= 1 && (
                <>
                    <hr className='my-8' />
                    <div className='flex items-center justify-between mb-6'>
                        <div className='flex items-center space-x-4 shrink-0 group'>
                            <h2 id='part2' className='text-3xl font-bold'>Part 2</h2>
                            {day.stars > 1 && (
                                <Star className='text-xl' />
                            )}
                            <Tooltip
                                tooltipContent='Copy link'
                                tooltipTempContent='Link copied!'
                            >
                                <IconButton
                                    className='invisible group-hover:visible'
                                    icon={faLink}
                                    onClick={() => navigator.clipboard.writeText(`${window.location.origin}/${year}/day/${dayNumber}#part2`)}
                                />
                            </Tooltip>
                        </div>
                        <Link
                            className='pl-8 text-right'
                            link={`${officialUrl}/${year}/day/${dayNumber}#part2`}
                        >
                            View on Advent of Code
                        </Link>
                    </div>
                    <div>{day.part2.description}</div>
                    <hr className='my-8' id='part2Input' />
                    <InputBox part={day.part2} />
                </>
            )}
        </div>
    );
};

export default DayTemplate;
