import { Fragment } from 'react/jsx-runtime';
import { Button, Form, Input, Label, Textarea } from '@ui';
import { CREATE_FORM_ITEMS } from './CreateForm.const';
import styles from './CreateForm.module.scss';

export const CreateForm = () => {
	return (
		<section className={styles.createForm}>
			<Form>
				{CREATE_FORM_ITEMS.map((item, index) => (
					<Fragment key={index}>
						<Input type={item.type} id={item.id} placeholder={item.placeholder}>
							<Label htmlFor={item.htmlFor} text={item.text} />
						</Input>
					</Fragment>
				))}
				<Textarea
					name='description'
					id='description'
					rows={30}
					cols={20}
					maxLength={800}
					placeholder='Описание'
				>
					<Label htmlFor='description' text='Описание' />
				</Textarea>
				<Button text='Отправить' className={styles.createForm__button} />
			</Form>
		</section>
	);
};
