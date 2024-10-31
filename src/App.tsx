import NavBar from '@components/nav/NavBar';
import AppRoutes from '@routes/AppRoutes';
import { AppContext } from 'contexts/AppContext';
import { useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Snowfall } from 'react-snowfall';

const App = () => {
    const location = useLocation();

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = 0;

            if (location.hash) {
                const hashElement = document.querySelector(location.hash);

                if (hashElement) {
                    hashElement.scrollIntoView();
                }
            }
        }
    }, [location.pathname]);

    const { showSnow } = useContext(AppContext);

    return (
        <div className='flex text-white font-libreBaskerville bg-aoc-dark'>
            <NavBar />
            <div ref={scrollRef} className='flex-1 h-screen relative overflow-y-auto scrollbar-thumb-aoc-light scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded'>
                <div className='fixed h-full w-full pointer-events-none'>
                    {showSnow && (
                        <Snowfall snowflakeCount={50} speed={[0.5, 1]} wind={[-0.5, 0.5]} />
                    )}
                </div>
                <div className='p-8 relative h-full w-full z-10'>
                    <AppRoutes />
                    <div className='pb-8'></div>
                </div>
            </div>
        </div>
    );
};

export default App;
