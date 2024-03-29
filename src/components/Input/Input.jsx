import { useContext, useRef } from "react";

import useManageTodo from "../../hooks/useManageTodo";
import { handleInputBlur } from "./utils/utils";
import { handleInputFocus } from "./utils/utils";
import { handleClickAddTodo } from "./utils/utils";

import { TodoDispatchContext } from "../../context/tasksContextReducer";
import { ThemeContext } from "../../context/themeContext";

import Themes from "../Themes/Themes";

function Input() {
  const dispatch = useContext(TodoDispatchContext);
  const { handleAddTodo } = useManageTodo(dispatch);

  const theme = useContext(ThemeContext);

  const labelRef = useRef(null);
  const inputRef = useRef(null);

  return (
    <section className="input">
      <div className="container">
        <h1 className="input__title">Todo app</h1>

        <Themes />

        <div className="input__group">
          <label
            data-theme={theme}
            className="input__label"
            htmlFor="new-todo"
            ref={labelRef}
          >
            Add todo
          </label>

          <input
            data-theme={theme}
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
                handleClickAddTodo(
                  handleAddTodo,
                  inputRef.current,
                  labelRef.current
                );
            }}
          />

          <button
            data-theme={theme}
            className="input__add-button"
            onClick={() => {
              if (inputRef.current && inputRef.current.value) {
                handleClickAddTodo(
                  handleAddTodo,
                  inputRef.current,
                  labelRef.current
                );
              }
            }}
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}

export default Input;
