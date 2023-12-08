import Todo from "../../Todo/Todo";
import { TodoContext } from "../../../context/tasksContextReducer";
import { useContext } from "react";

import { getTodosFilteredBySearch } from "../utils/utils";

function useFilterTodo(isComplite, sortBy, search) {
  const initialList = useContext(TodoContext);

  const filteredList = getTodosFilteredBySearch(initialList, search);

  if (!isComplite) {
    const todos = filteredList
      .filter((todo) => {
        if (todo.done === false) {
          return todo;
        }
      })
      .map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      });

    if (sortBy === "new") {
      return todos.reverse();
    }

    return todos;
  } else {
    const todos = filteredList
      .filter((todo) => {
        if (todo.done) {
          return todo;
        }
      })
      .map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      });

    if (sortBy === "new") {
      return todos.reverse();
    }

    return todos;
  }
}

export default useFilterTodo;
