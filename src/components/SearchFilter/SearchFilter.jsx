import React, { useEffect, useState } from "react";
import "./SearchFilter.css";
import { Button } from "../Button/Button";
import {
  FilterIcon,
  RefreshIcon,
  SearchIcon,
  XMefiumIcon,
} from "../Icons/Icons";
import { InputSearchbar, InputFilter } from "../Inputs/Inputs";

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
  const [show, setModal] = useState(false);
  const [text, setText] = useState({
    searchbar: "",
    filterFrom: "",
    filterTo: "",
  });

  const inputChange = ({ target: { name, value } }) => {
    setText({ ...text, [name]: value });
  };

  const clearInputSearchbar = () => {
    setText({ ...text, ["searchbar"]: "" });
  };

  const clearFilterFrom = () => {
    setText({ ...text, ["filterFrom"]: "" });
  };

  const clearFilterTo = () => {
    setText({ ...text, ["filterTo"]: "" });
  };

  useEffect(() => {
    const onClickOutside = () => setModal(false);

    if (show) {
      window.addEventListener("click", onClickOutside);
    }

    return () => window.removeEventListener("click", onClickOutside);
  }, [show]);

  const toggleModal = (e) => {
    e.stopPropagation();
    setModal(!show);
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
                  <XMefiumIcon className="button__icon custom-searchbar__icon" />
                }
                onClick={clearInputSearchbar}
              />
            }
          />
          <Button
            className="button_size_middle button_color_primary"
            icon={<FilterIcon className="button__icon" />}
            text="Фильтры"
            onClick={toggleModal}
          />
          <Button
            className="button_size_middle button_transparent"
            text="Сбросить фильтры"
            onClick={toggleModal}
          />
        </div>
        <Button
          className="button_size_middle button_transparent"
          text="Загрузка"
          icon={<RefreshIcon className="button__icon custom-searchbar__icon" />}
          onClick={toggleModal}
        />
      </div>

      <div className="filterbar">
        <Filter
          title="Дата оформления"
          filterFrom={
            <InputFilter
              prefix="с"
              name="filterFrom"
              placeholder="dd.mm.yyyy"
              onChange={inputChange}
              value={text.filterFrom}
              button={
                <Button
                  className="custom-filter__button button_without-text_small button_transparent"
                  icon={
                    <XMefiumIcon className="button__icon custom-filter__icon" />
                  }
                  onClick={clearFilterFrom}
                />
              }
            />
          }
          filterTo={
            <InputFilter
              prefix="по"
              name="filterTo"
              placeholder="dd.mm.yyyy"
              onChange={inputChange}
              value={text.filterTo}
              button={
                <Button
                  className="custom-filter__button button_without-text_small button_transparent"
                  icon={
                    <XMefiumIcon className="button__icon custom-filter__icon" />
                  }
                  onClick={clearFilterTo}
                />
              }
            />
          }
        />
      </div>
    </section>
  );
}

export default SearchFilter;
