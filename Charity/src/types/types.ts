export interface ICreateFormProps {
	name: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	address: string;
	image: File;
	date: Date;
	time: string;
	title: string;
	description: string;
}

export interface IContactFormProps {
	name: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	message: string;
}
