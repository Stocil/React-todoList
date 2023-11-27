import FilteredTodoList from "../FilteredTodoList/FilteredTodoList";

function TodoList() {
  return (
    <section className="todos">
      <div className="container">
        <FilteredTodoList isComplite={false} />
        <FilteredTodoList isComplite={true} />
      </div>
    </section>
  );
}

export default TodoList;
