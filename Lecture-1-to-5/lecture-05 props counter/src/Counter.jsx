import React from 'react'

const Counter = ({no,plus,subtraction,reset}) => {
  return (
    <div align="center">
      <h1>Counter</h1>
      <h2>count :- {no}</h2>
      <button onClick={()=> plus()}>+</button>
      {
        no == 0 ?(
            <button disabled onClick={()=> subtraction()}>-</button>
        ):(
            <button onClick={()=> subtraction()}>-</button>
        )
      }
      <button onClick={()=> reset()}>Reset</button>
    </div>
  )
}

export default Counter

































