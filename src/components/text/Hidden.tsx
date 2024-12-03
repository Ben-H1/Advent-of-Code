import Tooltip from '@components/Tooltip';
import { ReactNode } from 'react';

type HiddenProps = {
    content: ReactNode;
    children?: ReactNode;
};

const Hidden = ({ content, children }: HiddenProps) => {
    return (
        <Tooltip tooltipContent={content}>
            <span className='animate-pulse'>
                {children}
            </span>
        </Tooltip>
    );
};

export default Hidden;
