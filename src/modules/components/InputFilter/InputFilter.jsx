import React from "react";
import { Input } from "../../../shared/components";
import styles from "./InputFilter.module.css";

export const InputFilter = ({ prefix, ...props }) => {
  return (
    <div className={styles._}>
      <span className={styles.prefix}>{prefix}</span>
      <Input className={styles.input} {...props} />
    </div>
  );
};
