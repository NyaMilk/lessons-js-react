import React, { createRef, forwardRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Dropdown, Searchbar } from "../../../shared/components";
import {
  clearFilters,
  setFilters,
  setSearch,
  setStatus,
} from "../../../store/slices/filterSlice";
import { Filter } from "../Filter/Filter";
import { InputFilter } from "../InputFilter/InputFilter";
import { statusesLangRu } from "../OrderStatus/OrderStatus";
import styles from "./Filterbar.module.css";

const FILTER_FIELDS = {
  search: "search",
  dateFrom: "dateFrom",
  dateTo: "dateTo",
  amountFrom: "amountFrom",
  amountTo: "amountTo",
};

const initialState = {
  search: "",
  dateFrom: "",
  dateTo: "",
  amountFrom: "",
  amountTo: "",
};

export const Filterbar = forwardRef(() => {
  const [filters, setStateFilters] = useState(initialState);
  const [statuses, setStateStatuses] = useState([]);
  const [isShowFilter, setShowFilter] = useState(false);
  const [isShowDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();

  const inputChangeHandler = ({ target: { name, value } }) => {
    if (name === "search") {
      dispatch(setSearch(value));
    }

    setStateFilters({ ...filters, [name]: value });
  };

  const clearInputHandler = (name) => () => {
    if (name === "search") {
      dispatch(setSearch(""));
    }

    setStateFilters({ ...filters, [name]: "" });
  };

  const clearFiltersHandler = () => {
    dispatch(clearFilters());
    setStateFilters(initialState);
    setStateStatuses([]);
    setShowDropdown(false);
  };

  const statusChangeHandler = ({ target: { name, checked } }) => {
    setStateStatuses(
      checked ? [...statuses, name] : statuses.filter((value) => value !== name)
    );
  };

  const getCheckedValues = (statuses) => {
    const values = statuses.map((value) => statusesLangRu[value]);
    return values.length > 0 ? values : "Любой";
  };

  const applyFiltersHandler = () => {
    dispatch(setFilters({ filters }));
    dispatch(setStatus(statuses));
    setShowDropdown(false);
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

  const ref = createRef();

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref && !ref.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    if (isShowDropdown) {
      window.addEventListener("mousedown", onClickOutside);
    }
    return () => window.removeEventListener("mousedown", onClickOutside);
  }, [isShowDropdown, ref]);

  return (
    <section>
      <div className={styles.searchbar}>
        <div className={styles.group}>
          <Searchbar
            className={styles.input}
            name="search"
            placeholder="Номер заказа или ФИО"
            value={filters.search}
            onChange={inputChangeHandler}
            onClear={clearInputHandler(FILTER_FIELDS.search)}
          />
          <Button
            icon={{ name: "filter" }}
            onClick={toggleFilterModal}
            transparent={!isShowFilter}
          >
            Фильтры
          </Button>
          {isShowFilter && (
            <Button onClick={clearFiltersHandler} transparent>
              Сбросить фильтры
            </Button>
          )}
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
                name={FILTER_FIELDS.dateFrom}
                placeholder="dd.mm.yyyy"
                value={filters.dateFrom}
                onChange={inputChangeHandler}
                onClear={clearInputHandler(FILTER_FIELDS.dateFrom)}
              />
            }
            to={
              <InputFilter
                prefix="по"
                name={FILTER_FIELDS.dateTo}
                placeholder="dd.mm.yyyy"
                value={filters.dateTo}
                onChange={inputChangeHandler}
                onClear={clearInputHandler(FILTER_FIELDS.dateTo)}
              />
            }
          />

          <Dropdown
            ref={ref}
            className={styles.dropdown}
            label="Статус заказа"
            items={statusesLangRu}
            checked={statuses}
            value={getCheckedValues(statuses)}
            onChange={statusChangeHandler}
            onClick={toggleDropdownModal}
            activated={isShowDropdown}
          />

          <Filter
            title="Сумма заказа"
            from={
              <InputFilter
                prefix="от"
                name={FILTER_FIELDS.amountFrom}
                placeholder="&#8381;"
                value={filters.amountFrom}
                onChange={inputChangeHandler}
                onClear={clearInputHandler(FILTER_FIELDS.amountFrom)}
              />
            }
            to={
              <InputFilter
                prefix="по"
                name={FILTER_FIELDS.amountTo}
                placeholder="&#8381;"
                value={filters.amountTo}
                onChange={inputChangeHandler}
                onClear={clearInputHandler(FILTER_FIELDS.amountTo)}
              />
            }
          />

          <Button transparent onClick={applyFiltersHandler}>
            Применить
          </Button>
        </div>
      )}
    </section>
  );
});
