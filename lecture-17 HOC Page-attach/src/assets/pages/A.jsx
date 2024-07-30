import React from 'react'
import Hoc from './Hoc'
const A = ({ count, Increment, Decrement, Restart }) => {
    return (
        <div align="center">
            <h2>A COMPONENT</h2>
            <h4>Count:- {count}</h4>
            <button onClick={() => Increment()}>+</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => Decrement()}>-</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => Restart()}>0</button>

        </div>
    )
}

export default Hoc(A)
