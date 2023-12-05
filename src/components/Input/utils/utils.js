import { v4 as uuidv4 } from "uuid";

export function handleInputFocus(label) {
  label.classList.add("selected");
}

export function handleInputBlur(inputRef, labelRef) {
  if (inputRef.value !== "") return;

  inputRef.blur();

  labelRef.classList.remove("selected");
}

export function handleClickAddTodo(func, input, label) {
  const id = uuidv4();

  func(input.value, id);
  input.value = "";
  handleInputBlur(input, label);
}
