import type { ProjectCardProps } from "@/shared/types/project.type";
import styles from "./ProjectCard.module.scss";
import Title from "../TextComponents/Title";
import Subtitle from "../TextComponents/Subtitle";
import StarIcon from "@/shared/assets/icons/star.svg?react";
import DoubleStarIcon from "@/shared/assets/icons/doubleStar.svg?react";
import FillStar from "@/shared/assets/icons/fillStar.svg?react";

function ProjectCard({
  title = "",
  team = false,
  stack = [],
  bgImg = "",
  link = "",
}: ProjectCardProps) {
  return (
    <div
      className={styles["project-card"]}
      style={{
        background: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.info}>
        <div className={styles.title}>
          <Title>{title}</Title>
          <div className={styles.subtitle}>
            {team ? <DoubleStarIcon /> : <StarIcon />}
            <Subtitle color="white10">
              {team ? "Team project" : "Solo Project"}
            </Subtitle>
          </div>
        </div>

        <div className={styles["hr-line"]} />

        <Subtitle color="white10" className={styles.stack}>
          {stack?.join(" • ")}
        </Subtitle>
      </div>

      <div className={styles.blackout} />
      <a href={link} target="_blank" className={styles["project-link"]} />
      <FillStar className={styles["fill-star"]} />
    </div>
  );
}

export default ProjectCard;
