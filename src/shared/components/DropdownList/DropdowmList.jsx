import React from "react";
import classNames from "classnames";
import styles from "./DropdownList.module.css";
import { Radio } from "../Radio/Radio";
import { Checkbox } from "../Checkbox/Checkbox";

export const DropdownList = ({
  className,
  type = "multiple",
  list,
  checked,
  onChange,
}) => {
  const dropdownListClassName = classNames(styles._, className);
  const Type = type === "single" ? Radio : Checkbox;

  return (
    <div className={dropdownListClassName}>
      {Object.entries(list).map(([key, value]) => {
        return (
          <Type
            key={key}
            name={key}
            className={styles.item}
            checked={checked.includes(key)}
            onChange={onChange}
          >
            {value}
          </Type>
        );
      })}
    </div>
  );
};
