import { useRef } from 'react';
import NavBar from '@components/nav/NavBar';
import AppRoutes from '@routes/AppRoutes';
import { useLocation } from 'react-router-dom';

const App = () => {
    useLocation();

    const scrollRef = useRef<HTMLDivElement>(null);

    if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
    }

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
