import React from "react";
import classnames from "classnames";
import styles from "./Input.module.css";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

const noop = () => {};

export const Input = ({
  className,
  label,
  name,
  type = "text",
  placeholder,
  value,
  incorrect,
  disabled,
  onChange = noop,
  onClick = noop,
  onClear,
}) => {
  const blockClassName = classnames(styles._, {
    [styles.incorrect]: !!incorrect,
    [styles.disabled]: !!disabled,
  });
  const inputClassName = classnames(styles.input, className);
  const labelId = parseInt(Date.now() * Math.random()).toString();

  return (
    <div className={blockClassName}>
      {label && (
        <label htmlFor={labelId} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={labelId}
        className={inputClassName}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
      />
      {value && !disabled && onClear && (
        <Button
          className={styles.button}
          icon={{ name: "close", className: styles.icon }}
          transparent
          onClick={onClear}
        />
      )}
      {disabled && <Icon name="locked" className={styles.icon} />}
    </div>
  );
};
