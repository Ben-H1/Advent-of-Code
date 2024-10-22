import clsx from 'clsx';
import { ReactNode } from 'react';

type LinkProps = {
    link: string;
    children?: ReactNode;
    className?: string;
};

const Link = ({ link, children, className }: LinkProps) => {
    return (
        <a href={link} target='_blank' className={clsx('text-aoc-link hover:underline', className)}>
            {children}
        </a>
    );
};

export default Link;
