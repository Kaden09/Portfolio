import GitHubIcon from "@/shared/assets/icons/github.svg?react";
import Title from "../TextComponents/Title";
import styles from "./GitHubButton.module.scss";

function GitHubButton() {
  return (
    <a
      href="https://github.com/Kaden09"
      target="_blank"
      className={styles["github-button"]}
    >
      <GitHubIcon />
      <Title size="md">View More on GitHub</Title>
    </a>
  );
}

export default GitHubButton;
