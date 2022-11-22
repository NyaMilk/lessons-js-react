import React from "react";
import { Table } from "../../../shared/components";
import { OrderTableHeader } from "../OrderTableHeader/OrderTableHeader";
import { OrderTableBody } from "../OrderTableBody/OrderTableBody";
import dataMock from "../../../assets/mock/orders.json";
import { OrderTableFooter } from "../OrderTableFooter/OrderTableFooter";

export const OrderTable = () => {
  return (
    <Table>
      <OrderTableHeader />
      <OrderTableBody />
      <OrderTableFooter recordsCount={dataMock.length} />
    </Table>
  );
};
