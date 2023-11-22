import Todo from "../Todo/Todo";
import initialTasks from "../../initialTasks";
import { useState } from "react";

function TodoList() {
  // TODO: up the state to the filteredTodoList component and also create reducer
  const [todos, setTodos] = useState(initialTasks);

  const tasks = todos.map((todo) => {
    return <Todo content={todo.task} key={todo.id} />;
  });

  return (
    <section className="todos">
      <div className="container">
        <ul className="todo__list">{tasks}</ul>
      </div>
    </section>
  );
}

export default TodoList;
