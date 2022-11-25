import React, { useEffect } from "react";
import { Table } from "../../../shared/components";
import { OrderTableHeader } from "../OrderTableHeader/OrderTableHeader";
import { OrderTableBody } from "../OrderTableBody/OrderTableBody";
import { OrderTableFooter } from "../OrderTableFooter/OrderTableFooter";
import { useDispatch, useSelector } from "react-redux";
import { getRecordsWithFilters } from "../../../store/selectors";
import { setCurrentPage } from "../../../store/slices/recordSlice";

export const OrderTable = () => {
  const { records, pageCount } = useSelector(getRecordsWithFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [pageCount, dispatch]);

  return (
    <Table>
      <OrderTableHeader records={records} />
      <OrderTableBody records={records} />
      <OrderTableFooter pageCount={pageCount} />
    </Table>
  );
};
