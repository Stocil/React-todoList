import PropTypes from "prop-types";

import useFilterTodo from "./hooks/useFilterTodo";

function FilteredTodoList(props) {
  const { isComplite, sortBy } = props;

  const tasks = useFilterTodo(isComplite, sortBy);
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
      <ul className="todos__list">{listContent}</ul>
    </>
  );
}

FilteredTodoList.propTypes = {
  isComplite: PropTypes.bool,
  sortBy: PropTypes.string,
};

export default FilteredTodoList;
