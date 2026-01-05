import IconButton from '@components/IconButton';
import Tooltip from '@components/Tooltip';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { ReactNode, useRef } from 'react';

type CodeBlockProps = {
    children?: ReactNode;
};

const CodeBlock = ({ children }: CodeBlockProps) => {
    const ref = useRef<HTMLDivElement | null>(null);

    return (
        <div className='flex space-x-4 w-fit group'>
            <div ref={ref} className='px-4 py-2 font-mono whitespace-pre border rounded-md w-fit bg-aoc-code text-aoc-text border-aoc-text'>
                {children}
            </div>
            <Tooltip
                tooltipContent='Copy'
                tooltipTempContent='Copied!'
            >
                <IconButton
                    className='invisible group-hover:visible'
                    icon={faCopy}
                    onClick={() => navigator.clipboard.writeText(ref.current?.innerText ?? '')}
                />
            </Tooltip>
        </div>
    );
};

export default CodeBlock;
