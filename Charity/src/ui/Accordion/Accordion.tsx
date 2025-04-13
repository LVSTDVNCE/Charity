import { useState } from 'react';
import { Button } from '@ui';
import styles from './Accordion.module.scss';

type TAccordionItem = {
	id: string;
	question: string;
	answer: string;
};

type AccordionProps = {
	items: TAccordionItem[];
	allowMultiple?: boolean;
};

export const Accordion = ({ items, allowMultiple = false }: AccordionProps) => {
	const [openItems, setOpenItems] = useState<string[]>([]);

	const toggleItem = (id: string) => {
		if (allowMultiple) {
			setOpenItems(prev =>
				prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
			);
		} else {
			setOpenItems(prev => (prev.includes(id) ? [] : [id]));
		}
	};

	return (
		<div className={styles.accordion}>
			{items.map(({ id, question, answer }) => (
				<div
					key={id}
					className={
						openItems.includes(id)
							? styles.accordion__itemOpen
							: styles.accordion__item
					}
				>
					<Button
						onClick={() => toggleItem(id)}
						text={question}
						className={
							openItems.includes(id)
								? styles.accordion__buttonOpen
								: styles.accordion__button
						}
					>
						<div
							className={
								openItems.includes(id)
									? styles.accordion__toggleOpen
									: styles.accordion__toggleClose
							}
						></div>
					</Button>
					<div
						className={
							openItems.includes(id)
								? ` ${styles.accordion__ContentOpen}`
								: styles.accordion__Content
						}
					>
						{answer}
					</div>
				</div>
			))}
		</div>
	);
};
