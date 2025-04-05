import { NavLink } from 'react-router-dom';
import { RoutePaths } from '@routes';
import styles from './Logo.module.scss';

export const Logo = () => {
	return (
		<NavLink to={RoutePaths.HOME} className={styles.logo}>
			CHARITY
		</NavLink>
	);
};
