import Todo from "../Todo/Todo";

function TodoList() {
  return (
    <section className="todos">
      <div className="container">
        <Todo />
        <Todo />
      </div>
    </section>
  );
}

export default TodoList;
