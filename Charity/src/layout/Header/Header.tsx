import { RoutePaths } from 'src/routes/Routes';
import { Link } from 'react-router-dom';

const LINKS = [
	{
		to: RoutePaths.HOME,
		text: 'Главная',
	},
	{
		to: RoutePaths.EVENTS,
		text: 'Все мероприятия',
	},
	{
		to: RoutePaths.CREATE_EVENT,
		text: 'Организовать',
	},
	{
		to: RoutePaths.ABOUT_US,
		text: 'О нас',
	},
	{
		to: RoutePaths.CONTACT_US,
		text: 'Свяжитесь с нами',
	},
];

export const Header = () => {
	return (
		<header>
			<nav>
				<Link to={RoutePaths.HOME}>CHARITY</Link>
				<ul>
					{LINKS.map(item => (
						<li key={item.to}>
							<Link to={item.to}>{item.text}</Link>
						</li>
					))}
				</ul>
				<button>Пожертвовать</button>
			</nav>
		</header>
	);
};
