import React from "react";
import classnames from "classnames";
import styles from "./Searchbar.module.css";
import { Button } from "../Button/Button";
import { XMediumIcon } from "../Icons";

export const Searchbar = ({
  className,
  icon = {},
  name,
  placeholder,
  onChange,
  value,
  buttonProps = {},
  disabled,
}) => {
  const customSearchbarClass = classnames(styles._, className);

  const { icon: Icon, iconClass: iconClassName } = icon;
  const iconClass = classnames(styles.icon, iconClassName);

  return (
    <div className={customSearchbarClass}>
      <input
        className={styles.input}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {Icon && <Icon className={iconClass} />}
      {value && (
        <Button
          className={styles.button}
          prefixIcon={{ icon: XMediumIcon, iconClassName: styles.icon }}
          transparent
          {...buttonProps}
        />
      )}
    </div>
  );
};
