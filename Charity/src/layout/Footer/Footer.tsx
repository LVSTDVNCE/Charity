import { useQuery } from '@tanstack/react-query';
import { supabase } from 'src/supabase-client';
import { Link } from 'react-router-dom';
import { Loader, Logo } from '@ui';
import { ADDRESS, LINKS } from './Footer.const';
import styles from './Footer.module.scss';

type TFooterLinks = {
	id: number;
	image: string;
	title: string;
};

const getUpcomingEvents = async (): Promise<TFooterLinks[]> => {
	const { data, error } = await supabase.from('Events').select('*').limit(6);

	if (error) throw new Error(error.message);
	return data as TFooterLinks[];
};

export const Footer = () => {
	const { data, error, isLoading } = useQuery<TFooterLinks[], Error>({
		queryKey: ['EventsFooter'],
		queryFn: getUpcomingEvents,
	});
	if (error) throw new Error(error.message);
	if (isLoading) return <Loader />;

	return (
		<footer className={styles.footer}>
			<div className={styles.footer__wrapper}>
				<div className={styles.footer__charity}>
					<Logo />
					<p className={styles.footer__paragraph}>
						Удобная платформа для организации благотворительных мероприятий
						любого масштаба.
					</p>
					<p className={styles.footer__paragraph}>
						<span>Телефон:</span>{' '}
						<a href='tel:89093333333'>+7 (909) 333 33 33</a>
					</p>
					<p className={styles.footer__paragraph}>
						<span>Адрес:</span>{' '}
						<a href={ADDRESS} target='_blank'>
							Астраханская ул., 83
						</a>
					</p>
				</div>
				{LINKS.map(item => (
					<div key={item.heading}>
						<h6 className={styles.footer__heading}>{item.heading}</h6>
						<ul className={styles.footer__list}>
							{item.links.map(link => (
								<li key={link.text}>
									<Link to={link.to}>{link.text}</Link>
								</li>
							))}
						</ul>
					</div>
				))}
				<div>
					<h6 className={styles.footer__heading}>Мероприятия</h6>
					<div className={styles.footer__events}>
						{data?.map(item => (
							<Link key={item.id} to={`/event/${item.id}`}>
								<img
									src={item.image}
									alt={item.title}
									title={item.title}
									className={styles.footer__imgLinks}
								/>
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};
