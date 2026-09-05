import Subtitle from "@/shared/ui/TextComponents/Subtitle";
import Title from "@/shared/ui/TextComponents/Title";
import styles from "./Skills.module.scss";
import SkillsList from "@/shared/ui/SkillsList/SkillsList";
import SkillsBgShape from "@/shared/assets/icons/skillsBgShape.svg?react";
import { backendSkills, frontendSkills, toolsAndDevops } from "@/shared/api/skills";

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.title}>
        <Title size="xl">My Knowledge and Skills.</Title>
        <Subtitle>✦ This is my life</Subtitle>
      </div>
      <section className={styles.skills__section}>
        <Title size="lg">Frontend Skills:</Title>
        <SkillsList skills={frontendSkills} />
      </section>
      <section className={styles.skills__section}>
        <Title size="lg">Backend Skills:</Title>
        <SkillsList skills={backendSkills} />
      </section>
      <section className={styles.skills__section}>
        <Title size="lg">Tools and DevOps:</Title>
        <SkillsList skills={toolsAndDevops} />
      </section>
      <SkillsBgShape className={styles.bgShape} />
    </div>
  );
}

export default Skills;
