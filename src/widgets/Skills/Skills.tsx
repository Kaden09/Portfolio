import Subtitle from '@/shared/ui/Typography/Subtitle';
import Title from '@/shared/ui/Typography/Title';
import styles from './Skills.module.scss';
import SkillsList from '@/shared/ui/SkillsList/SkillsList';
import SkillsBgShape from '@/shared/assets/icons/skillsBgShape.svg?react';
import {
	backendSkills,
	frontendSkills,
	toolsAndDevops,
} from '@/shared/constants/skills';

function Skills() {
	return (
		<div className={styles.skills}>
			<div className={styles.title}>
				<Title size="xl">My Knowledge and Skills.</Title>
				<Subtitle>✦ My journey so far</Subtitle>
			</div>
			<section className={styles.skills__section}>
				<Title size="lg">Frontend Skills:</Title>
				<SkillsList skills={frontendSkills} />
			</section>
			<section className={styles.skills__section}>
				<Title size="lg">Backend Skills:</Title>
				<SkillsList skills={backendSkills} />
			</section>
			<section className={styles.skills__section}>
				<Title size="lg">Tools and DevOps:</Title>
				<SkillsList skills={toolsAndDevops} />
			</section>
			<SkillsBgShape className={styles.bgShape} />
		</div>
	);
}

export default Skills;
