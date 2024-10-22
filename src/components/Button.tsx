import clsx from 'clsx';
import { MouseEventHandler, useState } from 'react';

type ButtonProps = {
    onClick?: MouseEventHandler;
    children?: string | number | readonly string[] | undefined;
    tempValue?: string | number | readonly string[] | undefined;
    tempTimeMs?: number;
    className?: string;
};

const Button = ({ onClick, children, tempValue, tempTimeMs = 1000, className }: ButtonProps) => {
    const [useTemp, setTemp] = useState(false);

    return (
        <input
            type={'button'}
            className={clsx('px-4 py-2 rounded-lg outline-none cursor-pointer select-none bg-aoc-light hover:bg-aoc-medium active:bg-aoc-code', className)}
            onClick={(...params) => {
                setTemp(true);
                setTimeout(() => setTemp(false), tempTimeMs);
                onClick && onClick(...params);
            }}
            value={useTemp ? (tempValue ?? children) : children}
        />
    );
};

export default Button;
