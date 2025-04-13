import styles from './AboutEvent.module.scss';

export const AboutEvent = () => {
	return (
		<section className={styles.event}>
			<h2>Название</h2>
			<p>Описание</p>
			<p>Имя</p>
			<p>Фамилия</p>
			<p>Почта</p>
			<p>Номер телефона</p>
			<p>Место проведения</p>
			<p>Дата</p>
			<p>Время</p>
		</section>
	);
};
