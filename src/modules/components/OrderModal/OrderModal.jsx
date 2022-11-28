import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getRecord, SORT_TYPE } from "../../../store/selectors";
import { updateRecord } from "../../../store/slices/recordSlice";

const ESC_KEY_CODE = 27;
const CONFIRME_CODE = "000";
const LOYALTY_LEVEL = {
  newbie: "Новичек",
  expert: "Эксперт",
};

export const OrderModal = ({ setShowModal }) => {
  const [isShowDropdown, setShowDropdown] = useState(false);
  const [formData, setFormData] = useState(useSelector(getRecord));
  const amount =
    formData.amount.length > 0
      ? Number(formData.amount).toLocaleString() + " ₽"
      : "0";
  const [confirmeCode, setConfirmeCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

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

  const changeNameHandler = ({ target: { value } }) => {
    setFormData({ ...formData, name: value });
  };

  const clearNameHandler = () => {
    setFormData({ ...formData, name: "" });
  };

  const statusChangeHandler = ({ target: { value } }) => {
    setFormData({ ...formData, status: value });
    setShowDropdown(false);
  };

  const changeConfirmeCodeHandler = ({ target: { value } }) => {
    setConfirmeCode(value);
  };

  const clearConfirmeCodeHandler = () => {
    setConfirmeCode("");
  };

  const saveNewFormDataHandler = () => {
    if (confirmeCode !== CONFIRME_CODE) {
      setErrorMessage("Некорректный код подтверждения!");
    } else if (formData.name.length === 0) {
      setErrorMessage("Не все необходимые поля заполнены!");
    } else {
      setErrorMessage("");
      dispatch(
        updateRecord({ id: formData.id, key: "name", value: formData.name })
      );
      dispatch(
        updateRecord({
          id: formData.id,
          key: SORT_TYPE.status,
          value: formData.status,
        })
      );
      setShowModal(false);
    }
  };

  const toggleDropdownModal = (e) => {
    e.stopPropagation();
    setShowDropdown(!isShowDropdown);
  };

  return (
    <div className={styles._}>
      <div className={styles.form}>
        <div className={styles.header}>
          <span className={styles.title}>Заявка #{formData.id}</span>
          <Button
            icon={{ name: "closeLarge", className: styles.icon }}
            onClick={closeModalHandler}
            transparent
          />
        </div>

        <div className={styles.main}>
          <div className={styles.mainGroup}>
            <Input label="Дата и время заказа" value={formData.date} disabled />
            <Input
              label="ФИО покупателя"
              placeholder="Введите ФИО покупателя"
              value={formData.name}
              incorrect={formData.name.length === 0}
              onChange={changeNameHandler}
              onClear={clearNameHandler}
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
                {formData.order.map(({ id, name, price }) => {
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
                <span>Итоговая сумма: {amount}</span>
              </TableFooter>
            </Table>

            <Input
              label="Уровень лояльности"
              value={LOYALTY_LEVEL[formData.loyalty]}
              disabled
            />

            <Dropdown
              label="Статус заказа"
              type="single"
              name="statusForm"
              items={statusesLangRu}
              checked={formData.status}
              value={statusesLangRu[formData.status]}
              onChange={statusChangeHandler}
              activated={isShowDropdown}
              hidden
              onClick={toggleDropdownModal}
            />

            <Input
              label="Код подтверждения"
              placeholder="Введите цифровой код подтверждения"
              value={confirmeCode}
              incorrect={confirmeCode.length === 0}
              onChange={changeConfirmeCodeHandler}
              onClear={clearConfirmeCodeHandler}
            />
          </div>
        </div>

        <div className={styles.footer}>
          {errorMessage && (
            <span className={styles.textWarning}>{errorMessage}</span>
          )}
          <Button
            icon={{ name: "checkmark", className: styles.icon }}
            onClick={saveNewFormDataHandler}
          >
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
};
