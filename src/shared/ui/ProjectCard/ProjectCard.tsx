import type { ProjectCardProps } from '@/shared/types/project.type';
import styles from './ProjectCard.module.scss';
import Title from '../Typography/Title';
import Subtitle from '../Typography/Subtitle';
import StarIcon from '@/shared/assets/icons/star.svg?react';
import DoubleStarIcon from '@/shared/assets/icons/doubleStar.svg?react';
import FillStar from '@/shared/assets/icons/fillStar.svg?react';
import BlueProjectShape from '@/shared/assets/icons/blueProjectShape.svg?react';
import RedProjectShape from '@/shared/assets/icons/redProjectShape.svg?react';
import OrangeProjectShape from '@/shared/assets/icons/orangeProjectShape.svg?react';
import cx from 'classix';
import { Link } from 'react-router-dom';

const shapeMap = {
	blue: BlueProjectShape,
	red: RedProjectShape,
	orange: OrangeProjectShape,
};

function ProjectCard({
	title = '',
	team = false,
	bgImg = 'blue',
	link = '',
}: ProjectCardProps) {
  const Shape = shapeMap[bgImg];

	return (
		<Link to={link}
			className={cx(styles['project-card'], styles[`project-card__${bgImg}`])}>
			<div className={styles.info}>
				<div className={styles.title}>
					<Title>{title}</Title>
					<div className={styles.subtitle}>
						{team ? <DoubleStarIcon /> : <StarIcon />}
						<Subtitle color="white10">
							{team ? 'Team project' : 'Solo Project'}
						</Subtitle>
					</div>
				</div>
			</div>

			<div className={styles.blackout} />
			<FillStar className={styles.star} />
			<Shape className={styles.bgShape} />
		</Link>
	);
}

export default ProjectCard;
