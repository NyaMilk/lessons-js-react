import React from "react";
import classnames from "classnames";
import styles from "./Dropdowns.module.css";
import { Button } from "../Button/Button";
import { Radio } from "../Radio/Radio";
import { Checkbox } from "../Checkbox/Checkbox";

export const DropdownMultiple = ({ list, className, ...props }) => {
  const customDropdownClass = classnames(styles.customDropdown, className);

  return (
    <div className={customDropdownClass}>
      {list.map((text, item) => {
        return (
          <Checkbox
            key={item}
            className={styles.customDropdown__item}
            {...props}
          >
            {text}
          </Checkbox>
        );
      })}
    </div>
  );
};

export const DropdownSingle = ({ list, className, ...props }) => {
  const customDropdownClass = classnames(styles.customDropdown, className);

  return (
    <div className={customDropdownClass}>
      {list.map((text, item) => {
        return (
          <Radio key={item} className={styles.customDropdown__item} {...props}>
            {text}
          </Radio>
        );
      })}
    </div>
  );
};

export const DropdownDelete = ({ className, reconrdCount = 0 }) => {
  const customDropdownDeleteClass = classnames(
    styles.customDropdown,
    styles.customDropdown_delete,
    className
  );

  return (
    <div className={customDropdownDeleteClass}>
      Удалить {reconrdCount} записей?
      <Button size="small" transparent>
        Удалить
      </Button>
      <Button size="small">Отмена</Button>
    </div>
  );
};
