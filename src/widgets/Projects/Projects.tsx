import Subtitle from "@/shared/ui/TextComponents/Subtitle";
import ProjectsList from "@/shared/ui/ProjectsList/ProjectsList";
import styles from "./Projects.module.scss";
import Title from "@/shared/ui/TextComponents/Title";
import GitHubButton from "@/shared/ui/GitHubButton/GitHubButton";

function Projects() {
  return (
    <div className={styles.projects}>
      <ProjectsList />
      <div className={styles.info}>
        <div className={styles.title}>
          <Subtitle>✦ Key points</Subtitle>
          <Title>My Incredible Projects.</Title>
        </div>
        <GitHubButton />
      </div>
    </div>
  );
}

export default Projects;
