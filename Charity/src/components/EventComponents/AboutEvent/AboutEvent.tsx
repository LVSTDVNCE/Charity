import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { supabase } from 'src/supabase-client';
import { Loader } from '@ui';
import styles from './AboutEvent.module.scss';
import { useLayoutEffect } from 'react';

const fetchEvent = async (id: string) => {
	const { data, error } = await supabase
		.from('Events')
		.select('*')
		.eq('id', id)
		.single();
	if (error) throw new Error(error.message);
	return data;
};

type TEventProps = {
	setTitle: (arg0: string) => void;
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

export const AboutEvent = ({ setTitle }: TEventProps) => {
	const location = useLocation();
	const currentId = location.pathname.split('/')[2];

	const { data, error, isLoading } = useQuery<TEvent, Error>({
		queryKey: ['currentEvent'],
		queryFn: () => fetchEvent(currentId),
	});
	if (error) throw new Error(error.message);

	const TITLE = data?.title ?? 'Название';
	useLayoutEffect(() => {
		setTitle(TITLE);
	});

	return (
		<section className={styles.event}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<img
						className={styles.event__img}
						src={data?.urlToImage}
						alt={data?.title}
					/>
					<div className={styles.event__wrapper}>
						<ul className={styles.event__orgWrapper}>
							<li className={styles.event__item}>
								<span className={styles.event__TextBold}>Организатор:</span>{' '}
								{data?.name} {data?.lastName}
							</li>
							<li className={styles.event__item}>
								<span className={styles.event__TextBold}>Почта:</span>{' '}
								{data?.email}
							</li>
							<li className={styles.event__item}>
								<span className={styles.event__TextBold}>Телефон:</span>{' '}
								{data?.phoneNumber}
							</li>
						</ul>
						<ul className={styles.event__details}>
							<li className={styles.event__item}>
								<span className={styles.event__TextBold}>
									Адрес проведения:
								</span>{' '}
								{data?.address}
							</li>
							<li className={styles.event__item}>
								<span className={styles.event__TextBold}>Дата:</span>{' '}
								{data?.date}
							</li>
							<li className={styles.event__item}>
								<span className={styles.event__TextBold}>Время:</span>{' '}
								{data?.time}
							</li>
						</ul>
						<h4 className={styles.event__heading}>Описание:</h4>
						<p className={styles.event__description}>{data?.description}</p>
					</div>
				</>
			)}
		</section>
	);
};
