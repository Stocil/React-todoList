import PropTypes from "prop-types";
import { useRef } from "react";

function Todo(props) {
  const { todo, onRemove, onComplite } = props;

  const elemRef = useRef(null);
  const complite = todo.done;
  const linesClass = complite
    ? "todo__check-button-line complite"
    : "todo__check-button-line";

  return (
    <li ref={elemRef} className="todo__item">
      <div className="todo__flex-box">
        <div className="todo__check-button" onClick={() => onComplite(todo.id)}>
          <div className={linesClass}></div>
          <div className={linesClass}></div>
          <div className={linesClass}></div>
          <div className={linesClass}></div>
        </div>

        <p className="todo__text">{todo.task}</p>
      </div>

      <button
        className="todo__remove-button"
        onClick={() => {
          onRemove(todo.id, elemRef.current);
        }}
      ></button>
    </li>
  );
}

Todo.propTypes = {
  todo: PropTypes.object,
  onRemove: PropTypes.func,
  onComplite: PropTypes.func,
};

export default Todo;
