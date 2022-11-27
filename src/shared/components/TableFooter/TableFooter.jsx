import React from "react";
import classnames from "classnames";
import styles from "./TableFooter.module.css";

export const TableFooter = ({ className, children }) => {
  const tableFooterClassName = classnames(styles._, className);

  return <div className={tableFooterClassName}>{children}</div>;
};
