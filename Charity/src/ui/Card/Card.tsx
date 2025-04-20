import { FC, ReactNode } from 'react';
import styles from './Card.module.scss';
import { ICreateFormProps } from 'types';

type TCardProps = {
	card: ICreateFormProps;
	children: ReactNode;
};

export const Card: FC<TCardProps> = ({ card, children }) => {
	return (
		<article className={styles.card}>
			<img
				src={`${card.image}`}
				alt={card.title}
				className={styles.card__img}
			/>
			<div className={styles.card__wrapper}>
				<p className={styles.card__date}>{card.date}</p>
				<h5 className={styles.card__heading} title={card.title}>
					{card.title}
				</h5>
				<p className={styles.card__description}>{card.description}</p>
				{children}
			</div>
		</article>
	);
};
