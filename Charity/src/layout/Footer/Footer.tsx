import { Link } from 'react-router-dom';
import { RoutePaths } from '@routes';
import { Logo } from '@ui';
import mockImg from '../../assets/images/footerTestImg.png';
import styles from './Footer.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__wrapper}>
				<div>
					<Logo />
					<p>
						Удобная платформа для организации благотворительных мероприятий
						любого масштаба.
					</p>
					<p>
						Телефон: <a href='tel:89093333333'>+7 (909) 333 33 33</a>
					</p>
					<p>
						Адрес:{' '}
						<a
							href='https://yandex.ru/maps/geo/bolshaya_sadovaya_ulitsa_63_71_podyezd_2/1717600780/?ll=45.985211%2C51.521741&z=16.8'
							target='_blank'
						>
							Б. Садовая 63/71
						</a>
					</p>
				</div>
				<div>
					<h6>О нас</h6>
					<ul>
						<li>
							<Link to={RoutePaths.ABOUT_US}>О нас</Link>
						</li>
						<li>
							<Link to={RoutePaths.EVENTS}>Мероприятия</Link>
						</li>
						<li>
							<Link to={RoutePaths.CONTACT_US}>Обратная связь</Link>
						</li>
					</ul>
				</div>
				<div>
					<h6>Полезно</h6>
					<ul>
						<li>
							<Link to=''>F.A.Q</Link>
						</li>
						<li>
							<Link to=''>Новости</Link>
						</li>
						<li>
							<Link to=''>Terms of Use</Link>
						</li>
						<li>
							<Link to=''>Privacy Policy</Link>
						</li>
					</ul>
				</div>
				<div>
					<h6>Мероприятия</h6>
					<div>
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
