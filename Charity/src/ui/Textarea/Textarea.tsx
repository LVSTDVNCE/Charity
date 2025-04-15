import { ReactNode } from 'react';
import {
	FieldErrors,
	FieldValues,
	get,
	Path,
	UseFormRegister,
} from 'react-hook-form';
import styles from './Textarea.module.scss';

type TTextareaProps<T extends FieldValues> = {
	name: string;
	id: Path<T>;
	rows: number;
	cols: number;
	maxLength: number;
	placeholder: string;
	children: ReactNode;
	register: UseFormRegister<T>;
	errors: FieldErrors<T>;
};

export const Textarea = <T extends FieldValues>({
	name,
	id,
	rows,
	cols,
	maxLength,
	placeholder,
	children,
	register,
	errors,
}: TTextareaProps<T>) => {
	const errorMessage = get(errors, `${id}.message`) as string;

	return (
		<div className={styles.textarea}>
			{children}
			<textarea
				{...register(id)}
				name={name}
				id={id}
				required
				rows={rows}
				cols={cols}
				maxLength={maxLength}
				placeholder={placeholder}
				className={styles.textarea__field}
			/>
			{errors && <p>{errorMessage}</p>}
		</div>
	);
};
