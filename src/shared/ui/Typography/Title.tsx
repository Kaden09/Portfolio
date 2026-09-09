import styles from './Text.module.scss';
import cx from 'classix';
import type { TextProps } from '@/shared/types/text.type';

function Title({
	children = '',
	weight = 'semi_bold',
	size = 'lg',
	color = 'white',
	className = '',
	...props
}: TextProps) {
	const cls = cx(
		styles.title,
		styles[`title__${weight}`],
		styles[`title__${size}`],
		styles[`title__${color}`],
		className,
	);

	return (
		<h2 className={cls} {...props}>
			{children}
		</h2>
	);
}

export default Title;
