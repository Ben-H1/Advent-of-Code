import { Day } from '@pages/DayTemplate';
import { days as days2023 } from './2023/days';
import { days as days2022 } from './2022/days';

export const years: Record<string, Day[]> = {
    '2022': days2022,
    '2023': days2023
};
