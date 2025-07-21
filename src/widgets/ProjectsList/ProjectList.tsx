import ProjectCard from "@/shared/ui/ProjectCard/ProjectCard";
import styles from "./ProjectList.module.scss";
import { projects } from "@/shared/api/projects";

function ProjectList() {
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

export default ProjectList;
