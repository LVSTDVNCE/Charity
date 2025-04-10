import MOCK_IMG from '@assets/images/stepsImg.jpg';
import styles from './CallToAction.module.scss';

export const CallToAction = () => {
	return (
		<section className={styles.action}>
			<img src={MOCK_IMG} alt='' className={styles.action__img} />
			<div>
				<h2 className={styles.action__heading}>
					Make a Difference, Support Those in Need.
				</h2>
				<div className={styles.action__wrapper}>
					<p className={styles.action__paragraph}>
						Libero dictum ut purus ut vel sit egestas. Amet id in tristique
						bibendum justo netus augue id. Nunc tristique quis leo duis gravida
						volutpat vitae quam quam. Ultrices urna nec massa commodo id sit
						diam amet et. Libero dictum ut purus ut vel sit egestas. Ut ac
						mattis senectus ac
					</p>
					<p className={styles.action__paragraph}>
						Lorem ipsum dolor sit amet consectetur. Amet id in tristique
						bibendum justo netus augue id. Nunc tristique quis leo duis gravida
						volutpat vitae quam quam. Ultrices urna nec massa commodo id sit
						diam amet et. Libero dictum ut purus ut vel sit egestas. Ut ac matt
					</p>
				</div>
			</div>
		</section>
	);
};
