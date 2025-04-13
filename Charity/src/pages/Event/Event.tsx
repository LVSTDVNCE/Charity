import { AboutEvent } from '@components/index';
import { BreadCrumbs, Hero } from '@ui';

const Event = () => {
	return (
		<>
			<Hero heading='Название мероприятия' paragraph=''>
				<BreadCrumbs text='Мероприятие' />
			</Hero>
			<AboutEvent />
		</>
	);
};

export default Event;
