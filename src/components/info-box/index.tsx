import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";
import Alert from "./alert";

type InfoBoxProps = {
  type?: "info" | "warning" | "error";
  children: React.ReactNode;
};

export const InfoBox = ({ type = "info", children }: InfoBoxProps) => {
  return (
    <p className={clsx(styles.infoBox, styles[type])}>
      <i>
        <Alert />
      </i>

      <span>{children}</span>
    </p>
  );
};

export default InfoBox;
