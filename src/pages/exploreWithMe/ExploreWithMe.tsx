import styles from './ExploreWithMe.module.scss';
import Title from '@/shared/ui/Typography/Title';
import Subtitle from '@/shared/ui/Typography/Subtitle';
import Text from '@/shared/ui/Typography/Text';
import GitHubIcon from '@/shared/assets/icons/github.svg?react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ExploreWithMe() {
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
					<Title size="lg">
						This area is pending… mostly because I keep changing my mind. But I
						promise, it'll be epic. Soon. Now you can click on the link below.
					</Title>
					<a
						href="https://github.com/Kaden09/java-explore-with-me.git"
						target="_blank"
						rel="noopener noreferrer"
						className={styles['github-button']}>
						<GitHubIcon />
						<Title size="md" className={styles['text-short']}>
							This project on GitHub
						</Title>
					</a>
				</div>
			</main>
		</div>
	);
}
