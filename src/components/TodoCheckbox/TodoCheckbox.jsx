import PropTypes from "prop-types";

export default function InputChekbox(props) {
  const { todo, onClick } = props;

  const linesClass = todo.done
    ? "todo__check-button-line complite"
    : "todo__check-button-line";

  return (
    <div className="todo__check-button" onClick={onClick}>
      <div data-line-id={todo.id} className={linesClass}></div>
      <div data-line-id={todo.id} className={linesClass}></div>
      <div data-line-id={todo.id} className={linesClass}></div>
      <div data-line-id={todo.id} className={linesClass}></div>
    </div>
  );
}

InputChekbox.propTypes = {
  todo: PropTypes.object,
  onClick: PropTypes.func,
};
