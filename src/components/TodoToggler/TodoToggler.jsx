import PropTypes from "prop-types";

import { getSliderPosition } from "./utils/utils";
import { onDelayClick } from "./utils/utils";
import { ThemeContext } from "../../context/themeContext";
import { useContext } from "react";

function TodoToggler(props) {
  const { position, onClick } = props;
  const theme = useContext(ThemeContext);

  const sliderClass = getSliderPosition(position);

  return (
    <div data-theme={theme} className="todos__switch-inner">
      <p
        data-theme={theme}
        className="todos__switch-text current"
        onClick={(e) => handleClick(e, 1)}
      >
        All
      </p>
      <p
        data-theme={theme}
        className="todos__switch-text"
        onClick={(e) => handleClick(e, 2)}
      >
        To do
      </p>
      <p
        data-theme={theme}
        className="todos__switch-text"
        onClick={(e) => handleClick(e, 3)}
      >
        Complited
      </p>
      <div
        data-theme={theme}
        className={"todos__switch-slider " + sliderClass}
      ></div>
    </div>
  );

  function handleClick(e, number) {
    document.querySelector(".current").classList.remove("current");
    e.target.classList.toggle("current");
    onDelayClick(number, position, onClick);
  }
}

TodoToggler.propTypes = {
  position: PropTypes.number,
  onClick: PropTypes.func,
};

export default TodoToggler;
