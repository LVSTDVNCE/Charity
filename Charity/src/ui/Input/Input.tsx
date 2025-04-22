import { ReactNode } from 'react';
import {
	FieldErrors,
	FieldValues,
	get,
	Path,
	UseFormRegister,
} from 'react-hook-form';
import styles from './Input.module.scss';

type TInputProps<T extends FieldValues> = {
	id: Path<T>;
	type: string;
	placeholder: string;
	children: ReactNode;
	register: UseFormRegister<T>;
	errors: FieldErrors<T>;
	rules?: object;
};

export const Input = <T extends FieldValues>({
	type,
	id,
	placeholder,
	children,
	register,
	errors,
	rules,
}: TInputProps<T>) => {
	const hasError = !!get(errors, id);
	const errorMessage = get(errors, `${id}.message`) as string;
	return (
		<div className={styles.input}>
			{children}
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				className={styles.input__field}
				{...register(id, rules)}
				accept='img/*'
			/>
			{hasError && <p className={styles.input__error}>{errorMessage}</p>}
		</div>
	);
};
