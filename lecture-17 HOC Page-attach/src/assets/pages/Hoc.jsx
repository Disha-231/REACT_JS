import React, { useState } from 'react'

const Hoc = (Task) => {
    const Counter = () => {
        const [count, setCount] = useState(0)
        const Increment = () => {
            setCount(count + 1)
        }
        const Decrement = () => {
            setCount(count - 1)
        }
        const Restart = () => {
            setCount(0)
        }
        return (
            <Task count={count}
                Increment={Increment}
                Decrement={Decrement}
                Restart={Restart}></Task>
        )
    }
    return Counter


}

export default Hoc
