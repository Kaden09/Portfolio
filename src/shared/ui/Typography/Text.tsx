import styles from './Text.module.scss';
import cx from 'classix';
import type { TextProps } from '@/shared/types/text.type';

function Text({
	children = '',
	weight = 'regular',
	size = 'md',
	color = 'white',
	className = '',
	...props
}: TextProps) {
	const cls = cx(
		styles.text,
		styles[`text__${weight}`],
		styles[`text__${size}`],
		styles[`text__${color}`],
		className,
	);

	return (
		<p className={cls} {...props}>
			{children}
		</p>
	);
}

export default Text;
