import React, { useEffect, useState } from "react";
import "./Header.css";
import { Button } from "../Button/Button";
import { DropdownSwitcher } from "../Dropdowns/Dropdowns";
import { SunIcon } from "../Icons";

function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onClickOutside = () => setShow(false);
    if (show) {
      window.addEventListener("click", onClickOutside);
    }
    return () => window.removeEventListener("click", onClickOutside);
  }, [show]);

  const toggleModal = (e) => {
    e.stopPropagation();
    setShow(!show);
  };

  return (
    <header className="header">
      <h1 className="header__title">Список заказов</h1>
      <Button
        className="button_size_middle button_transparent"
        icon={<SunIcon className="button__icon" />}
        text="Светлая тема"
        onClick={toggleModal}
      />
      <DropdownSwitcher
        className={`header__dropdown ${show ? "header__dropdown-active" : ""} `}
      />
    </header>
  );
}

export default Header;
