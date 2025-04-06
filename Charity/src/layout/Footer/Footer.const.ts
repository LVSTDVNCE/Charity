import { RoutePaths } from 'src/routes/Routes';

export const ADDRESS =
	'https://yandex.ru/maps/194/saratov/?ll=46.009429%2C51.538588&mode=poi&poi%5Bpoint%5D=46.008455%2C51.537936&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D241023355446&z=17.8';

export const LINKS = [
	{
		heading: 'О нас',
		links: [
			{
				text: 'O нас',
				to: RoutePaths.ABOUT_US,
			},
			{
				text: 'Мероприятия',
				to: RoutePaths.EVENTS,
			},
			{
				text: 'Обратная связь',
				to: RoutePaths.CONTACT_US,
			},
		],
	},
	{
		heading: 'Полезно',
		links: [
			{
				text: 'F.A.Q',
				to: '',
			},
			{
				text: 'Новости',
				to: '',
			},
			{
				text: 'Terms of Use',
				to: '',
			},
			{
				text: 'Privacy Policy',
				to: '',
			},
		],
	},
];
