import {IProjectPoint} from "./ProjectPoint.interface";
import styles from "./ProjectPoint.module.scss";

function ProjectPoint({imageUrl="", github="", link=""}: IProjectPoint){
	return (
		<div className={styles["project-point"]}>	
			<img src={imageUrl} className={styles.image}/>
			<div className={styles.links}></div>
		</div>	
	)
}

export default ProjectPoint;
