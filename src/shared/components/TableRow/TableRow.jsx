import React from "react";
import classnames from "classnames";
import styles from "./TableRow.module.css";

export const TableRow = ({ children, selected }) => {
  const rowClassName = classnames(styles._, {
    [styles.selected]: !!selected,
  });

  return <div className={rowClassName}>{children}</div>;
};
