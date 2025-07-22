import GitHubIcon from "@/shared/assets/icons/github.svg?react";
import Title from "../TextComponents/Title";
import styles from "./GitHubButton.module.scss";
import { useEffect, useState } from "react";

function GitHubButton() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const buttonText = windowWidth > 768 ? "View More on GitHub" : "GitHub";

  return (
    <a
      href="https://github.com/Kaden09"
      target="_blank"
      className={styles["github-button"]}
    >
      <GitHubIcon />
      {windowWidth > 400 ? <Title size="md">{buttonText}</Title> : <></>}
    </a>
  );
}

export default GitHubButton;
