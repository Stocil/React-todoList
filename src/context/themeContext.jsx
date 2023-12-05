import PropTypes from "prop-types";

import { createContext, useState } from "react";

export const ThemeContext = createContext(null);
export const SetThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("sky-blue");

  return (
    <ThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={setTheme}>
        {children}
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.array,
};
