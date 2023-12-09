import PropTypes from "prop-types";
import { useContext } from "react";

import { ThemeContext } from "../../context/themeContext";
import useFilterTodo from "./hooks/useFilterTodo";

function FilteredTodoList(props) {
  const { isComplite, sortBy, search } = props;
  const theme = useContext(ThemeContext);

  const tasks = useFilterTodo(isComplite, sortBy, search);
  const content = isComplite ? "Complited:" : "To do:";
  let listContent;

  if (tasks.length === 0) {
    listContent = "The list is empty";
  } else {
    listContent = tasks;
  }

  return (
    <>
      <h2 className="todos__section-subtitle"> {content} </h2>
      <ul data-theme={theme} className="todos__list">
        {listContent}
      </ul>
    </>
  );
}

FilteredTodoList.propTypes = {
  isComplite: PropTypes.bool,
  sortBy: PropTypes.string,
  search: PropTypes.string,
};

export default FilteredTodoList;
