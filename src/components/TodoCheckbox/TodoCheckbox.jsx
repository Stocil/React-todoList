import { useContext } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "../../context/themeContext";

export default function InputChekbox(props) {
  const { todo, onClick } = props;
  const theme = useContext(ThemeContext);

  const linesClass = todo.done
    ? "todo__check-button-line complite"
    : "todo__check-button-line";

  return (
    <div className="todo__check-button" onClick={onClick}>
      <div
        data-theme={theme}
        data-line-id={todo.id}
        className={linesClass}
      ></div>
      <div
        data-theme={theme}
        data-line-id={todo.id}
        className={linesClass}
      ></div>
      <div
        data-theme={theme}
        data-line-id={todo.id}
        className={linesClass}
      ></div>
      <div
        data-theme={theme}
        data-line-id={todo.id}
        className={linesClass}
      ></div>
    </div>
  );
}

InputChekbox.propTypes = {
  todo: PropTypes.object,
  onClick: PropTypes.func,
};
