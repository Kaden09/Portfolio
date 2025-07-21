import styles from "./Codewars.module.scss";

function Codewars() {
  return (
    <div className={styles.codewars}>
      <a href="https://www.codewars.com/users/kaden09" target="_blank" className={styles.image}>
        <img
          src="https://www.codewars.com/users/kaden09/badges/large"
          alt="codewars"
        />
      </a>
    </div>
  );
}

export default Codewars;
