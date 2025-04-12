import { Button, Form, Input, Label, Textarea } from '@ui';
import styles from './ContactForm.module.scss';
import { INPUT_CONFIG } from './ContactsForm.const';

export const ContactForm = () => {
	return (
		<section className={styles.contactForm}>
			<div className={styles.contactForm__wrapper}>
				<h3 className={styles.contactForm__heading}>
					Share love, donate hope.
				</h3>
				<p className={styles.contactForm__description}>
					Ut ac mattis senectus ac suspendisse vitae vel nulla eleifend. Est
					eros facilisi aenean nis
				</p>
				<p className={styles.contactForm__contacts}>
					8911 Tanglewood Ave. Capitol Heights, MD 20743
				</p>
				<a
					href='tel:89093333333'
					className={`${styles.contactForm__contacts} ${styles.contactForm__contactsIcon} ${styles.contactForm__contactsIconTel}`}
				>
					+863-267-3634
				</a>
				<a
					href='mailto:'
					className={`${styles.contactForm__contacts} ${styles.contactForm__contactsIcon} ${styles.contactForm__contactsIconMail}`}
				>
					charity@email.net
				</a>
				<p
					className={`${styles.contactForm__contacts} ${styles.contactForm__contactsIcon} ${styles.contactForm__contactsIconTime}`}
				>
					Mon-Fri: 8:00am - 6:00pm
				</p>
			</div>
			<Form>
				{INPUT_CONFIG.map(item => (
					<Input type={item.type} id={item.id} placeholder={item.placeholder}>
						<Label htmlFor={item.htmlFor} text={item.text} />
					</Input>
				))}
				<Textarea
					name='message'
					id='message'
					rows={5}
					cols={33}
					maxLength={500}
					placeholder='Сообщение'
				>
					<Label htmlFor='message' text='Сообщение' />
				</Textarea>
				<Button
					className={styles.contactForm__button}
					text='Отправить сообщение'
				/>
			</Form>
		</section>
	);
};
