import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const[currencyPair, setCurrencyPair] =useState("USD")
  const[currencyPair2, setCurrencyPair2] =useState("EUR")
  const[amount, setAmount]=useState(0)
  const[rate, setRate] = useState("")

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currencyPair}&to=${currencyPair2}`)
      const  data = await response.json()
      console.log(data.rates.currencyPair)
      setRate(data.rates.currencyPair)
    }
    fetchData()
  },[amount])



  return (
    <div>
      <input type="text" onChange={(e)=>setAmount(e.target.value)} />
      <select onChange={(e)=>setCurrencyPair(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select  onChange={(e)=>setCurrencyPair2(e.target.value)}>
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
