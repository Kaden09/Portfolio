import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';
import { useEffect } from 'react';

function LanguageSwitcher() {
	const { i18n } = useTranslation();
	const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

	useEffect(() => {
		const { t } = i18n;
		document.documentElement.lang = i18n.language;
		document.title = t('meta.title');
		document
			.querySelector('meta[name="description"]')
			?.setAttribute('content', t('meta.description'));
	}, [i18n]);

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
