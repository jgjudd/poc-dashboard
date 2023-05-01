

class Calculator {
  get [Symbol.toStringTag]() {
    return 'Calculator';
  }
  constructor() {}

  add = (x,y, ...z) => {
    let rest = z.reduce((x,y) => { return x+y }, 0) 
    return x+y + rest;
  }
  subtract = (x,y) => { return x-y }
  multiply = (x,y) => { return x*y }
  divide = (x,y) => { return y === 0 ? NaN : x/y }
  calculate = async (somePromise) => {
    return await somePromise()
  }
}

class ScientificCalculator extends Calculator {
  get [Symbol.toStringTag]() {
   return 'ScientificCalculator';
 }
 sin = () => { return Math.sin(Math.PI/2) }
 cos = () => { return Math.cos(Math.PI) }
 tan = () => { return Math.tan(0) }
 log = () => { return Math.log(1) }
}

export const useCalculator = () => {
  const calculator = new ScientificCalculator()
  return calculator
}
