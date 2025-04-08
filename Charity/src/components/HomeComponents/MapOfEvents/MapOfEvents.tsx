import MOCK_MAP from '@assets/images/Map.png';
import styles from './MapOfEvents.module.scss';

export const MapOfEvents = () => {
	return (
		<section className={styles.map}>
			<h3 className={styles.map__heading}>По всей России</h3>
			<p className={styles.map__paragraph}>
				Вы можете поучаствовать в благотворительности по всей Росcии
			</p>
			<img src={MOCK_MAP} alt='Events in Russia' />
		</section>
	);
};
