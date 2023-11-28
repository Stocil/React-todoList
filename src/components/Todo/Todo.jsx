import { useContext, useRef, useState } from "react";
import PropTypes from "prop-types";

import useManageTodo from "../../hooks/useManageTodo";
import TodoChekbox from "../TodoCheckbox/TodoCheckbox";
import { TodoDispatchContext } from "../../context/tasksContextReducer";

function Todo(props) {
  const { todo } = props;

  const elemRef = useRef(null);
  const [task, setTask] = useState(todo.task);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useContext(TodoDispatchContext);
  const { handleRemoveTodo, handleToggleComplite, handleEditTodo } =
    useManageTodo(dispatch);

  const lineThrough = {
    textDecoration: "line-through",
    color: "#959595",
  };

  let textContent;
  let controlContent;

  // TODO clear & create new components

  if (isEdit) {
    textContent = (
      <input
        className="todo__edit-input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleEditTodo(todo.id, task);
            toggleEditInput();
          }
        }}
        autoFocus
      ></input>
    );

    controlContent = (
      <div className="todo__control-box">
        <button
          className="todo__save-button"
          onClick={() => {
            handleEditTodo(todo.id, task);
            toggleEditInput();
          }}
        ></button>
      </div>
    );
  } else {
    textContent = (
      <p className="todo__text" style={todo.done ? lineThrough : null}>
        {todo.task}
      </p>
    );

    controlContent = (
      <div className="todo__control-box">
        <button
          className="todo__edit-button"
          onClick={() => {
            toggleEditInput();
          }}
        ></button>

        <button
          className="todo__remove-button"
          onClick={() => {
            handleRemoveTodo(todo.id, elemRef.current);
          }}
        ></button>
      </div>
    );
  }

  return (
    <li ref={elemRef} className="todo__item">
      <div className="todo__todo-box">
        <TodoChekbox
          todo={todo}
          onClick={() => handleToggleComplite(todo.id)}
        />
        {textContent}
      </div>

      {controlContent}
    </li>
  );

  function toggleEditInput() {
    setIsEdit((edit) => !edit);
  }
}

Todo.propTypes = {
  complite: PropTypes.string,
  todo: PropTypes.object,
};

export default Todo;
