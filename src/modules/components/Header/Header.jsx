import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Button, Switcher } from "../../../shared/components";

export const Header = () => {
  const [isShowModal, setShowModal] = useState(false);

  useEffect(() => {
    const onClickOutside = () => setShowModal(false);
    if (isShowModal) {
      window.addEventListener("click", onClickOutside);
    }
    return () => window.removeEventListener("click", onClickOutside);
  }, [isShowModal]);

  const toggleModal = (e) => {
    e.stopPropagation();
    setShowModal(!isShowModal);
  };

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
      <Button icon={{ name: "sun" }} transparent onClick={toggleModal}>
        Светлая тема
      </Button>
      {isShowModal && (
        <Switcher className={styles.dropdown} items={themeItems}>
          Выберите тему
        </Switcher>
      )}
    </header>
  );
};
