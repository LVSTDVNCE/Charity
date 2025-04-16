import { IContactFormProps } from 'types';

type TInputConfigProps = {
	id: keyof IContactFormProps;
	type: string;
	placeholder: string;
	htmlFor: string;
	text: string;
};

export const INPUT_CONFIG: TInputConfigProps[] = [
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
];
