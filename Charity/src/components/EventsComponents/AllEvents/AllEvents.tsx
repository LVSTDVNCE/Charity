// import { Button, Card } from '@ui';
import styles from './AllEvents.module.scss';

export const AllEvents = () => {
	return (
		<section className={styles.allEvents}>
			<div className={styles.allEvents__wrapper}>
				<h2 className={styles.allEvents__heading}>Все мероприятия</h2>
			</div>
			<div className={styles.allEvents__cardsList}>
				{/* {MOCK_CARDS.map(card => (
					<Card card={card} key={card.id}>
						<Button text='ПОДРОБНЕЕ' className={styles.allEvents__buttonCard} />
					</Card>
				))} */}
			</div>
		</section>
	);
};
