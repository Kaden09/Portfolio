import Title from '@/shared/ui/Typography/Title';
import styles from './WorkTogether.module.scss';
import { useTranslation } from 'react-i18next';

function WorkTogether() {
	const { t } = useTranslation();
	
	return (
		<div className={styles['work-together']}>
			<Title weight="semi_bold">{t("workTogether")}</Title>
		</div>
	);
}

export default WorkTogether;
