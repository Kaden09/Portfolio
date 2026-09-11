import Subtitle from '@/shared/ui/Typography/Subtitle';
import styles from './AboutMe.module.scss';
import Title from '@/shared/ui/Typography/Title';
import Text from '@/shared/ui/Typography/Text';
import { useTranslation } from 'react-i18next';

function AboutMe() {
	const { t } = useTranslation();
	
	return (
		<div className={styles['about-me']}>
			<div className={styles.title}>
				<Title size="xl">{t('about.title')}</Title>
				<Subtitle>{t('about.subtitle')}</Subtitle>
			</div>
			<Text className={styles.text}>
				{t('about.text1')}
				<br />
				<br />
				{t('about.text2')}
				<br />
				<br />
				{t('about.text3')}
				<br />
				<br />
				{t('about.text4')}
				<br />
				<br />
				{t('about.text5')}
			</Text>
		</div>
	);
}

export default AboutMe;
