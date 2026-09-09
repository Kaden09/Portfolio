import styles from './MainPage.module.scss';
import Codewars from '@/widgets/Codewars/Codewars';
import WorkTogether from '@/widgets/WorkTogether/WorkTogether';
import Contacts from '@/widgets/Contacts/Contacts';
import Skills from '@/widgets/Skills/Skills';
import AboutMe from '@/widgets/AboutMe/AboutMe';
import Projects from '@/widgets/Projects/Projects';
import Profile from '@/widgets/Profile/Profile';
import Silk from '@/shared/ui/Silk/Silk';

export default function MainPage() {
	return (
		<div className={styles.wrapper}>
			<header>
				<Profile />
				<Contacts />
			</header>
			<main>
				<AboutMe />
				<Skills />
				<Projects />
			</main>
			<footer>
				<Codewars />
				<WorkTogether />
			</footer>
			<div className={styles.animatedBg}>
				<Silk
					speed={5}
					scale={1}
					color="#384fffff"
					noiseIntensity={1.5}
					rotation={0}
				/>
			</div>
		</div>
	);
}