import Subtitle from '@/shared/ui/Typography/Subtitle';
import styles from './AboutMe.module.scss';
import Title from '@/shared/ui/Typography/Title';
import Text from '@/shared/ui/Typography/Text';

function AboutMe() {
	return (
		<div className={styles['about-me']}>
			<div className={styles.title}>
				<Title size="xl">A Few Words About Myself.</Title>
				<Subtitle>✦ Getting to Know Me</Subtitle>
			</div>
			<Text className={styles.text}>
				Fullstack Developer with 3+ years of coding experience, though my
				primary expertise lies in frontend development. I work daily with React
				and Next.js, using TypeScript, Tailwind, and Feature-Sliced Design (FSD)
				for scalable architectures—opting for a modular approach on smaller
				projects.
				<br />
				<br />
				That said, I'm equally capable of building complete backend systems from
				scratch. My server-side stack includes Java, Spring Boot, and
				PostgreSQL, and I have hands-on experience with Kafka, Redis, Docker,
				and Kubernetes for microservices and distributed applications. I can
				confidently deliver full-stack solutions end-to-end.
				<br />
				<br />
				I also design interfaces in Figma from the ground up, because I believe
				great code deserves great aesthetics.
				<br />
				<br />
				For the past year, I've been working at KillCode studio, handling
				client-side development in a team environment. I regularly participate
				in code reviews, collaborate closely with other developers, and follow
				clean Git workflows. Outside of work, I've mentored fellow developers
				during their learning journey, helped them grow, and even led small
				teams on pet projects.
				<br />
				<br />
				I'm looking for ambitious projects where I can contribute both as a
				frontend specialist and as a fullstack developer—ideally in a strong
				team that values clean code, thoughtful design, and real engineering
				challenges.
			</Text>
		</div>
	);
}

export default AboutMe;
