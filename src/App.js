import './App.css';
import react, {useState} from "react"
const App = () => {
  
  const[num1, setNum1] = useState(0)
  const[num2, setNum2] = useState(0)
  const[result, setResult] = useState(0)

const handleNum1 = (event) =>{
  setNum1(parseInt(event.target.value))
}

const handleNum2 = (event) =>{
  setNum2(parseInt(event.target.value))
}
const add = () => {
  setResult(num1 + num2)
}
const sub = () => {
  setResult(num1 - num2)
}

 console.log(typeof setNum1)
  return (
    <>
    <div className='num1'>Number 1</div>
    <input  className='numa'name='num1' type="number" value={num1} onChange={handleNum1}></input>
    
    <div className='num2'>Number 2</div>
    <input className='numb' name='num2' type="number" value={num2} onChange={handleNum2}></input>
    

    <div className='result'>Result: {result}</div>
    
    <div className='key'><button className='add' onClick={add}>ADD</button>
    <button className='sub' onClick={sub}>SUB</button></div>
    
   
  
    </>
  );
}

export default App;
