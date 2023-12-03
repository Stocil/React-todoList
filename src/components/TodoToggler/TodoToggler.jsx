import PropTypes from "prop-types";

import { getSliderPosition } from "./utils/utils";

import { onDelayClick } from "./utils/utils";

function TodoToggler(props) {
  const { position, onClick } = props;

  const sliderClass = getSliderPosition(position);

  return (
    <div className="todos__switch-inner">
      <p
        className="todos__switch-text"
        onClick={() => onDelayClick(1, position, onClick)}
      >
        All
      </p>
      <p
        className="todos__switch-text"
        onClick={() => onDelayClick(2, position, onClick)}
      >
        To do
      </p>
      <p
        className="todos__switch-text"
        onClick={() => onDelayClick(3, position, onClick)}
      >
        Complited
      </p>
      <div className={"todos__switch-slider " + sliderClass}></div>
    </div>
  );
}

TodoToggler.propTypes = {
  position: PropTypes.number,
  onClick: PropTypes.func,
};

export default TodoToggler;
