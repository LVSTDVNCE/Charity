import MOCK_IMG from '@assets/images/stepsImg.jpg';
import styles from './VideoSection.module.scss';

export const VideoSection = () => {
	return (
		<section className={styles.video}>
			<h2 className={styles.video__heading}>
				Transforming lives
				<br /> through love and generosity.
			</h2>
			<img className={styles.video__content} src={MOCK_IMG} alt='MOCK_IMG' />
		</section>
	);
};
