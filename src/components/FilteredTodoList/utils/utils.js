export function getTodosFilteredBySearch(initialList, search) {
  if (search === "") {
    return initialList;
  }

  const filteredTodos = initialList.filter((todo) => {
    return todo.task.toLowerCase().includes(search.toLowerCase());
  });

  return filteredTodos;
}

export function getSortedTodos(arrayList, sortBy) {
  if (sortBy === "A-Z" || sortBy === "Z-A") {
    const sortedTasks = arrayList
      .map((todo) => {
        return todo.task.toLowerCase();
      })
      .sort();

    const sortedTasksId = arrayList
      .map((todo) => {
        return todo.id;
      })
      .sort();

    let sortedTodos = [];

    for (let id of sortedTasksId) {
      arrayList.map((todo) => {
        if (todo.id === id) {
          sortedTodos.push(todo);
        }
      });
    }

    if (sortBy === "A-Z") {
      return sortedTodos;
    } else if (sortBy === "Z-A") {
      return sortedTodos.reverse();
    }
  }

  // By change date

  if (sortBy === "new" || sortBy === "old") {
    const sortedTasks = arrayList
      .map((todo) => {
        return todo.lastChange;
      })
      .sort();

    let sortedTodos = [];

    for (let dates of sortedTasks) {
      arrayList.map((todo) => {
        if (todo.lastChange === dates) {
          sortedTodos.push(todo);
        }
      });
    }

    if (sortBy === "new") {
      return [].concat(sortedTodos).reverse();
    } else if (sortBy === "old") {
      return sortedTodos;
    }
  }
}
