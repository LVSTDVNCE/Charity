import { FC, ReactNode } from 'react';
import styles from './Textarea.module.scss';

type TTextareaProps = {
	name: string;
	id: string;
	rows: number;
	cols: number;
	maxLength: number;
	placeholder: string;
	children: ReactNode;
};

export const Textarea: FC<TTextareaProps> = props => {
	const { name, id, rows, cols, maxLength, placeholder, children } = props;

	return (
		<div className={styles.textarea}>
			{children}
			<textarea
				name={name}
				id={id}
				required
				rows={rows}
				cols={cols}
				maxLength={maxLength}
				placeholder={placeholder}
				className={styles.textarea__field}
			/>
		</div>
	);
};
