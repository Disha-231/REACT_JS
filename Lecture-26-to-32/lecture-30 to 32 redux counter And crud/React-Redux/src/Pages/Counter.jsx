import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment } from '../Action/Counter'
import { Link } from 'react-router-dom'

const Counter = () => {
    const dispatch = useDispatch()
    const no = useSelector(state => state.cnt)
    return (
        <div align="center">
            <h1>Counter App using Redux</h1>
            <h3>Count :- {no}</h3>
            <button onClick={() => dispatch(Increment())}>Increment</button>
            <br></br>
            <br></br>
            <button onClick={() => dispatch(Decrement())}>Decrement</button>
            <br></br><br></br>
            <Link to={'/add'}>Crud</Link>

        </div>
    )
}

export default Counter
