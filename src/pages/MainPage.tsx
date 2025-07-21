import styles from "./MainPage.module.scss";
import Codewars from "@/widgets/Codewars/Codewars";
import WorkTogether from "@/widgets/WorkTogether/WorkTogether";
import Contacts from "@/widgets/Contacts/Contacts";
import Skills from "@/widgets/Skills/Skills";
import AboutMe from "@/widgets/AboutMe/AboutMe";
import ProjectList from "@/widgets/ProjectsList/ProjectList";

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Contacts />
      <main className={styles.main}>
        <Skills />
        <AboutMe />
      </main>
      <ProjectList />
      <footer className={styles.footer}>
        <Codewars />
        <WorkTogether />
      </footer>
    </div>
  );
}

export default MainPage;
