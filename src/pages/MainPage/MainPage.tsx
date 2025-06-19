import Title from "@/shared/ui/Title/Title";
import PrimaryInfo from "@/shared/ui/PrimaryInfo/PrimaryInfo";
import StackTape from "@/widgets/StaskTape/StackTape";
import styles from "./MainPage.module.scss";
import ContactDetails from "@/widgets/ContactDetails/ContactDetails";
import Text from "@/shared/ui/Text/Text";

function MainPage() {
  return (
    <div className={styles["main-page"]}>
      <Title level={1}>
        Hi, I'm Max <br /> Frontend Developer
      </Title>
      <ContactDetails />
      <StackTape />
      <div className={styles["about-me"]}>
        <Title variant="secondary" level={3}>
          About me
        </Title>
        <Text>
          Hi, I'm <span className={styles.important}>Maxim</span>, a{" "}
          <span className={styles.important}>
            Frontend Developer with 1.5 years of experience at React
          </span>
          . I create modern web applications and try to write{" "}
          <span className={styles.important}>clean and scalable code</span>,
          thoughtful UX and smooth animations. I work with key technologies:{" "}
          <span className={styles.important}>
            React Hooks, Next.js, Redux, React Query
          </span>
          , I use <span className={styles.important}>Atomic Design</span> and{" "}
          <span className={styles.important}>Feature-Sliced</span> for
          scalability.
        </Text>
        <Text>
          I have experience in{" "}
          <span className={styles.important}>Agile/Scrum</span>,{" "}
          <span className={styles.important}>team development</span>, and strive
          for a <span className={styles.important}>conscious approach</span>. In
          addition to the frontend, I'm studying the backend, and{" "}
          <span className={styles.important}>I've tried Express.js</span> and{" "}
          <span className={styles.important}>Rust</span>. I combine technical
          skills with an understanding of design to create high-quality
          interfaces.
        </Text>
        <Text>
          <span className={styles.important}>
            I'm looking for a strong team
          </span>{" "}
          where I can grow as a fullstack developer.{" "}
          <span className={styles.important}>
            I am ready for difficult tasks
          </span>{" "}
          and large-scale projects.{" "}
          <span className={styles.important}>I am open to new challenges!</span>
        </Text>
      </div>
    </div>
  );
}

export default MainPage;
