import MOCK_IMG from '@assets/images/stepsImg.jpg';
import styles from './CallToAction.module.scss';

export const CallToAction = () => {
	return (
		<section className={styles.action}>
			<img src={MOCK_IMG} alt='' className={styles.action__img} />
			<div>
				<h2 className={styles.action__heading}>
					Измените ситуацию к лучшему, поддержите тех, кто нуждается.
				</h2>
				<div className={styles.action__wrapper}>
					<p className={styles.action__paragraph}>
						Мы верим, что даже небольшие действия могут изменить жизни к
						лучшему. Наша платформа объединяет людей, готовых помогать, и тех,
						кто в этом нуждается. Через волонтерство, благотворительные акции и
						сборы средств мы создаем сообщество, где каждый может внести свой
						вклад.
					</p>
					<p className={styles.action__paragraph}>
						Присоединяйтесь! Неважно, станете ли вы волонтером, донором или
						просто расскажете о нас друзьям – любая помощь ценна. Вместе мы
						делаем мир добрее.
					</p>
				</div>
			</div>
		</section>
	);
};
