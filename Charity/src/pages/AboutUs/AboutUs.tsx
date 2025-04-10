import { BreadCrumbs, Hero } from '@ui';
import { HERO_HEADING, HERO_PARAGRAPH } from './AboutUs.const';
import {
	AboutOurOrg,
	CallToAction,
	MapOfEvents,
	News,
	VideoSection,
} from '@components/index';

const AboutUs = () => {
	return (
		<>
			<Hero heading={HERO_HEADING} paragraph={HERO_PARAGRAPH}>
				<BreadCrumbs text='О нас' />
			</Hero>
			<CallToAction />
			<AboutOurOrg />
			<VideoSection />
			<MapOfEvents />
			<News />
		</>
	);
};

export default AboutUs;
