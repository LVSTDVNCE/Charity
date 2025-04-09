import { Button, Card } from '@ui';
import MOCK_IMG from '@assets/images/stepsImg.jpg';
import styles from './News.module.scss';

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
];

export const News = () => {
	return (
		<section className={styles.news}>
			<div className={styles.news__wrapper}>
				<h3 className={styles.news__heading}>Новости</h3>
				<Button text='СМОТРЕТЬ ЕЩЕ' className={styles.news__button} />
			</div>
			<div className={styles.news__cardsList}>
				{MOCK_CARDS.map(card => (
					<Card card={card} key={card.id}>
						<Button
							text='Перейти к источнику'
							className={styles.news__buttonCard}
						/>
					</Card>
				))}
			</div>
		</section>
	);
};
