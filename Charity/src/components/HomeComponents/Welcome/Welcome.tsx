import BOOK from '@assets/icons/book.png';
import MED from '@assets/icons/med.png';
import COMMUNITY from '@assets/icons/community.png';
import styles from './Welcome.module.scss';

export const Welcome = () => {
	return (
		<section className={styles.welcome}>
			<h1 className={styles.welcome__heading}>
				Помощь
				<br />в один клик
			</h1>
			<p className={styles.welcome__paragraph}>
				CHARITY - это удобная платформа для организации благотворительных
				мероприятий любого масштаба.
			</p>
			<div className={styles.welcome__icons}>
				<img src={BOOK} alt='BOOK' />
				<img src={MED} alt='MED' />
				<img src={COMMUNITY} alt='COMMUNITY' />
			</div>
		</section>
	);
};
