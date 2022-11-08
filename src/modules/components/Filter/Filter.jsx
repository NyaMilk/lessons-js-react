import React from "react";
import styles from "./Filter.module.css";

export const Filter = ({ title, from, to }) => {
  return (
    <div className={styles._}>
      <span className={styles.title}>{title}</span>
      <div className={styles.group}>
        {from}
        {to}
      </div>
    </div>
  );
};
