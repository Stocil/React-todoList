import { useState } from "react";

import { getFilteredList } from "./utils/utils";
import useLocalStorage from "../../hooks/useLocalStorage";
import TodoToggler from "../TodoToggler/TodoToggler";
import TodoSorting from "../TodoSorting/TodoSorting";

function TodoList() {
  const { getSortTodos } = useLocalStorage("sort");

  const [position, setPosition] = useState(1);
  const [todoSort, setTodoSort] = useState(getSortTodos());

  const content = getFilteredList(position, todoSort);

  return (
    <section className="todos">
      <div className="container">
        <div className="todos__control-inner">
          <TodoToggler position={position} onClick={setPosition} />
          <TodoSorting selected={todoSort} onChange={setTodoSort} />
        </div>

        {content}
      </div>
    </section>
  );
}

export default TodoList;
