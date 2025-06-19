import PrimaryInfo from "@/shared/ui/PrimaryInfo/PrimaryInfo";
import styles from "./ContactDetails.module.scss";

function ContactDetails() {
  return (
    <div className={styles["contact-details"]}>
      <PrimaryInfo name="Contact" value="Russian/English" />
      <PrimaryInfo name="Location" value="Russia/Glazov" />{" "}
    </div>
  );
}

export default ContactDetails;
