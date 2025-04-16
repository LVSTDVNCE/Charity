import { useState } from 'react';
import { Button, Logo, NavBar } from '@ui';
import BURGER_MENU from '@assets/icons/burgerMenu.png';
import BURGER_CLOSE from '@assets/icons/burgerMenuClose.png';
import styles from './HeaderMobile.module.scss';

export const HeaderMobile = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className={styles.header__nav}>
			<Logo />
			{!isOpen ? (
				<Button className={styles.header__burgerBtn} onClick={handleOpen}>
					<img src={BURGER_MENU} alt='BURGER_MENU' />
				</Button>
			) : (
				<div className={styles.header__wrapper}>
					<Button
						className={`${styles.header__burgerBtn} ${styles.header__burgerBtnClose}`}
						onClick={handleOpen}
					>
						<img src={BURGER_CLOSE} alt='BURGER_CLOSE' />
					</Button>
					<NavBar className={styles.header__listMobile} />
					<Button
						className={styles.header__button}
						text='Пожертвовать'
						onClick={() =>
							(window.location.href =
								'https://buy.stripe.com/test_6oE3cpaBK8m24lG144')
						}
					/>
				</div>
			)}
		</nav>
	);
};
