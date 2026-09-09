import { type Skill } from '@/shared/constants/skills';
import styles from './SkillsList.module.scss';

function SkillsList({ skills }: { skills: Skill[] }) {
	return (
		<div className={styles.skills}>
			{skills.map(({ icon: Icon }, index) => (
				<Icon key={index} className={styles.icon} />
			))}
		</div>
	);
}

export default SkillsList;
