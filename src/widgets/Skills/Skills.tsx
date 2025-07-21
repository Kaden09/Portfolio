import Subtitle from "@/shared/ui/TextComponents/Subtitle";
import Title from "@/shared/ui/TextComponents/Title";
import styles from "./Skills.module.scss";
import SkillsList from "@/shared/ui/SkillsList/SkillsList";

function Skills() {
  return (
    <div className={styles.skills}>
      <SkillsList />
      <div className={styles.title}>
        <Subtitle>✦ This is my life</Subtitle>
        <Title>My Knowledge and Skills.</Title>
      </div>
    </div>
  );
}

export default Skills;
