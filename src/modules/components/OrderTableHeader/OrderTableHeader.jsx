import React from "react";
import styles from "./OrderTableHeader.module.css";
import {
  TableHeader,
  TableHeaderCell,
  Checkbox,
} from "../../../shared/components";

export const OrderTableHeader = () => {
  const sortCellHandler = () => {};

  return (
    <TableHeader>
      <TableHeaderCell className={styles.cell_withCheckbox}>
        <Checkbox />
      </TableHeaderCell>
      <TableHeaderCell className={styles.cell_number}>#</TableHeaderCell>
      <TableHeaderCell className={styles.cell_date} onCLick={sortCellHandler}>
        Дата
      </TableHeaderCell>
      <TableHeaderCell className={styles.cell_status} onCLick={sortCellHandler}>
        Статус
      </TableHeaderCell>
      <TableHeaderCell className={styles.cell_count} onCLick={sortCellHandler}>
        Позиций
      </TableHeaderCell>
      <TableHeaderCell className={styles.cell_amount} onCLick={sortCellHandler}>
        Cумма
      </TableHeaderCell>
      <TableHeaderCell className={styles.cell_date}>
        ФИО покупателя
      </TableHeaderCell>
    </TableHeader>
  );
};
