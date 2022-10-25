import React, { useState, Fragment } from "react";
import "./SearchFilter.css";
import classnames from "classnames";
import styles from "./SearchFilter.module.css";
import { Button } from "../../../shared/components/Button/Button";
import { InputFilter } from "../../../shared/components/Inputs/Inputs";
import {
  FilterIcon,
  RefreshIcon,
  SearchIcon,
} from "../../../shared/components/Icons";
import { Searchbar } from "../../../shared/components/Searchbar/Searchbar";
import { Dropdown } from "../../../shared/components/Dropdown/Dropdown";

const Filter = ({ title, filterFrom, filterTo }) => {
  return (
    <div className="filter">
      <span className="filter__title">{title}</span>
      <div className="filter__group">
        {filterFrom}
        {filterTo}
      </div>
    </div>
  );
};

function SearchFilter() {
  const initialInputState = {
    searchbar: "",
    filterFromDate: "",
    filterToDate: "",
    filterFromAmount: "",
    filterToAmount: "",
  };
  const [text, setText] = useState(initialInputState);

  const [isShowFilter, setShowFilter] = useState(false);
  const [isChecked, setChecked] = useState(true);
  const [isShowDropdown, setShowDropdown] = useState(false);

  const dropdownItems = [
    "Новый",
    "Рассчет",
    "Подтвержден",
    "Отложен",
    "Выполнен",
    "Отменен",
  ];
  const [dropdownValues, setDropdownValues] = useState([]);

  const inputChange = ({ target: { name, value } }) => {
    setText({ ...text, [name]: value });
  };

  const clearInput = (name) => {
    return () => setText({ ...text, [name]: "" });
  };

  const clearAllInput = () => {
    setText(initialInputState);
    setDropdownValues([]);
    setChecked(!isChecked);
  };

  /*name eng*/
  const inputDropdownChange = ({ target: { name, checked } }) => {
    if (checked) {
      setDropdownValues([...dropdownValues, name]);
    } else {
      setDropdownValues([...dropdownValues.filter((value) => value !== name)]);
    }
  };

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
    <section className="search-filter">
      <div className={styles.searchbar}>
        <div className={styles.searchbar__group}>
          <Searchbar
            icon={{ icon: SearchIcon }}
            name="searchbar"
            placeholder="Номер заказа или ФИО"
            onChange={inputChange}
            value={text.searchbar}
            button={{
              size: "small",
              onClick: clearInput("searchbar"),
              transparent: true,
            }}
          />
          <Button prefixIcon={{ icon: FilterIcon }} onClick={toggleFilterModal}>
            Фильтры
          </Button>
          <Button onClick={clearAllInput} transparent>
            Сбросить фильтры
          </Button>
        </div>
        <Button
          prefixIcon={{
            icon: RefreshIcon,
            iconClass: "custom-searchbar__icon",
          }}
          transparent
        >
          Загрузка
        </Button>
      </div>

      <div className={`filterbar ${!isShowFilter ? "" : "filterbar-active"}`}>
        <Filter
          title="Дата оформления"
          filterFrom={
            <InputFilter
              prefix="с"
              name="filterFromDate"
              placeholder="dd.mm.yyyy"
              onChange={inputChange}
              value={text.filterFromDate}
              button={{
                size: "small",
                onClick: clearInput("filterFromDate"),
                transparent: true,
              }}
            />
          }
          filterTo={
            <InputFilter
              prefix="по"
              name="filterToDate"
              placeholder="dd.mm.yyyy"
              onChange={inputChange}
              value={text.filterToDate}
              button={{
                size: "small",
                onClick: clearInput("filterToDate"),
                transparent: true,
              }}
            />
          }
        />

        <div className="filter-dropdown">
          <span className="filter-dropdown__title">Статус заказа</span>
          <Dropdown
            value={dropdownValues}
            // defaultValue="Любой"
            type="multiple"
            items={dropdownItems}
            onClick={toggleDropdownModal}
            onChange={inputDropdownChange}
            checked={isChecked}
            active={isShowDropdown}
            disabled
          />
        </div>

        <Filter
          title="Сумма заказа"
          filterFrom={
            <InputFilter
              prefix="от"
              name="filterFromAmount"
              placeholder="&#8381;"
              onChange={inputChange}
              value={text.filterFromAmount}
              button={{
                size: "small",
                onClick: clearInput("filterFromAmount"),
                transparent: true,
              }}
            />
          }
          filterTo={
            <InputFilter
              prefix="по"
              name="filterToAmount"
              placeholder="&#8381;"
              onChange={inputChange}
              value={text.filterToAmount}
              button={{
                size: "small",
                onClick: clearInput("filterToAmount"),
                transparent: true,
              }}
            />
          }
        />
        <Button transparent>Применить</Button>
      </div>
    </section>
  );
}

export default SearchFilter;
