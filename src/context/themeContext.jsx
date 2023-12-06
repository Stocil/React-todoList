import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext(null);
export const SetThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const { setTheme, getTheme } = useLocalStorage("theme");
  const [currentTheme, setCurrentTheme] = useState(getTheme());

  useEffect(() => {
    document.body.dataset.theme = currentTheme;

    setTheme(currentTheme);
  }, [currentTheme, setTheme]);

  return (
    <ThemeContext.Provider value={currentTheme}>
      <SetThemeContext.Provider value={setCurrentTheme}>
        {children}
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.array,
};
