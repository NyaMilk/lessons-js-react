import React from "react";
import styles from "./AdminPanel.module.css";
import { Header, Filterbar, OrderTable } from "../../components";

export const AdminPanel = () => {
  return (
    <div className={styles._}>
      <Header />
      <Filterbar />
      <OrderTable />
    </div>
  );
};
