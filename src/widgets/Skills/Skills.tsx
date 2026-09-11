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
import { useTranslation } from 'react-i18next';

function Skills() {
	const { t } = useTranslation();

	return (
		<div className={styles.skills}>
			<div className={styles.title}>
				<Title size="xl">{t('skills.title')}</Title>
				<Subtitle>{t('skills.subtitle')}</Subtitle>
			</div>
			<section className={styles.skills__section}>
				<Title size="lg">{t('skills.frontend')}</Title>
				<SkillsList skills={frontendSkills} />
			</section>
			<section className={styles.skills__section}>
				<Title size="lg">{t('skills.backend')}</Title>
				<SkillsList skills={backendSkills} />
			</section>
			<section className={styles.skills__section}>
				<Title size="lg">{t('skills.tools')}</Title>
				<SkillsList skills={toolsAndDevops} />
			</section>
			<SkillsBgShape className={styles.bgShape} />
		</div>
	);
}

export default Skills;
