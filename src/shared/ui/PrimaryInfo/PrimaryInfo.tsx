import { IPrimaryInfo } from "./PrimaryInfo.interface";
import styles from "./PrimaryInfo.module.scss";
import Text from "../Text/Text";

function PrimaryInfo({ name, value }: IPrimaryInfo) {
  return (
    <div className={styles["primary-info"]}>
      <Text variant="secondary">{name}</Text>
      <Text weight={600}>{value}</Text>
    </div>
  );
}

export default PrimaryInfo;
