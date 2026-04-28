import { useState } from "react";
import ThemeContext from "./ThemeContext";
import MiddleContext from "./MiddleContext";

type Theme = 'light' | 'dark';
export default function DarkOrLight() {
    const [theme, setTheme] = useState<Theme>('light');
    const toggleTheme = (): void => {
        console.log(theme);
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <MiddleContext />
        </ThemeContext.Provider>
    );
}