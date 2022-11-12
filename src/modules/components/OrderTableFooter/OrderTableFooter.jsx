import React, { useState } from "react";
import { Button, Switcher, TableFooter } from "../../../shared/components";
import { Pagination } from "../Pagination/Pagination";
import styles from "./OrderTableFooter.module.css";

export const OrderTableFooter = ({
  recordsCount,
  selectedRecords = 0,
  deleteRecords = 0,
}) => {
  const [isShow, setShow] = useState(false);

  const toggleModal = (e) => {
    e.stopPropagation();
    setShow(!isShow);
  };

  const modalItems = [
    {
      title: "Удалить",
      transparent: true,
    },
    {
      title: "Отмена",
    },
  ];

  return (
    <TableFooter>
      <div className={styles.group}>
        <span className={styles.text}>Выбрано записей: {selectedRecords}</span>
        <Button size="small" icon={{ name: "pencil" }}>
          Изменить статус
        </Button>
        <Button
          theme="secondary"
          size="small"
          icon={{ name: "bin" }}
          onClick={toggleModal}
        >
          Удалить
        </Button>
      </div>
      {isShow && (
        <Switcher className={styles.modal} items={modalItems}>
          Удалить {deleteRecords} записей?
        </Switcher>
      )}
      <Pagination size={recordsCount} />
    </TableFooter>
  );
};
