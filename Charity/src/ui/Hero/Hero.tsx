import { FC, ReactNode } from 'react';
import styles from './Hero.module.scss';

type THeroProps = {
	children: ReactNode;
	heading: string;
	paragraph: string;
};

export const Hero: FC<THeroProps> = ({ children, heading, paragraph }) => {
	return (
		<section className={styles.hero}>
			{children}
			<h1 className={styles.hero__heading}>{heading}</h1>
			<p className={styles.hero__paragraph}>{paragraph}</p>
		</section>
	);
};
