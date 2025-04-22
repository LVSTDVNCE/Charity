export interface ICreateFormProps {
	id: number;
	name: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	address: string;
	image: FileList;
	date: string;
	time: string;
	title: string;
	description: string;
	urlToImage: string;
}

export interface IContactFormProps {
	name: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	message: string;
}

export interface TNewsResults {
	author: string;
	content: string;
	description: string;
	publishedAt: string;
	urlToImage: string;
	date: string;
	title: string;
	url: string;
}

export type TCard = ICreateFormProps & TNewsResults;
