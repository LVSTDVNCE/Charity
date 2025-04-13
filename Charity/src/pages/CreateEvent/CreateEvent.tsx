import { CreateForm } from '@components/CreateEventComponents';
import { BreadCrumbs, Hero } from '@ui';

const CreateEvent = () => {
	return (
		<>
			<Hero heading='Создание мероприятия' paragraph='Заполните форму'>
				<BreadCrumbs text={'Организовать'} />
			</Hero>
			<CreateForm />
		</>
	);
};

export default CreateEvent;
