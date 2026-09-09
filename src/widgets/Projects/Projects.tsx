import Subtitle from '@/shared/ui/Typography/Subtitle';
import ProjectsList from '@/shared/ui/ProjectsList/ProjectsList';
import styles from './Projects.module.scss';
import Title from '@/shared/ui/Typography/Title';
import GitHubButton from '@/shared/ui/GitHubButton/GitHubButton';

function Projects() {
	return (
		<div className={styles.projects}>
			<ProjectsList />
			<div className={styles.info}>
				<div className={styles.title}>
					<Subtitle>✦ Key points</Subtitle>
					<Title>My Incredible Projects.</Title>
				</div>
				<GitHubButton />
			</div>
		</div>
	);
}

export default Projects;
