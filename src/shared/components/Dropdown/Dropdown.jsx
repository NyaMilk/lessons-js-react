import React from "react";
import classnames from "classnames";
import styles from "./Dropdown.module.css";
import { Icon } from "../Icon/Icon";
import { DropdownList } from "../DropdownList/DropdowmList";
import { Input } from "../Input/Input";

// todo
export const Dropdown = ({
  label,
  value,
  type = "multiple",
  items,
  activated,
  checked,
  disabled,
  onChange,
  onClick,
}) => {
  const dropdownClassName = classnames(styles._, {
    [styles.disabled]: !!disabled,
  });

  return (
    <div>
      <div className={dropdownClassName}>
        <Input
          className={styles.input}
          label={label}
          type="button"
          value={value}
          disabled={disabled}
          onClick={onClick}
        />
        {!disabled && (
          <Icon name="arrow" className={styles.icon} onClick={onClick} />
        )}
        {activated && (
          <DropdownList
            className={styles.modal}
            type={type}
            list={items}
            // onChange={onChange}
            checked={checked}
          />
        )}
      </div>
    </div>
  );
};
