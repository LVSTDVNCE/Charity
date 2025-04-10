import { LIST_ITEMS } from './AboutOurOrg.const';
import MOCK_IMG from '@assets/images/stepsImg.jpg';
import styles from './AboutOutOrg.module.scss';

export const AboutOurOrg = () => {
	return (
		<section className={styles.aboutOrg}>
			<div className={styles.aboutOrg__wrapper}>
				<h2 className={styles.aboutOrg__heading}>About our Organization</h2>
				<ul className={styles.aboutOrg__list}>
					{LIST_ITEMS.map(item => (
						<li key={item.title} className={styles.aboutOrg__item}>
							<div className={styles.aboutOrg__itemWrapper}>
								<img
									src={item.img}
									alt={item.title}
									className={styles.aboutOrg__itemImg}
								/>
								<h3 className={styles.aboutOrg__itemHeading}>{item.title}</h3>
							</div>
							<p className={styles.aboutOrg__itemParagraph}>
								{item.description}
							</p>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.aboutOrg__wrapperImg}>
				<img className={styles.aboutOrg__img} src={MOCK_IMG} alt='MOCK_IMG' />
				<img className={styles.aboutOrg__img} src={MOCK_IMG} alt='MOCK_IMG' />
			</div>
		</section>
	);
};
