import { useQuery } from '@tanstack/react-query';
import { Card, Loader } from '@ui';
import { TCard } from 'types';
import styles from './News.module.scss';

type TNews = {
	status: string;
	totalResults: number;
	articles: TCard[];
};

const API_KEY = import.meta.env.VITE_NEWS_API as string;

export const News = () => {
	const { data, error, isLoading } = useQuery<TNews, Error>({
		queryKey: ['newsKey'],
		queryFn: fetchNews,
	});

	async function fetchNews() {
		const response = await fetch(
			`https://newsapi.org/v2/top-headlines?pageSize=3&country=us&category=health&apiKey=${API_KEY}`
		);
		return await response.json();
	}

	if (error) throw new Error(error.message);

	return (
		<section className={styles.news}>
			<div className={styles.news__wrapper}>
				<h3 className={styles.news__heading}>Новости</h3>
				<a
					href='https://ria.ru/'
					target='_blank'
					className={styles.news__button}
				>
					СМОТРЕТЬ ЕЩЕ
				</a>
			</div>
			<div className={styles.news__cardsList}>
				{isLoading ? (
					<Loader />
				) : (
					data?.articles.map((item, index) => (
						<Card card={item} key={index}>
							<a
								href={item.url}
								target='_blank'
								className={styles.news__buttonCard}
							>
								Перейти к источнику
							</a>
						</Card>
					))
				)}
			</div>
		</section>
	);
};
