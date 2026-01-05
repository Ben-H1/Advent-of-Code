import clsx from 'clsx';
import { ReactNode } from 'react';

type CodeProps = {
    className?: string;
    children?: ReactNode;
};

const Code = ({ className, children }: CodeProps) => {
    return (
        <span className={clsx('whitespace-nowrap inline-flex items-center h-[23px] w-fit px-1 pt-px mx-px font-mono rounded-md text-aoc-text border-aoc-text bg-aoc-code border', className)}>
            {children}
        </span>
    );
};

export default Code;
