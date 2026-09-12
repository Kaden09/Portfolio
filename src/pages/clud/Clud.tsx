import styles from './Clud.module.scss';
import Title from '@/shared/ui/Typography/Title';
import Subtitle from '@/shared/ui/Typography/Subtitle';
import { useTranslation } from 'react-i18next';
import { CirclePile, Cog, Layers, ScanSearch, Sparkles } from 'lucide-react';
import Text from '@/shared/ui/Typography/Text';
import GitHubButton from '@/shared/ui/GitHubButton/GitHubButton';

export default function Clud() {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			<header>
				<div>
					<Title size="xl">{t('project.clud.title')}</Title>
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
						{t('project.clud.overview.title')}
					</Title>
					<Text size="md">{t('project.clud.overview.paragraph1')}</Text>
					<Text size="md">{t('project.clud.overview.paragraph2')}</Text>
					<Text size="md">{t('project.clud.overview.paragraph3')}</Text>
				</div>
				<div className={styles.stack}>
					<Title size="xl" className={styles.title}>
						<Layers />
						{t('project.clud.stack.title')}
					</Title>
					<ul className={styles.list}>
						<li>
							<Text size="md">
								Java 21+, Spring Boot, Spring Security, Spring Data JPA
							</Text>
						</li>
						<li>
							<Text size="md">{t('project.clud.stack.option2')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.clud.stack.option3')}</Text>
						</li>
						<li>
							<Text size="md">Docker + Docker Compose, GitHub Actions</Text>
						</li>
						<li>
							<Text size="md">{t('project.clud.stack.option5')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.clud.stack.option6')}</Text>
						</li>
						<li>
							<Text size="md">
								Spring Boot Actuator, Micrometer, Prometheus, OpenTelemetry
							</Text>
						</li>
					</ul>
				</div>
				<div className={styles.architecture}>
					<Title size="xl" className={styles.title}>
						<CirclePile />
						{t('project.clud.architecture.title')}
					</Title>
					<Text size="md">{t('project.clud.architecture.content')}</Text>
				</div>
				<div className={styles.functional}>
					<Title size="xl" className={styles.title}>
						<Sparkles />
						{t('project.clud.functional.title')}
					</Title>
					<ul className={styles.list}>
						<li>
							<Text size="md">{t('project.clud.functional.option1')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.clud.functional.option2')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.clud.functional.option3')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.clud.functional.option4')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.clud.functional.option5')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.clud.functional.option6')}</Text>
						</li>
					</ul>
				</div>
				<div className={styles.decisions}>
					<Title size="xl" className={styles.title}>
						<Cog />
						{t('project.clud.decisions.title')}
					</Title>
					<ul className={styles.list}>
						<li>
							<Text size="md">{t('project.clud.decisions.option1')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.clud.decisions.option2')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.clud.decisions.option3')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.clud.decisions.option4')}</Text>
						</li>
					</ul>
					<Text size="md">{t('project.clud.decisions.paragraph1')}</Text>
				</div>
				<div className={styles.createdBy}>
					<Text size="md">Created By: Kaden09</Text>
				</div>
			</main>
		</div>
	);
}
