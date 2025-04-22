import { FC, ReactNode, useState } from 'react';
import { TCard } from 'types';
import NewsMockImg from '@assets/images/stepsImg.jpg';
import styles from './Card.module.scss';

type TCardProps<T> = {
	card: T;
	children: ReactNode;
};

export const Card: FC<TCardProps<TCard>> = ({ card, children }) => {
	const [imgSrc, setImgSrc] = useState(card.urlToImage || NewsMockImg);

	const date = card.date || card.publishedAt.split('T')[0];

	const handleError = () => {
		setImgSrc(NewsMockImg);
	};
	return (
		<article className={styles.card}>
			<img
				src={imgSrc}
				alt={card.title}
				className={styles.card__img}
				onError={handleError}
			/>
			<div className={styles.card__wrapper}>
				<p className={styles.card__date}>{date}</p>
				<h5 className={styles.card__heading} title={card.title}>
					{card.title}
				</h5>
				<p className={styles.card__description}>{card.description}</p>
				{children}
			</div>
		</article>
	);
};
