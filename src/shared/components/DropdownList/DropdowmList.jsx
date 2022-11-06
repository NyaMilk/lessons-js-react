import React, { Fragment } from "react";
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
    <Fragment key={checked}>
      <div className={dropdownListClassName}>
        {list.map((text, item) => {
          return (
            <Type key={item} className={styles.item} onChange={onChange}>
              {text}
            </Type>
          );
        })}
      </div>
    </Fragment>
  );
};
