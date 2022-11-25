import React, { useEffect } from "react";
import styles from "./AdminPanel.module.css";
import { Header, Filterbar, OrderTable } from "../../components";
import { useDispatch } from "react-redux";
import { loadRecords } from "../../../store/selectors";
import { setRecords } from "../../../store/slices/recordSlice";

export const AdminPanel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const records = loadRecords();
    dispatch(setRecords(records));
  }, [dispatch]);

  return (
    <div className={styles._}>
      <Header />
      <Filterbar />
      <OrderTable />
    </div>
  );
};
