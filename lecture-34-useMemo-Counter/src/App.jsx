import { useMemo, useState } from "react"

function App() {
  const [no,setNo]=useState(0)
  const Inc = ()=>{
    setNo(no+1)
  }
  const Dec = ()=>{
    setNo(no-1)
    }
    const square = (number) => {
      console.log( `Square:- ${number}`);
      return number * number;
    }
    const ans = useMemo(()=>{
      return  square(no)
    },[no])
  return (
    <>
      <div className="container">
        <div className="row">
            <div align="center">
                <h1>Counter App Using UseMemo</h1>
          
               <h3>Count:- {no} </h3>
                <button onClick={()=>{Inc()}}>Increment</button>&nbsp;&nbsp;&nbsp;
                <button onClick={()=>{Dec()}}>Decrement</button>
                <h2>Square value :- {ans} </h2>
            </div>
        </div>
      </div>

    </>
  )
}

export default App
