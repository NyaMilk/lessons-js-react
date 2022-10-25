import React from "react";
import classnames from "classnames";
import styles from "./Inputs.module.css";
import { CheckmarkIcon, VArrowIcon } from "../Icons";
import { Button } from "../Button/Button";
import { XMediumIcon } from "../Icons";

// todo
export const InputSimple = ({
  className,
  name,
  type = "text",
  placeholder,
  onChange,
  value,
  incorrect,
  disabled,
  button,
}) => {
  const inputClass = classnames(styles.customInput, className, {
    [styles.customInput_incorrect]: !!incorrect,
    [styles.customInput_disabled]: !!disabled,
  });

  return (
    <div className={inputClass}>
      <label className={styles.customInput__label}>
        <input
          className={styles.customInput__input}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {value && (
          <Button
            className={styles.customInput__button}
            icon={{
              icon: XMediumIcon,
              iconClass: styles.customSearchbar__icon,
            }}
            {...button}
          />
        )}
      </label>
    </div>
  );
};

export const InputFilter = ({
  prefix,
  name,
  placeholder,
  onChange,
  value,
  button,
}) => {
  return (
    <div className={styles.customFilter}>
      <span className={styles.customFilter__prefix}>{prefix}</span>
      <input
        className={styles.customFilter__input}
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {value && (
        <Button
          className={styles.customFilter__button}
          prefixIcon={{
            icon: XMediumIcon,
            iconClassName: styles.customFilter__icon,
          }}
          {...button}
        />
      )}
    </div>
  );
};
