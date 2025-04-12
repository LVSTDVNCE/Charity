import { FC, ReactNode } from 'react';
import styles from './Form.module.scss';

type TFormProps = {
	children: ReactNode;
};

export const Form: FC<TFormProps> = ({ children }) => {
	return <form className={styles.form}>{children}</form>;
};
