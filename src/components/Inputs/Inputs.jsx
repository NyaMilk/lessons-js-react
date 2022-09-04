import React from "react";
import './Inputs.css'

export const InputSearchbar = ({ className, icon, type, placeholder, onChange, value }) => {
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
    </div>
    );
}