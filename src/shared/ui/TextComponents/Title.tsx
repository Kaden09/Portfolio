import styles from "./text.module.scss";
import cx from "classix";
import type { TextType } from "@/shared/types/text.type";

function Title({
  children,
  weight,
  size,
  color,
  className,
  ...props
}: TextType) {
  const cls = cx(
    styles.title,
    styles[`title_${weight}`],
    styles[`title_${size}`],
    styles[`title_${color}`],
    className,
  );

  return (
    <h2 className={cls} {...props}>
      {children}
    </h2>
  );
}

export default Title;
