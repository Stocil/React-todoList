import FilteredTodoList from "../../FilteredTodoList/FilteredTodoList";

export function getFilteredList(position) {
  if (position === 1) {
    return (
      <div className="todos__inner">
        <FilteredTodoList isComplite={false} />
        <FilteredTodoList isComplite={true} />
      </div>
    );
  } else if (position === 2) {
    return (
      <div className="todos__inner">
        <FilteredTodoList isComplite={false} />
      </div>
    );
  } else if (position === 3) {
    return (
      <div className="todos__inner">
        <FilteredTodoList isComplite={true} />
      </div>
    );
  }
}
