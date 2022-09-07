import React from "react";
import "./Inputs.css";

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
