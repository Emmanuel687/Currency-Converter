import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const[fromCur, setfromCur] =useState("EUR")
  const[toCur, settoCur] =useState("USD")
  const[amount, setAmount]=useState(1)
  const[rate,setRate]=useState("")

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`)
      const  data = await response.json()
      setRate(data.rates)
      console.log(rate)
      
    }
    fetchData()
  },[amount])

  // Amount in Target Currency = Amount in Source Currency * Exchange Rate
    const exchange = amount*rate;

  return (
    <div>
      <input value={amount} type="text" onChange={(e)=>setAmount(Number(e.target.value))} />
      <select value={fromCur} onChange={(e)=>setfromCur(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toCur}  onChange={(e)=>settoCur(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT:-{}</p>
    </div>
  );
}

export default App;
