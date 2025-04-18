import { Button, Card } from '@ui';
import { supabase } from 'src/supabase-client';
import MOCK_IMG from '@assets/images/stepsImg.jpg';
import styles from './LastEvents.module.scss';

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
];

async function getUpcomingEvents() {
	const { data, error } = await supabase
		.from('Events')
		.select('*')
		.gte('date', new Date().toISOString().split('T')[0])
		.order('date', { ascending: true })
		.order('time', { ascending: true })
		.limit(6);

	if (error) console.error('Ошибка:', error);
	return data;
}

export const LastEvents = () => {
	return (
		<section className={styles.lastEvents}>
			<div className={styles.lastEvents__wrapper}>
				<h3 className={styles.lastEvents__heading}>Последние мероприятия</h3>
				<Button text='СМОТРЕТЬ ЕЩЕ' className={styles.lastEvents__button} />
			</div>
			<div className={styles.lastEvents__cardsList}>
				{MOCK_CARDS.map(card => (
					<Card card={card} key={card.id}>
						<Button
							text='ПОДРОБНЕЕ'
							className={styles.lastEvents__buttonCard}
						/>
					</Card>
				))}
			</div>
		</section>
	);
};
