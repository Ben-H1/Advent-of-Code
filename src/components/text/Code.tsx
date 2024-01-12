import clsx from 'clsx';
import { ReactNode } from 'react';

type CodeProps = {
    className?: string;
    children?: ReactNode;
};

const Code = ({ className, children }: CodeProps) => {
    return (
        <span className={clsx('px-1 py-px mx-px font-mono rounded-md text-aoc-text border-aoc-text w-fit bg-aoc-code border', className)}>
            {children}
        </span>
    );
};

export default Code;
