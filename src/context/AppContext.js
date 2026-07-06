import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light"
    });

    useEffect(() => {
        localStorage.setItem("theme", theme)
        if(theme === "dark"){
            document.documentElement.classList.add("dark")
        }
        else{
            document.documentElement.classList.remove("dark")
        }
    },[theme])

    function toggleTheme () {
        setTheme((prev) => prev === "light" ? "dark" : "light")
    }

    const value ={
        theme,
        toggleTheme,
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}


