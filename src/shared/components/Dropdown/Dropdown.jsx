import React from "react";
import classnames from "classnames";
import styles from "./Dropdown.module.css";
import { VArrowIcon } from "../Icons";
import { DropdownList } from "../DropdownList/DropdowmList";

export const Dropdown = ({
  disabled,
  defaultValue,
  value,
  type = "multiple",
  items,
  onClick,
  onChange,
  checked,
  active,
}) => {
  const dropdownClassName = classnames(styles._, {
    [styles.disabled]: !!disabled,
  });

  const dropdownListClassName = classnames(styles.modal, {
    [styles.modalActive]: active,
  });

  return (
    <div className={dropdownClassName}>
      <input
        className={styles.input}
        type="button"
        // defaultValue={defaultValue}
        value={value}
        onClick={onClick}
        disabled={disabled}
      />
      <VArrowIcon className={styles.icon} onClick={onClick} />
      <DropdownList
        type={type}
        className={dropdownListClassName}
        list={items}
        onChange={onChange}
        checked={checked}
      />
    </div>
  );
};
