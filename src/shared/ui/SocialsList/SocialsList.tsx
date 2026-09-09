import { socials } from '@/shared/constants/socials';
import styles from './SocialsList.module.scss';

function SocialsList() {
	return (
		<div className={styles.socials}>
			{socials.map(({ icon: Icon, link }) => (
				<a key={link} href={link} target="_blank" rel="noopener noreferrer">
					<Icon className={styles.icon} />
				</a>
			))}
		</div>
	);
}

export default SocialsList;
