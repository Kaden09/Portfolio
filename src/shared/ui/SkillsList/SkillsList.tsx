import { skills } from "@/shared/api/skills";
import styles from "./SkillsList.module.scss";

function SkillsList() {
  return (
    <div className={styles.skills}>
      {skills.map(({ icon: Icon, id }) => (
        <Icon key={id} className={styles.icon} />
      ))}
    </div>
  );
}

export default SkillsList;
