import React, {useState} from 'react';
import s from './BodyCounter.module.css';
import {ButtonCounter} from "./ButtonCounter/ButtonCounter";
import {ChangeCounter} from "./ChangeCounter/ChangeCounter";

type BodyCounterPropsType = {
	value: number
	setValue: (value: number) => void
	incButton: () => void
	resetButton: () => void
	maxValue: number
	setMaxValue: (maxValue: number) => void
	startValue: number
	setStartValue: (startValue: number) => void
}

export const BodyCounter: React.FC<BodyCounterPropsType> = (
	{
		value,
		setValue,
		incButton,
		resetButton,
		maxValue,
		setMaxValue,
		startValue,
		setStartValue,
	}
) => {
	const [bool, setBool] = useState<boolean>(true)
	const setStart = (start: number, bool: boolean) => {
		setBool(!bool)
		setValue(start)
	}

	const CounterTable = (boole: boolean) => {
		if (boole) {
			return (
			<div className={s.counter__body}>
				<div className={value === maxValue ? s.counter__numberError : s.counter__number}>{value}</div>
				<div className={s.counter__buttons}>
					<ButtonCounter disabled={value === maxValue} onClickHandler={incButton}>INC</ButtonCounter>
					<ButtonCounter onClickHandler={() => setBool(!bool)}>SETTING</ButtonCounter>
					<ButtonCounter onClickHandler={resetButton}>RESET</ButtonCounter>
				</div>
			</div>
			)
		}
		return (
			<div className={s.counter__body}>
				<div className={s.counter__set}>
					<div>
						<div>Max Value:</div>
						<div>Start Value:</div>
					</div>
					<div>
						<ChangeCounter disabled={maxValue <= startValue} value={maxValue} setValue={setMaxValue}/>
						<ChangeCounter disabled={startValue < 0 || startValue >= maxValue} value={startValue} setValue={setStartValue}/>
					</div>

				</div>
				<div className={s.counter__buttonsSET}>
					<ButtonCounter
						onClickHandler={()=>setStart(startValue, bool)}
						disabled={startValue < 0 || startValue >= maxValue}
					>SETTING</ButtonCounter>
				</div>
			</div>
		)
	}

	return (
		<>{CounterTable(bool)}</>
	);
};
