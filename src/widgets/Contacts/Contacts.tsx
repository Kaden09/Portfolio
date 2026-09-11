import SocialsList from '@/shared/ui/SocialsList/SocialsList';
import Subtitle from '@/shared/ui/Typography/Subtitle';
import Title from '@/shared/ui/Typography/Title';
import styles from './Contacts.module.scss';
import { useTranslation } from 'react-i18next';

function Contacts() {
	const { t } = useTranslation();

	return (
		<div className={styles.contacts}>
			<SocialsList />
			<div className={styles.title}>
				<Subtitle>{t('contacts.subtitle')}</Subtitle>
				<Title size="xl">{t('contacts.title')}</Title>
			</div>
		</div>
	);
}

export default Contacts;
