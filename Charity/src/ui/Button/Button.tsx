import styles from './Button.module.scss';

type TButtonProps = {
	text: string;
	className: string;
	onClick?: () => void;
};

export const Button = ({ text, className, onClick }: TButtonProps) => {
	return (
		<button onClick={onClick} className={`${styles.button} ${className}`}>
			{text}
		</button>
	);
};
