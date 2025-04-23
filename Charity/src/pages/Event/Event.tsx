import { AboutEvent } from '@components/index';
import { BreadCrumbs, Hero } from '@ui';
import { useState } from 'react';

const Event = () => {
	const [title, setTitle] = useState('');

	return (
		<>
			<Hero heading={title} paragraph=''>
				<BreadCrumbs text='Мероприятие' />
			</Hero>
			<AboutEvent setTitle={setTitle} />
		</>
	);
};

export default Event;
