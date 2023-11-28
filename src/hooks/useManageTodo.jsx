export default function useManageTodo(dispatch) {
  function handleAddTodo(task, id) {
    dispatch({
      type: "add",
      id: id,
      task: task,
    });
  }

  function handleRemoveTodo(id) {
    document.getElementById(id).classList.add("removed");

    setTimeout(dispatch, 600, {
      type: "remove",
      id: id,
    });
  }

  function handleToggleComplite(id) {
    const lines = document.querySelectorAll("[data-line-id]");

    for (let line = 0; line < lines.length; line++) {
      if (+lines[line].dataset.lineId === id) {
        lines[line].classList.toggle("complite");
      }
    }

    setTimeout(dispatch, 500, {
      type: "toggle complite",
      id: id,
    });
  }

  function handleEditTodo(id, newTask) {
    dispatch({
      type: "edit",
      id: id,
      task: newTask,
    });
  }

  return {
    handleAddTodo,
    handleRemoveTodo,
    handleToggleComplite,
    handleEditTodo,
  };
}
