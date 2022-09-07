import React from "react";
import "./Button.css";

export const Button = ({ className = "", icon, text, onClick }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {icon && icon}
      {text && <span className='button__text'>{text}</span>}
    </button>
  );
};
