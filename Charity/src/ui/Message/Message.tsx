import styles from './Message.module.scss';

type TMessageProps = {
	text: string;
	type: string;
};

export const Message = ({ text, type }: TMessageProps) => {
	return <p className={styles[type]}>{text}</p>;
};
