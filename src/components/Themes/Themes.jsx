import { useContext } from "react";

import { SetThemeContext } from "../../context/themeContext";

function Themes() {
  const setTheme = useContext(SetThemeContext);

  return (
    <div className="input__themes-inner">
      <button
        onClick={() => setTheme("sky-blue")}
        className="input__theme-button"
      ></button>

      <button
        onClick={() => setTheme("soft-pink")}
        className="input__theme-button"
      ></button>

      <button
        onClick={() => setTheme("light")}
        className="input__theme-button"
      ></button>

      <button
        onClick={() => setTheme("deep-dark")}
        className="input__theme-button"
      ></button>
    </div>
  );
}

export default Themes;
