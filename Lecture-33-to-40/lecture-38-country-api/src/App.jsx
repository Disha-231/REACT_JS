
import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [country, setCountry] = useState([]);
  const [con, setCon] = useState('')
  const [state, setState] = useState([])

  const getCountry = async () => {
    try {
      let all = await axios.get(`http://localhost:7000/country`)
      setCountry(all.data)
    } catch (err) {

      console.log(err);
      return false
    }
  }
  useEffect(() => {
    getCountry()
  }, [])




  const getstate = async () => {
    try {
      let all = await axios.get(`http://localhost:7000/state`)
      let ans = all.data.filter(val => val.countryid == con)
      console.log(ans);
      setState(ans)
      console.log(all);
      setState(all.data)
    } catch (err) {

      console.log(err);
      return false
    }
  }
  useEffect(() => {
    getstate()
  }, [con])













  return (
    <>
      <div align="center">
        <select onChange={(e) => setCon(e.target.value)} value={con}>
          <option value={""}>--SELECT-COUNTRY--</option>
          {
            country.map((c) => {
              return (
                <option key={c.id} value={c.id}>{c.name}</option>
              )
            })
          }
        </select>





        <select>
          <option>--SELECT-STATE--</option>
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