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
	rules?: object;
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
	rules,
}: TTextareaProps<T>) => {
	const hasError = !!get(errors, id);
	const errorMessage = get(errors, `${id}.message`) as string;

	return (
		<div className={styles.textarea}>
			{children}
			<textarea
				{...register(id, rules)}
				name={name}
				id={id}
				rows={rows}
				cols={cols}
				maxLength={maxLength}
				placeholder={placeholder}
				className={styles.textarea__field}
			/>
			{hasError && <p className={styles.textarea__error}>{errorMessage}</p>}
		</div>
	);
};
