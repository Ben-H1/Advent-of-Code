import { Navigate, Route, Routes } from 'react-router-dom';
import DayTemplate from '@pages/DayTemplate';
import NoPage from '@pages/NoPage';
import { years } from '@solutions/years';

const AppRoutes = () => {
    const latestYear = Object.keys(years).slice(-1)[0];

    return (
        <Routes>
            <Route path='/' element={<Navigate to={`${latestYear}/day/1`} />} />
            {Object.keys(years).map((year) => (years[year].map((day, i) => (
                <Route
                    key={`year-${year}-day-${i + 1}`}
                    path={`${year}/day/${i + 1}`}
                    element={
                        <DayTemplate
                            day={day}
                            year={year}
                            dayNumber={i + 1}
                        />
                    }
                />
            ))))}
            <Route path='/*' element={<NoPage />} />
        </Routes>
    );
};

export default AppRoutes;
