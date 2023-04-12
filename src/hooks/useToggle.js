import { useState } from "react";

export const useToggle = (exampleInitialState = false) => {
  const [isOpen, setIsOpen] = useState(exampleInitialState);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  //   const toggle = () => setIsOpen(!isOpen);
  const toggle = () => setIsOpen((prev) => !prev);

  return { isOpen, open, close, toggle };
};
