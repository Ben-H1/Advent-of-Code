import { Day } from '@pages/DayTemplate';
import { days as days2021 } from './2021/days';
import { days as days2022 } from './2022/days';
import { days as days2023 } from './2023/days';
import { days as days2024 } from './2024/days';

export const years: Record<string, Day[]> = {
    '2021': days2021,
    '2022': days2022,
    '2023': days2023,
    '2024': days2024
};
