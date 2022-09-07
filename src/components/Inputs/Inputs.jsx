import React from "react";
import "./Inputs.css";
import { CheckmarkIcon } from "../Icons/Icons";

export const InputCheckbox = ({ className = "", text, disabled, onChange }) => {
  const classInput = disabled ? "custom-checkbox__item_disabled" : "";

  return (
    <div className={`custom-checkbox ${className}`}>
      <label className="custom-checkbox__label">
        <input
          className={`custom-checkbox__input ${classInput}`}
          type="checkbox"
          name={text}
          onChange={onChange}
        />
        <CheckmarkIcon className={`custom-checkbox__icon ${classInput}`} />
        {text && <span className="custom-checkbox__text">{text}</span>}
      </label>
    </div>
  );
};

export const InputRadio = ({
  className = "",
  text,
  name = "custom-radio",
  disabled,
  onChange,
}) => {
  const classInput = disabled ? "custom-radio__item_disabled" : "";

  return (
    <div className={`custom-radio ${className}`}>
      <label className="custom-radio__label">
        <input
          className={`custom-radio__input ${classInput}`}
          type="radio"
          name={name}
          onChange={onChange}
        />
        {text && <span className="custom-radio__text">{text}</span>}
      </label>
    </div>
  );
};

export const InputSimple = ({
  className,
  type = "text",
  name,
  placeholder,
  onChange,
  value,
  button,
}) => {
  return (
    <div className={`custom-input ${className}`}>
      <label className="custom-input__label">
        <input
          className="custom-input__input"
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {value && button}
      </label>
    </div>
  );
};

export const InputDropdown = ({
  className,
  type = "text",
  defaultValue,
  value,
  button,
}) => {
  return (
    <div className="custom-input">
      <input
        className={`custom-input__input ${className}`}
        type={type}
        defaultValue={defaultValue}
        value={value}
      />
      {button}
    </div>
  );
};

export const InputSearchbar = ({
  className = "",
  icon,
  type = "text",
  name,
  placeholder,
  onChange,
  value,
  button,
}) => {
  return (
    <div className="custom-searchbar">
      <input
        className={`custom-searchbar__input ${className}`}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {icon && icon}
      {value && button}
    </div>
  );
};

export const InputFilter = ({
  className = "",
  prefix,
  type = "text",
  name,
  placeholder,
  onChange,
  value,
  button,
}) => {
  return (
    <div className="custom-filter">
      <span className="custom-filter__prefix">{prefix}</span>
      <input
        className={`custom-filter__input ${className}`}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {value && button}
    </div>
  );
};
