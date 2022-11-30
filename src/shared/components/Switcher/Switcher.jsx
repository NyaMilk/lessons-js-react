import React, { forwardRef } from "react";
import classnames from "classnames";
import styles from "./Switcher.module.css";
import { Button } from "../Button/Button";

export const Switcher = forwardRef(({ className, children, items }, ref) => {
  const switcherClassName = classnames(styles._, className);

  return (
    <div ref={ref} className={switcherClassName}>
      {children}
      {items.map(({ title, ...props }) => {
        return (
          <Button key={title} size="small" {...props}>
            {title}
          </Button>
        );
      })}
    </div>
  );
});
