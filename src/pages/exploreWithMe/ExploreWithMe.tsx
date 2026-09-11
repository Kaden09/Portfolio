import styles from './ExploreWithMe.module.scss';
import Title from '@/shared/ui/Typography/Title';
import Subtitle from '@/shared/ui/Typography/Subtitle';
import Text from '@/shared/ui/Typography/Text';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import GitHubButton from '@/shared/ui/GitHubButton/GitHubButton';

export default function ExploreWithMe() {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			<header>
				<Link className={styles.backButton} to="/">
					<ArrowLeft size={28} />
				</Link>
				<div className={styles.titleContainer}>
					<Title size="xl">Explore With Me</Title>
					<Subtitle>✦ How It All Works</Subtitle>
				</div>
			</header>
			<main>
				<div className={styles.overview}>
					<Title size="lg">Overview</Title>
					<Text size="sm">
						Explore With Me is a backend event management platform built as a
						diploma project. The system allows users to create, discover, and
						participate in local events — from movie premieres to sports
						marathons. It follows a microservice architecture with two
						independently deployable services, a clean layered codebase, and
						Docker-based orchestration.
					</Text>
				</div>
				<div className={styles.inDevelopment}>
					<Title size="lg">{t('pages.pending')}</Title>
					<GitHubButton
						content={t('github.project')}
						link="https://github.com/Kaden09/java-explore-with-me.git"
					/>
				</div>
			</main>
		</div>
	);
}
