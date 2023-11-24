import { useRef } from "react";
import PropTypes from "prop-types";

import { handleInputBlur } from "./utils/utils";
import { handleInputFocus } from "./utils/utils";

function Input(props) {
  const { onAdd } = props;

  const labelRef = useRef(null);
  const inputRef = useRef(null);

  return (
    <section className="input">
      <div className="container">
        <h1 className="input__title">Todo app</h1>

        <div className="input__group">
          <label className="input__label" htmlFor="new-todo" ref={labelRef}>
            Todo name
          </label>

          <input
            ref={inputRef}
            className="input__input"
            type="text"
            id="new-todo"
            onFocus={() => handleInputFocus(labelRef.current)}
            onBlur={() => handleInputBlur(inputRef.current, labelRef.current)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleClickAdd();
            }}
          />

          <button className="input__button" onClick={handleClickAdd}>
            +
          </button>
        </div>
      </div>
    </section>
  );

  function handleClickAdd() {
    const date = new Date();
    const id =
      "" +
      date.getFullYear() +
      date.getMonth() +
      date.getDate() +
      date.getHours() +
      date.getMinutes() +
      date.getSeconds();

    onAdd(inputRef.current.value, +id);

    inputRef.current.value = "";

    handleInputBlur(inputRef.current, labelRef.current);
  }
}

Input.propTypes = {
  onAdd: PropTypes.func,
};

export default Input;
