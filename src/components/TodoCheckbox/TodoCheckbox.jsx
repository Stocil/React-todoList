import PropTypes from "prop-types";

export default function InputChekbox(props) {
  const { complite, onClick } = props;

  const linesClass = complite
    ? "todo__check-button-line complite"
    : "todo__check-button-line";

  return (
    <div className="todo__check-button" onClick={onClick}>
      <div className={linesClass}></div>
      <div className={linesClass}></div>
      <div className={linesClass}></div>
      <div className={linesClass}></div>
    </div>
  );
}

InputChekbox.propTypes = {
  complite: PropTypes.bool,
  onClick: PropTypes.func,
};
