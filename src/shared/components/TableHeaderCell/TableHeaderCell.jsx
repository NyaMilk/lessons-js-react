import React from "react";
import classnames from "classnames";
import styles from "./TableHeaderCell.module.css";
import { Icon } from "../../../shared/components";

export const TableHeaderCell = ({
  className,
  children,
  sorted,
  direction,
  onCLick,
}) => {
  const cellClassName = classnames(styles._, className, {
    [styles.sorted]: sorted,
  });

  const iconClassName = classnames(styles.icon, {
    [styles.direction]: direction === "asc",
  });

  return (
    <div className={cellClassName} onClick={onCLick}>
      {children}
      {onCLick && <Icon className={iconClassName} name="arrow" />}
    </div>
  );
};
