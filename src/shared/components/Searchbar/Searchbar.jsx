import React from "react";
import classnames from "classnames";
import styles from "./Searchbar.module.css";
import { Icon } from "../Icon/Icon";
import { Input } from "../Input/Input";

export const Searchbar = ({ className, ...props }) => {
  const inputClassName = classnames(styles.input, className);

  return (
    <div className={styles._}>
      <Input className={inputClassName} {...props} />
      <Icon name="search" className={styles.icon} />
    </div>
  );
};
