import { useQuery } from '@tanstack/react-query';
import { supabase } from 'src/supabase-client';
import { Button, Card, Loader } from '@ui';
import { ICreateFormProps } from 'types';
import styles from './LastEvents.module.scss';

const getUpcomingEvents = async (): Promise<ICreateFormProps[]> => {
	const { data, error } = await supabase
		.from('Events')
		.select('*')
		.gte('date', new Date().toISOString().split('T')[0])
		.order('date', { ascending: true })
		.order('time', { ascending: true })
		.limit(6);

	if (error) throw new Error(error.message);
	return data as ICreateFormProps[];
};

export const LastEvents = () => {
	const { data, error, isLoading } = useQuery<ICreateFormProps[], Error>({
		queryKey: ['upcomingEvents'],
		queryFn: getUpcomingEvents,
	});
	if (error) throw new Error(error.message);
	if (isLoading) return <Loader />;

	return (
		<section className={styles.lastEvents}>
			<div className={styles.lastEvents__wrapper}>
				<h3 className={styles.lastEvents__heading}>Ближайшие мероприятия</h3>
				<Button text='СМОТРЕТЬ ЕЩЕ' className={styles.lastEvents__button} />
			</div>
			<div className={styles.lastEvents__cardsList}>
				{data?.map(card => (
					<Card card={card} key={card.phoneNumber}>
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
