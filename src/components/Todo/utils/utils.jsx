export function getTodoContent(
  isEdit,
  setIsEdit,
  task,
  setTask,
  todo,
  onEdit,
  onRemove
) {
  let textContent;
  let controlContent;

  const lineThrough = {
    textDecoration: "line-through",
    color: "#959595",
  };

  if (isEdit) {
    textContent = (
      <input
        className="todo__edit-input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onEdit(todo.id, task);
            toggleEditInput();
          }
        }}
        autoFocus
      ></input>
    );

    controlContent = (
      <div className="todo__control-box">
        <button
          className="todo__save-button"
          onClick={() => {
            onEdit(todo.id, task);
            toggleEditInput();
          }}
        ></button>
      </div>
    );
  } else {
    textContent = (
      <p className="todo__text" style={todo.done ? lineThrough : null}>
        {todo.task}
      </p>
    );

    controlContent = (
      <div className="todo__control-box">
        <button
          className="todo__edit-button"
          onClick={() => {
            toggleEditInput();
          }}
        ></button>

        <button
          className="todo__remove-button"
          onClick={() => {
            onRemove(todo.id);
          }}
        ></button>
      </div>
    );
  }

  function toggleEditInput() {
    setIsEdit((edit) => !edit);
  }

  return [textContent, controlContent];
}
