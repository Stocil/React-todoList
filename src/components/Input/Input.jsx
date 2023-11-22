import { useRef } from "react";

function Input() {
  const labelRef = useRef(null);

  return (
    <section className="input">
      <div className="container">
        <h1 className="input__title">Todo app</h1>

        <div className="input__group">
          <label className="input__label" htmlFor="new-todo" ref={labelRef}>
            Todo name
          </label>
          <input
            className="input__input"
            type="text"
            id="new-todo"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleClickAdd(e);
            }}
          />

          {/* TODO Create add button*/}
        </div>
      </div>
    </section>
  );

  function handleInputFocus(e) {
    labelRef.current.style.bottom = "40px";
    labelRef.current.style.color = "#e7adf9";
    e.target.style.borderColor = "#e7adf9";
  }

  function handleInputBlur(e) {
    if (e.target.value !== "") return;

    labelRef.current.style.bottom = "10px";
    labelRef.current.style.color = "#959595";
    e.target.style.borderColor = "black";
  }

  function handleClickAdd(e) {
    console.log("Add " + e.target.value + " todo");
    e.target.value = "";

    // TODO add to todoList array
  }
}

export default Input;
