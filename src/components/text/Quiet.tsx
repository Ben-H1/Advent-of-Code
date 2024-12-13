import { ReactNode } from 'react';

type QuietProps = {
    children?: ReactNode;
};

const Quiet = ({ children }: QuietProps) => {
    return (
        <span className='text-gray-500'>
            {children}
        </span>
    );
};

export default Quiet;
