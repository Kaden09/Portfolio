import styles from "./text.module.scss";
import cx from "classix";
import type { TextType } from "@/shared/types/text.type";

function Subtitle({
  children = "",
  weight = "medium",
  size = "md",
  color = "gray30",
  className = "",
  ...props
}: TextType) {
  const cls = cx(
    styles.subtitle,
    styles[`subtitle__${weight}`],
    styles[`subtitle__${size}`],
    styles[`subtitle__${color}`],
    className,
  );

  return (
    <h4 className={cls} {...props}>
      ✦ {children}
    </h4>
  );
}

export default Subtitle;
