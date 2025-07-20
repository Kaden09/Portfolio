import styles from "./text.module.scss";
import cx from "classix";
import type { TextType } from "@/shared/types/text.type";

function Text({
  children,
  weight,
  size,
  color,
  className,
  ...props
}: TextType) {
  const cls = cx(
    styles.text,
    styles[`text_${weight}`],
    styles[`text_${size}`],
    styles[`text_${color}`],
    className,
  );

  return (
    <p className={cls} {...props}>
      {children}
    </p>
  );
}

export default Text;
