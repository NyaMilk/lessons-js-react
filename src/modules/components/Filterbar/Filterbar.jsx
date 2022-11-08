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
  // "Отложен",
  // "Выполнен",
  // "Отменен",
];

export const Filterbar = () => {
  const [value, setValue] = useState(initialFiltersState);
  const handleInputChange = ({ target: { name, value: newValue } }) => {
    setValue({ ...value, [name]: newValue });
  };
  const handleClearInput = (name) => () => setValue({ ...value, [name]: "" });

  return (
    <section>
      <div className={styles.searchbar}>
        <div className={styles.group}>
          <Searchbar
            className={styles.input}
            name="search"
            placeholder="Номер заказа или ФИО"
            value={value.search}
            onChange={handleInputChange}
            onClear={handleClearInput("search")}
          />
          {/* <Button icon={{ name: filter }} onClick={toggleFilterModal}> */}
          <Button icon={{ name: "filter" }}>Фильтры</Button>
          {/* <Button onClick={clearAllInput} transparent> */}
          <Button transparent>Сбросить фильтры</Button>
        </div>
        <Button icon={{ name: "refresh" }} transparent>
          Загрузка
        </Button>
      </div>

      <div className={styles.filterbar}>
        <Filter
          title="Дата оформления"
          from={
            <InputFilter
              prefix="c"
              name="dateFrom"
              placeholder="dd.mm.yyyy"
              value={value.dateFrom}
              onChange={handleInputChange}
              onClear={handleClearInput("dateFrom")}
            />
          }
          to={
            <InputFilter
              prefix="по"
              name="dateTo"
              placeholder="dd.mm.yyyy"
              value={value.dateTo}
              onChange={handleInputChange}
              onClear={handleClearInput("dateTo")}
            />
          }
        />

        <Dropdown label="Статус заказа" items={dropdownItems} activated />

        <Filter
          title="Сумма заказа"
          from={
            <InputFilter
              prefix="от"
              name="amountFrom"
              placeholder="&#8381;"
              value={value.amountFrom}
              onChange={handleInputChange}
              onClear={handleClearInput("amountFrom")}
            />
          }
          to={
            <InputFilter
              prefix="по"
              name="amountTo"
              placeholder="&#8381;"
              value={value.amountTo}
              onChange={handleInputChange}
              onClear={handleClearInput("amountTo")}
            />
          }
        />
      </div>
    </section>
  );
};
