import { useContext, useRef } from "react";

import useManageTodo from "../../hooks/useManageTodo";
import { handleInputBlur } from "./utils/utils";
import { handleInputFocus } from "./utils/utils";
import { TodoDispatchContext } from "../../context/tasksContextReducer";

function Input() {
  const dispatch = useContext(TodoDispatchContext);
  const { handleAddTodo } = useManageTodo(dispatch);

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
              if (
                e.key === "Enter" &&
                inputRef.current &&
                inputRef.current.value
              )
                handleClickAdd();
            }}
          />

          <button
            className="input__button"
            onClick={() => {
              if (inputRef.current && inputRef.current.value) {
                handleClickAdd();
              }
            }}
          >
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

    handleAddTodo(inputRef.current.value, +id);

    inputRef.current.value = "";

    handleInputBlur(inputRef.current, labelRef.current);
  }
}

export default Input;
