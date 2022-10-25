import React from "react";
import "./Dropdowns.css";
import { Button } from "../Button/Button";
import { SunIcon, MoonIcon } from "../../../components/Icons";
import { InputCheckbox, InputRadio } from "../Inputs/Inputs";

export const DropdownMultiple = ({
  list,
  className = "",
  disabled,
  onChange,
}) => {
  return (
    <div className={`custom-dropdown ${className}`}>
      {list.map((text, item) => {
        return (
          <InputCheckbox
            key={item}
            className="custom-dropdown__item"
            text={text}
            disabled={disabled}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
};

export const DropdownSingle = ({ list, className = "", disabled }) => {
  return (
    <div className={`custom-dropdown ${className}`}>
      {list.map((text, item) => {
        return (
          <InputRadio
            key={item}
            className="custom-dropdown__item"
            text={text}
            disabled={disabled}
          />
        );
      })}
    </div>
  );
};

export const DropdownSwitcher = ({ className = "" }) => {
  return (
    <div className={`custom-dropdown custom-dropdown_switcher ${className}`}>
      Выберите тему
      <Button
        className="button_size_small button_transparent"
        // icon={<SunIcon className="button__icon" />}
        text="Светлая"
      />
      <Button
        className="button_size_small button_color_primary"
        // icon={<MoonIcon className="button__icon" />}
        text="Темная"
      />
    </div>
  );
};

export const DropdownDelete = ({ className = "", reconrdCount = 0 }) => {
  return (
    <div className={`custom-dropdown custom-dropdown_delete ${className}`}>
      Удалить {reconrdCount} записей?
      <Button className="button_size_small button_transparent" text="Удалить" />
      <Button
        className="button_size_small button_color_primary"
        text="Отмена"
      />
    </div>
  );
};
