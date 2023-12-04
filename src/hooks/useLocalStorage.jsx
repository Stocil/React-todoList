function useLocalStorage(key) {
  function setTodoItem(value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getTodoItem() {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  }

  function setSortTodos(value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getSortTodos() {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : "old";
  }

  return { setTodoItem, getTodoItem, setSortTodos, getSortTodos };
}

export default useLocalStorage;
