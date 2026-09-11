import { type Skill } from '@/shared/constants/skills';
import styles from './SkillsList.module.scss';

function SkillsList({ skills }: { skills: Skill[] }) {
	return (
		<div className={styles.skills}>
			{skills.map(({ icon: Icon, label }, index) => (
				<span key={index} className={styles.iconWrapper} data-tooltip={label}>
					<Icon className={styles.icon} />
				</span>
			))}
		</div>
	);
}

export default SkillsList;
