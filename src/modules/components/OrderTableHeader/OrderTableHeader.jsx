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

const SORT_DIRECTION = {
  asc: "asc",
  desc: "desc",
};

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
    dispatch(
      setSortDirection(
        sortDirection === SORT_DIRECTION.asc
          ? SORT_DIRECTION.desc
          : SORT_DIRECTION.asc
      )
    );
  };

  const checkboxChangeHandler = ({ target: { checked } }) => {
    dispatch(
      setSelectedRecordsIds(
        checked
          ? records.map(({ id }) => id)
          : records.filter(({ id }) => !selectedRecordsIds.includes(id))
      )
    );
  };

  return (
    <TableHeader>
      <TableHeaderCell className={styles.cell_withCheckbox}>
        <Checkbox
          checked={
            records.length > 0 && selectedRecordsIds.length === records.length
          }
          onChange={checkboxChangeHandler}
        />
      </TableHeaderCell>
      <TableHeaderCell className={styles.cell_number}>#</TableHeaderCell>
      <TableHeaderCell
        className={styles.cell_date}
        sorted={sortColumn === SORT_TYPE.date}
        direction={sortColumn === SORT_TYPE.date && sortDirection}
        onCLick={sortCellHandler(SORT_TYPE.date)}
      >
        Дата
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.cell_status}
        sorted={sortColumn === SORT_TYPE.status}
        direction={sortColumn === SORT_TYPE.status && sortDirection}
        onCLick={sortCellHandler(SORT_TYPE.status)}
      >
        Статус
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.cell_count}
        sorted={sortColumn === SORT_TYPE.count}
        direction={sortColumn === SORT_TYPE.count && sortDirection}
        onCLick={sortCellHandler(SORT_TYPE.count)}
      >
        Позиций
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.cell_amount}
        sorted={sortColumn === SORT_TYPE.amount}
        direction={sortColumn === SORT_TYPE.amount && sortDirection}
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
