import { Button, Form, Input, Label, Textarea } from '@ui';
import { INPUT_CONFIG } from './ContactsForm.const';
import { useForm } from 'react-hook-form';
import { IContactFormProps } from 'types';
import styles from './ContactForm.module.scss';

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IContactFormProps>();

	const onSubmit = (data: IContactFormProps) => {
		console.log(data);
	};

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
			<Form onSubmit={handleSubmit(onSubmit)}>
				{INPUT_CONFIG.map(item => (
					<Input<IContactFormProps>
						type={item.type}
						id={item.id}
						placeholder={item.placeholder}
						register={register}
						errors={errors}
						key={item.id}
					>
						<Label htmlFor={item.htmlFor} text={item.text} />
					</Input>
				))}
				<Textarea<IContactFormProps>
					name='message'
					id='message'
					rows={5}
					cols={33}
					maxLength={500}
					placeholder='Сообщение'
					register={register}
					errors={errors}
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
