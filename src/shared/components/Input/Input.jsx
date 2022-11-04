import React from "react";
import classnames from "classnames";
import styles from "./Input.module.css";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

export const Input = ({
  className,
  label,
  name,
  type = "text",
  placeholder,
  value,
  incorrect,
  disabled,
  onChange,
  onClear,
}) => {
  const inputClassName = classnames(styles._, className, {
    [styles.incorrect]: !!incorrect,
    [styles.disabled]: !!disabled,
  });

  //todo
  return (
    <label>
      {label && <span className={styles.label}>{label}</span>}
      <div className={inputClassName}>
        <input
          className={styles.input}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {value && !disabled && (
          <Button
            className={styles.button}
            icon={{ name: "close" }}
            transparent
            onClick={onClear}
          />
        )}
        {disabled && <Icon name="locked" className={styles.icon} />}
      </div>
    </label>
  );
};
