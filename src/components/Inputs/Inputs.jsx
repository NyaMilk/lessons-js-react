import React from "react";
import "./Inputs.css";

export const InputSearchbar = ({
  className,
  icon,
  type,
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
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {icon && icon}
      {value && button}
    </div>
  );
};
