import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';

function LanguageSwitcher() {
	const { i18n } = useTranslation();
	const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

	return (
		<div className={styles.switcher}>
			<button
				className={i18n.language === 'en' ? styles.active : ''}
				onClick={() => changeLanguage('en')}>
				EN
			</button>
			<button
				className={i18n.language === 'ru' ? styles.active : ''}
				onClick={() => changeLanguage('ru')}>
				RU
			</button>
		</div>
	);
}

export default LanguageSwitcher;
