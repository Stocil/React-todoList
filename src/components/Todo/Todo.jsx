import { useState } from "react";

function Todo() {
  const [complite, setComplite] = useState(false);

  const linesClass = complite
    ? "todo__button-line complite"
    : "todo__button-line";

  return (
    <div className="todo">
      <div className="todo__button" onClick={handleCompliteClick}>
        <div className={linesClass}></div>
        <div className={linesClass}></div>
        <div className={linesClass}></div>
        <div className={linesClass}></div>
      </div>

      <p className="todo__text">Test todo</p>
    </div>
  );

  function handleCompliteClick() {
    setComplite(!complite);
  }
}

export default Todo;
