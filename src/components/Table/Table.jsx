import React, { useEffect, useRef, useState } from "react";
import "./Table.css";
import { InputCheckbox } from "../Inputs/Inputs";
import {
  AbortIcon,
  BinIcon,
  CheckmarkIcon,
  DotIcon,
  PencilIcon,
  VArrowIcon,
} from "../Icons";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux/es";
import dataMock from "../../assets/mock/table.json";
import { getAllDate } from "../../redux/tableSlice";
import { DropdownDelete } from "../Dropdowns/Dropdowns";

const TableCeil = ({ text, className, iconHeader, iconBody, input }) => {
  return (
    <div className={`table__ceil ${className}`}>
      {iconBody && iconBody}
      {text}
      {input && input}
      {iconHeader && <VArrowIcon className="table__icon" />}
    </div>
  );
};

const TableBody = () => {
  // const limitData = dataMock.slice(0, 3).map(({ id }) => id);
  const limitData = dataMock.slice(0, 2);
  console.log(limitData);
  return (
    <div class="table__body">
      {limitData.map(({ id, date, status, count, amount, name }) => {
        count = count ? count : "–";
        amount = amount ? Number(amount).toLocaleString() + " ₽" : "–";
        let icon = "";
        let className = "";

        switch (status) {
          case "Рассчет":
            className = "table__ceil_status_active";
            icon = <DotIcon className="table__icon" />;
            break;
          case "Выполнен":
            className = "table__ceil_status_success";
            icon = <CheckmarkIcon className="table__icon" />;
            break;
          case "Отменен":
            className = "table__ceil_status_cancel";
            icon = <AbortIcon className="table__icon" />;
            break;
          default:
            className = "table__ceil_status_new";
            icon = <DotIcon className="table__icon" />;
        }

        return (
          <div className="table__row" key={id}>
            <TableCeil
              className="table__ceil_with-checkbox"
              input={<InputCheckbox />}
            />
            <TableCeil text={id} className="table__ceil_number" />
            <TableCeil text={date} className="table__ceil_date" />
            <TableCeil
              text={status}
              className={`table__ceil_status ${className}`}
              iconBody={icon}
            />
            <TableCeil text={count} className="table__ceil_count" />
            <TableCeil text={amount} className="table__ceil_amount" />
            <TableCeil text={name} className="table__ceil_name" />
          </div>
        );
      })}
    </div>
  );
};

const Pagination = ({ rows }) => {
  const countPages = Math.ceil(rows / 3);
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = ({ target: { value } }) => {
    value = Number(value);
    if (currentPage !== value) {
      setCurrentPage(value);
      console.log("value ola", value);
      console.log("current page", currentPage);
    }
  };

  let firstPage, lastPage;

  if (countPages > 1) {
    if (currentPage === 1 && countPages > 2) {
      lastPage = currentPage + 2;
      firstPage = currentPage;
    } else if (currentPage === 1 && countPages === 2) {
      lastPage = currentPage + 1;
      firstPage = currentPage;
    } else if (currentPage === countPages && countPages > 2) {
      lastPage = currentPage + 1;
      firstPage = currentPage - 2;
    } else {
      lastPage = currentPage + 1;
      firstPage = currentPage - 1;
    }
  }

  const pageList = [...Array(countPages + 1).keys()].slice(
    firstPage,
    lastPage + 1
  );

  return (
    <div className="pagination">
      <div className="pagination__list">
        {countPages > 3 && currentPage !== 1 && (
          <>
            <Button
              className={"button button_size_small button_transparent"}
              text="1"
              value="1"
              onClick={changePage}
            />
            {/* <span>...</span> */}
            <Button
              className={"button button_size_small button_transparent"}
              text="..."
            />
          </>
        )}
        {pageList.map((page) => (
          <Button
            key={page}
            className={`button_size_small ${
              page === currentPage
                ? "button_color_primary"
                : "button_transparent"
            }`}
            text={page}
            value={page}
            onClick={changePage}
          />
        ))}
        {countPages > 3 && (
          <>
            <Button
              className={`button button_size_small button_transparent ${
                countPages === currentPage
                  ? "button_with_opacity"
                  : "button_transparent"
              }`}
              text="..."
            />
            {/* <span>...</span> */}
            <Button
              className={`button button_size_small button_transparent ${
                countPages === currentPage
                  ? "button_with_opacity"
                  : "button_transparent"
              }`}
              text={countPages}
              value={countPages}
              onClick={changePage}
            />
          </>
        )}
      </div>
      <Button
        className={"button button_size_small button_transparent"}
        text="#"
      />
    </div>
  );
};

function Table() {
  // const state = useSelector(state => state.table)
  // console.log(state);
  // const dispatch = useDispatch();
  // dispatch(getAllDate(dataMock));
  // dispatch(tableClear())
  // useEffect(() => {
  //   dispatch(getAllDate(data));
  // }, [getAllDate]);

  const [recordCount, setRecordCount] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onClickOutside = () => setShow(false);
    if (show) {
      window.addEventListener("click", onClickOutside);
    }
    return () => window.removeEventListener("click", onClickOutside);
  }, [show]);

  const toggleModal = (e) => {
    e.stopPropagation();
    setShow(!show);
  };

  return (
    <section class="table">
      <div class="table__head">
        <TableCeil
          className="table__ceil_with-checkbox"
          input={<InputCheckbox />}
        />
        <TableCeil text="#" className="table__ceil_number" />
        <TableCeil
          text="Дата"
          className="table__ceil_date table__ceil_select"
          iconHeader={true}
        />
        <TableCeil
          text="Статус"
          className="table__ceil_status"
          iconHeader={true}
        />
        <TableCeil
          text="Позиций"
          className="table__ceil_count"
          iconHeader={true}
        />
        <TableCeil
          text="Cумма"
          className="table__ceil_amount"
          iconHeader={true}
        />
        <TableCeil text="ФИО покупателя" className="table__ceil_name" />
      </div>

      <TableBody />

      <div class="table__footer">
        <div class="footer__group">
          <span class="footer__text">Выбрано записей: {recordCount}</span>
          <Button
            className="button_size_small button_color_primary"
            icon={<PencilIcon className="button__icon" />}
            text="Изменить статус"
          />
          <Button
            className="button_size_small button_color_red"
            icon={<BinIcon className="button__icon" />}
            text="Удалить"
            onClick={toggleModal}
          />
        </div>
        <DropdownDelete
          className={`table__modal ${!show ? "" : "table__modal-active"} `}
        />
        <Pagination rows={dataMock.length} />
      </div>
    </section>
  );
}

export default Table;
