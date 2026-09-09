import ProjectCard from '@/shared/ui/ProjectCard/ProjectCard';
import styles from './ProjectsList.module.scss';
import { projects } from '@/shared/constants/projects';

function ProjectsList() {
	return (
		<div className={styles['projects-list']}>
			{projects.map((project, index) => (
				<ProjectCard key={index} {...project} />
			))}
		</div>
	);
}

export default ProjectsList;
