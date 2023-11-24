import PropTypes from "prop-types";

function Todo(props) {
  const { todo, onRemove, onComplite } = props;

  const complite = todo.done;

  const linesClass = complite
    ? "todo__check-button-line complite"
    : "todo__check-button-line";

  return (
    <li className="todo__item">
      <div className="todo__flex-box">
        <div className="todo__check-button" onClick={() => onComplite(todo.id)}>
          <div className={linesClass}></div>
          <div className={linesClass}></div>
          <div className={linesClass}></div>
          <div className={linesClass}></div>
        </div>

        <p className="todo__text">{todo.task}</p>
      </div>

      <button className="todo__remove-button" onClick={() => onRemove(todo.id)}>
        Rem
      </button>
    </li>
  );
}

Todo.propTypes = {
  todo: PropTypes.object,
  onRemove: PropTypes.func,
  onComplite: PropTypes.func,
};

export default Todo;
