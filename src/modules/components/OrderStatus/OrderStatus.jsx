import React from "react";
import classnames from "classnames";
import { Icon } from "../../../shared/components";
import styles from "./OrderStatus.module.css";

const StatusIcon = ({ name, color }) => {
  const iconClassName = classnames(styles._, {
    [styles.colorOrange]: color === "orange",
    [styles.colorGreen]: color === "green",
    [styles.colorBlue]: color === "blue",
    [styles.colorGrey]: color === "grey",
  });

  return <Icon name={name} className={iconClassName} />;
};

const STATUSES = {
  new: {
    value: "new",
    langRu: "Новый",
    icon: <StatusIcon name="dot" color="orange" />,
  },
  calculation: {
    value: "calculation",
    langRu: "Рассчет",
    icon: <StatusIcon name="dot" color="blue" />,
  },
  confirmed: {
    value: "confirmed",
    langRu: "Подтвержден",
    icon: <StatusIcon name="dot" color="green" />,
  },
  postponed: {
    value: "postponed",
    langRu: "Отложен",
    icon: <StatusIcon name="dot" color="orange" />,
  },
  completed: {
    value: "completed",
    langRu: "Выполнен",
    icon: <StatusIcon name="checkmark" color="green" />,
  },
  canceled: {
    value: "canceled",
    langRu: "Отменен",
    icon: <StatusIcon name="abort" color="grey" />,
  },
};

export const OrderStatus = ({ status }) => {
  const spanClassName = classnames({
    [styles.colorTextGreen]: status === "completed",
    [styles.colorTextGrey]: status === "canceled",
  });

  return (
    <>
      {STATUSES[status].icon}
      <span className={spanClassName}>{STATUSES[status].langRu}</span>
    </>
  );
};
