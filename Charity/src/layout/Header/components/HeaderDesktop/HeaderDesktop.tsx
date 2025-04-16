import { Button, Logo, NavBar } from '@ui';
import styles from './HeaderDesktop.module.scss';

export const HeaderDesktop = () => {
	return (
		<nav className={styles.header__nav}>
			<Logo />
			<NavBar />
			<Button
				className={styles.header__button}
				text='Пожертвовать'
				onClick={() =>
					(window.location.href =
						'https://buy.stripe.com/test_6oE3cpaBK8m24lG144')
				}
			/>
		</nav>
	);
};
