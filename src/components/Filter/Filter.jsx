import React, { useEffect, useState } from "react";
import "./Filter.css";
import { Button } from "../Button/Button";
import {
  FilterIcon,
  RefreshIcon,
  SearchIcon,
  XMefiumIcon,
} from "../Icons/Icons";
import { InputSearchbar } from "../Inputs/Inputs";

function Filter() {
  const [text, setText] = useState("");
  const [show, setModal] = useState(false);

  const inputChange = (e) => {
    setText(e.target.value);
  };

  const clearInput = () => {
    setText("");
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
    <section className="filters">
      <div className="searchbar">
        <div className="searchbar__groups">
          <InputSearchbar
            icon={<SearchIcon className="custom-searchbar__icon" />}
            type="text"
            placeholder="Номер заказа или ФИО"
            onChange={inputChange}
            value={text}
            button={
              <Button
                className="custom-searchbar__button button_without-text_small button_transparent"
                icon={
                  <XMefiumIcon className="button__icon custom-searchbar__icon" />
                }
                onClick={clearInput}
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
    </section>
  );
}

export default Filter;
