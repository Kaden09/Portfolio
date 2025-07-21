import styles from "./MainPage.module.scss";
import SkillsList from "@/shared/ui/SkillsList/SkillsList";
import Codewars from "@/widgets/Codewars/Codewars";
import WorkTogether from "@/widgets/WorkTogether/WorkTogether";
import Contacts from "@/widgets/Contacts/Contacts";
import Skills from "@/widgets/Skills/Skills";

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <SkillsList />
      <Codewars />
      <WorkTogether />
      <Contacts />
      <Skills />
    </div>
  );
}

export default MainPage;
