import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import styles from './BackButton.module.scss';
import { ChevronLeft } from 'lucide-react';

function BackButton() {
	const { t } = useTranslation();
    const location = useLocation();

    if(location.pathname !== "/") {
        return (
            <Link to="/" className={styles.button}>
                <ChevronLeft />
                <span>{t("common.backButton")}</span>
            </Link>
        );
    }
}

export default BackButton;
