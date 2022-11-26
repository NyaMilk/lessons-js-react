import React from "react";
import classNames from "classnames";
import styles from "./DropdownWithInput.module.css";
import { Input } from "../Input/Input";

export const DropdownWithInput = ({ className, ...propsInput }) => {
  const dropdownClassName = classNames(styles._, className);

  return (
    <div className={dropdownClassName}>
      <Input className={styles.input} {...propsInput} />
    </div>
  );
};
