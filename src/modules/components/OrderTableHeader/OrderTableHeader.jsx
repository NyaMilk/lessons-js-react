import React, { useEffect } from "react";
import styles from "./OrderTableHeader.module.css";
import {
  TableHeader,
  TableHeaderCell,
  Checkbox,
} from "../../../shared/components";
import {
  getSelectedRecordsIds,
  getSortColumn,
  getSortDirection,
  SORT_TYPE,
} from "../../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setSelectedRecordsIds,
  setSortColumn,
  setSortDirection,
} from "../../../store/slices/recordSlice";

export const OrderTableHeader = ({ records = [] }) => {
  const dispatch = useDispatch();
  const sortColumn = useSelector(getSortColumn);
  const sortDirection = useSelector(getSortDirection);
  const selectedRecordsIds = useSelector(getSelectedRecordsIds);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [sortColumn, sortDirection, dispatch]);

  const sortCellHandler = (column) => () => {
    dispatch(setSortColumn(column));
    dispatch(setSortDirection(sortDirection === "asc" ? "desc" : "asc"));
  };

  const checkboxChangeHandler = ({ target: { checked } }) => {
    checked
      ? dispatch(setSelectedRecordsIds(records.map(({ id }) => id)))
      : dispatch(
          setSelectedRecordsIds(
            records.filter(({ id }) => !selectedRecordsIds.includes(id))
          )
        );
  };

  return (
    <TableHeader>
      <TableHeaderCell className={styles.cell_withCheckbox}>
        <Checkbox
          checked={selectedRecordsIds.length === records.length}
          onChange={checkboxChangeHandler}
        />
      </TableHeaderCell>
      <TableHeaderCell className={styles.cell_number}>#</TableHeaderCell>
      <TableHeaderCell
        className={styles.cell_date}
        sorted={sortColumn === SORT_TYPE.date}
        direction={sortDirection}
        onCLick={sortCellHandler(SORT_TYPE.date)}
      >
        Дата
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.cell_status}
        sorted={sortColumn === SORT_TYPE.status}
        direction={sortDirection}
        onCLick={sortCellHandler(SORT_TYPE.status)}
      >
        Статус
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.cell_count}
        sorted={sortColumn === SORT_TYPE.count}
        direction={sortDirection}
        onCLick={sortCellHandler(SORT_TYPE.count)}
      >
        Позиций
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.cell_amount}
        sorted={sortColumn === SORT_TYPE.amount}
        direction={sortDirection}
        onCLick={sortCellHandler(SORT_TYPE.amount)}
      >
        Cумма
      </TableHeaderCell>
      <TableHeaderCell className={styles.cell_date}>
        ФИО покупателя
      </TableHeaderCell>
    </TableHeader>
  );
};
