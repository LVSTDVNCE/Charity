import STEPS_IMG from '@assets/images/stepsImg.jpg';
import styles from './Steps.module.scss';

const STEPS = [
	'Создавайте мероприятия',
	'Посещайте мероприятия',
	'Участвуйте',
	'Поддерживайте',
];

export const Steps = () => {
	return (
		<section className={styles.steps}>
			<img src={STEPS_IMG} alt='heart' className={styles.steps__img} />
			<div className={styles.steps__wrapper}>
				<h3 className={styles.steps__heading}>
					Превращение благих намерений в благие поступки
				</h3>
				<ul className={styles.steps__list}>
					{STEPS.map(step => (
						<li key={step}>{step}</li>
					))}
				</ul>
			</div>
		</section>
	);
};
