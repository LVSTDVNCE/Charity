import { Link } from 'react-router-dom';
import { Logo } from '@ui';
import { ADDRESS, LINKS } from './Footer.const';
import mockImg from '../../assets/images/footerTestImg.png';
import styles from './Footer.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__wrapper}>
				<div className={styles.footer__charity}>
					<Logo />
					<p className={styles.footer__paragraph}>
						Удобная платформа для организации благотворительных мероприятий
						любого масштаба.
					</p>
					<p className={styles.footer__paragraph}>
						<span>Телефон:</span>{' '}
						<a href='tel:89093333333'>+7 (909) 333 33 33</a>
					</p>
					<p className={styles.footer__paragraph}>
						<span>Адрес:</span>{' '}
						<a href={ADDRESS} target='_blank'>
							Астраханская ул., 83
						</a>
					</p>
				</div>
				{LINKS.map(item => (
					<div key={item.heading}>
						<h6 className={styles.footer__heading}>{item.heading}</h6>
						<ul className={styles.footer__list}>
							{item.links.map(link => (
								<li key={link.text}>
									<Link to={link.to}>{link.text}</Link>
								</li>
							))}
						</ul>
					</div>
				))}
				<div>
					<h6 className={styles.footer__heading}>Мероприятия</h6>
					<div className={styles.footer__events}>
						<img src={mockImg} alt='' />
						<img src={mockImg} alt='' />
						<img src={mockImg} alt='' />
						<img src={mockImg} alt='' />
						<img src={mockImg} alt='' />
						<img src={mockImg} alt='' />
					</div>
				</div>
			</div>
		</footer>
	);
};
