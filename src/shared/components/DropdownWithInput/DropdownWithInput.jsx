import React from "react";
import styles from "./DropdownWithInput.module.css";
import { Input } from "../Input/Input";

export const DropdownWithInput = ({ ...props }) => {
  return (
    <div className={styles._}>
      <Input className={styles.input} {...props} />
    </div>
  );
};
