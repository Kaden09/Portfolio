import Subtitle from '@/shared/ui/Typography/Subtitle';
import ProjectsList from '@/shared/ui/ProjectsList/ProjectsList';
import styles from './Projects.module.scss';
import Title from '@/shared/ui/Typography/Title';
import GitHubButton from '@/shared/ui/GitHubButton/GitHubButton';
import { useTranslation } from 'react-i18next';

function Projects() {
	const { t } = useTranslation();
	
	return (
		<div className={styles.projects}>
			<ProjectsList />
			<div className={styles.info}>
				<div className={styles.title}>
					<Subtitle>{t('projects.subtitle')}</Subtitle>
					<Title>{t('projects.title')}</Title>
				</div>
				<GitHubButton content={t('github.full')}/>
			</div>
		</div>
	);
}

export default Projects;
