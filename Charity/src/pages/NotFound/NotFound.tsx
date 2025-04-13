import { BreadCrumbs, Hero } from '@ui';

const NotFound = () => {
	return (
		<>
			<Hero
				heading='404'
				paragraph='Такой страницы не существует, вернитесь на главную.'
			>
				<BreadCrumbs text='404' />
			</Hero>
		</>
	);
};

export default NotFound;
