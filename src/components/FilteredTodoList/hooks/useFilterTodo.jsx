import Todo from "../../Todo/Todo";
import { TodoContext } from "../../../context/tasksContextReducer";
import { useContext } from "react";

function useFilterTodo(isComplite) {
  const initialList = useContext(TodoContext);

  if (!isComplite) {
    const todos = initialList
      .filter((todo) => {
        if (todo.done === false) {
          return todo;
        }
      })
      .map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      });

    return todos;
  } else {
    const todos = initialList
      .filter((todo) => {
        if (todo.done) {
          return todo;
        }
      })
      .map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      });

    return todos;
  }
}

export default useFilterTodo;
