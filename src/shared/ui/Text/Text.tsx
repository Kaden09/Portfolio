import { IText } from "./Text.interface";
import cx from "classix";
import styles from "./Text.module.scss";

function Text({
  children = "",
  variant = "primary",
  weight = 400,
  className = "",
}: IText) {
  const cls = cx(styles.text, styles[`text__${variant}`], className);
  return (
    <p className={cls} style={{ fontWeight: weight }}>
      {children}
    </p>
  );
}

export default Text;
