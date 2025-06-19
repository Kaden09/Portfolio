import react from "@/shared/assets/react.svg";
import nextjs from "@/shared/assets/nextjs.svg";
import react_router from "@/shared/assets/react-router.svg";
import axios from "@/shared/assets/axios.svg";
import prettier from "@/shared/assets/prettier.svg";
import sass from "@/shared/assets/sass.svg";
import tailwind from "@/shared/assets/tailwind.svg";
import npm from "@/shared/assets/npm.svg";
import yarn from "@/shared/assets/yarn.svg";
import typescript from "@/shared/assets/typescript.svg";
import redux from "@/shared/assets/redux.svg";
import styles from "./StaskTape.module.scss";

const stack = [
  react,
  redux,
  react_router,
  nextjs,
  tailwind,
  sass,
  npm,
  yarn,
  axios,
  typescript,
  prettier,
];

function StackTape() {
  return (
    <div className={styles["stack-tape-container"]}>
      <div className={styles["stack-tape"]}>
        {stack.map((e, i) => (
          <img key={i} src={e} />
        ))}
        {stack.map((e, i) => (
          <img key={i} src={e} />
        ))}
      </div>
      <div className={styles["left-shadow"]}></div>
      <div className={styles["right-shadow"]}></div>
    </div>
  );
}

export default StackTape;
