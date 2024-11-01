import { ReactNode, useId, useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

type TooltipProps = {
    children?: ReactNode;
    tooltipContent?: ReactNode;
    tooltipTempContent?: ReactNode;
    tempTimeMs?: number;
    delayShowMs?: number;
};

const Tooltip = ({ children, tooltipContent, tooltipTempContent, tempTimeMs = 1000, delayShowMs }: TooltipProps) => {
    const uniqueId = useId();
    const [useTemp, setTemp] = useState(false);

    return (
        <>
            <a
                data-tooltip-id={uniqueId}
                onClick={() => {
                    setTemp(true);
                    setTimeout(() => setTemp(false), tempTimeMs);
                }}
            >
                {children}
                <ReactTooltip
                    id={uniqueId}
                    className='!select-none !bg-aoc-lighter !opacity-100'
                    delayShow={delayShowMs}
                >
                    {useTemp ? (tooltipTempContent ?? tooltipContent) : tooltipContent}
                </ReactTooltip>
            </a>
        </>
    );
};

export default Tooltip;
