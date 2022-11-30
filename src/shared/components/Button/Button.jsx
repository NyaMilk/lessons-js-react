import React, { forwardRef } from "react";
import classnames from "classnames";
import styles from "./Button.module.css";
import { Icon } from "../Icon/Icon";

export const Button = forwardRef(
  (
    {
      children,
      className,
      theme = "primary",
      size = "middle",
      icon: { name: iconName, className: iconClass } = {},
      transparent,
      disabled,
      opacity,
      onClick,
    },
    ref
  ) => {
    const buttonClassName = classnames(
      styles._,
      className,
      styles[`theme_${theme}`],
      styles[`size_${size}`],
      {
        [styles.icon_only]: !children,
        [styles.transparent]: !!transparent,
        [styles.disabled]: !!disabled,
        [styles.opacity]: !!opacity,
      }
    );

    const iconClassName = classnames(styles.icon, iconClass);

    return (
      <button ref={ref} className={buttonClassName} onClick={onClick}>
        {iconName && <Icon className={iconClassName} name={iconName} />}
        {children}
      </button>
    );
  }
);
