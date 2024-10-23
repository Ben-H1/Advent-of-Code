import { useRef } from 'react';
import NavBar from '@components/nav/NavBar';
import AppRoutes from '@routes/AppRoutes';
import { useLocation } from 'react-router-dom';
import { Snowfall } from 'react-snowfall';

const App = () => {
    useLocation();

    const scrollRef = useRef<HTMLDivElement>(null);

    if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
    }

    return (
        <div className='flex text-white font-libreBaskerville bg-aoc-dark'>
            <NavBar />
            <div ref={scrollRef} className='flex-1 h-screen relative overflow-y-auto scrollbar-thumb-aoc-light scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded'>
                <div className='fixed h-full w-full pointer-events-none'>
                    <Snowfall snowflakeCount={50} speed={[0.5, 1]} wind={[-0.5, 0.5]} />
                </div>
                <div className='p-8 relative h-full w-full z-10'>
                    <AppRoutes />
                </div>
            </div>
        </div>
    );
};

export default App;
