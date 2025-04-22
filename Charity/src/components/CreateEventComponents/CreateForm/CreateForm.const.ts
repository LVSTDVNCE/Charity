import { ICreateFormProps } from 'types';

type TInputConfigProps = {
	id: keyof ICreateFormProps;
	type: string;
	placeholder: string;
	htmlFor: string;
	text: string;
	rules: object;
};

export const CREATE_FORM_ITEMS: TInputConfigProps[] = [
	{
		type: 'text',
		id: 'name',
		placeholder: 'Имя',
		htmlFor: 'name',
		text: 'Имя',
		rules: {
			required: 'Введите имя',
			pattern: { value: /^[A-Za-zА-Яа-яёЁ\s]{2,30}$/ },
		},
	},
	{
		type: 'text',
		id: 'lastName',
		placeholder: 'Фамилия',
		htmlFor: 'lastName',
		text: 'Фамилия',
		rules: {
			required: 'Введите фамилию',
			pattern: { value: /^[A-Za-zА-Яа-яёЁ\s]{2,30}$/ },
		},
	},
	{
		type: 'email',
		id: 'email',
		placeholder: 'Электронная почта',
		htmlFor: 'email',
		text: 'Электронная почта',
		rules: {
			required: 'Некорректный email',
			pattern: {
				value: /^[\w.-]{2,50}@[a-zA-Z0-9.-]{2,20}\.[a-zA-Z]{2,6}$/,
				message: 'Некорректный email',
			},
		},
	},
	{
		type: 'tel',
		id: 'phoneNumber',
		placeholder: 'Номер телефона',
		htmlFor: 'phoneNumber',
		text: 'Номер телефона',
		rules: {
			required: 'Введите номер телефона',
			pattern: {
				value: /^[0-9]/,
				message: 'Номер должен содержать 11 символов',
			},
		},
	},

	{
		type: 'text',
		id: 'address',
		placeholder: 'Место проведения',
		htmlFor: 'address',
		text: 'Место проведения',
		rules: { required: 'Поле обязательно' },
	},
	{
		type: 'date',
		id: 'date',
		placeholder: 'Дата проведения',
		htmlFor: 'date',
		text: 'Дата проведения',
		rules: { required: 'Поле обязательно' },
	},
	{
		type: 'time',
		id: 'time',
		placeholder: 'Время проведения',
		htmlFor: 'time',
		text: 'Время проведения',
		rules: { required: 'Поле обязательно' },
	},
	{
		type: 'text',
		id: 'title',
		placeholder: 'Название мероприятия',
		htmlFor: 'title',
		text: 'Название мероприятия',
		rules: { required: 'Поле обязательно' },
	},
	{
		type: 'file',
		id: 'image',
		placeholder: 'Выберите фотографию',
		htmlFor: 'image',
		text: 'Выберите фотографию',
		rules: { required: 'Поле обязательно' },
	},
];
