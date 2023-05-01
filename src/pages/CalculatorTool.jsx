import { useState, useEffect, useReducer } from "react";
import { useCalculator } from "../hooks/CalculatorHook";

const CalculatorTool = () => {
  const { add, subtract, multiply, divide, sin, cos, tan, log } = useCalculator();
  // const [total, setTotal] = useState(0)
  const [displayValue, setDisplayValue] = useState(0)

  const initialValue = { total: 0, displayValue: '', operations: ['add', 0] }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'display':
        return { ...state, displayValue: action.payload }
      case 'add':
        return {
          ...state,
          displayValue: '', 
          operations: [ ...state.operations, ['add', action.payload] ]  
        }
      case 'equals':
        let newTotal = 0;

        // if (state.displayValue !== '') { 
        //   state.operations.push(['=', action.payload])
        // }

        state.operations.map(current => {
          switch (current[0]) {
            case 'add':
              return add(newTotal, current[1])
            case 'subtract':
              return subtract(newTotal, current[1])
            case 'multiply':
              return multiply(newTotal, current[1])
            case 'divide':
              return divide(newTotal, current[1])
            default:
              return newTotal
          }
        })
        return { ...state, total: newTotal, displayValue: newTotal, operations: [['add', 0]] }
      default:
        return value
    }
  }

  // useEffect(() => {
  //   setDisplayValue(displayValue)
  // }, [total])

  const [state, dispatch] = useReducer(reducer, initialValue)

  // useEffect(() => {
  //   dispatch({ type: 'display', payload: state.total })
  // }, [state.total])

  return ( 
    <>
      <h1 style={{ textAlign: 'center' }}>Calculator Tool</h1>
      <div id='calculator-wrapper' style={wrapper}>
        <input type='text' value={state.displayValue} style={inputField} onChange={e => dispatch({ type: 'display', payload: e.target.value })} />
        <>{ 'Display: ' + state.displayValue }</>
        <>{ 'Total: ' + state.total }</>
        <div id='calculator-container' style={calculatorStyles}>
          <button onClick={() => dispatch({ type: 'add', payload: Number(state.displayValue) })}>Add</button>
          <button onClick={() => handleOperation('subtract', displayValue)}>Subtract</button>
          <button onClick={() => handleOperation('multiply', displayValue)}>Multiply</button>
          <button onClick={() => handleOperation('divide', displayValue)}>Divide</button>
          <button onClick={() => handleOperation('sin', displayValue)}>sin</button>
          <button onClick={() => handleOperation('cos', displayValue)}>cos</button>
          <button onClick={() => handleOperation('tan', displayValue)}>tan</button>
          <button onClick={() => handleOperation('log', displayValue)}>log</button>
          <button onClick={() => handleOperation('sqrd', displayValue)}>Squared</button>
          <button onClick={() => handleOperation('sqrt', displayValue)}>Square Root</button>
          <button onClick={() => dispatch({ type: 'equals' })}>Equals</button>
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