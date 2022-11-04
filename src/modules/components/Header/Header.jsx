import React, { useEffect, useState } from "react";
import classnames from "classnames";
import styles from "./Header.module.css";
import { Button, Input, Searchbar } from "../../../shared/components";

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
      prefixIcon: { icon: "sun" },
      transparent: true,
    },
    {
      title: "Темная",
      prefixIcon: { icon: "moon" },
    },
  ];

  return (
    <header className={styles._}>
      <h1>Список заказов</h1>
      <Button icon={{ name: "sun" }} transparent onClick={showModalHandler}>
        Светлая тема
      </Button>
      {/* <Switcher className={dropdownClass} items={themeItems}>
        Выберите тему
      </Switcher> */}

      <Input value="test" disabled />
      <Input value="test" />
      <Input value="test" label="label" />
      <Searchbar />
    </header>
  );
}

export default Header;
