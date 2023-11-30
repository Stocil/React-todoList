export function getSliderPosition(position) {
  let sliderClass;

  if (position === 1) {
    sliderClass = "position-1";
  } else if (position === 2) {
    sliderClass = "position-2";
  } else if (position === 3) {
    sliderClass = "position-3";
  }

  return sliderClass;
}

export function onDelayClick(newPosition, position, onClick) {
  if (position === newPosition) return;

  document.querySelector(".todos__inner").classList.add("hide");
  setTimeout(onClick, 200, newPosition);

  setTimeout(() => {
    document.querySelector(".todos__inner").classList.remove("hide");
  }, 200);
}
