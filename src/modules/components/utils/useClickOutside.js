import { createRef, useEffect, useState } from "react";

export const useClickOutside = (initState, toggleRef) => {
  const [isShow, setShow] = useState(initState);
  const ref = createRef(null);

  const clickOutsideHandler = (event) => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      toggleRef.current &&
      !toggleRef.current.contains(event.target)
    ) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutsideHandler);

    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  });

  return { ref, isShow, setShow };
};
