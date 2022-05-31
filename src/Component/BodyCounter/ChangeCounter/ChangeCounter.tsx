import React from 'react';
import s from './ChangeCounter.module.css';

type ChangeCounterPropsType = {
	value: number
	setValue: (value: number) => void
	disabled: boolean
}

export const ChangeCounter: React.FC<ChangeCounterPropsType> = (
	{
		value,
		setValue,
		disabled,
	}
) => {

	const minClickHandler = () => {
		setValue(value - 1)
	}
	const plusClickHandler = () => {
		setValue(value + 1)
	}

	return (
		<div className={s.counter__change}>
			<button
				className={s.counter__minButton}
				onClick={minClickHandler}>-
			</button>
			<div className={ disabled ? s.counter__valueERR : s.counter__value}>{value}</div>
			<button
				className={s.counter__plusButton}
				onClick={plusClickHandler}>+
			</button>
		</div>
	);
};
