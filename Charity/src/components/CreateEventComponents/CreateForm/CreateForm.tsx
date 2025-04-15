import { Fragment } from 'react/jsx-runtime';
import { Button, Form, Input, Label, Textarea } from '@ui';
import { CREATE_FORM_ITEMS } from './CreateForm.const';
import { useForm } from 'react-hook-form';
import { ICreateFormProps } from 'types';
import { supabase } from 'src/supabase-client';
import styles from './CreateForm.module.scss';

export const CreateForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ICreateFormProps>();

	const onSubmit = async (data: ICreateFormProps) => {
		await supabase.from('Events').insert(data);
		console.log(data);
	};

	return (
		<section className={styles.createForm}>
			<Form onSubmit={handleSubmit(onSubmit)}>
				{CREATE_FORM_ITEMS.map((item, index) => (
					<Fragment key={index}>
						<Input<ICreateFormProps>
							type={item.type}
							id={item.id}
							placeholder={item.placeholder}
							register={register}
							errors={errors}
						>
							<Label htmlFor={item.htmlFor} text={item.text} />
						</Input>
					</Fragment>
				))}
				<Textarea<ICreateFormProps>
					name='description'
					id='description'
					rows={30}
					cols={20}
					maxLength={800}
					placeholder='Описание'
					register={register}
					errors={errors}
				>
					<Label htmlFor='description' text='Описание' />
				</Textarea>
				<Button text='Отправить' className={styles.createForm__button} />
			</Form>
		</section>
	);
};
