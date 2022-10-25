import React from "react";
import classnames from "classnames";
import styles from "./Button.module.css";

export const Button = ({
  children,
  className,
  theme = "primary",
  size = "middle",
  prefixIcon = {},
  postfixIcon = {},
  value,
  transparent,
  disabled,
  opacity,
  onClick,
}) => {
  let buttonClass = classnames(
    styles._,
    className,
    styles[`theme_${theme}`],
    styles[`size_${size}`],
    {
      [styles.withoutText_middle]: !children && size === "middle",
      [styles.withoutText_small]: !children && size === "small",
      [styles.transparent]: !!transparent,
      [styles.disabled]: !!disabled,
      [styles.opacity]: !!opacity,
    }
  );

  const { icon: PrefixIcon, iconClassName: iconPrifixClassName } = prefixIcon;
  const { icon: PostfixIcon, iconClassName: iconPostfixClassName } =
    postfixIcon;

  const iconClass = classnames(
    styles.icon,
    iconPrifixClassName,
    iconPostfixClassName
  );

  return (
    <button className={buttonClass} onClick={onClick} value={value}>
      {PrefixIcon && <PrefixIcon className={iconClass} />}
      {children}
      {PostfixIcon && <PostfixIcon className={iconClass} />}
    </button>
  );
};
