import React from "react";
import { ITitle } from "./Title.interface";
import styles from "./Title.module.scss";
import cx from "classix";

function Title({ children = "", level = 1, variant = "primary", className="" }: ITitle) {
  const Heading = `h${level}` as keyof React.JSX.IntrinsicElements;
  const cls = cx(styles.title, styles[`title__${variant}`], styles[`h${level}`], className);

  return <Heading className={cls}>{children}</Heading>;
}

export default Title;
