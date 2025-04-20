import { Accordion } from '@ui';
import { FAQ_ITEMS } from './FAQ.const';
import styles from './FAQ.module.scss';

export const FAQ = () => {
	return (
		<section className={styles.faq}>
			<div className={styles.faq__wrapper}>
				<h2 className={styles.faq__heading}>Часто Задаваемые Вопросы</h2>
				<p className={styles.faq__paragraph}>
					Здесь собраны ответы на самые популярные вопросы о нашей платформе.
					Если вы не нашли нужной информации – напишите нам, и мы с радостью
					поможем!
				</p>
			</div>
			<Accordion items={FAQ_ITEMS} />
		</section>
	);
};
