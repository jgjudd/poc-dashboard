import { useState, useEffect } from "react";
import { useCalculator } from "../hooks/CalculatorHook";

const CalculatorTool = () => {
  const calculator = useCalculator();
  const [operations, setOperations] = useState([])

  const handleOperation = (operationSign, newValue) => {
    console.log('operationSign:', operationSign, ', newValue:', newValue)
    setOperations(previous => [ ...previous, [ operationSign, Number(newValue) ] ])
  }

  const operationsDictionary = {
    '+': (final, value) => calculator.add(final, value),
    '-': (final, value) => calculator.subtract(final, value),
    '*': (final, value) => calculator.multiply(final, value),
    '/': (final, value) => calculator.divide(final, value),
    'sin': (value) => final = calculator.sin(value),
    'cos': (value) => final = calculator.cos(value),
    'tan': (value) => final = calculator.tan(value),
    'log': (value) => final = calculator.log(value),
  }

  const calculateTotal = () => {
    let newTotal = operations?.reduce((accumulator, current) => {
      // gets the correct function from the operationsDictionary, by operation key
      let mathOperation = operationsDictionary[current[0]]
      // calls operation with each value
      return mathOperation(accumulator, current[1])
    }, 0)

    setCalculatedTotal(newTotal)
  }

  const [displayValue, setDisplayValue] = useState(0)
  const [calculatedTotal, setCalculatedTotal] = useState(0)

  // useEffect to sync calculated value with display value
  useEffect(() => {
    setDisplayValue(calculatedTotal)
  }, [calculatedTotal])

  return ( 
    <>
      <h1 style={{ textAlign: 'center' }}>Calculator Tool</h1>
      <div id='calculator-wrapper' style={wrapper}>
        <input type='text' value={displayValue} style={inputField} onChange={e => setDisplayValue(e.target.value)} />
        <div id='calculator-container' style={calculatorStyles}>
          <button onClick={() => handleOperation('+', displayValue)}>Add</button>
          <button onClick={() => handleOperation('-', displayValue)}>Subtract</button>
          <button onClick={() => handleOperation('*', displayValue)}>Multiply</button>
          <button onClick={() => handleOperation('/', displayValue)}>Divide</button>
          <button onClick={() => handleOperation('sin', displayValue)}>sin</button>
          <button onClick={() => handleOperation('cos', displayValue)}>cos</button>
          <button onClick={() => handleOperation('tan', displayValue)}>tan</button>
          <button onClick={() => handleOperation('log', displayValue)}>log</button>
          <button onClick={() => handleOperation('sqrd', displayValue)}>Squared</button>
          <button onClick={() => handleOperation('sqrt', displayValue)}>Square Root</button>
          <button onClick={calculateTotal}>Equals</button>
          <button onClick={() => handleOperation('clear', displayValue)}>Clear</button>
          <button onClick={() => handleOperation('allClear', displayValue)}>All Clear</button>
        </div>
      </div>
    </>
  )
}

export default CalculatorTool

const wrapper = {
  width: '50%',
  margin: 'auto auto',
}
const calculatorStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap: '10px',
  backgroundColor: 'lightgrey',
  padding: '10px',
    // flexWrap: 'wrap',

  // justifyContent: 'center',
  // alignItems: 'center',
}

const inputField = {
  width: '100%',
}