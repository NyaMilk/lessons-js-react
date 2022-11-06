import React from "react";
import classnames from "classnames";
import styles from "./Searchbar.module.css";
import { Icon } from "../Icon/Icon";
import { Input } from "../Input/Input";

export const Searchbar = ({ className, ...props }) => {
  const searchbarClassName = classnames(styles._, className);

  return (
    <div className={searchbarClassName}>
      <Input className={styles.input} {...props} />
      <Icon name="search" className={styles.icon} />
    </div>
  );
};
