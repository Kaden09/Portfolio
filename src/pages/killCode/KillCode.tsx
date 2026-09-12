import styles from './KillCode.module.scss';
import Title from '@/shared/ui/Typography/Title';
import Subtitle from '@/shared/ui/Typography/Subtitle';
import { useTranslation } from 'react-i18next';
import { CirclePile, Cog, Layers, ScanSearch, Sparkles } from 'lucide-react';
import Text from '@/shared/ui/Typography/Text';
import GitHubButton from '@/shared/ui/GitHubButton/GitHubButton';

export default function KillCode() {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			<header>
				<div>
					<Title size="xl">KillCode</Title>
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
						{t('project.killCode.overview.title')}
					</Title>
					<Text size="md">{t('project.killCode.overview.content')}</Text>
				</div>
				<div className={styles.stack}>
					<Title size="xl" className={styles.title}>
						<Layers />
						{t('project.killCode.stack.title')}
					</Title>
					<ul className={styles.list}>
						<li>
							<Text size="md">React 19, TypeScript 5.9, Vite 7</Text>
						</li>
						<li>
							<Text size="md">Tailwind CSS v4, React Router v7</Text>
						</li>
						<li>
							<Text size="md">react-hook-form, yup, @hookform/resolvers</Text>
						</li>
						<li>
							<Text size="md">
								axios, react-intersection-observer, react-helmet-async,
								lucide-react
							</Text>
						</li>
						<li>
							<Text size="md">ESLint, Prettier</Text>
						</li>
						<li>
							<Text size="md">{t('project.killCode.stack.option6')}</Text>
						</li>
					</ul>
				</div>
				<div className={styles.architecture}>
					<Title size="xl" className={styles.title}>
						<CirclePile />
						{t('project.killCode.architecture.title')}
					</Title>
					<Text size="md">{t('project.killCode.architecture.content')}</Text>
				</div>
				<div className={styles.functional}>
					<Title size="xl" className={styles.title}>
						<Sparkles />
						{t('project.killCode.functional.title')}
					</Title>
					<ul className={styles.list}>
						<li>
							<Text size="md">{t('project.killCode.functional.option1')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.killCode.functional.option2')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.killCode.functional.option3')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.killCode.functional.option4')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.killCode.functional.option5')}</Text>
						</li>
					</ul>
				</div>
				<div className={styles.decisions}>
					<Title size="xl" className={styles.title}>
						<Cog />
						{t('project.killCode.decisions.title')}
					</Title>
					<ul className={styles.list}>
						<li>
							<Text size="md">{t('project.killCode.decisions.option1')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.killCode.decisions.option2')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.killCode.decisions.option3')}</Text>
						</li>
						<li>
							<Text size="md">{t('project.killCode.decisions.option4')}</Text>
						</li>
					</ul>
					<Text size="md">{t('project.killCode.decisions.paragraph1')}</Text>
				</div>
				<div className={styles.createdBy}>
					<Text size="md">Created By: Kaden09</Text>
				</div>
			</main>
		</div>
	);
}
