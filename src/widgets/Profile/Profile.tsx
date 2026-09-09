import Subtitle from '@/shared/ui/Typography/Subtitle';
import styles from './Profile.module.scss';
import Title from '@/shared/ui/Typography/Title';
import Text from '@/shared/ui/Typography/Text';
import FillStar from '@/shared/assets/icons/fillStar.svg?react';

function Profile() {
	return (
		<div className={styles.profile}>
			<div className={styles.avatar} />
			<div className={styles.info}>
				<div>
					<Subtitle>✦ WEB DEVELOPER</Subtitle>
					<Title size="xxl">Maxim Volkov.</Title>
				</div>
				<Text color="white">I'm Fullstack Developer</Text>
				<Subtitle size="sm">Location: Russia ✦ Glazov</Subtitle>
			</div>
			<FillStar className={styles.star} />
		</div>
	);
}

export default Profile;
