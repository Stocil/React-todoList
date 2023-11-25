import { useReducer } from "react";

import Input from "../Input/Input";
import TodoList from "../TodoList/TodoList";
import initialTasks from "../../data/initialTasks";
import tasksReducer from "../../reducers/tasksReducer";

function TodoManager() {
  const [todos, dispatch] = useReducer(tasksReducer, initialTasks);

  console.log(todos);

  return (
    <>
      <Input onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onRemove={handleRemoveTodo}
        onComplite={handleToggleComplite}
      />
    </>
  );

  // TOOD: make hook for dispatches, create Context

  function handleAddTodo(task, id) {
    dispatch({
      type: "add",
      id: id,
      task: task,
    });
  }

  function handleRemoveTodo(id, elem) {
    console.log(elem.classList.add("removed"));

    setTimeout(dispatch, 600, {
      type: "remove",
      id: id,
    });
  }

  function handleToggleComplite(id) {
    dispatch({
      type: "toggle complite",
      id: id,
    });
  }
}

export default TodoManager;