export function getTodosFilteredBySearch(initialList, search) {
  if (search === "") {
    return initialList;
  }

  const filteredTodos = initialList.filter((todo) => {
    return todo.task.toLowerCase().includes(search.toLowerCase());
  });

  return filteredTodos;
}

export function sortByABC(arrayList) {
  const sortedTasks = arrayList
    .map((todo) => {
      return todo.task.toLowerCase();
    })
    .sort();

  let sortedTodos = [];

  for (let task of sortedTasks) {
    arrayList.map((todo) => {
      if (todo.task.toLowerCase() === task) {
        sortedTodos.push(todo);
      }
    });
  }

  return sortedTodos;
}
