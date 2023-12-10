import Todo from "../../Todo/Todo";
import { TodoContext } from "../../../context/tasksContextReducer";
import { useContext } from "react";

import { getTodosFilteredBySearch, getSortedTodos } from "../utils/utils";

function useFilterTodo(isComplite, sortBy, search) {
  const initialList = useContext(TodoContext);

  const filteredBySearchList = getTodosFilteredBySearch(initialList, search);
  const filteredList = getSortedTodos(filteredBySearchList, sortBy);

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

    return todos;
  }
}

export default useFilterTodo;
