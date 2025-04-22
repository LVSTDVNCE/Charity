import MOCK_IMG from '@assets/images/stepsImg.jpg';
import styles from './VideoSection.module.scss';

export const VideoSection = () => {
	return (
		<section className={styles.video}>
			<h2 className={styles.video__heading}>
				Как ваша поддержка создает
				<br /> реальные изменения.
			</h2>
			<img className={styles.video__content} src={MOCK_IMG} alt='MOCK_IMG' />
		</section>
	);
};
