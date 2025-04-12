import { ReactNode, FC } from 'react';
import styles from './Input.module.scss';

type TInputProps = {
	type: string;
	id: string;
	placeholder: string;
	children: ReactNode;
};

export const Input: FC<TInputProps> = props => {
	const { type, id, placeholder, children } = props;

	return (
		<div className={styles.input}>
			{children}
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				className={styles.input__field}
				required
			/>
		</div>
	);
};
