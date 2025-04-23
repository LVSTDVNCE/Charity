import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteItems } from '@hooks/useInfiniteItems';
import { Card, Loader, Message } from '@ui';
import { Link } from 'react-router-dom';
import styles from './AllEvents.module.scss';

export const AllEvents = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const { ref, inView } = useInView();
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		status,
		refetch,
	} = useInfiniteItems(searchQuery);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			refetch();
		}, 500);

		return () => clearTimeout(timer);
	}, [searchQuery, refetch]);

	useEffect(() => {
		if (inView && hasNextPage) {
			fetchNextPage();
		}
	}, [inView, hasNextPage, fetchNextPage]);

	return (
		<section className={styles.allEvents}>
			<div className={styles.allEvents__wrapper}>
				<h2 className={styles.allEvents__heading}>Все мероприятия</h2>
				<input
					className={styles.allEvents__input}
					type='text'
					placeholder='Поиск...'
					value={searchQuery}
					onChange={handleSearchChange}
				/>
			</div>
			<div className={styles.allEvents__innerWrapper}>
				{status === 'pending' ? (
					<Loader />
				) : status === 'error' ? (
					<Message text='Error loading' type='error' />
				) : (
					<>
						<div className={styles.allEvents__cardsList}>
							{data?.pages.map((page, pageIndex) => (
								<div className={styles.allEvents__cardsList} key={pageIndex}>
									{page.map(card => (
										<Card card={card} key={card.id}>
											<Link to={`/event/${card.id}`}>ПОДРОБНЕЕ</Link>
										</Card>
									))}
								</div>
							))}
						</div>

						<div className={styles.allEvents__status} ref={ref}>
							{isFetchingNextPage ? (
								<Loader />
							) : hasNextPage ? (
								<Loader />
							) : (
								<Message text='Все мероприятия загружены' type='success' />
							)}
						</div>
					</>
				)}
			</div>
		</section>
	);
};
