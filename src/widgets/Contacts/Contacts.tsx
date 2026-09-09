import SocialsList from '@/shared/ui/SocialsList/SocialsList';
import Subtitle from '@/shared/ui/Typography/Subtitle';
import Title from '@/shared/ui/Typography/Title';
import styles from './Contacts.module.scss';

function Contacts() {
	return (
		<div className={styles.contacts}>
			<SocialsList />
			<div className={styles.title}>
				<Subtitle>✦ Let's get in touch</Subtitle>
				<Title size="xl">Ways to Reach Me.</Title>
			</div>
		</div>
	);
}

export default Contacts;
