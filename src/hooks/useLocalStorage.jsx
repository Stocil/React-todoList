function useLocalStorage(key) {
  function setTodoItem(value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getTodoItem() {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  }

  return { setTodoItem, getTodoItem };
}

export default useLocalStorage;
