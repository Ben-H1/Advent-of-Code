import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { years } from '@solutions/years';
import IconButton from '../IconButton';
import Star from '../Star';
import NavLink from './NavLink';
import { useRef, useEffect } from 'react';

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let currentYear = location.pathname.split('/')[1];
    let currentDay = parseInt(location.pathname.split('/')[3]?.replace(/\D/g, ''));
    let yearIndex = Object.keys(years).indexOf(currentYear);

    if (currentDay <= 0 || yearIndex === -1) {
        currentYear = Object.keys(years).slice(-1)[0];
        currentDay = -1;
        yearIndex = Object.keys(years).length - 1;
    }
    
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = 0;
        }
    }, [currentYear]);

    return (
        <div className='sticky top-0 flex flex-col h-screen border-r border-white bg-aoc-medium shrink-0 w-96'>
            <div className='flex items-center justify-center h-20 text-2xl font-bold border-b select-none'>
                Advent of Code
            </div>
            <div className='flex items-center justify-center h-16 text-2xl font-bold border-b select-none'>
                {(yearIndex > 0) ? (
                    <IconButton icon={faAngleLeft} onClick={() => navigate(`${Object.keys(years)[yearIndex - 1]}/day/1`)} />
                ) : (
                    <div className='w-[15px]'></div>
                )}
                <div className='mx-8'>{currentYear}</div>
                {(yearIndex < Object.keys(years).length - 1) ? (
                    <IconButton icon={faAngleRight} onClick={() => navigate(`${Object.keys(years)[yearIndex + 1]}/day/1`)} />
                ) : (
                    <div className='w-[15px]'></div>
                )}
            </div>
            <div ref={scrollRef} className='flex flex-col flex-1 py-6 space-y-1 overflow-y-auto scrollbar-thumb-aoc-lighter scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded'>
                {(currentYear && currentDay) && years[currentYear].map((day, i) => (
                    <NavLink key={`day-${i}`} highlight={i + 1 === currentDay} link={`${currentYear}/day/${i + 1}`} title={day.title} stars={day.stars} />
                ))}
            </div>
            <div className='flex items-center justify-center h-20 text-2xl font-bold border-t select-none'>
                <Star />
                {currentYear && (
                    <span className='mx-4'>Stars: {years[currentYear].map(d => d.stars).reduce((a, b) => a + b)}</span>
                )}
                <Star />
            </div>
        </div>
    );
};

export default NavBar;
