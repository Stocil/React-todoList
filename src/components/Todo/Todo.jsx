import { useContext, useState } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "../../context/themeContext";
import { TodoDispatchContext } from "../../context/tasksContextReducer";
import useManageTodo from "../../hooks/useManageTodo";
import { getTodoContent } from "./utils/utils";

import TodoChekbox from "../TodoCheckbox/TodoCheckbox";

function Todo(props) {
  const { todo } = props;

  const [task, setTask] = useState(todo.task);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useContext(TodoDispatchContext);
  const theme = useContext(ThemeContext);
  const { handleRemoveTodo, handleToggleComplite, handleEditTodo } =
    useManageTodo(dispatch);

  let [textContent, controlContent] = getTodoContent(
    isEdit,
    setIsEdit,
    task,
    setTask,
    todo,
    theme,
    handleEditTodo,
    handleRemoveTodo
  );

  return (
    <li data-theme={theme} className="todo__item" id={todo.id}>
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
}

Todo.propTypes = {
  complite: PropTypes.string,
  todo: PropTypes.object,
};

export default Todo;
