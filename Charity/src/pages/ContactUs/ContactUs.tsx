import { ContactContent, ContactForm, FAQ } from '@components/index';
import { BreadCrumbs, Hero } from '@ui';
import { HERO_HEADING, HERO_PARAGRAPH } from './ContactUs.const';

const ContactUs = () => {
	return (
		<>
			<Hero heading={HERO_HEADING} paragraph={HERO_PARAGRAPH}>
				<BreadCrumbs text='Свяжитесь с нами' />
			</Hero>
			<ContactForm />
			<ContactContent />
			<FAQ />
		</>
	);
};

export default ContactUs;
