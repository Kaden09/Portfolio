import { Outlet, ScrollRestoration } from 'react-router-dom';
import Silk from '@/shared/ui/Silk/Silk';
import styles from './AppLayout.module.scss';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import BackButton from '../BackButton/BackButton';

export default function AppLayout() {
	return (
		<div>
			<div className={styles.animatedBg}>
				<Silk
					speed={5}
					scale={1}
					color="#1022a7ff"
					noiseIntensity={1.5}
					rotation={0}
				/>
			</div>
			<LanguageSwitcher />
			<BackButton />
			<div className={styles.content}>
				<Outlet />
				<ScrollRestoration />
			</div>
		</div>
	);
}
