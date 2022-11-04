import React from "react";
import classnames from "classnames";
import styles from "./Searchbar.module.css";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

export const Searchbar = ({
  className,
  icon: { name: iconName, className: iconClass } = {},
  name,
  placeholder,
  onChange,
  value,
  button: buttonProps = {},
  disabled,
}) => {
  const searchbarClassName = classnames(styles._, className);

  const iconClassName = classnames(styles.icon, iconClass);

  return (
    <div className={searchbarClassName}>
      <input
        className={styles.input}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
      {iconName && <Icon className={iconClass} name={iconClassName} />}
      {value && (
        <Button
          className={styles.button}
          icon={{ name: "close", className: styles.icon }}
          {...buttonProps}
        />
      )}
    </div>
  );
};
