import Subtitle from "@/shared/ui/TextComponents/Subtitle";
import styles from "./Profile.module.scss";
import Title from "@/shared/ui/TextComponents/Title";
import Text from "@/shared/ui/TextComponents/Text";
import FillStar from "@/shared/assets/icons/fillStar.svg?react";

function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar} />
      <div className={styles.info}>
        <div>
          <Subtitle>✦ WEB DEVELOPER</Subtitle>
          <Title size="xxl">Maxim Volkov.</Title>
        </div>
        <Text color="white10">I'm Frontend Developer on React</Text>
        <Subtitle size="sm">Location: Russia ✦ Glazov</Subtitle>
      </div>
      <FillStar className={styles.star} />
    </div>
  );
}

export default Profile;
