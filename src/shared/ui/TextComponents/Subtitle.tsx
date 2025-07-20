import styles from "./text.module.scss";
import cx from "classix";
import type { TextType } from "@/shared/types/text.type";

function Subtitle({
  children,
  weight,
  size,
  color,
  className,
  ...props
}: TextType) {
  const cls = cx(
    styles.subtitle,
    styles[`subtitle_${weight}`],
    styles[`subtitle_${size}`],
    styles[`subtitle_${color}`],
    className,
  );

  return (
    <h4 className={cls} {...props}>
      ✦ {children}
    </h4>
  );
}

export default Subtitle;
