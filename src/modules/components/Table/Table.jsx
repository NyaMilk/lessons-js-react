import React, { useEffect, useRef, useState } from "react";
import "./Table.css";
import {
  AbortIcon,
  BinIcon,
  CheckmarkIcon,
  DotIcon,
  PencilIcon,
  VArrowIcon,
} from "../../../shared/components/Icons";
import { Checkbox } from "../../../shared/components/Checkbox/Checkbox";
import { Button } from "../../../shared/components/Button/Button";
import { useDispatch, useSelector } from "react-redux/es";
import dataMock from "../../../assets/mock/table.json";
import { getAllDate } from "../../../redux/tableSlice";
import { DropdownDelete } from "../../../shared/components/Dropdowns/Dropdowns";

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
    <div className="table__body">
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
              input={<Checkbox />}
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
            <Button size="small" transparent value="1" onClick={changePage}>
              1
            </Button>
            <Button size="small" transparent>
              ...
            </Button>
          </>
        )}
        {pageList.map((page) => (
          <Button
            key={page}
            size="small"
            transparent={page !== currentPage}
            value={page}
            onClick={changePage}
          >
            {page}
          </Button>
        ))}
        {countPages > 3 && (
          <>
            <Button
              size="small"
              transparent={countPages !== currentPage}
              opacity={countPages === currentPage}
            >
              ...
            </Button>
            <Button
              size="small"
              transparent={countPages !== currentPage}
              opacity={countPages === currentPage}
              value={countPages}
              onClick={changePage}
            >
              {countPages}
            </Button>
          </>
        )}
      </div>
      <Button size="small" transparent>
        #
      </Button>
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
    <section className="table">
      <div className="table__head">
        <TableCeil className="table__ceil_with-checkbox" input={<Checkbox />} />
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

      <div className="table__footer">
        <div className="footer__group">
          <span className="footer__text">Выбрано записей: {recordCount}</span>
          <Button size="small" icon={{ icon: PencilIcon }}>
            Изменить статус
          </Button>
          <Button
            theme="secondary"
            size="small"
            icon={{ icon: BinIcon }}
            onClick={toggleModal}
          >
            Удалить
          </Button>
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
