import PropTypes from "prop-types";

import useFilterTodo from "./hooks/useFilterTodo";

function FilteredTodoList(props) {
  const { isComplite } = props;

  const tasks = useFilterTodo(isComplite);
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
};

export default FilteredTodoList;
