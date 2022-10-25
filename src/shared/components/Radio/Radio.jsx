import React from "react";
import classnames from "classnames";
import styles from "./Radio.module.css";
import { CheckmarkIcon, VArrowIcon } from "../Icons";
import { Button } from "../Button/Button";
import { XMediumIcon } from "../Icons";

export const Radio = ({
  children,
  className,
  name = "custom-radio",
  disabled,
  hidden,
  onChange,
}) => {
  const customRadioClass = classnames(styles._, className);

  const inputClass = classnames(styles.input, {
    [styles.disabled]: !!disabled,
    [styles.hidden]: !!hidden,
  });

  return (
    <div className={customRadioClass}>
      <label className={styles.label}>
        <input
          className={inputClass}
          type="radio"
          name={name}
          value={children}
          onChange={onChange}
          disabled={disabled}
        />
        {children && <span className={styles.text}>{children}</span>}
      </label>
    </div>
  );
};
