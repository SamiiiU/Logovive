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

    const [isQuote , setIsQuote] = useState(false);
    const [isOrder , setIsOrder] = useState(false)
    const [price , setPrice] = useState(null)
    const [packageSelect , setPackage] = useState("");



    return (
        <GlobalContext.Provider value={{ 
            isQuote , 
            setIsQuote,
            price , setPrice,
            packageSelect , setPackage,
            isOrder , setIsOrder

            }}>
            {children}
        </GlobalContext.Provider>
    );
};
