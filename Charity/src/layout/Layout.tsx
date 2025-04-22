import { Outlet } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { BackToTopButton } from '@ui';
import styles from './Layout.module.scss';

export const Layout = () => {
	return (
		<div className={styles.layout}>
			<Header />
			<BackToTopButton />
			<main className={styles.layout__content}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
