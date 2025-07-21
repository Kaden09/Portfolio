import Title from "@/shared/ui/TextComponents/Title";
import styles from "./MainPage.module.scss";
import Subtitle from "@/shared/ui/TextComponents/Subtitle";
import Text from "@/shared/ui/TextComponents/Text";
import SocialsList from "@/shared/ui/SocialsList/SocialsList";
import SkillsList from "@/shared/ui/SkillsList/SkillsList";
import Codewars from "@/widgets/Codewars/Codewars";

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Title>Main Page</Title>
      <Subtitle>Main Page</Subtitle>
      <Text>Hello world</Text>
      <SocialsList />
      <SkillsList />
      <Codewars />
    </div>
  );
}

export default MainPage;
