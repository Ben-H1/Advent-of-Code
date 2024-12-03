import { faAngleLeft, faAngleRight, faChevronLeft, faCog } from '@fortawesome/free-solid-svg-icons';
import { years } from '@solutions/years';
import { AppContext } from 'contexts/AppContext';
import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IconButton from '../IconButton';
import Star from '../Star';
import NavLink from './NavLink';

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

    const {
        showSnow, setShowSnow,
        showPerformance, setShowPerformance
    } = useContext(AppContext);

    const [settingsExpanded, setSettingsExpanded] = useState(false);

    return (
        <div className='sticky top-0 flex flex-col h-screen border-r border-white bg-aoc-medium shrink-0 w-96'>
            <div className='flex items-center justify-center h-20 text-2xl font-bold border-b select-none'>
                Advent of Code
            </div>
            <div className='flex items-center justify-center h-16 text-2xl font-bold border-b select-none'>
                {(yearIndex > 0) ? (
                    <IconButton
                        icon={faAngleLeft}
                        onClick={() => navigate(`${Object.keys(years)[yearIndex - 1]}/day/1`)}
                    />
                ) : (
                    <div className='w-[15px]'></div>
                )}
                <div className='mx-8'>{currentYear}</div>
                {(yearIndex < Object.keys(years).length - 1) ? (
                    <IconButton
                        icon={faAngleRight}
                        onClick={() => navigate(`${Object.keys(years)[yearIndex + 1]}/day/1`)}
                    />
                ) : (
                    <div className='w-[15px]'></div>
                )}
            </div>
            <div ref={scrollRef} className='flex flex-col flex-1 py-6 space-y-1 overflow-y-auto scrollbar-thumb-aoc-lighter scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded'>
                {(currentYear && currentDay) && years[currentYear].map((day, i) => (
                    <NavLink
                        key={`day-${i}`}
                        highlight={i + 1 === currentDay}
                        link={`${currentYear}/day/${i + 1}`}
                        title={day.title}
                        stars={day.stars}
                    />
                ))}
            </div>
            <div className='relative flex items-center justify-center h-20 text-2xl font-bold border-t select-none'>
                <div className='absolute bottom-0 flex w-full px-2 mb-2 space-x-2'>
                    {settingsExpanded ? (
                        <>
                            <span className='text-xs cursor-pointer hover:drop-shadow-glow-white hover:scale-105' onClick={() => setShowSnow(p => !p)}>
                                {showSnow ? 'Disable snow' : 'Enable snow'}
                            </span>
                            <span className='text-xs'>|</span>
                            <span className='text-xs cursor-pointer hover:drop-shadow-glow-white hover:scale-105' onClick={() => setShowPerformance(p => !p)}>
                                {showPerformance ? 'Disable performance info' : 'Enable performance info'}
                            </span>
                            <IconButton
                                className='h-4'
                                icon={faChevronLeft}
                                onClick={() => setSettingsExpanded(false)}
                            />
                        </>
                    ) : (
                        <IconButton
                            className='h-4'
                            icon={faCog}
                            onClick={() => setSettingsExpanded(true)}
                        />
                    )}
                </div>
                <Star />
                {currentYear && (
                    <span className='mx-4'>
                        Stars: {years[currentYear].map(d => d.stars).reduce((a, b) => a + b)}
                    </span>
                )}
                <Star />
            </div>
        </div>
    );
};

export default NavBar;
