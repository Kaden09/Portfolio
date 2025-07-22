import styles from "./MainPage.module.scss";
import Codewars from "@/widgets/Codewars/Codewars";
import WorkTogether from "@/widgets/WorkTogether/WorkTogether";
import Contacts from "@/widgets/Contacts/Contacts";
import Skills from "@/widgets/Skills/Skills";
import AboutMe from "@/widgets/AboutMe/AboutMe";
import Projects from "@/widgets/Projects/Projects";
import Profile from "@/widgets/Profile/Profile";

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Profile />
        <Contacts />
      </header>
      <main className={styles.main}>
        <Skills />
        <AboutMe />
        <Projects />
      </main>
      <footer className={styles.footer}>
        <Codewars />
        <WorkTogether />
      </footer>
    </div>
  );
}

export default MainPage;
