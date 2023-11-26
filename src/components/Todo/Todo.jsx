import { useContext, useRef } from "react";
import PropTypes from "prop-types";

import useManageTodo from "../../hooks/useManageTodo";
import TodoChekbox from "../TodoCheckbox/TodoCheckbox";
import { TodoDispatchContext } from "../../context/tasksContextReducer";

function Todo(props) {
  const { todo } = props;
  const elemRef = useRef(null);

  const dispatch = useContext(TodoDispatchContext);
  const { handleRemoveTodo, handleToggleComplite } = useManageTodo(dispatch);

  return (
    <li ref={elemRef} className="todo__item">
      <div className="todo__flex-box">
        <TodoChekbox
          complite={todo.done}
          onClick={() => handleToggleComplite(todo.id)}
        />
        <p className="todo__text">{todo.task}</p>
      </div>

      <button
        className="todo__remove-button"
        onClick={() => {
          handleRemoveTodo(todo.id, elemRef.current);
        }}
      ></button>
    </li>
  );
}

Todo.propTypes = {
  complite: PropTypes.string,
  todo: PropTypes.object,
};

export default Todo;
