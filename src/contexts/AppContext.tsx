import { createContext, ReactNode, useState } from 'react';

type AppContextType = {
    showSnow: boolean;
    setShowSnow: React.Dispatch<React.SetStateAction<boolean>>;
    showPerformance: boolean;
    setShowPerformance: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType>({
    showSnow: true,
    setShowSnow: () => null,
    showPerformance: true,
    setShowPerformance: () => null
});

type AppContextProviderProps = {
    children?: ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [showSnow, setShowSnow] = useState<boolean>(true);
    const [showPerformance, setShowPerformance] = useState<boolean>(true);
    
    const value = {
        showSnow, setShowSnow,
        showPerformance, setShowPerformance
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
