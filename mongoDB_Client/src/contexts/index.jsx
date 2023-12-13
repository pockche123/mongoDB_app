import React, { useState, useContext, createContext } from "react";

const SnackContext = createContext();

export const SnackProvider = ({ children }) => {
    const [snacks, setSnacks] = useState([]);

    return (
        <SnackContext.Provider value={{snacks, setSnacks }}>
            {children}
        </SnackContext.Provider>
    );
};

export const useSnacks = () => useContext(SnackContext);
