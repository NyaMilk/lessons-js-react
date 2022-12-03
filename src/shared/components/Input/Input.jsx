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
  onKeyDown = noop,
}) => {
  const blockClassName = classnames(styles._, {
    [styles.incorrect]: !!incorrect,
    [styles.disabled]: !!disabled,
  });

  const inputClassName = classnames(styles.input, className, {
    [styles.space]: !!label,
  });

  return (
    <div className={blockClassName}>
      <label className={styles.label}>
        {label}
        <input
          className={inputClassName}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onClick={onClick}
          onKeyDown={onKeyDown}
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
      </label>
    </div>
  );
};
