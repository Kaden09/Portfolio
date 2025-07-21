import Subtitle from "@/shared/ui/TextComponents/Subtitle";
import Title from "@/shared/ui/TextComponents/Title";
import styles from "./Skills.module.scss";
import SkillsList from "@/shared/ui/SkillsList/SkillsList";

function Skills() {
  return (
    <div className={styles.skills}>
      <SkillsList />
      <div className={styles.title}>
        <Subtitle>Let's get in touch</Subtitle>
        <Title>Ways to Reach Me.</Title>
      </div>
    </div>
  );
}

export default Skills;
