import ProjectCard from "@/shared/ui/ProjectCard/ProjectCard";
import styles from "./ProjectsList.module.scss";
import { projects } from "@/shared/api/projects";

function ProjectsList() {
  return (
    <div className={styles["projects-list"]}>
      {projects.map((project) => (
        <ProjectCard
          title={project.title}
          team={project.team}
          stack={project.stack}
          bgImg={project.bgImg}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default ProjectsList;
