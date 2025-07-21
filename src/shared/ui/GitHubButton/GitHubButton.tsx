import GitHubIcon from "@/shared/assets/icons/github.svg?react";
import Title from "../TextComponents/Title";
import styles from "./GitHubButton.module.scss";

function GitHubButton() {
  return (
    <button className={styles["github-button"]}>
      <GitHubIcon />
      <Title size="md">View More on GitHub</Title>
    </button>
  );
}

export default GitHubButton;
