import styles from './MainPage.module.scss';
import Codewars from '@/widgets/Codewars/Codewars';
import WorkTogether from '@/widgets/WorkTogether/WorkTogether';
import Contacts from '@/widgets/Contacts/Contacts';
import Skills from '@/widgets/Skills/Skills';
import AboutMe from '@/widgets/AboutMe/AboutMe';
import Projects from '@/widgets/Projects/Projects';
import Profile from '@/widgets/Profile/Profile';

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
		</div>
	);
}