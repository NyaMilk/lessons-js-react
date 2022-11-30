import React, { forwardRef } from "react";
import classNames from "classnames";
import styles from "./DropdownWithInput.module.css";
import { Input } from "../Input/Input";

export const DropdownWithInput = forwardRef(
  ({ className, ...propsInput }, ref) => {
    const dropdownClassName = classNames(styles._, className);

    return (
      <div ref={ref} className={dropdownClassName}>
        <Input className={styles.input} {...propsInput} />
      </div>
    );
  }
);
