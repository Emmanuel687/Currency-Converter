import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [fromCur, setfromCur] = useState("EUR");
  const [toCur, settoCur] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [rate, setRate] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // const abortController = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
          // abortController.signal
        );
        const data = await response.json();
        setRate(data.rates[toCur]);
      } catch (error) {
        console.log("Error");
      } finally {
        setLoading(false);
      }
    };

    if (fromCur === toCur) return setRate(amount);
    fetchData()

    // return () => abortController.abort();
  }, [amount, fromCur, toCur]);

  return (
   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  marginTop:"100px"}}>
    
  <input
    style={{
      padding: '8px',
      marginBottom: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '200px',
    }}
    value={amount}
    type="text"
    onChange={(e) => setAmount(Number(e.target.value))}
    disabled={loading}
    placeholder="Enter amount"
  />
  <div style={{ display: 'flex', gap: '10px' }}>
    <select
      style={{
        padding: '8px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '5px',
      }}
      value={fromCur}
      onChange={(e) => setfromCur(e.target.value)}
      disabled={loading}
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
    <span style={{ fontSize: '16px' }}>to</span>
    <select
      style={{
        padding: '8px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '5px',
      }}
      value={toCur}
      onChange={(e) => settoCur(e.target.value)}
      disabled={loading}
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  </div>
  <p style={{ fontSize: '18px', marginTop: '10px' }}>
    OUTPUT: {rate} {toCur}
  </p>
</div>

  );
}

export default App;
