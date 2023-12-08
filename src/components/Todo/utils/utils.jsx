export function getTodoContent(
  isEdit,
  setIsEdit,
  task,
  setTask,
  todo,
  theme,
  onEdit,
  onRemove
) {
  let textContent;
  let controlContent;

  const textClass = todo.done ? "todo__text complited" : "todo__text";

  if (isEdit) {
    textContent = (
      <input
        data-theme={theme}
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
      <div className="todo__text-inner">
        <p className={textClass}>{todo.task}</p>

        {todo.done ? (
          <p className="todo__date">Сompleted on {todo.date}</p>
        ) : null}
      </div>
    );

    controlContent = (
      <div data-theme={theme} className="todo__control-box">
        <button
          data-theme={theme}
          className="todo__edit-button"
          onClick={() => {
            toggleEditInput();
          }}
        ></button>

        <button
          data-theme={theme}
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
