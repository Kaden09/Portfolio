import { socials } from "@/shared/api/socials";
import styles from "./SocialsList.module.scss";

function SocialsList() {
  return (
    <div className={styles.socials}>
      {socials.map(({ icon: Icon, link }) => (
        <a key={link} href={link} target="_blank">
          <Icon />
        </a>
      ))}
    </div>
  );
}

export default SocialsList;
