export function handleInputFocus(label) {
  label.style.bottom = "40px";
  // label.style.color = "#e7adf9";
  label.style.color = "#cae4ff";
}

export function handleInputBlur(inputRef, labelRef) {
  if (inputRef.value !== "") return;

  inputRef.blur();

  labelRef.style.bottom = "10px";
  labelRef.style.color = "#959595";
}

export function handleClickAddTodo(func, input, label) {
  const id = getId();

  func(input.value, +id);
  input.value = "";
  handleInputBlur(input, label);

  function getId() {
    const date = new Date();

    const id =
      "" +
      date.getFullYear() +
      date.getMonth() +
      date.getDate() +
      date.getHours() +
      date.getMinutes() +
      date.getSeconds() +
      date.getMilliseconds();

    return +id;
  }
}
