import { ReactNode } from 'react';

type GlowProps = {
    color?: 'yellow' | 'star' | 'white';
    children?: ReactNode;
};

const Glow = ({ color = 'white', children }: GlowProps) => {
    const classes = {
        'yellow': 'text-yellow-500 font-bold drop-shadow-glow-yellow-500',
        'star': 'text-aoc-star font-bold drop-shadow-glow-aoc-star',
        'white': 'text-white font-bold drop-shadow-glow-white'
    };

    return (
        <span className={classes[color]}>
            {children}
        </span>
    );
};

export default Glow;
