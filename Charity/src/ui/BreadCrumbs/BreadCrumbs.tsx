import { RoutePaths } from '@routes';
import { Link } from 'react-router-dom';
import styles from './BreadCrumbs.module.scss';

type TBreadCrumbs = {
	text: string;
};

export const BreadCrumbs = ({ text }: TBreadCrumbs) => {
	return (
		<div className={styles.breadCrumbs}>
			<Link to={RoutePaths.HOME}>Главная</Link>
			<span className={styles.breadCrumbs__arrow}></span>
			{text}
		</div>
	);
};
