import React from "react";
import classnames from "classnames";
import styles from "./TableRow.module.css";

export const TableRow = ({ id, children, selected, onClick }) => {
  const rowClassName = classnames(styles._, {
    [styles.selected]: !!selected,
  });

  return (
    <div id={id} className={rowClassName} onClick={onClick}>
      {children}
    </div>
  );
};
