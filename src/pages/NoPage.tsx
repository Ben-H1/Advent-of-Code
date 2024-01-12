import Button from '@components/Button';
import { useNavigate } from 'react-router-dom';

const NoPage = () => {
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-center h-full'>
            <div className='flex flex-col items-center'>
                <div className='mb-6 text-3xl font-bold'>
                    This page does not exist.
                </div>
                <Button onClick={() => navigate('/')}>
                    Return to home page
                </Button>
            </div>
        </div>
    );
};

export default NoPage;
