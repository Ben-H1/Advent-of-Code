import { ReactNode } from 'react';

type ListProps = {
    children?: ReactNode;
};

const List = ({ children }: ListProps) => {
    return (
        <ul className='ml-8 list-disc'>
            {children}
        </ul>
    );
};

export default List;
