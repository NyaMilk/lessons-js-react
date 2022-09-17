import React from "react";
import "./Table.css";
import { InputCheckbox } from "../Inputs/Inputs";
import { AbortIcon, CheckmarkIcon, DotIcon, VArrowIcon } from "../Icons";
import dataMock from "../../assets/mock/table.json";

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
  return (
    <div class="table__body">
      {dataMock.map(({ id, date, status, count, amount, name }) => {
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
            className = "table__ceil_status_cansel";
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

function Table() {
  console.log(dataMock);

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
          <span class="footer__text">Выбрано записей: 5</span>
          <button class="button button_size_small button_primary">
            <svg
              class="button__icon"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 14.5H15" fill="none" />
              <path
                d="M5 13L1.5 14.5L3 11M5 13L3 11M5 13L12 6M3 11L10 4M11 3L12.5 1.5L14.5 3.5L13 5M11 3L13 5M11 3L10 4M13 5L12 6M12 6L10 4"
                fill="none"
              />
            </svg>
            <span class="button__text">Изменить статус</span>
          </button>
          <button class="button button_size_small button_primary button_color_red">
            <svg
              class="button__icon"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
                fill="none"
                stroke-linecap="round"
              />
              <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round" />
            </svg>
            <span class="button__text">Удалить</span>
          </button>
        </div>
        {/* <div class="custom-dropdown custom-dropdown_delete table__modal">
                    Удалить n записей?
                    <button class="button button_size_small button_transparent">
                        <span class="button__text">Удалить</span>
                    </button>
                    <button class="button button_size_small button_primary">
                        <span class="button__text">Отмена</span>
                    </button>
                </div> */}
        <div class="pagination">
          <div class="pagination__list">
            <button class="button button_size_small button_primary">
              <span class="button__text">1</span>
            </button>
            <button class="button button_size_small button_transparent">
              <span class="button__text">2</span>
            </button>
            <button class="button button_size_small button_transparent">
              <span class="button__text">3</span>
            </button>
            <button class="button button_size_small button_transparent">
              <span class="button__text">...</span>
            </button>
            <button class="button button_size_small button_transparent">
              <span class="button__text">18</span>
            </button>
          </div>
          <button class="button button_size_small button_transparent pagination__icon">
            <span class="button__text">#</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Table;
