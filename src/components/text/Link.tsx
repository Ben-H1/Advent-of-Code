import { ReactNode } from 'react';

type LinkProps = {
    link: string;
    children?: ReactNode;
};

const Link = ({ link, children }: LinkProps) => {
    return (
        <a href={link} className='text-aoc-link hover:underline'>
            {children}
        </a>
    );
};

export default Link;
