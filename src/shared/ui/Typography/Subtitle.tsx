import styles from './Text.module.scss';
import cx from 'classix';
import type { TextProps } from '@/shared/types/text.type';

function Subtitle({
	children = '',
	weight = 'medium',
	size = 'sm',
	color = 'blue',
	className = '',
	...props
}: TextProps) {
	const cls = cx(
		styles.subtitle,
		styles[`subtitle__${weight}`],
		styles[`subtitle__${size}`],
		styles[`subtitle__${color}`],
		className,
	);

	return (
		<h4 className={cls} {...props}>
			{children}
		</h4>
	);
}

export default Subtitle;
