import { useEffect, useRef } from 'react';
import NavBar from '@components/nav/NavBar';
import AppRoutes from '@routes/AppRoutes';
import { useLocation } from 'react-router-dom';

const App = () => {
    const location = useLocation();

    const currentYear = location.pathname.split('/')[1];
    const currentDay = parseInt(location.pathname.split('/')[2]?.replace(/\D/g, ''));

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = 0;
        }
    }, [currentYear, currentDay]);

    return (
        <div className='flex text-white font-libreBaskerville bg-aoc-dark'>
            <NavBar />
            <div ref={scrollRef} className='flex-1 h-screen p-8 overflow-y-auto scrollbar-thumb-aoc-light scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded'>
                <AppRoutes />
            </div>
        </div>
    );
};

export default App;
