import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

function App() {

  const [country, setCountry] = useState([]);
  const [con, setCon] = useState("");
  const [state, setState] = useState([]);

  const getCountry = async () => {
    try {
      let all = await axios.get(`http://localhost:8000/country`);
      setCountry(all.data)
    } catch (err) {
      return false
    }
  }

  const getState = async () => {
    try {
      let all = await axios.get(`http://localhost:8000/state`);
      let ans = all.data.filter(val => val.countryid == con);
      setState(ans);
    } catch (err) {
      return false
    }
  };

  useEffect(() => {
    getCountry()
  }, [])

  useEffect(() => {
    getState();
  }, [con])

  return (
    <>
      <div align="center">
        <h3>DYNAMIC DEPENDENT</h3>
        <select onChange={(e) => setCon(e.target.value)} value={con}>
          <option value="">---Select Country--</option>
          {
            country.map((c) => {
              return (
                <option key={c.id} value={c.id}>{c.name}</option>
              )
            })
          }
        </select>

        <select onChange={(e) => setCon(e.target.value)} value="">
          <option value="">---Select State--</option>
          {
            state.map((s) => {
              return (
                <option key={s.id} value={s.id}>{s.name}</option>
              )
            })
          }
        </select>
      </div>
    </>
  )
}

export default App




