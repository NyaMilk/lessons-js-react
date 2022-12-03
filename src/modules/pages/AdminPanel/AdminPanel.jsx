import React from "react";
import styles from "./AdminPanel.module.css";
import { Header, Filterbar } from "../../components";

export const AdminPanel = () => {
  return (
    <div className={styles._}>
      <Header />
      <Filterbar />
    </div>
  );
};
