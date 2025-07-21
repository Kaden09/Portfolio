import Subtitle from "@/shared/ui/TextComponents/Subtitle";
import styles from "./AboutMe.module.scss";
import Title from "@/shared/ui/TextComponents/Title";
import Text from "@/shared/ui/TextComponents/Text";

function AboutMe() {
  return (
    <div className={styles["about-me"]}>
      <div className={styles.title}>
        <Title>A Few Words About Myself.</Title>
        <Subtitle>✦ Getting to Know Me</Subtitle>
      </div>
      <Text size="sm" className={styles.text}>
        <b>Frontend Developer</b> (2+ years with React). I build modern web apps
        with
        <b>clean code, smooth animations, and thoughtful UX</b>. My stack:{" "}
        <b>React, Next.js, Redux, TS, Tailwind</b> (Atomic Design &
        Feature-Sliced for scalability).
        <br />
        Experienced in <b>Agile/Scrum</b> and team collaboration. Also exploring
        backend (<b>Express.js, Rust</b>) to grow as a{" "}
        <b>future Fullstack Dev</b>.<b>Looking for a strong team</b> to tackle
        complex challenges and scale my skills.{" "}
        <b>Open to ambitious projects</b>!
      </Text>
    </div>
  );
}

export default AboutMe;
