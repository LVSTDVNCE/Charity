import MOCK_IMG from '@assets/images/stepsImg.jpg';
import styles from './ContactContent.module.scss';

export const ContactContent = () => {
	return (
		<section className={styles.content}>
			<img className={styles.content__img} src={MOCK_IMG} alt='MOCK_IMG' />
		</section>
	);
};
