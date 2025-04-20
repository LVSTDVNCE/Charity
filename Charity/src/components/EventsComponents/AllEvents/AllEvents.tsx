import { Button, Card } from '@ui';
import MOCK_IMG from '@assets/images/stepsImg.jpg';
import styles from './AllEvents.module.scss';

const MOCK_CARDS = [
	{
		id: 1,
		img: MOCK_IMG,
		date: 'Дата',
		title: 'Название',
		description: 'Описание',
	},
	{
		id: 2,
		img: MOCK_IMG,
		date: 'Дата',
		title: 'Название',
		description: 'Описание',
	},
	{
		id: 3,
		img: MOCK_IMG,
		date: 'Дата',
		title: 'Название',
		description: 'Описание',
	},
	{
		id: 4,
		img: MOCK_IMG,
		date: 'Дата',
		title: 'Название',
		description: 'Описание',
	},
	{
		id: 5,
		img: MOCK_IMG,
		date: 'Дата',
		title: 'Название',
		description: 'Описание',
	},
	{
		id: 6,
		img: MOCK_IMG,
		date: 'Дата',
		title: 'Название',
		description: 'Описание',
	},
	{
		id: 7,
		img: MOCK_IMG,
		date: 'Дата',
		title: 'Название',
		description: 'Описание',
	},
	{
		id: 8,
		img: MOCK_IMG,
		date: 'Дата',
		title: 'Название',
		description: 'Описание',
	},
	{
		id: 9,
		img: MOCK_IMG,
		date: 'Дата',
		title: 'Название',
		description: 'Описание',
	},
];

export const AllEvents = () => {
	return (
		<section className={styles.allEvents}>
			<div className={styles.allEvents__wrapper}>
				<h2 className={styles.allEvents__heading}>Все мероприятия</h2>
			</div>
			<div className={styles.allEvents__cardsList}>
				{MOCK_CARDS.map(card => (
					<Card card={card} key={card.id}>
						<Button text='ПОДРОБНЕЕ' className={styles.allEvents__buttonCard} />
					</Card>
				))}
			</div>
		</section>
	);
};
