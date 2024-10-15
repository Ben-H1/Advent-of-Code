import { ReactNode } from 'react';

type CodeBlockProps = {
    children?: ReactNode;
};

const CodeBlock = ({ children }: CodeBlockProps) => {
    return (
        <div className='px-4 py-2 font-mono whitespace-pre border rounded-md w-fit bg-aoc-code text-aoc-text border-aoc-text'>
            {children}
        </div>
    );
};

export default CodeBlock;
