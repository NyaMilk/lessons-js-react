import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import { Button, Switcher } from "../../../shared/components";
import { useClickOutside } from "../utils/useClickOutside";

const THEMES = {
  light: "light",
  dark: "dark",
};

const THEMES_LANG_RU = {
  light: "Светлая",
  dark: "Темная",
};

export const Header = () => {
  const toggleModalRef = useRef();
  const {
    ref: modalRef,
    isShow: isShowModal,
    setShow: setShowModal,
  } = useClickOutside(false, toggleModalRef);

  const toggleModal = (e) => {
    e.stopPropagation();
    setShowModal(!isShowModal);
  };

  const [currentTheme, setCurrentTheme] = useState(THEMES.light);

  useEffect(() => {
    document.documentElement.className = THEMES.light;
  }, []);

  const changeTheme = (theme) => () => {
    setCurrentTheme(theme);
    document.documentElement.className = theme;
    setShowModal(false);
  };

  const themeItems = [
    {
      title: THEMES_LANG_RU.light,
      icon: { name: "sun" },
      transparent: currentTheme !== THEMES.light,
      onClick: changeTheme(THEMES.light),
    },
    {
      title: THEMES_LANG_RU.dark,
      icon: { name: "moon" },
      transparent: currentTheme !== THEMES.dark,
      onClick: changeTheme(THEMES.dark),
    },
  ];

  return (
    <header className={styles._}>
      <h1>Список заказов</h1>
      <Button
        ref={toggleModalRef}
        icon={{ name: "sun" }}
        transparent
        onClick={toggleModal}
      >
        {THEMES_LANG_RU[currentTheme]} тема
      </Button>
      {isShowModal && (
        <Switcher ref={modalRef} className={styles.dropdown} items={themeItems}>
          Выберите тему
        </Switcher>
      )}
    </header>
  );
};
