import styles from './KillCode.module.scss';
import Title from '@/shared/ui/Typography/Title';
import Subtitle from '@/shared/ui/Typography/Subtitle';
import GitHubButton from '@/shared/ui/GitHubButton/GitHubButton';
import { useTranslation } from 'react-i18next';

export default function KillCode() {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			<header>
				<Title size="xl">KillCode</Title>
				<Subtitle>✦ How It All Works</Subtitle>
			</header>
			<main>
				<div className={styles.inDevelopment}>
					<Title size="lg">{t('pages.pending')}</Title>
					<GitHubButton
						content={t('github.project')}
						link="https://github.com/Kaden09/KillCode.git"
					/>
				</div>
			</main>
		</div>
	);
}
