import PropTypes from "prop-types";

import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

function SearchBar(props) {
  const { value, onChange } = props;
  const theme = useContext(ThemeContext);

  return (
    <div data-theme={theme} className="input__search">
      <input
        data-theme={theme}
        className="search__input"
        placeholder="Search todo"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchBar;
