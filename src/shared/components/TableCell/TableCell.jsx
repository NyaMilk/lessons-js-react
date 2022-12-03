import React from "react";
import classnames from "classnames";
import styles from "./TableCell.module.css";
import { Icon } from "../Icon/Icon";

export const TableCell = ({
  className,
  children,
  icon: { name: iconName, className: iconClass } = {},
}) => {
  const cellClassName = classnames(styles._, className);
  const iconClassName = classnames(styles.icon, iconClass);

  return (
    <div className={cellClassName}>
      {children}
      {iconName && <Icon className={iconClassName} name={iconName} />}
    </div>
  );
};
