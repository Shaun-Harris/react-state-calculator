/* set up */
import "./App.css"
import { useState } from "react"

/* State variables which initalise the 'useState' hook from react*/
function App() {
const [leftPanel, setLeftPanel] = useState("0")
const [rightPanel, setRightPanel] = useState("0")
const [operations, setOperations] = useState("+")
const [result, setResult] = useState("0")

/* function handling the left panel by checking if the value in the left panel is 0, replacing 0 if a number is clicked and appends the selected number/s to the value and clears value back to 0*/
function handleFirst(num) {
  if (leftPanel === "0") {
    setLeftPanel(num)
    } else {
    setLeftPanel(leftPanel + num)
  }
}

function clearLeft() {
  setLeftPanel("0")
}

/* same methods as in left but for the right panel */
function handleSecond(num) {
    if(rightPanel === "0") {
      setRightPanel(num)
    } else {
      setRightPanel(rightPanel + num) 
    }
}

function clearRight() {
setRightPanel("0")
}

const operators= {
  "+": (a,b) => {return a+b},
  "-": (a,b) => {return a-b},
  "*": (a,b) => {return a*b},
  "/": (a,b) => {return a/b}
}   

/* function to perform operation based on values and the operator from the operators object*/
function total(num1, num2, operator) {
  const num1Con= Number(num1)
  const num2Con= Number(num2)

  return operators[operator](num1Con, num2Con)
}

/* Calling "total" function with values of both panels and the selected operation, this then sets the result state with the total value*/
function presentResult() {
  const value = total(leftPanel, rightPanel, operations)
  setResult(value)
}

/* Events managment. onCLick the event handler to call e.g "handlefirst" function run when a button is clicked" */
/* Arrow to wrap call inline and alter the () to (1) which is responsilbe for th input */
return (
    <div className="calculator">
      <div className="panel">
        <p>{leftPanel}</p>
        <div className="numbers">
          <button onClick={() => handleFirst('1')}>1</button>
          <button onClick={() => handleFirst('2')}>2</button>
          <button onClick={() => handleFirst('3')}>3</button>
          <button onClick={() => handleFirst('4')}>4</button>
          <button onClick={() => handleFirst('5')}>5</button>
          <button onClick={() => handleFirst('6')}>6</button>
          <button onClick={() => handleFirst('7')}>7</button>
          <button onClick={() => handleFirst('8')}>8</button>
          <button onClick={() => handleFirst('9')}>9</button>
          <button onClick={() => handleFirst('0')}>0</button>
          <button onClick={clearLeft}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operations}</p>
        <div className="numbers">
          <button onClick={() => setOperations('+')}>+</button>
          <button onClick={() => setOperations('-')}>-</button>
          <button onClick={() => setOperations('*')}>*</button>
          <button onClick={() => setOperations('/')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{rightPanel}</p>
        <div className="numbers">
          <button onClick={() => handleSecond('1')}>1</button>
          <button onClick={() => handleSecond('2')}>2</button>
          <button onClick={() => handleSecond('3')}>3</button>
          <button onClick={() => handleSecond('4')}>4</button>
          <button onClick={() => handleSecond('5')}>5</button>
          <button onClick={() => handleSecond('6')}>6</button>
          <button onClick={() => handleSecond('7')}>7</button>
          <button onClick={() => handleSecond('8')}>8</button>
          <button onClick={() => handleSecond('9')}>9</button>
          <button onClick={() => handleSecond('0')}>0</button>
          <button onClick={clearRight}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={presentResult}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
