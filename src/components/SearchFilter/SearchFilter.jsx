import React, { useEffect, useState } from "react";
import "./SearchFilter.css";
import { Button } from "../Button/Button";
import {
  FilterIcon,
  RefreshIcon,
  SearchIcon,
  VArrowIcon,
  XMefiumIcon,
} from "../Icons/Icons";
import { InputSearchbar, InputFilter, InputDropdown } from "../Inputs/Inputs";
import { DropdownMultiple } from "../Dropdowns/Dropdowns";

const Filter = ({ title, filterFrom, filterTo }) => {
  return (
    <div className='filter'>
      <span className='filter__title'>{title}</span>
      <div className='filter__group'>
        {filterFrom}
        {filterTo}
      </div>
    </div>
  );
};

function SearchFilter() {
  const [text, setText] = useState({
    searchbar: "",
    filterFromDate: "",
    filterToDate: "",
    filterFromAmount: "",
    filterToAmount: "",
  });
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
  const [showDropdown, setShowDropdown] = useState(false);

  const inputChange = ({ target: { name, value } }) => {
    setText({ ...text, [name]: value });
  };

  const clearInputSearchbar = () => {
    setText({ ...text, searchbar: "" });
  };

  const clearFilterFromDate = () => {
    setText({ ...text, filterFromDate: "" });
  };

  const clearFilterToDate = () => {
    setText({ ...text, filterToDate: "" });
  };

  const clearFilterFromAmount = () => {
    setText({ ...text, filterFromAmount: "" });
  };

  const clearFilterToAmount = () => {
    setText({ ...text, filterToAmount: "" });
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

    if (!showFilter) {
      setShowDropdown(false);
    }
  };

  const toggleDropdownModal = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  return (
    <section className='search-filter'>
      <div className='searchbar'>
        <div className='searchbar__group'>
          <InputSearchbar
            icon={<SearchIcon className='custom-searchbar__icon' />}
            name='searchbar'
            placeholder='Номер заказа или ФИО'
            onChange={inputChange}
            value={text.searchbar}
            button={
              <Button
                className='custom-searchbar__button button_without-text_small button_transparent'
                icon={
                  <XMefiumIcon className='button__icon custom-searchbar__icon' />
                }
                onClick={clearInputSearchbar}
              />
            }
          />
          <Button
            className='button_size_middle button_color_primary'
            icon={<FilterIcon className='button__icon' />}
            text='Фильтры'
            onClick={toggleFilterModal}
          />
          <Button
            className='button_size_middle button_transparent'
            text='Сбросить фильтры'
          />
        </div>
        <Button
          className='button_size_middle button_transparent'
          text='Загрузка'
          icon={<RefreshIcon className='button__icon custom-searchbar__icon' />}
        />
      </div>

      {showFilter && (
        <div className='filterbar'>
          <Filter
            title='Дата оформления'
            filterFrom={
              <InputFilter
                prefix='с'
                name='filterFromDate'
                placeholder='dd.mm.yyyy'
                onChange={inputChange}
                value={text.filterFromDate}
                button={
                  <Button
                    className='custom-filter__button button_without-text_small button_transparent'
                    icon={
                      <XMefiumIcon className='button__icon custom-filter__icon' />
                    }
                    onClick={clearFilterFromDate}
                  />
                }
              />
            }
            filterTo={
              <InputFilter
                prefix='по'
                name='filterToDate'
                placeholder='dd.mm.yyyy'
                onChange={inputChange}
                value={text.filterToDate}
                button={
                  <Button
                    className='custom-filter__button button_without-text_small button_transparent'
                    icon={
                      <XMefiumIcon className='button__icon custom-filter__icon' />
                    }
                    onClick={clearFilterToDate}
                  />
                }
              />
            }
          />

          <div className='filter-dropdown'>
            <span className='filter-dropdown__title'>Статус заказа</span>
            <InputDropdown
              className='filter-dropdown__input'
              defaultValue='Любой'
              button={
                <Button
                  className='custom-input__button button_without-text_small button_transparent'
                  icon={
                    <VArrowIcon className='button__icon custom-input__icon' />
                  }
                  onClick={toggleDropdownModal}
                />
              }
            />
            {showDropdown && (
              <DropdownMultiple
                list={dropdownItems}
                className='filter-dropdown__modal'
                onChange={inputDropdownChange}
              />
            )}
          </div>

          <Filter
            title='Сумма заказа'
            filterFrom={
              <InputFilter
                prefix='от'
                name='filterFromAmount'
                placeholder='&#8381;'
                onChange={inputChange}
                value={text.filterFromAmount}
                button={
                  <Button
                    className='custom-filter__button button_without-text_small button_transparent'
                    icon={
                      <XMefiumIcon className='button__icon custom-filter__icon' />
                    }
                    onClick={clearFilterFromAmount}
                  />
                }
              />
            }
            filterTo={
              <InputFilter
                prefix='по'
                name='filterToAmount'
                placeholder='&#8381;'
                onChange={inputChange}
                value={text.filterToAmount}
                button={
                  <Button
                    className='custom-filter__button button_without-text_small button_transparent'
                    icon={
                      <XMefiumIcon className='button__icon custom-filter__icon' />
                    }
                    onClick={clearFilterToAmount}
                  />
                }
              />
            }
          />
          <Button
            className='button_size_middle button_transparent'
            text='Применить'
          />
        </div>
      )}
    </section>
  );
}

export default SearchFilter;
