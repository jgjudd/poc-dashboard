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
      <div id='calculator-container'>
        <input type='text' value={displayValue} onChange={e => setDisplayValue(e.target.value)} />
        <button onClick={() => handleOperation('+', displayValue)}>Add</button>
        <button onClick={() => handleOperation('-', displayValue)}>Subtract</button>
        <button onClick={() => handleOperation('*', displayValue)}>Multiply</button>
        <button onClick={() => handleOperation('/', displayValue)}>Divide</button>
        <button onClick={calculateTotal}>Equals</button>

      </div>
    </>
  )
}

export default CalculatorTool
