import React, { useState } from "react";
import { Button, Dropdown, Searchbar } from "../../../shared/components";
import { Filter } from "../Filter/Filter";
import { InputFilter } from "../InputFilter/InputFilter";
import styles from "./Filterbar.module.css";

const initialFiltersState = {
  search: "",
  dateFrom: "",
  dateTo: "",
  amountFrom: "",
  amountTo: "",
};

const dropdownItems = [
  "Новый",
  "Рассчет",
  "Подтвержден",
  "Отложен",
  "Выполнен",
  "Отменен",
];

export const Filterbar = () => {
  const [value, setValue] = useState(initialFiltersState);
  const [isChecked, setChecked] = useState(true);
  const [isShowFilter, setShowFilter] = useState(false);
  const [isShowDropdown, setShowDropdown] = useState(false);
  const [dropdownValues, setDropdownValues] = useState([]);

  const inputChangeHandler = ({ target: { name, value: newValue } }) => {
    setValue({ ...value, [name]: newValue });
  };
  const clearInputHandler = (name) => () => setValue({ ...value, [name]: "" });
  const clearFiltersHandler = () => {
    setValue(initialFiltersState);
    setDropdownValues([]);
    setChecked(!isChecked);
  };

  const dropdownChangeHandler = ({ target: { name, checked } }) => {
    if (checked) {
      setDropdownValues([...dropdownValues, name]);
    } else {
      setDropdownValues([...dropdownValues.filter((value) => value !== name)]);
    }
  };
  const defaultValue = dropdownValues.length === 0 ? "Любой" : dropdownValues;

  const toggleFilterModal = (e) => {
    e.stopPropagation();
    setShowFilter(!isShowFilter);
    setShowDropdown(false);
  };

  const toggleDropdownModal = (e) => {
    e.stopPropagation();
    setShowDropdown(!isShowDropdown);
  };

  return (
    <section>
      <div className={styles.searchbar}>
        <div className={styles.group}>
          <Searchbar
            className={styles.input}
            name="search"
            placeholder="Номер заказа или ФИО"
            value={value.search}
            onChange={inputChangeHandler}
            onClear={clearInputHandler("search")}
          />
          <Button icon={{ name: "filter" }} onClick={toggleFilterModal}>
            Фильтры
          </Button>
          <Button onClick={clearFiltersHandler} transparent>
            Сбросить фильтры
          </Button>
        </div>
        <Button icon={{ name: "refresh" }} transparent>
          Загрузка
        </Button>
      </div>
      {isShowFilter && (
        <div className={styles.filterbar}>
          <Filter
            title="Дата оформления"
            from={
              <InputFilter
                prefix="c"
                name="dateFrom"
                placeholder="dd.mm.yyyy"
                value={value.dateFrom}
                onChange={inputChangeHandler}
                onClear={clearInputHandler("dateFrom")}
              />
            }
            to={
              <InputFilter
                prefix="по"
                name="dateTo"
                placeholder="dd.mm.yyyy"
                value={value.dateTo}
                onChange={inputChangeHandler}
                onClear={clearInputHandler("dateTo")}
              />
            }
          />

          <Dropdown
            label="Статус заказа"
            items={dropdownItems}
            value={defaultValue}
            onChange={dropdownChangeHandler}
            onClick={toggleDropdownModal}
            checked={isChecked}
            activated={isShowDropdown}
          />

          <Filter
            title="Сумма заказа"
            from={
              <InputFilter
                prefix="от"
                name="amountFrom"
                placeholder="&#8381;"
                value={value.amountFrom}
                onChange={inputChangeHandler}
                onClear={clearInputHandler("amountFrom")}
              />
            }
            to={
              <InputFilter
                prefix="по"
                name="amountTo"
                placeholder="&#8381;"
                value={value.amountTo}
                onChange={inputChangeHandler}
                onClear={clearInputHandler("amountTo")}
              />
            }
          />

          <Button transparent>Применить</Button>
        </div>
      )}
    </section>
  );
};
