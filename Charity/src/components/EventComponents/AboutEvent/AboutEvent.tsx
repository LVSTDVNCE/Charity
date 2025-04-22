import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { supabase } from 'src/supabase-client';
import styles from './AboutEvent.module.scss';
import { Loader } from '@ui';

const fetchEvent = async (id: string) => {
	const { data, error } = await supabase
		.from('Events')
		.select('*')
		.eq('id', id)
		.single();
	if (error) throw new Error(error.message);
	return data;
};

type TEvent = {
	id: number;
	title: string;
	description: string;
	name: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	address: string;
	date: string;
	time: string;
	urlToImage: string;
};

export const AboutEvent = () => {
	const location = useLocation();
	const currentId = location.pathname.split('/')[2];

	const { data, error, isLoading } = useQuery<TEvent, Error>({
		queryKey: ['currentEvent'],
		queryFn: () => fetchEvent(currentId),
	});
	if (error) throw new Error(error.message);
	console.log(data);

	return (
		<section className={styles.event}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<h2>{data?.title}</h2>
					<p>{data?.description}</p>
					<p>{data?.name}</p>
					<p>{data?.lastName}</p>
					<p>{data?.email}</p>
					<p>{data?.phoneNumber}</p>
					<p>{data?.address}</p>
					<p>{data?.date}</p>
					<p>{data?.time}</p>
					<img src={data?.urlToImage} alt={data?.title} />
				</>
			)}
		</section>
	);
};
