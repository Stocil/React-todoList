import { useContext } from "react";

import Todo from "../Todo/Todo";
import { TodoContext } from "../../context/tasksContextReducer";

function TodoList() {
  const todos = useContext(TodoContext);

  const tasks = todos.map((todo) => {
    return <Todo todo={todo} key={todo.id} />;
  });

  console.log(todos);

  return (
    <section className="todos">
      <div className="container">
        <ul className="todo__list">{tasks}</ul>
      </div>
    </section>
  );
}

export default TodoList;
