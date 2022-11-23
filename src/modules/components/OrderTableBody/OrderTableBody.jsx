import React from "react";
import styles from "./OrderTableBody.module.css";
import {
  Checkbox,
  TableBody,
  TableCell,
  TableRow,
} from "../../../shared/components";
import { OrderStatus } from "../OrderStatus/OrderStatus";

export const OrderTableBody = ({ records = [] }) => {
  // const records = useSelector(getRecords);

  return (
    <TableBody>
      {records.length === 0 && (
        <span className={styles.text}>Не нашлось ни одной записи!</span>
      )}
      {records.length > 0 &&
        records.map(({ id, date, status, count, amount, name }, index) => {
          count = count ? count : "–";
          amount = amount ? Number(amount).toLocaleString() + " ₽" : "–";

          return (
            <TableRow key={index}>
              <TableCell className={styles.cell_withCheckbox}>
                <Checkbox />
              </TableCell>
              <TableCell className={styles.cell_number}>{id}</TableCell>
              <TableCell className={styles.cell_date}>{date}</TableCell>
              <TableCell className={styles.cell_status}>
                <OrderStatus status={status} />
              </TableCell>
              <TableCell className={styles.cell_count}>{count}</TableCell>
              <TableCell className={styles.cell_amount}>{amount}</TableCell>
              <TableCell className={styles.cell_name}>{name}</TableCell>
            </TableRow>
          );
        })}
    </TableBody>
  );
};
