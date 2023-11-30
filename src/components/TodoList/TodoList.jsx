import { useState } from "react";

import TodoToggler from "../TodoToggler/TodoToggler";
import { getFilteredList } from "./utils/utils";

function TodoList() {
  const [position, setPosition] = useState(1);

  const content = getFilteredList(position);

  return (
    <section className="todos">
      <div className="container">
        <TodoToggler position={position} onClick={setPosition} />
        {content}
      </div>
    </section>
  );
}

export default TodoList;
