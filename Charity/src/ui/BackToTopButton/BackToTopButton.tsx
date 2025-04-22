import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import ARROW from '@assets/icons/arrow-right.png';
import styles from './BackToTopButton.module.scss';

export const BackToTopButton = () => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const checkScrollHeight = () => {
			if (!showButton && window.pageYOffset > 400) {
				setShowButton(true);
			} else if (showButton && window.pageYOffset <= 400) {
				setShowButton(false);
			}
		};

		window.addEventListener('scroll', checkScrollHeight);
		return () => {
			window.removeEventListener('scroll', checkScrollHeight);
		};
	}, [showButton]);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Button
			onClick={scrollToTop}
			className={showButton ? styles.button : styles.hidden}
		>
			<img src={ARROW} alt='arrow' />
		</Button>
	);
};
