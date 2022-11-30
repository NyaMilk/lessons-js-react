import React, { forwardRef } from "react";
import classnames from "classnames";
import styles from "./Dropdown.module.css";
import { Icon } from "../Icon/Icon";
import { DropdownList } from "../DropdownList/DropdowmList";
import { Input } from "../Input/Input";

export const Dropdown = forwardRef(
  (
    {
      className,
      label,
      value,
      type = "multiple",
      name,
      items,
      activated,
      checked = [],
      disabled,
      hidden,
      onChange,
      onClick,
    },
    ref
  ) => {
    const dropdownClassName = classnames(styles._, className, {
      [styles.disabled]: !!disabled,
    });

    return (
      <div ref={ref}>
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
              name={name}
              checked={checked}
              hidden={hidden}
              onChange={onChange}
            />
          )}
        </div>
      </div>
    );
  }
);
