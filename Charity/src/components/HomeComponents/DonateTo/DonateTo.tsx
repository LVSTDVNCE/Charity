import { ITEMS } from './Donate.const';
import styles from './DonateTo.module.scss';

export const DonateTo = () => {
	return (
		<section className={styles.donate}>
			<ul className={styles.donate__list}>
				{ITEMS.map(item => (
					<li key={item.heading} className={styles.donate__item}>
						<img src={item.img} alt={item.img} />
						<div>
							<h4 className={styles.donate__heading}>{item.heading}</h4>
							<p className={styles.donate__paragraph}>{item.text}</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};
