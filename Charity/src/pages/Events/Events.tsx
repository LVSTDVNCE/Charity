import { AllEvents, HelpTo } from '@components/index';
import { BreadCrumbs, Hero } from '@ui';
import { HERO_HEADING, HERO_PARAGRAPH } from './Events.const';

const Events = () => {
	return (
		<>
			<Hero heading={HERO_HEADING} paragraph={HERO_PARAGRAPH}>
				<BreadCrumbs text='Мероприятия' />
			</Hero>
			<HelpTo />
			<AllEvents />
		</>
	);
};

export default Events;
