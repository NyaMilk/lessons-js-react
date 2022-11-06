import React, { useEffect, useState } from "react";
import classnames from "classnames";
import styles from "./Header.module.css";
import { Button, Switcher } from "../../../shared/components";

export const Header = () => {
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    const onClickOutside = () => setShow(false);
    if (isShow) {
      window.addEventListener("click", onClickOutside);
    }
    return () => window.removeEventListener("click", onClickOutside);
  }, [isShow]);

  const modalHandler = (e) => {
    e.stopPropagation();
    setShow(!isShow);
  };

  const dropdownClass = classnames(styles.dropdown, {
    [styles.dropdownActive]: isShow,
  });

  const themeItems = [
    {
      title: "Светлая",
      icon: { name: "sun" },
      transparent: true,
    },
    {
      title: "Темная",
      icon: { name: "moon" },
    },
  ];

  return (
    <header className={styles._}>
      <h1>Список заказов</h1>
      <Button icon={{ name: "sun" }} transparent onClick={modalHandler}>
        Светлая тема
      </Button>
      <Switcher className={dropdownClass} items={themeItems}>
        Выберите тему
      </Switcher>
    </header>
  );
};
