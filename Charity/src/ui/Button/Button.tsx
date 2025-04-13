import { ReactNode } from 'react';
import styles from './Button.module.scss';

type TButtonProps = {
	text: string;
	className: string;
	onClick?: () => void;
	children?: ReactNode;
};

export const Button = ({
	text,
	className,
	onClick,
	children,
}: TButtonProps) => {
	return (
		<button onClick={onClick} className={`${styles.button} ${className}`}>
			{text}
			{children}
		</button>
	);
};
