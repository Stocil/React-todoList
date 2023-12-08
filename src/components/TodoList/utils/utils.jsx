import FilteredTodoList from "../../FilteredTodoList/FilteredTodoList";

export function getFilteredList(position, sort, search) {
  if (position === 1) {
    return (
      <div className="todos__inner">
        <FilteredTodoList isComplite={false} sortBy={sort} search={search} />
        <FilteredTodoList isComplite={true} sortBy={sort} search={search} />
      </div>
    );
  } else if (position === 2) {
    return (
      <div className="todos__inner">
        <FilteredTodoList isComplite={false} sortBy={sort} search={search} />
      </div>
    );
  } else if (position === 3) {
    return (
      <div className="todos__inner">
        <FilteredTodoList isComplite={true} sortBy={sort} search={search} />
      </div>
    );
  }
}
