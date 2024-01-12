import clsx from 'clsx';
import { MouseEventHandler } from 'react';

type ButtonProps = {
    onClick?: MouseEventHandler;
    children?: string | number | readonly string[] | undefined;
    className?: string;
};

const Button = ({ onClick, children, className }: ButtonProps) => {
    return (
        <input
            type={'button'}
            className={clsx('px-4 py-2 rounded-lg outline-none cursor-pointer select-none bg-aoc-light hover:bg-aoc-medium active:bg-aoc-code', className)}
            onClick={onClick}
            value={children}
        />
    );
};

export default Button;
