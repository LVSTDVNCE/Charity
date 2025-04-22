import { NavLink } from 'react-router-dom';
import { NAV_BAR_LINKS } from '@constants/NavBarLinks';
import styles from './NavBar.module.scss';

type TNavBarProps = {
	className?: string;
	onClick?: () => void;
};

export const NavBar = ({ className, onClick }: TNavBarProps) => {
	return (
		<ul className={`${className} ${styles.header__list}`}>
			{NAV_BAR_LINKS.map(item => (
				<li key={item.to}>
					<NavLink
						to={item.to}
						className={({ isActive }) =>
							isActive ? styles.header__active : styles.header__links
						}
						onClick={onClick}
					>
						{item.text}
					</NavLink>
				</li>
			))}
		</ul>
	);
};
