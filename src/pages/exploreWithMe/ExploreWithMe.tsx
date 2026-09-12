import styles from './ExploreWithMe.module.scss';
import Title from '@/shared/ui/Typography/Title';
import Subtitle from '@/shared/ui/Typography/Subtitle';
import Text from '@/shared/ui/Typography/Text';
import { useTranslation } from 'react-i18next';
import GitHubButton from '@/shared/ui/GitHubButton/GitHubButton';
import { CirclePile, Cog, Layers, ScanSearch, Sparkles } from 'lucide-react';

export default function ExploreWithMe() {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			<header>
				<div>
					<Title size="xl">
						Explore With Me
					</Title>
					<Subtitle>{t('common.projectSubtitle')}</Subtitle>
				</div>
				<GitHubButton
					content={t('github.project')}
					link="https://github.com/Kaden09/java-explore-with-me.git"
				/>
			</header>
			<main>
				<div className={styles.overview}>
					<Title size="xl" className={styles.title}>
						<ScanSearch />
						{t('project.exploreWithMe.overview.title')}
					</Title>
					<Text size="md">{t('project.exploreWithMe.overview.content')}</Text>
				</div>
				<div className={styles.stack}>
					<Title size="xl" className={styles.title}>
						<Layers />
						{t('project.exploreWithMe.stack.title')}
					</Title>
					<ul className={styles.list}>
						<li>
							<Text size="md">Java 21, Spring Boot 3.3.2</Text>
						</li>
						<li>
							<Text size="md">
								Spring Web, Spring Data JPA, Hibernate, Spring Validation
							</Text>
						</li>
						<li>
							<Text size="md">{t('project.exploreWithMe.stack.option3')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.exploreWithMe.stack.option4')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.exploreWithMe.stack.option5')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.exploreWithMe.stack.option6')}</Text>
						</li>
					</ul>
				</div>
				<div className={styles.architecture}>
					<Title size="xl" className={styles.title}>
						<CirclePile />
						{t('project.exploreWithMe.architecture.title')}
					</Title>
					<Text size="md">
						{t('project.exploreWithMe.architecture.paragraph1')}
					</Text>
					<Text size="md">
						{t('project.exploreWithMe.architecture.paragraph2')}
					</Text>
				</div>
				<div className={styles.functional}>
					<Title size="xl" className={styles.title}>
						<Sparkles />
						{t('project.exploreWithMe.functional.title')}
					</Title>
					<ul className={styles.list}>
						<li>
							<Text size="md">
								{t('project.exploreWithMe.functional.option1')}
							</Text>
						</li>
						<li>
							<Text size="md">
								{t('project.exploreWithMe.functional.option2')}
							</Text>
						</li>
						<li>
							<Text size="md">
								{t('project.exploreWithMe.functional.option3')}
							</Text>
						</li>
						<li>
							<Text size="md">
								{t('project.exploreWithMe.functional.option4')}
							</Text>
						</li>
						<li>
							<Text size="md">
								{t('project.exploreWithMe.functional.option5')}
							</Text>
						</li>
						<li>
							<Text size="md">
								{t('project.exploreWithMe.functional.option6')}
							</Text>
						</li>
					</ul>
				</div>
				<div className={styles.decisions}>
					<Title size="xl" className={styles.title}>
						<Cog />
						{t('project.exploreWithMe.decisions.title')}
					</Title>
					<ul className={styles.list}>
						<li>
							<Text size="md">
								{t('project.exploreWithMe.decisions.option1')}
							</Text>
						</li>
						<li>
							<Text size="md">
								{t('project.exploreWithMe.decisions.option2')}
							</Text>
						</li>
						<li>
							<Text size="md">
								{t('project.exploreWithMe.decisions.option3')}
							</Text>
						</li>
					</ul>
					<Text size="md">
						{t('project.exploreWithMe.decisions.paragraph1')}
					</Text>
				</div>
				<div className={styles.createdBy}>
					<Text size="md">Created By: Kaden09</Text>
				</div>
			</main>
		</div>
	);
}
