import React, { useState, Fragment } from "react";
import "./SearchFilter.css";
import { Button } from "../Button/Button";
import { InputSearchbar, InputFilter, InputDropdown } from "../Inputs/Inputs";
import { DropdownMultiple } from "../Dropdowns/Dropdowns";
import {
  FilterIcon,
  RefreshIcon,
  SearchIcon,
  VArrowIcon,
  XMediumIcon,
} from "../Icons";

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
  const dropdownItems = [
    "Новый",
    "Рассчет",
    "Подтвержден",
    "Отложен",
    "Выполнен",
    "Отменен",
  ];
  const [valueInputDropdown, setValueInputDropdown] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [checked, setChecked] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const inputChange = ({ target: { name, value } }) => {
    setText({ ...text, [name]: value });
  };

  const clearInput = (name) => {
    return () => setText({ ...text, [name]: "" });
  };

  const clearAllInput = () => {
    setText(initialInputState);
    setValueInputDropdown([]);
    setChecked(!checked);
    // setShowDropdown(false);
  };

  const inputDropdownChange = ({ target: { name, checked } }) => {
    if (checked) {
      setValueInputDropdown([...valueInputDropdown, name]);
    } else {
      removeValueInputDropdown(name);
    }
  };

  const removeValueInputDropdown = (name) => {
    setValueInputDropdown([
      ...valueInputDropdown.filter((value) => value !== name),
    ]);
  };

  const toggleFilterModal = (e) => {
    e.stopPropagation();
    setShowFilter(!showFilter);
    setShowDropdown(false);
  };

  const toggleDropdownModal = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  return (
    <section className="search-filter">
      <div className="searchbar">
        <div className="searchbar__group">
          <InputSearchbar
            icon={<SearchIcon className="custom-searchbar__icon" />}
            name="searchbar"
            placeholder="Номер заказа или ФИО"
            onChange={inputChange}
            value={text.searchbar}
            button={
              <Button
                className="custom-searchbar__button button_without-text_small button_transparent"
                icon={
                  <XMediumIcon className="button__icon custom-searchbar__icon" />
                }
                onClick={clearInput("searchbar")}
              />
            }
          />
          <Button
            className="button_size_middle button_color_primary"
            icon={<FilterIcon className="button__icon" />}
            text="Фильтры"
            onClick={toggleFilterModal}
          />
          <Button
            className="button_size_middle button_transparent"
            text="Сбросить фильтры"
            onClick={clearAllInput}
          />
        </div>
        <Button
          className="button_size_middle button_transparent"
          text="Загрузка"
          icon={<RefreshIcon className="button__icon custom-searchbar__icon" />}
        />
      </div>

      <div className={`filterbar ${!showFilter ? "" : "filterbar-active"}`}>
        <Filter
          title="Дата оформления"
          filterFrom={
            <InputFilter
              prefix="с"
              name="filterFromDate"
              placeholder="dd.mm.yyyy"
              onChange={inputChange}
              value={text.filterFromDate}
              button={
                <Button
                  className="custom-filter__button button_without-text_small button_transparent"
                  icon={
                    <XMediumIcon className="button__icon custom-filter__icon" />
                  }
                  onClick={clearInput("filterFromDate")}
                />
              }
            />
          }
          filterTo={
            <InputFilter
              prefix="по"
              name="filterToDate"
              placeholder="dd.mm.yyyy"
              onChange={inputChange}
              value={text.filterToDate}
              button={
                <Button
                  className="custom-filter__button button_without-text_small button_transparent"
                  icon={
                    <XMediumIcon className="button__icon custom-filter__icon" />
                  }
                  onClick={clearInput("filterToDate")}
                />
              }
            />
          }
        />

        <div className="filter-dropdown">
          <span className="filter-dropdown__title">Статус заказа</span>
          <InputDropdown
            className="filter-dropdown__input"
            defaultValue="Любой"
            button={
              <Button
                className="custom-input__button button_without-text_small button_transparent"
                icon={
                  <VArrowIcon className="button__icon custom-input__icon" />
                }
                onClick={toggleDropdownModal}
              />
            }
          />
          <Fragment key={checked}>
            <DropdownMultiple
              list={dropdownItems}
              className={`filter-dropdown__modal ${
                !showDropdown ? "" : "filter-dropdown__modal-active"
              }`}
              onChange={inputDropdownChange}
            />
          </Fragment>
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
              button={
                <Button
                  className="custom-filter__button button_without-text_small button_transparent"
                  icon={
                    <XMediumIcon className="button__icon custom-filter__icon" />
                  }
                  onClick={clearInput("filterFromAmount")}
                />
              }
            />
          }
          filterTo={
            <InputFilter
              prefix="по"
              name="filterToAmount"
              placeholder="&#8381;"
              onChange={inputChange}
              value={text.filterToAmount}
              button={
                <Button
                  className="custom-filter__button button_without-text_small button_transparent"
                  icon={
                    <XMediumIcon className="button__icon custom-filter__icon" />
                  }
                  onClick={clearInput("filterToAmount")}
                />
              }
            />
          }
        />
        <Button
          className="button_size_middle button_transparent"
          text="Применить"
        />
      </div>
    </section>
  );
}

export default SearchFilter;
