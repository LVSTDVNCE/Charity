import { Fragment } from 'react/jsx-runtime';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { supabase } from 'src/supabase-client';
import { Button, Form, Input, Label, Loader, Textarea } from '@ui';
import { CREATE_FORM_ITEMS } from './CreateForm.const';
import { ICreateFormProps } from 'types';
import styles from './CreateForm.module.scss';

const createEvent = async (Event: ICreateFormProps) => {
	const filePath = `${Event.phoneNumber}-${Date.now()}-${Event.image[0].name}`;
	console.log(Event);

	const { error: uploadError } = await supabase.storage
		.from('events-images')
		.upload(filePath, Event.image);

	if (uploadError) throw new Error(uploadError.message);

	const { data: publicURLData } = supabase.storage
		.from('events-images')
		.getPublicUrl(filePath);

	const { data, error } = await supabase
		.from('Events')
		.insert({ ...Event, image: publicURLData.publicUrl });

	if (error) throw new Error(error.message);

	return data;
};

export const CreateForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ICreateFormProps>();

	const { mutate, isPending, isError, isSuccess } = useMutation({
		mutationFn: (Event: ICreateFormProps) => {
			return createEvent(Event);
		},
	});

	const onSubmit = async (data: ICreateFormProps) => {
		mutate(data);
	};

	if (isPending) return <Loader />;

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
				{isError && <p>Ошибка</p>}
			</Form>
			{isSuccess && <p>Успешно</p>}
		</section>
	);
};
