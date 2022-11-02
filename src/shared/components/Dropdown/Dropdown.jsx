import React from "react";
import classnames from "classnames";
import styles from "./Dropdown.module.css";
import { LockedIcon, VArrowIcon } from "../Icons";
import { DropdownList } from "../DropdownList/DropdowmList";

export const Dropdown = ({
  title: { text, titleClassName },
  defaultValue,
  value,
  type = "multiple",
  items,
  onClick,
  onChange,
  checked,
  active,
  disabled,
}) => {
  const dropdownClassName = classnames(styles._, {
    [styles.disabled]: !!disabled,
  });

  const dropdownListClassName = classnames(styles.modal, {
    [styles.modalActive]: active,
  });

  return (
    <div>
      {text && <span className={titleClassName}>{text}</span>}
      <div className={dropdownClassName}>
        <input
          className={styles.input}
          type="button"
          // defaultValue={defaultValue}
          value={value}
          onClick={onClick}
          disabled={disabled}
        />
        {disabled ? (
          <LockedIcon className={styles.icon} />
        ) : (
          <VArrowIcon onClick={onClick} className={styles.icon} />
        )}
        {active && (
          <DropdownList
            className={dropdownListClassName}
            type={type}
            list={items}
            onChange={onChange}
            checked={checked}
          />
        )}
      </div>
    </div>
  );
};
