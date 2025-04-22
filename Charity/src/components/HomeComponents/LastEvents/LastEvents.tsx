import { useQuery } from '@tanstack/react-query';
import { supabase } from 'src/supabase-client';
import { Link, useNavigate } from 'react-router';
import { Button, Card, Loader } from '@ui';
import { TCard } from 'types';
import { RoutePaths } from '@routes';
import styles from './LastEvents.module.scss';

const getUpcomingEvents = async (): Promise<TCard[]> => {
	const { data, error } = await supabase
		.from('Events')
		.select('*')
		.gte('date', new Date().toISOString().split('T')[0])
		.order('date', { ascending: true })
		.order('time', { ascending: true })
		.limit(6);

	if (error) throw new Error(error.message);
	return data as TCard[];
};

export const LastEvents = () => {
	const navigate = useNavigate();
	const { data, error, isLoading } = useQuery<TCard[], Error>({
		queryKey: ['upcomingEvents'],
		queryFn: getUpcomingEvents,
	});
	if (error) throw new Error(error.message);

	const goToAllEvents = () => {
		navigate(RoutePaths.EVENTS);
	};

	return (
		<section className={styles.lastEvents}>
			<div className={styles.lastEvents__wrapper}>
				<h3 className={styles.lastEvents__heading}>Ближайшие мероприятия</h3>
				<Button
					onClick={goToAllEvents}
					text='СМОТРЕТЬ ЕЩЕ'
					className={styles.lastEvents__button}
				/>
			</div>
			<div className={styles.lastEvents__cardsList}>
				{isLoading ? (
					<Loader />
				) : (
					data?.map(card => (
						<Card card={card} key={card.phoneNumber}>
							<Link to={`/event/${card.id}`}>ПОДРОБНЕЕ</Link>
						</Card>
					))
				)}
			</div>
		</section>
	);
};
