export default function useManageTodo(dispatch) {
  function handleAddTodo(task, id) {
    dispatch({
      type: "add",
      id: id,
      task: task,
    });
  }

  function handleRemoveTodo(id, elem) {
    elem.classList.add("removed");

    setTimeout(dispatch, 600, {
      type: "remove",
      id: id,
    });
  }

  function handleToggleComplite(id) {
    dispatch({
      type: "toggle complite",
      id: id,
    });
  }

  return { handleAddTodo, handleRemoveTodo, handleToggleComplite };
}
