import React from "react";
import classnames from "classnames";
import styles from "./Radio.module.css";

export const Radio = ({
  children,
  className,
  name = "custom-radio",
  value,
  disabled,
  hidden,
  onChange,
}) => {
  const radioClassName = classnames(styles._, className);

  const inputClassName = classnames(styles.input, {
    [styles.disabled]: !!disabled,
    [styles.hidden]: !!hidden,
  });

  return (
    <div className={radioClassName}>
      <label className={styles.label}>
        <input
          className={inputClassName}
          type="radio"
          name={name}
          value={value}
          disabled={disabled}
          hidden={hidden}
          onChange={onChange}
        />
        {children && <span className={styles.text}>{children}</span>}
      </label>
    </div>
  );
};
