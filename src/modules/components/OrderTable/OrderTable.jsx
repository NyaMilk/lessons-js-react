import React, { useEffect } from "react";
import styles from "./OrderTable.module.css";
import { Table } from "../../../shared/components";
import { OrderTableHeader } from "../OrderTableHeader/OrderTableHeader";
import { OrderTableBody } from "../OrderTableBody/OrderTableBody";
import { OrderTableFooter } from "../OrderTableFooter/OrderTableFooter";
import { useDispatch, useSelector } from "react-redux";
import { getRecordsWithFilters, loadRecords } from "../../../store/selectors";
import { setCurrentPage, setRecords } from "../../../store/slices/recordSlice";

export const OrderTable = () => {
  const dispatch = useDispatch();
  const { records, pageCount } = useSelector(getRecordsWithFilters);

  useEffect(() => {
    const records = loadRecords();
    dispatch(setRecords(records));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [pageCount, dispatch]);

  return (
    <Table className={styles._}>
      <OrderTableHeader records={records} />
      <OrderTableBody records={records} />
      <OrderTableFooter pageCount={pageCount} />
    </Table>
  );
};
