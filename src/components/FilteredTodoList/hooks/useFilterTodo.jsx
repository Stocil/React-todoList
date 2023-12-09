import Todo from "../../Todo/Todo";
import { TodoContext } from "../../../context/tasksContextReducer";
import { useContext } from "react";

import { getTodosFilteredBySearch, sortByABC } from "../utils/utils";

function useFilterTodo(isComplite, sortBy, search) {
  const initialList = useContext(TodoContext);

  const filteredBySearchList = getTodosFilteredBySearch(initialList, search);

  let filteredList;

  // TODO: change sortByABC to function for all All kind of sort

  if (sortBy === "A-Z") {
    filteredList = sortByABC(filteredBySearchList);
  } else if (sortBy === "Z-A") {
    filteredList = sortByABC(filteredBySearchList).reverse();
  } else {
    filteredList = filteredBySearchList;
  }

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
