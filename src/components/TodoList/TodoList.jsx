import { useState } from "react";

import { getFilteredList } from "./utils/utils";
import useLocalStorage from "../../hooks/useLocalStorage";
import TodoToggler from "../TodoToggler/TodoToggler";
import TodoSorting from "../TodoSorting/TodoSorting";
import SearchBar from "../SearchBar/SearchBar";

function TodoList() {
  const { getSortTodos } = useLocalStorage("sort");

  const [position, setPosition] = useState(1);
  const [todoSort, setTodoSort] = useState(getSortTodos());
  const [todoSearch, setTodoSearch] = useState("");

  const content = getFilteredList(position, todoSort, todoSearch);

  return (
    <section className="todos">
      <div className="container">
        <div className="todos__control-inner">
          <TodoToggler position={position} onClick={setPosition} />
          <TodoSorting selected={todoSort} onChange={setTodoSort} />
        </div>

        <SearchBar value={todoSearch} onChange={setTodoSearch} />

        {content}
      </div>
    </section>
  );
}

export default TodoList;
