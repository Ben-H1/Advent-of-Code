import { Navigate, Route, Routes } from 'react-router-dom';
import DayTemplate from '@pages/DayTemplate';
import NoPage from '@pages/NoPage';
import { years } from '@solutions/years';

const AppRoutes = () => {
    const latestYear = years[Object.keys(years)[Object.keys(years).length - 1]];

    return (
        <Routes>
            <Route path='/' element={<Navigate to={latestYear[0].link} />} />
            {Object.keys(years).map((year) => (years[year].map((day, i) => (
                <Route key={`year-${year}-day-${i + 1}`} path={day.link} element={<DayTemplate day={day} />} />
            ))))}
            <Route path='/*' element={<NoPage />} />
        </Routes>
    );
};

export default AppRoutes;
