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

  function setTheme(value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getTheme() {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : "deep-dark";
  }

  return {
    setTodoItem,
    getTodoItem,
    setSortTodos,
    getSortTodos,
    setTheme,
    getTheme,
  };
}

export default useLocalStorage;
