import { HELP } from './HelpTo.const';
import styles from './HelpTo.module.scss';

export const HelpTo = () => {
	return (
		<section className={styles.help}>
			<ul className={styles.help__list}>
				{HELP.map(item => (
					<li key={item.title} className={styles.help__item}>
						<img src={item.img} alt={item.title} className={styles.help__img} />
						<h3 className={styles.help__heading}>{item.title}</h3>
						<p className={styles.help__paragraph}>{item.description}</p>
					</li>
				))}
			</ul>
		</section>
	);
};
