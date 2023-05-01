const add = (x,y) => x+y

const subtract = (x,y) => x-y

const multiply = (x,y) => x*y

const divide = (x,y) => y === 0 ? NaN : x/y

const sin = (x) => Math.sin(x)

const cos = (x) => Math.cos(x)

const tan = (x) => Math.tan(x)

const log = (x) => Math.log(x)

export const useCalculator = () => {
  return {
    add,
    subtract,
    multiply,
    divide,
    sin,
    cos,
    tan,
    log
  }
}
