import styles from "./text.module.scss";
import cx from "classix";
import type { TextType } from "@/shared/types/text.type";

function Title({
  children = "",
  weight = "medium",
  size = "md",
  color = "white",
  className = "",
  ...props
}: TextType) {
  const cls = cx(
    styles.title,
    styles[`title__${weight}`],
    styles[`title__${size}`],
    styles[`title__${color}`],
    className,
  );

  return (
    <h2 className={cls} {...props}>
      {children}
    </h2>
  );
}

export default Title;
