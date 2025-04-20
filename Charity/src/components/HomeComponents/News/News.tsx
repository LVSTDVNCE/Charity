import { Button, Card, Loader } from '@ui';
import styles from './News.module.scss';
import { useQuery } from '@tanstack/react-query';

type TNewsResults = {
	article_id: string;
	title: string;
	link: string;
	creator: string;
	image_url: string;
	date: string;
};

type TNews = {
	status: string;
	totalResults: number;
	results: TNewsResults[];
};

export const News = () => {
	const { data, error, isLoading } = useQuery<TNews, Error>({
		queryKey: ['newsKey'],
		queryFn: fetchNews,
	});

	async function fetchNews() {
		const response = await fetch(
			'https://newsdata.io/api/1/news?apikey=pub_81845815bfcfd1f3bfd1e2aeea3c9e032bfc6&country=ru&language=ru&category=health '
		);
		return await response.json();
	}

	if (error) throw new Error(error.message);

	console.log(data);

	return (
		<section className={styles.news}>
			<div className={styles.news__wrapper}>
				<h3 className={styles.news__heading}>Новости</h3>
				<Button text='СМОТРЕТЬ ЕЩЕ' className={styles.news__button} />
			</div>
			<div className={styles.news__cardsList}>
				{isLoading ? (
					<Loader />
				) : (
					data?.results.map(item => (
						<Card card={item} key={item.article_id}>
							<Button
								text='Перейти к источнику'
								className={styles.news__buttonCard}
							/>
						</Card>
					))
				)}
			</div>
		</section>
	);
};
