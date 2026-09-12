import styles from './Clud.module.scss';
import Title from '@/shared/ui/Typography/Title';
import Subtitle from '@/shared/ui/Typography/Subtitle';
import GitHubButton from '@/shared/ui/GitHubButton/GitHubButton';
import { useTranslation } from 'react-i18next';

export default function Clud() {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			<header>
				<Title size="xl">Clud</Title>
				<Subtitle>✦ How It All Works</Subtitle>
			</header>
			<main>
				<div className={styles.inDevelopment}>
					<Title size="lg">{t('pages.pending')}</Title>
					<GitHubButton
						content={t('github.project')}
						link="https://github.com/Kaden09/clud.git"
					/>
				</div>
			</main>
		</div>
	);
}
