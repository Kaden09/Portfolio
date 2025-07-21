import styles from "./text.module.scss";
import cx from "classix";
import type { TextType } from "@/shared/types/text.type";

function Text({
  children = "",
  weight = "regular",
  size = "md",
  color = "white",
  className = "",
  ...props
}: TextType) {
  const cls = cx(
    styles.text,
    styles[`text__${weight}`],
    styles[`text__${size}`],
    styles[`text__${color}`],
    className,
  );

  return (
    <p className={cls} {...props}>
      {children}
    </p>
  );
}

export default Text;
