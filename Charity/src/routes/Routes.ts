import {
	AboutUs,
	ContactUs,
	CreateEvent,
	Events,
	Home,
	NotFound,
	Event,
} from '@pages/index';

export enum RoutePaths {
	HOME = '/',
	NOT_FOUND = '*',
	ABOUT_US = '/aboutUs',
	CONTACT_US = '/contactUs',
	CREATE_EVENT = '/createEvent',
	EVENTS = '/events',
	EVENT = '/event/:id',
}

export const ROUTES = [
	{
		path: RoutePaths.HOME,
		Component: Home,
	},
	{
		path: RoutePaths.NOT_FOUND,
		Component: NotFound,
	},
	{
		path: RoutePaths.ABOUT_US,
		Component: AboutUs,
	},
	{
		path: RoutePaths.CONTACT_US,
		Component: ContactUs,
	},
	{
		path: RoutePaths.CREATE_EVENT,
		Component: CreateEvent,
	},
	{
		path: RoutePaths.EVENTS,
		Component: Events,
	},
	{
		path: RoutePaths.EVENT,
		Component: Event,
	},
];
