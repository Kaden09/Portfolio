import GitHubIcon from '@/shared/assets/icons/github.svg?react';
import Title from '../Typography/Title';
import styles from './GitHubButton.module.scss';
import { useTranslation } from 'react-i18next';

type GitHubButtonProps = {
	content: string;
	link?: string;
}

function GitHubButton({
	content,
	link = 'https://github.com/Kaden09',
}: GitHubButtonProps) {
	const { t } = useTranslation();

	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className={styles['github-button']}>
			<GitHubIcon />
			<Title size="md" className={styles['text-full']}>
				{content}
				{/* {t('github.full')} */}
			</Title>
			<Title size="md" className={styles['text-short']}>
				{t('github.short')}
			</Title>
		</a>
	);
}

export default GitHubButton;
