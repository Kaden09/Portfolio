import Subtitle from '@/shared/ui/Typography/Subtitle';
import styles from './Profile.module.scss';
import Title from '@/shared/ui/Typography/Title';
import Text from '@/shared/ui/Typography/Text';
import FillStar from '@/shared/assets/icons/fillStar.svg?react';
import { useTranslation } from 'react-i18next';

function Profile() {
	const { t } = useTranslation();
	
	return (
		<div className={styles.profile}>
			<div className={styles.avatar} />
			<div className={styles.info}>
				<div>
					<Subtitle>{t('profile.title')}</Subtitle>
					<Title size="xxl">{t('profile.name')}</Title>
				</div>
				<Text color="white">{t('profile.role')}</Text>
				<Subtitle size="sm">{t('profile.location')}</Subtitle>
			</div>
			<FillStar className={styles.star} />
		</div>
	);
}

export default Profile;
