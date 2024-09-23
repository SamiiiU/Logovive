import React, { createContext, useState, useContext } from 'react';

// Create a new context
const GlobalContext = createContext();

// Custom hook to use the GlobalContext easily
export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

// Create a provider component
export const GlobalProvider = ({ children }) => {
    // Example of global state (You can add more states as needed)
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isQuote , setIsQuote] = useState(false)

    // Toggle the dark mode state
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <GlobalContext.Provider value={{ 
            isDarkMode, 
            toggleDarkMode ,
            isQuote , 
            setIsQuote

            }}>
            {children}
        </GlobalContext.Provider>
    );
};
