import { Outlet } from 'react-router-dom';
import Silk from '@/shared/ui/Silk/Silk';
import styles from './AppLayout.module.scss';

export default function AppLayout() {
	return (
		<div>
			<div className={styles.animatedBg}>
				<Silk
					speed={5}
					scale={1}
					color="#384fffff"
					noiseIntensity={1.5}
					rotation={0}
				/>
			</div>
			<div className={styles.content}>
				<Outlet />
			</div>
		</div>
	);
}
