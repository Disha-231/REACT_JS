import React from 'react'
import { useCounter } from '../Context/CounterContext'

const A = () => {
    const {no,increment,decrement} = useCounter()
  return (
    <div>
      <div className="container">
        <div className="row">
            <div align="center">
                <h1>Counter App Using UseContext</h1>
                <h4>Component-A</h4>
                <p>Count: {no} </p>
                <button onClick={()=>increment()}>Increment</button>&nbsp;&nbsp;&nbsp;
                <button onClick={()=>decrement()}>Decrement</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default A
