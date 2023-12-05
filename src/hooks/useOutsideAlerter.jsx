import { useEffect } from "react";

export default function useOutsideAlerter(
  ref,
  addRed = null,
  isOpen = true,
  onClick
) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        addRed.current &&
        !ref.current.contains(event.target) &&
        !addRed.current.contains(event.target) &&
        isOpen
      ) {
        onClick(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, addRed, isOpen, onClick]);
}
