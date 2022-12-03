import React from "react";
import classnames from "classnames";
import styles from "./Table.module.css";

export const Table = ({ className, children }) => {
  const tableClassName = classnames(styles._, className);

  return <div className={tableClassName}>{children}</div>;
};
