import { Accordion } from '@ui';
import { FAQ_ITEMS } from './FAQ.const';
import styles from './FAQ.module.scss';

export const FAQ = () => {
	return (
		<section className={styles.faq}>
			<div className={styles.faq__wrapper}>
				<h2 className={styles.faq__heading}>Frequently Asked Questions</h2>
				<p className={styles.faq__paragraph}>
					At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
				</p>
			</div>
			<Accordion items={FAQ_ITEMS} />
		</section>
	);
};
