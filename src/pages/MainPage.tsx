import styles from "./MainPage.module.scss";
import Codewars from "@/widgets/Codewars/Codewars";
import WorkTogether from "@/widgets/WorkTogether/WorkTogether";
import Contacts from "@/widgets/Contacts/Contacts";
import Skills from "@/widgets/Skills/Skills";
import AboutMe from "@/widgets/AboutMe/AboutMe";
import ProjectCard from "@/shared/ui/ProjectCard/ProjectCard";

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Contacts />
      <div className={styles.projects}>
        <ProjectCard
          title="Sushi Mania"
          team={false}
          stack={[
            "React",
            "Redux",
            "JS",
            "Python",
            "Firebase",
            "Swiper",
            "Prettier",
          ]}
          bgImg="src/shared/assets/bg/blueProject.svg"
          link="/"
        />
      </div>
      <main className={styles.main}>
        <Skills />
        <AboutMe />
      </main>
      <footer className={styles.footer}>
        <Codewars />
        <WorkTogether />
      </footer>
    </div>
  );
}

export default MainPage;
