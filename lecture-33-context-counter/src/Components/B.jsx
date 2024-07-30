import React from 'react'
import { useCounter } from '../Context/CounterContext'

const B = () => {
    const {no,increment,decrement} = useCounter()
  return (
    <div>
      <div className="container">
        <div className="row">
            <div align="center">
                <h4>Component-B</h4>
                <p>Count: {no} </p>
                <button onClick={()=>increment()}>Increment</button>&nbsp;&nbsp;&nbsp;
                <button onClick={()=>decrement()}>Decrement</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default B
