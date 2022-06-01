import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {BodyCounter} from "./Component/BodyCounter/BodyCounter";

function App() {

	const [value, setValue] = useState<number>(0)
	const [maxValue, setMaxValue] = useState<number>(5)
	const [startValue, setStartValue] = useState<number>(0)

	useEffect( () => {
		let valueAsString = localStorage.getItem('currentValue')
		let maxValueAsString = localStorage.getItem('MaxValue')
		let startValueAsString = localStorage.getItem('StartValue')
		if (valueAsString) {
			let newValue = JSON.parse(valueAsString)
			setValue(newValue)
		}
		if (maxValueAsString) {
			let newValue = JSON.parse(maxValueAsString)
			setMaxValue(newValue)
		}
		if (startValueAsString) {
			let newValue = JSON.parse(startValueAsString)
			setStartValue(newValue)
		}
	}, [])
	useEffect( () => {
		localStorage.setItem('currentValue', JSON.stringify(value))
	}, [value])
	useEffect( () => {
		localStorage.setItem('MaxValue', JSON.stringify(maxValue))
	}, [maxValue])
	useEffect( () => {
		localStorage.setItem('StartValue', JSON.stringify(startValue))
	}, [startValue])

	const incCounter = () => {
		if (value < maxValue) {
			setValue(value + 1)
		}
	}
	const resetCounter = () => {
		setValue(startValue)
	}


	return (
		<div>
			<BodyCounter
				value={value}
				setValue={setValue}
				maxValue={maxValue}
				setMaxValue={setMaxValue}
				startValue={startValue}
				setStartValue={setStartValue}
				incButton={incCounter}
				resetButton={resetCounter}
			/>
		</div>
	);
}

export default App;
