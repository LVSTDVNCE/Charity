import { Button } from '../Button/Button';
import styles from './Modal.module.scss';

type TModalProps = {
	onClick: () => void;
};

export const Modal = ({ onClick }: TModalProps) => {
	return (
		<div className={styles.modal} onClick={onClick}>
			<div className={styles.modal__content} onClick={onClick}>
				<h3 className={styles.modal__heading}>Пожертвуйте в общий фонд</h3>
				<Button
					onClick={() =>
						(window.location.href =
							'https://buy.stripe.com/test_6oE3cpaBK8m24lG144')
					}
					className={styles.modal__button}
					text='Пожертвовать'
				/>
			</div>
		</div>
	);
};
