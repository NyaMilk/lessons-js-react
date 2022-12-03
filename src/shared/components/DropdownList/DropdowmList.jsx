import React from "react";
import classNames from "classnames";
import styles from "./DropdownList.module.css";
import { Radio } from "../Radio/Radio";
import { Checkbox } from "../Checkbox/Checkbox";

export const DropdownList = ({
  className,
  type = "multiple",
  list,
  name,
  checked,
  hidden,
  onChange,
}) => {
  const dropdownListClassName = classNames(styles._, className);
  const Type = type === "single" ? Radio : Checkbox;

  return (
    <div className={dropdownListClassName}>
      {Object.entries(list).map(([key, value]) => {
        const isChecked =
          type === "single" ? checked === key : checked.includes(key);

        return (
          <Type
            key={key}
            name={name ?? key}
            value={key}
            className={styles.item}
            checked={isChecked}
            hidden={hidden}
            onChange={onChange}
          >
            {value}
          </Type>
        );
      })}
    </div>
  );
};
