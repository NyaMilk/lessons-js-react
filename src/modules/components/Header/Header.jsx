import React, { useEffect, useState } from "react";
import classnames from "classnames";
import styles from "./Header.module.css";
import { Button } from "../../../shared/components/Button/Button";
import { MoonIcon, SunIcon } from "../../../shared/components/Icons";
import { Switcher } from "../../../shared/components/Switcher/Switcher";

function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onClickOutside = () => setShow(false);
    if (show) {
      window.addEventListener("click", onClickOutside);
    }
    return () => window.removeEventListener("click", onClickOutside);
  }, [show]);

  const showModalHandler = (e) => {
    e.stopPropagation();
    setShow(!show);
  };

  const dropdownClass = classnames(styles.dropdown, {
    [styles.dropdownActive]: show,
  });

  const themeItems = [
    {
      title: "Светлая",
      prefixIcon: { icon: SunIcon },
      transparent: true,
    },
    {
      title: "Темная",
      prefixIcon: { icon: MoonIcon },
    },
  ];

  return (
    <header className={styles._}>
      <h1>Список заказов</h1>
      <Button
        prefixIcon={{ icon: SunIcon }}
        onClick={showModalHandler}
        transparent
      >
        Светлая тема
      </Button>
      <Switcher className={dropdownClass} items={themeItems}>
        Выберите тему
      </Switcher>
    </header>
  );
}

export default Header;
