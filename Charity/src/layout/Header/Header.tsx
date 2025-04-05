import { NavLink } from 'react-router-dom';
import { LINKS } from './Header.const';
import { Button, Logo } from '@ui';
import styles from './Header.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.header__nav}>
				<Logo />
				<ul className={styles.header__list}>
					{LINKS.map(item => (
						<li key={item.to}>
							<NavLink
								to={item.to}
								className={({ isActive }) =>
									isActive ? styles.header__active : styles.header__links
								}
							>
								{item.text}
							</NavLink>
						</li>
					))}
				</ul>
				<Button className={styles.header__button} text='Пожертвовать' />
			</nav>
		</header>
	);
};
