export function getTodosFilteredBySearch(initialList, search) {
  if (search === "") {
    return initialList;
  }

  const filteredTodos = initialList.filter((todo) => {
    return todo.task.toLowerCase().includes(search.toLowerCase());
  });

  return filteredTodos;
}
