import React, { useEffect, useState } from "react";
import classnames from "classnames";
import styles from "./OrderModal.module.css";
import {
  Button,
  Dropdown,
  Input,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "../../../shared/components";
import { statusesLangRu } from "../OrderStatus/OrderStatus";
import { useSelector } from "react-redux";
import { getRecord } from "../../../store/selectors";

const ESC_KEY_CODE = 27;

export const OrderModal = ({ setShowModal }) => {
  const [isShowDropdown, setShowDropdown] = useState(false);
  const { id, date, status, amount, name, order } = useSelector(getRecord);
  const amountFormat =
    amount.length > 0 ? Number(amount).toLocaleString() + " ₽" : "0";

  useEffect(() => {
    const onKeyDown = ({ keyCode }) => {
      if (keyCode === ESC_KEY_CODE) {
        setShowModal(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [setShowModal]);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const [formName, setFormName] = useState(name);
  const inputNameChangeHandler = ({ target: { value } }) => {
    setFormName(value);
  };
  const clearNameChangeHandler = ({ target: { value } }) => {
    setFormName("");
  };
  const [codeConfirmation, setCodeConfirmation] = useState("");

  const toggleDropdownModal = (e) => {
    e.stopPropagation();
    setShowDropdown(!isShowDropdown);
  };

  return (
    <div className={styles._}>
      <div className={styles.form}>
        <div className={styles.header}>
          <span className={styles.title}>Заявка #{id}</span>
          <Button
            icon={{ name: "closeLarge", className: styles.icon }}
            onClick={closeModalHandler}
            transparent
          />
        </div>

        <div className={styles.main}>
          <div className={styles.mainGroup}>
            <Input label="Дата и время заказа" value={date} disabled />
            <Input
              label="ФИО покупателя"
              placeholder="Введите ФИО покупателя"
              value={formName}
              incorrect={formName.length === 0}
              onChange={inputNameChangeHandler}
              onClear={clearNameChangeHandler}
            />

            <Table className={styles.table}>
              <TableHeader>
                <TableHeaderCell className={styles.cell_code}>
                  Артикул
                </TableHeaderCell>
                <TableHeaderCell className={styles.cell_name}>
                  Наименование
                </TableHeaderCell>
                <TableHeaderCell className={styles.cell_price}>
                  Цена
                </TableHeaderCell>
              </TableHeader>
              <TableBody>
                {order.map(({ id, name, price }) => {
                  return (
                    <TableRow key={id}>
                      <TableCell className={styles.cell_code}>{id}</TableCell>
                      <TableCell className={styles.cell_name}>{name}</TableCell>
                      <TableCell className={styles.cell_price}>
                        {price}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
              <TableFooter className={styles.tableFooter}>
                <span>Итоговая сумма: {amountFormat}</span>
              </TableFooter>
            </Table>

            <Input
              label="Уровень лояльности"
              // value={date}
              disabled
            />

            <Dropdown
              label="Статус заказа"
              value={"New"}
              type="single"
              name="statusForm"
              items={statusesLangRu}
              // checked={statuses}
              // onChange={statusChangeHandler}
              activated={isShowDropdown}
              hidden
              onClick={toggleDropdownModal}
            />

            <Input
              label="Код подтверждения"
              placeholder="Введите цифровой код"
              // value={date}
            />
          </div>
        </div>

        <div className={styles.footer}>
          <Button icon={{ name: "checkmark", className: styles.icon }}>
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
};
