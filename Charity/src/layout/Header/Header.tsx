import { HeaderDesktop } from './components/HeaderDesktop/HeaderDesktop';
import { HeaderMobile } from './components/HeaderMobile/HeaderMobile';
import styles from './Header.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<HeaderDesktop />
			<HeaderMobile />
		</header>
	);
};
