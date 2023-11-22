import { useRef } from "react";

function Input() {
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
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
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

  function handleInputFocus(e) {
    labelRef.current.style.bottom = "40px";
    labelRef.current.style.color = "#e7adf9";
    e.target.style.borderColor = "#e7adf9";
  }

  function handleInputBlur() {
    if (inputRef.current.value !== "") return;

    inputRef.current.blur();

    labelRef.current.style.bottom = "10px";
    labelRef.current.style.color = "#959595";
    inputRef.current.style.borderColor = "black";
  }

  function handleClickAdd() {
    console.log("Add " + inputRef.current.value + " todo");
    inputRef.current.value = "";

    handleInputBlur();

    // TODO add to todoList array
  }
}

export default Input;
