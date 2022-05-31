import React, {useEffect, useState} from 'react';
import './App.css';
import {BodyCounter} from "./Component/BodyCounter/BodyCounter";

function App() {

	const [value, setValue] = useState<number>(0)
	const [maxValue, setMaxValue] = useState<number>(5)
	const [startValue, setStartValue] = useState<number>(0)

	useEffect( () => {
		let valueAsString = localStorage.getItem('currentValue')
		if (valueAsString) {
			let newValue = JSON.parse(valueAsString)
			setValue(newValue)
		}
	}, [])
	useEffect( () => {
		localStorage.setItem('currentValue', JSON.stringify(value))
	}, [value])

	useEffect( () => {
		let valueAsString = localStorage.getItem('MaxValue')
		if (valueAsString) {
			let newValue = JSON.parse(valueAsString)
			setMaxValue(newValue)
		}
	}, [])
	useEffect( () => {
		localStorage.setItem('MaxValue', JSON.stringify(maxValue))
	}, [maxValue])

	useEffect( () => {
		let valueAsString = localStorage.getItem('StartValue')
		if (valueAsString) {
			let newValue = JSON.parse(valueAsString)
			setStartValue(newValue)
		}
	}, [])
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
