export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type Weight = 'regular' | 'medium' | 'semi_bold' | 'bold';
export type Color = 'white' | 'white10' | 'gray10' | 'gray30' | 'blue';

export type TextProps = {
	children: React.ReactNode;
	weight?: Weight;
	size?: Size;
	color?: Color;
	className?: string;
} & React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>;
