import React from "react";
import classnames from "classnames";
import styles from "./TableHeaderCell.module.css";
import { Icon } from "../../../shared/components";

export const TableHeaderCell = ({ className, children, onCLick }) => {
  const cellClassName = classnames(styles._, className);

  return (
    <div className={cellClassName}>
      {children}
      {onCLick && <Icon className={styles.icon} name="arrow" />}
    </div>
  );
};
