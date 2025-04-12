import styles from './Label.module.scss';

type TLabelProps = {
	htmlFor: string;
	text: string;
};

export const Label = ({ htmlFor, text }: TLabelProps) => {
	return (
		<label htmlFor={htmlFor} className={styles.label}>
			{text}
		</label>
	);
};
