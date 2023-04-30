
function withSummation(calculator) {
  Object.assign(calculator, { sum: () => calculator.add(1,2,3,4) })
  return calculator;
}


const MixinTool = () => {
  return ( 
    <>
      <h1 style={{ textAlign: 'center' }}>Mixin Tool</h1>
      <div>
        <code>
          let x = 5
          console.log(x)
        </code>
      </div>
    </>
  )
}

export default MixinTool
