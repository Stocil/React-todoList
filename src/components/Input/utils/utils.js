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
