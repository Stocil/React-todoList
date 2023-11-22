import { useState } from "react";
import PropTypes from "prop-types";

function Todo(props) {
  const { content } = props;

  // TODO: Remove state, get variable through props
  const [complite, setComplite] = useState(false);

  const linesClass = complite
    ? "todo__button-line complite"
    : "todo__button-line";

  return (
    <li className="todo__item">
      <div className="todo__button" onClick={handleCompliteClick}>
        <div className={linesClass}></div>
        <div className={linesClass}></div>
        <div className={linesClass}></div>
        <div className={linesClass}></div>
      </div>

      <p className="todo__text">{content}</p>
    </li>
  );

  // TODO: Remove handleClick and get change reducer function through the props

  function handleCompliteClick() {
    setComplite(!complite);
  }
}

Todo.propTypes = {
  content: PropTypes.string,
};

export default Todo;
