import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Glow from './text/Glow';

type StarProps = {
    className?: string;
};

const Star = ({ className }: StarProps) => {
    return (
        <Glow color='yellow'>
            <FontAwesomeIcon icon={faStar} className={className} />
        </Glow>
    );
};

export default Star;
