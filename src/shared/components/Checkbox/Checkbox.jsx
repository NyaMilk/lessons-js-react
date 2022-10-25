import React from "react";
import classnames from "classnames";
import styles from "./Checkbox.module.css";
import { CheckmarkIcon } from "../Icons";

// children
//
export const Checkbox = ({
  children,
  className,
  disabled,
  hidden,
  onChange,
}) => {
  const customCheckboxClass = classnames(styles._, className);

  const inputClass = classnames(styles.input, {
    [styles.disabled]: !!disabled,
    [styles.hidden]: !!hidden,
  });

  return (
    <div className={customCheckboxClass}>
      <label className={styles.label}>
        <input
          className={inputClass}
          type="checkbox"
          name={children}
          value={children}
          onChange={onChange}
          disabled={disabled}
        />
        <CheckmarkIcon className={styles.icon} />
        {children && <span className={styles.text}>{children}</span>}
      </label>
    </div>
  );
};
