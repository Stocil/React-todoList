import { useRef, useState, useContext } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "../../context/themeContext";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useLocalStorage from "../../hooks/useLocalStorage";

function TodoSorting(props) {
  const [isOpen, setOpen] = useState(false);
  const theme = useContext(ThemeContext);
  const dropdownRef = useRef(null);
  const selectedRef = useRef(null);

  useOutsideAlerter(dropdownRef, selectedRef, isOpen, setOpen);

  const { selected, onChange } = props;
  const { setSortTodos } = useLocalStorage("sort");

  const textContent = selected === "old" ? "The old first" : "New ones first";
  const optionClass = isOpen ? "todos__sort-option open" : "todos__sort-option";
  const dropdownCLass = isOpen
    ? "todos__sort-dropdown open"
    : "todos__sort-dropdown";

  return (
    <div data-theme={theme} className="todos__sort-inner">
      <p className="todos__sort-text">Sort by:</p>

      <div className="todos__sort-select">
        <p
          data-theme={theme}
          className="todos__sort-selected"
          onClick={handleOpenClick}
          ref={selectedRef}
        >
          {textContent}
        </p>

        <div
          data-theme={theme}
          className={dropdownCLass}
          aria-disabled={isOpen}
          ref={dropdownRef}
        >
          <div
            data-theme={theme}
            className={optionClass}
            aria-selected={"new" == selected}
            aria-disabled={isOpen}
            tabIndex="-1"
            onClick={() => handleOptionClick("new")}
          >
            New ones first
          </div>
          <div
            data-theme={theme}
            className={optionClass}
            aria-disabled={isOpen}
            aria-selected={"old" == selected}
            tabIndex="-1"
            onClick={() => handleOptionClick("old")}
          >
            The old first
          </div>
        </div>
      </div>
    </div>
  );

  function handleOpenClick() {
    setOpen((open) => !open);
  }

  function handleOptionClick(sort) {
    onChange(sort);
    setSortTodos(sort);
    handleOpenClick();
  }
}

TodoSorting.propTypes = {
  selected: PropTypes.string,
  onChange: PropTypes.func,
};

export default TodoSorting;
