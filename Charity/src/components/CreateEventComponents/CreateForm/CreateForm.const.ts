import { ICreateFormProps } from 'types';

type TInputConfigProps = {
	id: keyof ICreateFormProps;
	type: string;
	placeholder: string;
	htmlFor: string;
	text: string;
};

export const CREATE_FORM_ITEMS: TInputConfigProps[] = [
	{
		type: 'text',
		id: 'name',
		placeholder: 'Имя',
		htmlFor: 'name',
		text: 'Имя',
	},
	{
		type: 'text',
		id: 'lastName',
		placeholder: 'Фамилия',
		htmlFor: 'lastName',
		text: 'Фамилия',
	},
	{
		type: 'email',
		id: 'email',
		placeholder: 'Электронная почта',
		htmlFor: 'email',
		text: 'Электронная почта',
	},
	{
		type: 'tel',
		id: 'phoneNumber',
		placeholder: 'Номер телефона',
		htmlFor: 'phoneNumber',
		text: 'Номер телефона',
	},

	{
		type: 'text',
		id: 'address',
		placeholder: 'Место проведения',
		htmlFor: 'address',
		text: 'Место проведения',
	},
	{
		type: 'date',
		id: 'date',
		placeholder: 'Дата проведения',
		htmlFor: 'date',
		text: 'Дата проведения',
	},
	{
		type: 'time',
		id: 'time',
		placeholder: 'Время проведения',
		htmlFor: 'time',
		text: 'Время проведения',
	},
	{
		type: 'text',
		id: 'title',
		placeholder: 'Название мероприятия',
		htmlFor: 'title',
		text: 'Название мероприятия',
	},
	{
		type: 'file',
		id: 'image',
		placeholder: 'Выберите фотографию',
		htmlFor: 'image',
		text: 'Выберите фотографию',
	},
];
