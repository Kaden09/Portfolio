import GitHubIcon from '@/shared/assets/icons/github.svg?react';
import Title from '../Typography/Title';
import styles from './GitHubButton.module.scss';

function GitHubButton() {
	return (
		<a
			href="https://github.com/Kaden09"
			target="_blank"
			rel="noopener noreferrer"
			className={styles['github-button']}>
			<GitHubIcon />
			<Title size="md" className={styles['text-full']}>
				View More on GitHub
			</Title>
			<Title size="md" className={styles['text-short']}>
				GitHub
			</Title>
		</a>
	);
}

export default GitHubButton;
