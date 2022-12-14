import React from "react";
import classnames from "classnames";
import styles from "./Checkbox.module.css";
import { Icon } from "../Icon/Icon";

export const Checkbox = ({
  id,
  children,
  className,
  name,
  checked,
  disabled,
  hidden,
  onChange,
}) => {
  const checkboxClassName = classnames(styles._, className);

  const inputClassName = classnames(styles.input, {
    [styles.disabled]: !!disabled,
    [styles.hidden]: !!hidden,
  });

  return (
    <div className={checkboxClassName}>
      <label className={styles.label}>
        <input
          id={id}
          className={inputClassName}
          type="checkbox"
          name={name ?? children}
          checked={checked}
          value={children}
          disabled={disabled}
          hidden={hidden}
          onChange={onChange}
        />
        <Icon name="checkmark" className={styles.icon} />
        {children && <span className={styles.text}>{children}</span>}
      </label>
    </div>
  );
};
