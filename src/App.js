import './App.css';
import {useState} from 'react'

function App() {
  const [weight, setWeight] = useState("")
  const [bottles, setBottles] = useState("")
  const [time, setTime] = useState("")
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)

  function handleSubmit(e){
    e.preventDefault()
    let result1 = 0
    const litres = bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = weight / 10
    const gramsleft = grams - (burning * time)
    if(gender === 'male'){
      result1 = gramsleft / (weight * 0.7)
    }else{
      result1 = gramsleft / (weight * 0.6)
    }
    if(result1 < 0){
      result1 = 0
    }


    setResult(result1)
  }
  return (
   <form onSubmit={handleSubmit}>
    <h1>Calculating alcohol blood level</h1>
    <div>
      <label>Weight</label>
      <input 
      value={weight}
      onChange={e => setWeight(e.target.value)}
      placeholder='Enter the weight in kilograms' ></input>
    </div>
    <div>
      <label>Bottles</label>
      <input 
      value={bottles}
      onChange={e => setBottles(e.target.value)}
      type="number" min="0" max="50"/>
    </div>
    <div>
      <label>Time</label>
      <input 
      value={time}
      onChange={e => setTime(e.target.value)}
      type="number" min="0" max="100"/>
    </div>
    <div>
      <label>Gender</label>
      <input type='radio' name='gender' value="male"defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
      <input type='radio' name='gender' value="femalemale" onChange={e => setGender(e.target.value)} /> <label>Female</label>
    </div>
    <div>
      <output>{result.toFixed(2)}</output>
    </div>
    <button>Calculate</button>
   </form>
  );
}

export default App;
