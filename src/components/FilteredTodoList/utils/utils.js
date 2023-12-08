export function getTodosFilteredBySearch(initialList, search) {
  if (search === "") {
    return initialList;
  }

  const filteredTodos = initialList.filter((todo) => {
    return todo.task.toLowerCase().includes(search.toLowerCase());
  });

  // const filteredTodos = initialList.filter((todo) => {
  //   const filteredWord = todo.task
  //     .toLowerCase()
  //     .split(" ")
  //     .map((word) => {
  //       return word.startsWith(search);
  //     });

  //   const answer = isStartWith(filteredWord);

  //   return answer;

  //   function isStartWith(list) {
  //     const array = list.filter((bools) => {
  //       if (bools) return true;
  //     });

  //     if (array[0]) {
  //       return true;
  //     }

  //     return false;
  //   }
  // });

  return filteredTodos;
}
