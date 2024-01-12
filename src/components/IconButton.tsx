import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { MouseEventHandler } from 'react';

type IconButtonProps = {
    onClick?: MouseEventHandler;
    icon: IconProp;
    className?: string;
};

const IconButton = ({ onClick, icon, className }: IconButtonProps) => {
    return (
        <FontAwesomeIcon
            onClick={onClick}
            icon={icon}
            className={clsx('cursor-pointer hover:drop-shadow-glow-white hover:scale-125', className)}
        />
    );
};

export default IconButton;
