import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import Star from '../Star';

type NavLinkProps = {
    link: string;
    title: string;
    stars?: number;
    highlight?: boolean;
};

const NavLink = ({ link, title, stars, highlight }: NavLinkProps) => {
    const navigate = useNavigate();

    return (
        <div
            className={clsx(
                'flex items-center px-6 py-2 cursor-pointer select-none hover:bg-aoc-light',
                highlight && 'bg-aoc-light hover:bg-aoc-lighter'
            )}
            onClick={() => navigate(link)}
        >
            <div className='flex-1 text-lg font-bold'>
                {title}
            </div>
            {Boolean(stars) && (
                <div className='shrink-0 pl-6'>
                    {stars === 1 ? (
                        <Star />
                    ) : (
                        <>
                            <Star />
                            <Star className='ml-2' />
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default NavLink;
