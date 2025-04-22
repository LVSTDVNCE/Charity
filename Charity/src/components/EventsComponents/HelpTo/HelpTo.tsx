import { useState } from 'react';
import { Modal } from '@ui';
import { HELP } from './HelpTo.const';
import styles from './HelpTo.module.scss';

export const HelpTo = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpen = () => {
		setIsModalOpen(prev => !prev);
	};

	return (
		<section className={styles.help}>
			{isModalOpen && <Modal onClick={handleOpen} />}
			<ul className={styles.help__list}>
				{HELP.map(item => (
					<li
						key={item.title}
						className={styles.help__item}
						onClick={handleOpen}
					>
						<img src={item.img} alt={item.title} className={styles.help__img} />
						<h3 className={styles.help__heading}>{item.title}</h3>
						<p className={styles.help__paragraph}>{item.description}</p>
					</li>
				))}
			</ul>
		</section>
	);
};
