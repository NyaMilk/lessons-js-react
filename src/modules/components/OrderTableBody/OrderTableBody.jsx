import React, { useState } from "react";
import styles from "./OrderTableBody.module.css";
import {
  Checkbox,
  TableBody,
  TableCell,
  TableRow,
} from "../../../shared/components";
import { OrderStatus } from "../OrderStatus/OrderStatus";
import { setSelectedRecordsIds } from "../../../store/slices/recordSlice";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedRecordsIds } from "../../../store/selectors";
import { OrderModal } from "../OrderModal/OrderModal";
import { setRecord } from "../../../store/slices/formSlice";

export const OrderTableBody = ({ records = [] }) => {
  const dispatch = useDispatch();
  const selectedRecordsIds = useSelector(getSelectedRecordsIds);
  const [isShowModal, setShowModal] = useState(false);
  const [openRecordId, setOpenRecordId] = useState("");

  const checkboxChangeHandler = ({ target: { id, checked } }) => {
    dispatch(
      setSelectedRecordsIds(
        checked
          ? [...selectedRecordsIds, id]
          : selectedRecordsIds.filter((value) => value !== id)
      )
    );
  };
  const getRecordsById = (id) => {
    return records.find((record) => record.id === id);
  };

  const openRecordFormHandler = ({
    target: { tagName },
    currentTarget: { id },
  }) => {
    // подумать...
    console.log(tagName);
    if (tagName === "DIV") {
      dispatch(setRecord(getRecordsById(id)));
      setOpenRecordId(id);
      setShowModal(true);
    }
  };

  return (
    <TableBody>
      {records.length === 0 && (
        <span className={styles.text}>Не нашлось ни одной записи!</span>
      )}
      {records.length > 0 &&
        records.map(({ id, date, status, count, amount, name }) => {
          count = count ? count : "–";
          amount = amount ? Number(amount).toLocaleString() + " ₽" : "–";
          const isChecked = selectedRecordsIds.includes(id);

          return (
            <TableRow
              key={id}
              id={id}
              selected={isChecked || (openRecordId === id && isShowModal)}
              onClick={openRecordFormHandler}
            >
              <TableCell className={styles.cell_withCheckbox}>
                <Checkbox
                  id={id}
                  checked={isChecked}
                  onChange={checkboxChangeHandler}
                />
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
      {isShowModal && <OrderModal setShowModal={setShowModal} />}
    </TableBody>
  );
};
